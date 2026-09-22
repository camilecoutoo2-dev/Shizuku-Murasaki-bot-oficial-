const fs = require('fs-extra');
const dbPath = './armor/funcoes/relacionamentos.json';
const rpg = require('./rpg'); 

const readDB = () => {
    if (!fs.existsSync(dbPath)) {
        const initialSchema = { casais: [], familias: [], pedidos_pendentes: [] };
        fs.writeFileSync(dbPath, JSON.stringify(initialSchema, null, 2));
        return initialSchema;
    }
    return JSON.parse(fs.readFileSync(dbPath));
};

const saveDB = (data) => fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

module.exports = {
    limparPedidosExpirados: () => {
        const db = readDB();
        const agora = Date.now();
        const duasHoras = 2 * 60 * 60 * 1000;
        const totalAntes = db.pedidos_pendentes.length;
        db.pedidos_pendentes = db.pedidos_pendentes.filter(p => (agora - p.timestamp) < duasHoras);
        if (db.pedidos_pendentes.length !== totalAntes) saveDB(db);
    },
    interacaoAmorosa: (id) => {
        const db = readDB();
        const casal = db.casais.find(c => c.u1 === id || c.u2 === id);
        if (!casal) return { status: false, msg: "Você não tem um parceiro!" };
        rpg.addXp(casal.u1, 50);
        rpg.addXp(casal.u2, 50);
        return { status: true, msg: "O amor fortalece vocês! +50 XP para a dupla." };
    },

    aceitarPedido: (alvo, gp) => {
        const db = readDB();
        const idx = db.pedidos_pendentes.findIndex(p => p.alvo === alvo && p.gp === gp);
        if (idx === -1) return { status: false, msg: "❌ Nenhuma solicitação pendente." };

        const p = db.pedidos_pendentes[idx];
        const agora = Date.now();
        const dataFormatada = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

        if (p.tipo === 'namoro') {
            const jaRel = db.casais.find(c => c.u1 === p.autor || c.u2 === p.autor || c.u1 === alvo || c.u2 === alvo);
            if (jaRel) return { status: false, msg: "⚠️ Alguém já está em um relacionamento!" };
            
            db.casais.push({
                u1: p.autor, u2: p.alvo,
                status: 'namorando',
                data_aceito: agora,
                data_formatada: dataFormatada,
                gp: gp
            });
            rpg.addGold(p.autor, 500);
            rpg.addGold(p.alvo, 500);
        }

        if (p.tipo === 'casar') {
            const casal = db.casais.find(c => (c.u1 === p.autor && c.u2 === p.alvo) || (c.u1 === p.alvo && c.u2 === p.autor));
            if (!casal) return { status: false, msg: "❌ Namorem primeiro!" };

            const tresDias = 3 * 24 * 60 * 60 * 1000;
            if (agora - casal.data_aceito < tresDias) return { status: false, msg: "Ainda muito cedo para casar!" };

            casal.status = 'casados';
            casal.data_casamento = agora;
            const uData = rpg.DB();
            if (uData.users[p.autor]) uData.users[p.autor].maxHp += 50;
            if (uData.users[p.alvo]) uData.users[p.alvo].maxHp += 50;
            rpg.SAVE(uData);
        }

        if (p.tipo === 'adotar') {
            const casal = db.casais.find(c => (c.u1 === p.autor || c.u2 === p.autor) && c.status === 'casados');
            if (!casal) return { status: false, msg: "Apenas casados podem adotar!" };

            let familia = db.familias.find(f => f.pais.includes(casal.u1) && f.pais.includes(casal.u2));
            if (!familia) {
                db.familias.push({ pais: [casal.u1, casal.u2], filhos: [p.alvo], data_formacao: agora });
            } else {
                if (familia.filhos.includes(p.alvo)) return { status: false, msg: "Já é seu filho!" };
                familia.filhos.push(p.alvo);
            }
            rpg.addGold(p.alvo, 200);
            const uData = rpg.DB();
            if (uData.users[p.alvo]) uData.users[p.alvo].inventario.poção += 1;
            rpg.SAVE(uData);
        }

        db.pedidos_pendentes.splice(idx, 1);
        saveDB(db);
        return { status: true, tipo: p.tipo, autor: p.autor, alvo: p.alvo };
    },

    confirmarSeparacao: (autor, gp) => {
        const db = readDB();
        const idx = db.pedidos_pendentes.findIndex(p => p.autor === autor && p.gp === gp && p.tipo === 'separacao');
        if (idx === -1) return { status: false };

        const casalIdx = db.casais.findIndex(c => c.u1 === autor || c.u2 === autor);
        if (casalIdx !== -1) {
            const casal = db.casais[casalIdx];
            const exParceiro = casal.u1 === autor ? casal.u2 : casal.u1;
            rpg.addXp(autor, -30);
            rpg.addXp(exParceiro, -30);

            db.casais.splice(casalIdx, 1);
            db.familias = db.familias.filter(f => !f.pais.includes(autor));
            db.pedidos_pendentes.splice(idx, 1);
            saveDB(db);
            return { status: true, exParceiro };
        }
        return { status: false };
    },
    getStatus: (user) => {
        const db = readDB();
        const casal = db.casais.find(c => c.u1 === user || c.u2 === user);
        const familiaComoPai = db.familias.find(f => f.pais.includes(user));
        const familiaComoFilho = db.familias.find(f => f.filhos.includes(user));
        return { casal, familiaComoPai, familiaComoFilho };
    },
    novoPedido: (autor, alvo, tipo, gp) => {
        const db = readDB();
        db.pedidos_pendentes = db.pedidos_pendentes.filter(p => p.autor !== autor);
        const novoReq = {
            autor, alvo, tipo, gp,
            timestamp: Date.now(),
            horario_formatado: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
        };
        db.pedidos_pendentes.push(novoReq);
        saveDB(db);
        return novoReq;
    },
    calcularTempo: (dataInicial) => {
        const diff = Date.now() - dataInicial;
        const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
        if (dias === 0) return `Juntos há ${horas} horas! ✨`;
        return `${dias} dias e ${horas}h! 📚❤️`;
    },
    getPerfilAmoroso: (user) => {
        const db = readDB();
        const casal = db.casais.find(c => c.u1 === user || c.u2 === user);
        if (!casal) return { casado: false };
        const parceiro = casal.u1 === user ? casal.u2 : casal.u1;
        const tempo = module.exports.calcularTempo(casal.data_aceito);
        let filhos = [];
        if (casal.status === 'casados') {
            const familia = db.familias.find(f => f.pais.includes(user));
            if (familia) filhos = familia.filhos;
        }
        return { casado: true, status: casal.status, parceiro, tempo, data_inicio: casal.data_formatada, filhos };
    },
    getEstruturaFamiliar: (user) => {
        const db = readDB();
        const casal = db.casais.find(c => c.u1 === user || c.u2 === user);
        const eFilhoDe = db.familias.find(f => f.filhos.includes(user));
        const familia = db.familias.find(f => f.pais.includes(user));
        return { casal, familia, eFilhoDe };
    },
    solicitarSeparacao: (autor, tipo, gp) => {
        const db = readDB();
        db.pedidos_pendentes = db.pedidos_pendentes.filter(p => p.autor !== autor);
        const pedido = { autor, tipo: 'separacao', gp, timestamp: Date.now() };
        db.pedidos_pendentes.push(pedido);
        saveDB(db);
        return pedido;
    },
    recusarPedido: (alvo, gp) => {
        const db = readDB();
        const idx = db.pedidos_pendentes.findIndex(p => p.alvo === alvo && p.gp === gp);
        if (idx === -1) return { status: false };
        const pedido = db.pedidos_pendentes[idx];
        db.pedidos_pendentes.splice(idx, 1);
        saveDB(db);
        return { status: true, autor: pedido.autor, tipo: pedido.tipo };
    },
    cancelarPedido: (autor, gp) => {
        const db = readDB();
        const idx = db.pedidos_pendentes.findIndex(p => p.autor === autor && p.gp === gp);
        if (idx === -1) return { status: false };
        const pedido = db.pedidos_pendentes[idx];
        db.pedidos_pendentes.splice(idx, 1);
        saveDB(db);
        return { status: true, alvo: pedido.alvo, tipo: pedido.tipo };
    },
};
