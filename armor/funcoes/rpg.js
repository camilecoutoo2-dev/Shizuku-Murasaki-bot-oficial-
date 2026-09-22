const fs = require('fs-extra');
const JPZINH = './armor/funcoes/users.json';

const DB = () => JSON.parse(fs.readFileSync(JPZINH, 'utf-8') || '{"users":{}}');
const SAVE = (data) => fs.writeFileSync(JPZINH, JSON.stringify(data, null, 2));

function xpToNext(nivel) {
    return Math.floor(100 * Math.pow(1.5, nivel - 1));
}

function registrar(id, nome) {
    const data = DB();
    if (data.users[id]) return data.users[id];

    data.users[id] = {
        nome: nome || "Aventureiro",
        level: 1,
        xp: 100,
        gold: 100,
        hp: 100,
        maxHp: 100,
        atk: 10,
        def: 10,
        bebado: 0,
        compras_bebida: 0,
        compras_poção: 0,
        ultima_compra_data: "",
        last_daily_msg: "",
        missao_dia: "",
        minerar_tentativas: 0,
        minerar_data: "",
        capinar_tentativas: 0,
        capinar_data: "",
        roubos_hoje: 0,
        last_roubo_date: "",
        lista_agressores: [],
        ferramentas: {
            picareta: null, 
            enxada: null,
            espada: null
        },
        inventario: {
            bebida: 0,
            escudo: 0,
            poção: 0,
            carro: 0
        },
   relacionamento: {
    parceiro: null,
    status: 'solteiro', 
    xp_bonus: 1.0,      
    pai: null,
    mae: null,
    filhos: []
  },
        cooldowns: {
            trabalhar: 0
        }
    };
    
    SAVE(data);
    return data.users[id];
}

function comprarItem(id, item, subTipo = null) {
    const data = DB();
    const user = data.users[id];
    if (!user) return { status: false, msg: "Usuário não registrado!" };
    const hoje = new Date().toLocaleDateString('pt-BR');
    if (user.ultima_compra_data !== hoje) {
        user.compras_bebida = 0;
        user.compras_poção = 0; 
        user.ultima_compra_data = hoje;
    }

    const loja = {
        'bebida': { preco: 200, limite: 2 },
        'escudo': { preco: 200 },
        'carro': { preco: 3000 },
        'poção': { preco: 300, limite: 1 },
        'espada': {
            'pedra': { preco: 150, durabilidade: 20 },
            'ferro': { preco: 400, durabilidade: 50 },
            'diamante': { preco: 1000, durabilidade: 150 }
        },
        'picareta': {
            'madeira': { preco: 100, durabilidade: 15 },
            'ferro': { preco: 500, durabilidade: 60 }
        },
        'enxada': {
            'madeira': { preco: 80, durabilidade: 12 },
            'ferro': { preco: 350, durabilidade: 45 }
        }
    };

    if (['bebida', 'poção', 'escudo', 'carro'].includes(item)) {
        const info = loja[item];
        if (item === 'bebida' && user.compras_bebida >= info.limite) return { status: false, msg: "Limite diário de bebida atingido!" };
        if (item === 'poção' && user.compras_poção >= info.limite) return { status: false, msg: "Limite diário de poção atingido!" };
        if (user.gold < info.preco) return { status: false, msg: "Gold insuficiente!" };
        user.gold -= info.preco;
        
        if (item === 'bebida') {
            user.inventario.bebida++;
            user.compras_bebida++;
        } else if (item === 'poção') {
            user.inventario.poção++;
            user.compras_poção++;
        } else if (item === 'escudo') {
            user.inventario.escudo++;
        } else if (item === 'carro') {
            user.inventario.carro++;
        }

    } 
    else if (loja[item] && subTipo) {
        const info = loja[item][subTipo];
        if (!info) return { status: false, msg: "Este material não existe para este item!" };
        if (user.gold < info.preco) return { status: false, msg: "Gold insuficiente!" };
        user.gold -= info.preco;
        user.ferramentas[item] = { tipo: subTipo, usos: info.durabilidade };
    } 
    else {
        return { status: false, msg: "Item não encontrado na loja!" };
    }
    SAVE(data);
    return { status: true, msg: `Você comprou ${subTipo || item} com sucesso!` };
}

function usarFerramenta(id, tipo) {
    const data = DB();
    const user = data.users[id];
    if (!user.ferramentas[tipo]) return false;

    user.ferramentas[tipo].usos -= 1;
    if (user.ferramentas[tipo].usos <= 0) {
        user.ferramentas[tipo] = null; 
        SAVE(data);
        return "QUEBROU";
    }
    SAVE(data);
    return true;
}

function addGold(id, valor) {
    const data = DB();
    if (!data.users[id]) {
        return false; 
    }
    if (typeof data.users[id].gold !== 'number') {
        data.users[id].gold = 0;
    }
    data.users[id].gold += valor;
    data.users[id].last_active = Date.now(); 
    if (data.users[id].gold < 0) data.users[id].gold = 0;
    SAVE(data);
    return data.users[id].gold;
}

function addXp(id, quantia) {
    const data = DB();
    const user = data.users[id];
    user.xp += quantia;
    user.last_active = Date.now();
    let subiu = false;
    while (user.xp >= xpToNext(user.level)) {
        user.xp -= xpToNext(user.level);
        user.level += 1;
        user.maxHp += 20;
        user.hp = user.maxHp; 
        user.atk += 5;
        user.def += 5;
        subiu = true;
    }
    SAVE(data);
    return { subiu: subiu, level: user.level };
}

function listarInativos(dias) {
    const data = DB();
    const agora = Date.now();
    const milissegundos = dias * 24 * 60 * 60 * 1000;
    const lista = [];
    Object.keys(data.users).forEach(id => {
        const user = data.users[id];
        const ultimaAtividade = user.last_active || 0;
        const diff = agora - ultimaAtividade;
        if (diff >= milissegundos) {
            lista.push({
                id,
                nome: user.nome,
                dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
                ultima: ultimaAtividade === 0 ? "Nunca" : new Date(ultimaAtividade).toLocaleDateString('pt-BR')
            });
        }
    });
    return lista;
}

function limparInativos(dias = 15) {
    const data = DB();
    const agora = Date.now();
    const TEMPO_CORTE = dias * 24 * 60 * 60 * 1000; 
    let removidos = 0;
    const ids = Object.keys(data.users);
    for (const id of ids) {
        const user = data.users[id];
        if (!user.last_active) {
            user.last_active = agora;
            continue;
        }
        if (agora - user.last_active > TEMPO_CORTE) {
            delete data.users[id];
            removidos++;
        }
    }
    if (removidos > 0) {
        SAVE(data);
    }
    return removidos;
}


module.exports = { registrar, comprarItem, usarFerramenta, DB, SAVE, xpToNext, addXp, limparInativos, listarInativos, addGold };
