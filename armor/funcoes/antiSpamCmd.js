const flood = {};
const castigo = {};

/**
 * Sistema de Anti-Flood para Comandos
 * @param {string} sender - JID do usuário
 * @param {object} shizuku - Instância do bot
 * @param {string} from - ID do grupo/chat
 */
const verificarFlood = async (shizuku, from, sender) => {
    const agora = Date.now();
    const usuario = sender;
    if (castigo[usuario]) {
        if (agora < castigo[usuario].expira) {
            if (castigo[usuario].avisos < 2) {
                castigo[usuario].avisos++;
                const resto = Math.ceil((castigo[usuario].expira - agora) / 1000 / 60);
                await shizuku.sendMessage(from, { 
                    text: `⚠️ *USUÁRIO SUSPENSO*\n\n@${usuario.split('@')[0]}, você está proibido de usar comandos por 10 minutos devido a flood.\n⏳ Restam: ${resto} minuto(s).`,
                    mentions: [usuario]
                });
            }
            return true; 
        } else {
            delete castigo[usuario];
            delete flood[usuario];
            await shizuku.sendMessage(from, { 
                text: `✅ *ACESSO RESTAURADO*\n@${usuario.split('@')[0]}, seu tempo de suspensão acabou. Por favor, não abuse dos comandos novamente.`,
                mentions: [usuario]
            });
            return false;
        }
    }

    if (!flood[usuario]) flood[usuario] = [];
    flood[usuario] = flood[usuario].filter(ts => agora - ts < 10000);
    
    flood[usuario].push(agora);

    if (flood[usuario].length >= 10) {
        castigo[usuario] = {
            expira: agora + (10 * 60 * 1000),
            avisos: 0
        };
        
        await shizuku.sendMessage(from, { 
            text: `🚫 *BLOQUEIO POR SPAM*\n\n@${usuario.split('@')[0]} detectamos spam de comandos. Você foi suspenso por 10 minutos.`,
            mentions: [usuario]
        });
        return true; 
    }

    return false;
};

module.exports = { verificarFlood };
