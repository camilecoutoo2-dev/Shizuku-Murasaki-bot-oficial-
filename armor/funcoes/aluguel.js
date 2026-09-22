const fs = require('fs');
const path = './armor/funcoes/aluguel.json';

if (!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));

const lerDados = () => JSON.parse(fs.readFileSync(path));
const salvar = (dados) => fs.writeFileSync(path, JSON.stringify(dados, null, 2));

const formatarDataBR = (timestamp) => {
    return new Date(timestamp).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
};

const aluguelConfig = {
    adicionar: (groupId, donoJid, tempoStr) => {
        let banco = lerDados();
        const agora = Date.now();
        
        const match = tempoStr.match(/(\d+)(d|h|m)/);
        if (!match) return null;

        const valor = parseInt(match[1]);
        const unidade = match[2];
        let ms = 0;
        if (unidade === 'd') ms = valor * 24 * 60 * 60 * 1000;
        if (unidade === 'h') ms = valor * 60 * 60 * 1000;
        if (unidade === 'm') ms = valor * 60 * 1000;

        let baseTempo = (banco[groupId] && banco[groupId].expiraEm > agora) 
            ? banco[groupId].expiraEm 
            : agora;

        banco[groupId] = {
            id: groupId,
            dono: donoJid,
            expiraEm: baseTempo + ms,
            ativo: true,
            avisado24h: false,
            avisado1m: false, 
            dataRegistro: formatarDataBR(agora),
            tentativasAvisos: 0
        };

        salvar(banco);
        return banco[groupId];
    },
    limpezaAutomatica: () => {
        let banco = lerDados();
        const agora = Date.now();
        const UM_DIA_MS = 24 * 60 * 60 * 1000;
        let alterou = false;

        for (const id in banco) {
            if (agora > (banco[id].expiraEm + UM_DIA_MS)) {
                delete banco[id];
                alterou = true;
            }
        }
        if (alterou) salvar(banco);
    },
    
    remover: (indice) => {
        let banco = lerDados();
        const ids = Object.keys(banco);
        const idAlvo = ids[indice - 1]; 

        if (idAlvo) {
            delete banco[idAlvo];
            salvar(banco);
            return idAlvo;
        }
        return null;
    },
    
    listar: async (shizuku) => {
    const banco = lerDados();
    const ids = Object.keys(banco);
    if (ids.length === 0) return "📭 Nenhum grupo alugado no momento.";

    let lista = "📋 *LISTA DE ALUGUÉIS ATIVOS*\n\n";

    for (let i = 0; i < ids.length; i++) {
        const id = ids[i];
        const g = banco[id];
        const restante = g.expiraEm - Date.now();
        const status = restante > 0 ? "✅ Ativo" : "❌ Expirado";
        
        let nomeGrupo = "Desconhecido";
        let linkGrupo = "Sem permissão";
        let totalMembros = "Não consegui puxar as informações";

        try {
            const meta = await shizuku.groupMetadata(id);
            nomeGrupo = meta.subject;
            linkGrupo = "https://chat.whatsapp.com/" + await shizuku.groupInviteCode(id);
            totalMembros = meta.size;
        } catch {
        }

        lista += `*${i + 1}. ${nomeGrupo}*\n`;
        lista += `   └ 🔗 Link: ${linkGrupo}\n`;
        lista += `   └ 🆔 ID: ${id}\n`;
        lista += `   └ 👤 Dono: @${g.dono.split('@')[0]}\n`;
        lista += `   └ 👥 Membros: ${totalMembros}\n`;
        lista += `   └ 📅 Expira: ${formatarDataBR(g.expiraEm)}\n`; 
        lista += `   └ 🚦 Status: ${status}\n\n`;
    }
    return lista;
},
    verificar: async (shizuku, groupId, OwnerNumber) => { 
        let banco = lerDados();
        const agora = Date.now();
        if (!banco[groupId]) return false;

        const grupo = banco[groupId];
        const tempoRestante = grupo.expiraEm - agora;
        const meuPV = OwnerNumber

        if (tempoRestante <= (24 * 60 * 60 * 1000) && tempoRestante > 0 && !grupo.avisado24h) {
            const metadados = await shizuku.groupMetadata(groupId);
            const todos = metadados.participants.map(p => p.id);
            
            const txt24h = `⚠️ *AVISO DE EXPIRAÇÃO (24H)* ⚠️\n\nO aluguel deste grupo vence em 24 horas!\n👉 Renovação com: wa.me/${OwnerNumber.split('@')[0]}`;
            
            await shizuku.sendMessage(groupId, { text: txt24h, mentions: todos });
            await shizuku.sendMessage(grupo.dono, { text: `🚨 *SEU ALUGUEL VENCE EM 24H*\nGrupo: ${groupId}\nFale com o suporte para renovar.` });
            
            banco[groupId].avisado24h = true;
            salvar(banco);
        }

        if (tempoRestante <= (60 * 1000) && tempoRestante > 0 && !grupo.avisado1m) {
            const txt1m = `🚨 *AVISO FINAL (1 MINUTO)* 🚨\n\nO aluguel expira em 60 segundos! O bot sairá do grupo automaticamente.\n👉 Renovação: wa.me/${OwnerNumber.split('@')[0]}`;
            
            await shizuku.sendMessage(groupId, { text: txt1m });
            await shizuku.sendMessage(grupo.dono, { text: `🔔 *AVISO FINAL:* Seu aluguel expira em 1 minuto no grupo ${groupId}!` });
            
            banco[groupId].avisado1m = true;
            salvar(banco);
        }
        
        if (tempoRestante <= 0) {
            if (grupo.ativo) {
                const txtExp = `❌ *ALUGUEL EXPIRADO* ❌\n\nO tempo acabou e o bot sairá agora.\nPara contratar novamente: wa.me/${OwnerNumber.split('@')[0]}`;
                
                await shizuku.sendMessage(groupId, { text: txtExp });
                await shizuku.sendMessage(grupo.dono, { text: `🚨 *ALUGUEL ENCERRADO*\nO bot saiu do grupo: ${groupId}.` });

                const relatorio = `📢 *RELATÓRIO DE EXPIRAÇÃO*\n\n` +
                                  `📦 *Grupo:* ${groupId}\n` +
                                  `👤 *Cliente:* @${grupo.dono.split('@')[0]}\n` +
                                  `📅 *Registrado:* ${grupo.dataRegistro}\n` +
                                  `⏰ *Finalizado:* ${formatarDataBR(grupo.expiraEm)}\n\n` +
                                  `*O bot saiu automaticamente.*`;

                await shizuku.sendMessage(meuPV, { text: relatorio, mentions: [grupo.dono] });
                
                banco[groupId].ativo = false;
                salvar(banco);
                await shizuku.groupLeave(groupId);
            }
            return false;
        }
        return true;
    },
  statusAluguel: async (conn, groupId, OwnerNumber) => {
    const banco = lerDados();
    if (!banco[groupId]) return "❌ Este grupo não possui um registro de aluguel ativo.";

    const g = banco[groupId];
    const agora = Date.now();
    const restante = g.expiraEm - agora;

    if (restante <= 0) return "❌ O aluguel deste grupo já expirou.";

    const dias = Math.floor(restante / (24 * 60 * 60 * 1000));
    const horas = Math.floor((restante % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutos = Math.floor((restante % (60 * 60 * 1000)) / (60 * 1000));
   const meta = await conn.groupMetadata(groupId);
   
    let tempoTxt = "";
    if (dias > 0) tempoTxt += `${dias}d `;
    if (horas > 0) tempoTxt += `${horas}h `;
    tempoTxt += `${minutos}m`;

    return `🛡️ *STATUS DE PROTEÇÃO SHIZUKU*\n\n` +
          `✅ *Status:* Ativo\n`+
           `🏢 *Grupo:* ${meta.subject}\n` +
           `👥 *Membros:* ${meta.size}\n`+
           `👤 *Dono do Plano:* @${g.dono.split('@')[0]}\n` +
           `⏳ *Tempo restante:* ${tempoTxt}\n` +
           `📅 *Expiração:* ${new Date(g.expiraEm).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}\n\n` +
           `📢 *Renovações:* wa.me/${OwnerNumber.split('@')[0]}`;
},

    renovar: (indice, tempoStr) => {
        let banco = lerDados();
        const ids = Object.keys(banco);
        const idAlvo = ids[indice - 1];

        if (!idAlvo) return null;

        const match = tempoStr.match(/(\d+)(d|h|m)/);
        if (!match) return "FORMATO_INVALIDO";

        const valor = parseInt(match[1]);
        const unidade = match[2];
        let ms = 0;
        if (unidade === 'd') ms = valor * 24 * 60 * 60 * 1000;
        if (unidade === 'h') ms = valor * 60 * 60 * 1000;
        if (unidade === 'm') ms = valor * 60 * 1000;

        const agora = Date.now();
        let baseTempo = banco[idAlvo].expiraEm > agora ? banco[idAlvo].expiraEm : agora;
        
        banco[idAlvo].expiraEm = baseTempo + ms;
        banco[idAlvo].ativo = true;
        banco[idAlvo].avisado24h = false;
        banco[idAlvo].avisado1m = false;

        salvar(banco);
        return banco[idAlvo];
    },
    
    deletarLocal: (groupId) => {
        let banco = lerDados();
        if (banco[groupId]) {
            delete banco[groupId];
            salvar(banco);
            return true;
        }
        return false;
    },
    
   monitorarPresenca: async (shizuku, groupId) => {
    let banco = lerDados();
    if (!banco[groupId]) return;

    const grupo = banco[groupId];
    const agora = Date.now();

    try {
        await shizuku.groupMetadata(groupId);
    } catch (e) {
        if (grupo.ativo && (grupo.expiraEm > agora)) {
            const restante = grupo.expiraEm - agora;
            const dias = Math.floor(restante / (24 * 60 * 60 * 1000));
            
            const avisoPV = `⚠️ *AVISO DE AUSÊNCIA* ⚠️\n\n` +
                `Olá! Identifiquei que possuo um *ALUGUEL ATIVO* para o grupo:\n` +
                `🆔 \`${groupId}\`\n\n` +
                `Porém, não estou presente no grupo no momento. 
                \n⏳ *Tempo Restante:* ${dias} dias aprox.
                \n👉 *O que fazer:* Me adicione novamente ou aceite minha entrada. Você tem 24h para fazer isso antes que o sistema suspenda o monitoramento por segurança.`;
                
            await shizuku.sendMessage(grupo.dono, { text: avisoPV });
        }
    }
},



};

module.exports = aluguelConfig;
