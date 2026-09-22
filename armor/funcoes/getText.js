
const Mess = {
InfoGp: (BucetaRoxa, prefix, moment, groupAdmins, somembros) => {
const isClosed = BucetaRoxa.announce ? "🔒 Sim" : "🔓 Não";
const isRestrict = BucetaRoxa.restrict ? "🚫 Não" : "✅ Sim";
const infoCreator = BucetaRoxa.subjectOwner.split("@")[0];
const dataCriacao = moment(BucetaRoxa.creation * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss');
const dataAlteracao = moment(BucetaRoxa.subjectTime * 1000).format('DD/MM/YYYY HH:mm:ss');

const txtGp = `╭─❍「 🕸️ 𝑺𝒉𝒊𝒛𝒖𝒌𝒖 - 𝑰𝒏𝒇𝒐 𝒅𝒐 𝑮𝒓𝒖𝒑𝒐 」
│
│ 🧩 *Nome:* ${BucetaRoxa.subject}
│ 🆔 *ID:* ${BucetaRoxa.id}
│
│ 🩸 *Criado por:* @${infoCreator}
│ 🕒 *Data de criação:* ${dataCriacao}
│ 🛠️ *Última alteração:* ${dataAlteracao}
│
│ 👥 *Admins:* ${groupAdmins.length}
│ 🧛 *Membros:* ${somembros.length}
│ 🕷️ *Total:* ${BucetaRoxa.participants.length} almas
│
│ 🔐 *Grupo fechado?* ${isClosed}
│ ⚙️ *Membros podem editar info?* ${isRestrict}
│
│ 📌 *Atividades:*
│ ⤷ ${prefix}atividade
│ ⤷ ${prefix}inativos [número] — Ex: ${prefix}inativos 10
╰───────────────────────❍`;
return txtGp
},

Perfil: (conselho, adivinha, getbb, time2, date, groupName, sender_ou_n, rand) => {
  
    const nivelGado = `${rand()}${rand()}%`
    const gostosura = `${rand()}${rand()}%`
    const inteligencia = `${rand()}${rand()}%`
    const romance = `${rand()}${rand()}%`
    const fama = `${rand()}${rand()}%`
    const flerte = `${rand()}${rand()}%`
    const pix = Math.floor(Math.random() * 5000)
    const programa = Math.ceil(Math.random() * 10000)

    const classes = ['Guerreiro', 'Mago', 'Assassino', 'Ladino', 'Paladino']
    const classe = classes[Math.floor(Math.random() * classes.length)]

const txt = `╭════════════════════ ┐
┆➮ *𝐢𝐈𝐍𝐅𝐎-𝐔𝐒𝐄𝐑/𝐏𝐄𝐑𝐅𝐈𝐋*
╰════════════════════ ┘
╭════════════════════ ┐
│⛥ 💁 *Usuário:* @${sender_ou_n.split("@")[0]}
│⛥ 📞 *Número:* ${sender_ou_n.split("@")[0]}
│⛥🖋️ *Recado:* ${getbb}
│⛥ 📱 *Dispositivo:* ${adivinha}
│⛥ 👥 *Grupo:* ${groupName}
│⛥ 📅 *Data:* ${date}
│⛥ 🕗 *Hora:* ${time2}
╰════════════════════ ┘

╭═ *𝐍𝐈𝐕𝐄𝐈𝐒* ═┐
│⛥ 🐂 *Gado:* ${nivelGado}
│⛥ 🤤 *Gostosura:* ${gostosura}
│⛥ 🧠 *Inteligência:* ${inteligencia}
│⛥ ❤️ *Romantismo:* ${romance}
│⛥ 🔥 *Fama no zap:* ${fama}
│⛥ 🎯 *Flerte:* ${flerte}
│⛥ 💸 *Valor no Pix:* R$${pix}
│⛥ 🍼 *Valor do Programa:* R$${programa}
│⛥ ⚔️ *Classe RPG:* ${classe}
╰════════════════════ ┘

💭 *Conselho do dia:*  
⛥ ➤ ${conselho}`;

return txt;
},

  Play: (data) => {
  const txt = `★ ♪⃝🎧 *Tɪᴛᴜʟᴏ:* ${data.titulo|| 'Unavailable'}
★ ♫⃝👤 *Aᴜᴛʜᴏʀ:* ${data.canal || 'Unknown'}
★ ♬⃝⏳ *Dᴜʀᴀçãᴏ:* ${data.duracao|| '0:00'}
★ ♪⃝🗓️ *Pᴏsᴛᴀᴅᴏ:* ${data.publicado || 'Unknown'}
★ ♫⃝👁️ *Vɪsᴜᴀʟɪᴢᴀçõᴇs:* ${data.views?.toLocaleString() || '0'}
★ ♬⃝🔮 *Uʀʟ:* ${data?.link || "undefined"}`;
return txt;
},

Aluguel: async (OwnerNumber, from) => {
const txt = `*⚠️ GRUPO NÃO AUTORIZADO*\n\n` +
                `Olá! Este grupo não possui um aluguel ativo para o uso do bot.\n\n` +
                `📌 *Como ativar?*\n` +
                `Entre em contato com o desenvolvedor para renovar ou adquirir seu plano.\n\n` +
                `👤 *Dono:* wa.me/${OwnerNumber.split('@')[0]}\n` +
                `ID do Grupo: \n\`${from}\``;
  return txt;
},
//PLAY DOC
PDoc: async (Video1) => {
const N_E = "Não encontrado.";
const txt = `
*🎵 Título:* ${Video1.title || N_E}
*⏱️ Duração:* ${Video1.timestamp || N_E}
*📅 Postado:* ${Video1.ago || N_E}
*📝 Descrição:* ${Video1.description || N_E}

■■■■■ 100%

📦 Enviando documento...`;
return txt;
},
//TIKTOK 
Tiktokdl: async (data) => {
const { titulo, duracao, videos, estatisticas, criado_em } = data?.resultado;
const { views, comentarios, compartilhamentos, likes, downloads } = estatisticas;

const txt = `*🩶 SHIZUKU - DOWNLOADS 🩶*\n
ℹ️ *INFORMAÇÕES DO VÍDEO:*\n
📌 *Título:* ${titulo}
⏳ *Duração:* ${duracao} segundos
👍 *Likes:* ${likes}
👁️ *Views:* ${views}
💬 *Comentários:* ${comentarios}
🔁 *Compartilhamentos:* ${compartilhamentos}
⬇️ *Downloads:* ${downloads}
📅 *Criado Em:* ${criado_em}
`;
return txt;
},
//TIKTOK SEARCH 
Ttksearch: async (data) => {
    const { titulo, duracao, views, likes, comentarios, compartilhamentos, musica_info } = data;

    // Função pra converter texto normal pra fonte estilizada
    const estilizar = (txt) => {
        const mapa = {
            a: '𝘢', b: '𝘣', c: '𝘤', d: '𝘥', e: '𝘦', f: '𝘧', g: '𝘨', h: '𝘩', i: '𝘪', j: '𝘫',
            k: '𝘬', l: '𝘭', m: '𝘮', n: '𝘯', o: '𝘰', p: '𝘱', q: '𝘲', r: '𝘳', s: '𝘴', t: '𝘵',
            u: '𝘶', v: '𝘷', w: '𝘸', x: '𝘹', y: '𝘺', z: '𝘻',
            A: '𝘈', B: '𝘉', C: '𝘊', D: '𝘋', E: '𝘌', F: '𝘍', G: '𝘎', H: '𝘏', I: '𝘐', J: '𝘑',
            K: '𝘒', L: '𝘓', M: '𝘔', N: '𝘕', O: '𝘖', P: '𝘗', Q: '𝘘', R: '𝘙', S: '𝘚', T: '𝘛',
            U: '𝘜', V: '𝘝', W: '𝘞', X: '𝘟', Y: '𝘠', Z: '𝘡',
            0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9',
            ' ': ' ', ':': ':', '.': '.', ',': ',', '-': '-', '(': '(', ')': ')'
        };
        return txt.split('').map(c => mapa[c] || c).join('');
    };

    const txt = `╭═════ •ೋ• ✧ •ೋ• ═════╮
│ ${estilizar('Informações do vídeo')}
╰═════ •ೋ• ✧ •ೋ• ═════╮
│
│ ${estilizar('Título')}: ${titulo}
│ ${estilizar('Duração')}: ${duracao} ${estilizar('segundos')}
│ ${estilizar('Views')}: ${views}
│ ${estilizar('Likes')}: ${likes}
│ ${estilizar('Comentários')}: ${comentarios}
│ ${estilizar('Compartilhamentos')}: ${compartilhamentos}
│
╰┈✧
╭═════ •ೋ• ✧ •ೋ• ═════╮
│ ${estilizar('Informações da música')}
╰═════ •ೋ• ✧ •ೋ• ═════╮
│
│ ${estilizar('Título')}: ${musica_info?.titulo || estilizar('Não disponível')}
│ ${estilizar('Autor')}: ${musica_info?.autor || estilizar('Não disponível')}
│ ${estilizar('Duração')}: ${musica_info?.duracao || estilizar('Não disponível')}
│
╰┈✧`;

    return txt;
},

//TIKTOK STALKER 
TtStalk: async (data) => {
const {
      id,
      username,
      bio,
      region,
      verifikasi,
      totalfollowers,
      totalmengikuti,
      totaldisukai,
      totalvideo,
      totalteman
    } = data;

const txt = `
╔══════════ 📊 RESULTADOS ENCONTRADOS ══════════╗
│
│ 🆔 𝗜𝗗: ${id || "Não informado"}
│ 👤 𝗨𝘀𝘂𝗮́𝗿𝗶𝗼: ${username || "Não informado"}
│ 🌍 𝗥𝗲𝗴𝗶𝗮̃𝗼: ${region || "Não informado"}
│ ✅ 𝗩𝗲𝗿𝗶𝗳𝗶𝗰𝗮𝗱𝗼: ${verifikasi ? "Sim" : "Não"}
│
│ 👥 𝗦𝗲𝗴𝘂𝗶𝗱𝗼𝗿𝗲𝘀: ${totalfollowers || 0}
│ ➕ 𝗦𝗲𝗴𝘂𝗶𝗻𝗱𝗼: ${totalmengikuti || 0}
│ ❤️ 𝗖𝘂𝗿𝘁𝗶𝗱𝗮𝘀: ${totaldisukai || 0}
│ 🎥 𝗩𝗶́𝗱𝗲𝗼𝘀: ${totalvideo || 0}
│ 🤝 𝗔𝗺𝗶𝗴𝗼𝘀: ${totalteman || 0}
│
│ 📝 𝗕𝗶𝗼:
│ ${bio || "Sem biografia."}
│
╚══════════════════════════════════════════════╝
`.trim()
return txt 
},

//STALK ROBLOX
Stalkroblox: async (data, dataFormatada, badgesTxt, gruposTxt) => {
const {
      username,
      displayName,
      userId,
      description,
      followersCount,
      followingCount,
      friendsCount,
    } = data;
    
const txt = `
╔══════════ 🎮 ROBLOX STALK ══════════╗
│
│ 👤 𝗨𝘀𝘂𝗮́𝗿𝗶𝗼: ${username}
│ 🏷️ 𝗡𝗼𝗺𝗲: ${displayName}
│ 🆔 𝗜𝗗: ${userId}
│
│ 📅 𝗖𝗿𝗶𝗮𝗱𝗼 𝗲𝗺: ${dataFormatada}
│
│ 👥 𝗔𝗺𝗶𝗴𝗼𝘀: ${friendsCount}
│ ➕ 𝗦𝗲𝗴𝘂𝗶𝗻𝗱𝗼: ${followingCount}
│ ⭐ 𝗦𝗲𝗴𝘂𝗶𝗱𝗼𝗿𝗲𝘀: ${followersCount}
│
│ 📝 𝗗𝗲𝘀𝗰𝗿𝗶𝗰̧𝗮̃𝗼:
│ ${description || "Sem descrição."}
│
│ 🏰 𝗚𝗿𝘂𝗽𝗼𝘀:
│ ${gruposTxt}
│
│ 🏆 𝗕𝗮𝗱𝗴𝗲𝘀:
│ ${badgesTxt}
│
╚══════════════════════════════════════╝
`.trim()
return txt;
},

//Playstore 
Playstore: async (data, query) => {
const apps = data?.resultado;
    let Text = `📱 *Play Store — Pesquisa*\n`;
    Text += `🔎 *Busca:* ${query}\n`;
    Text += `📊 *Total:* ${data.total}\n\n`;
    apps.forEach((app, i) => {
      Text += `*${i + 1}. ${app.nome}*\n`;
      Text += `👨‍💻 ${app.desenvolvedor}\n`;
      Text += `⭐ ${app.estrelas}\n`;
      Text += `🔗 ${app.link}\n`;
      Text += `━━━━━━━━━━━━━━\n\n`;
    });
return Text;
},

//YOUTUBE SEARCH 
ytsearch: async (data) => {
let mensagem = '*Resultados da Pesquisa:*\n\n';
    for (let i = 0; i < data.length; i++) {
      const video = data[i];
      mensagem += `*${i + 1}. Título:* ${video.title}\n`;
      mensagem += `*Duração:* ${video.timestamp}\n`;
      mensagem += `*Link:* ${video.url}\n`;
      mensagem += `*Canal:* ${video.author.name}\n`;
      mensagem += `*Visualizações:* ${video.views}\n\n`;
    }
 return mensagem;
},

//STALKER INSTAGRAM 
igstalk: async (data) => {
const { seguidores, seguindo, privado, bio, publicados, nome, username } = data?.results;
const txt = `Shizuku API's - stalker\n
User: @${username} (${nome})
Bio: ${bio}
Status: ${privado ? 'Conta Privada 🔒' : 'Conta Pública 🔓'}
Métricas:
Seguidores: ${seguidores}
Seguindo: ${seguindo}
Posts: ${publicados}`;

return txt;
},

//SHAZAM!
Shazam: async (data) => {
const { titulo, artista, album, ano, url_shazam } = data?.resultado;
const txt = `╭⩺━[ *SHIZUKU API'S - SHAZAM INFO* ]━⩹┐
 
°✰ 🎶 *Titulo:* ${titulo || "Sem respostas"}
°✰ 👤 *Artista:* ${artista || "Sem respostas"}
°✰ 🔂 *Álbum:* ${album || "Sem respostas"}
°✰ 📆 *Ano:* ${ano || "2026"}
°✰ 🌐 *Shazam Url:* ${url_shazam || "Sem respostas"}
╰⩺━━━━━━━━━✦━━━━━━━━━⩹┘`;
return txt;
},

//NGL
Ngl: async (data, texto) => {
	const txt = `✨ 𝙎𝙝𝙞𝙯𝙪𝙠𝙪 𝘼𝙋𝙄'𝙨 - 𝙎𝙋𝘼𝙈 ✨

🚀 Missão concluída com sucesso!

📨 Total enviado: ${data?.total_enviado}
🎯 Destinatário: ${data?.enviado_para}

💬 Mensagem enviada:
"${texto}"

⚡ Operação finalizada sem falhas!`.trim();
return txt;
},

//PLAY ÁUDIO!
Play_audio: async (data) => {
const { title, url, description, timestamp, ago, views, author } = data?.resultados[0];
const txt = `- *Shizuku API's • Downloads*

📝 *Título:* ${title}
👤 *Autor:* ${author?.name || 'Desconhecido'}
📺 *Canal:* ${author?.url || 'N/A'}
⏱️ *Duração:* ${timestamp}
📅 *Postado:* ${ago}
👁️ *Visualizações:* ${views || '0'}
🔗 *Link:* ${url}
📌 *Descrição:* ${description}`;
return txt;
},

GuiaAluguel: (prefix) => {
	let guia = `⭐ *GUIA DO SISTEMA DE ALUGUEL - SHIZUKU* ⭐\n\n`;
    guia += `Este sistema permite gerenciar o tempo de permanência do bot nos grupos de forma automatizada.\n\n`;

    guia += `📌 *1. LISTAR GRUPOS (PARA INDEX)*\n`;
    guia += `Antes de adicionar ou renovar, veja o número do grupo na lista geral:\n`;
    guia += `👉 Comando: *${prefix}listagp*\n`;
    guia += `_(Guarde o número que aparece ao lado do grupo)_\n\n`;

    guia += `➕ *2. ADICIONAR ALUGUEL*\n`;
    guia += `Autoriza o bot em um grupo novo.\n`;
    guia += `👉 Comando: *${prefix}addaluguel [dono] | [índice] | [tempo]*\n`;
    guia += `• *Exemplo:* \`${prefix}addaluguel | 1 | 30d\`\n`;
    guia += `• *Nota:* Se deixar o campo dono vazio, o bot pega o criador do grupo automaticamente.\n\n`;

    guia += `🔄 *3. RENOVAR ALUGUEL*\n`;
    guia += `Adiciona mais tempo a um grupo que já tem aluguel.\n`;
    guia += `👉 Comando: *${prefix}renovar [número_aluguel] / [tempo]*\n`;
    guia += `• *Exemplo:* \`${prefix}renovar 1 / 15d\`\n`;
    guia += `_(O número você pega no comando ${prefix}alugueis)_\n\n`;

    guia += `📊 *4. GERENCIAMENTO E STATUS*\n`;
    guia += `• *${prefix}alugueis* : Lista todos os grupos que estão pagando aluguel.\n`;
    guia += `• *${prefix}veraluguel* : (No grupo) Mostra quanto tempo resta para o bot sair.\n`;
    guia += `• *${prefix}rmaluguel [número]* : Remove o aluguel pelo índice da lista.\n`;
    guia += `• *${prefix}delaluguel* : Remove o aluguel do grupo onde o comando foi enviado.\n\n`;

    guia += `🕒 *FORMATOS DE TEMPO:*\n`;
    guia += `• \`30d\` = 30 Dias\n`;
    guia += `• \`12h\` = 12 Horas\n`;
    guia += `• \`60m\` = 60 Minutos\n\n`;

    guia += `⚠️ *DICA DO DESENVOLVEDOR:* \n`;
    guia += `Ao ativar ou renovar, o bot envia automaticamente uma mensagem no grupo avisando os administradores. Mantenha o bot como ADM para que ele possa gerenciar o grupo corretamente.`;
    return guia;
},

AvisoGpAluguel: (prefix, res) => {
	const txt = `📢 *RENOVAÇÃO DE ALUGUEL* 📢\n\n` +
            `Olá, administradores! Passando para avisar que o aluguel do bot neste grupo foi *RENOVADO*.\n\n` +
            `⏳ *Nova Expiração:* ${new Date(res.expiraEm).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}\n` +
            `🛡️ *Status:* Ativo e Protegido\n\n` +
            `💡 *Dica:* Qualquer membro pode digitar *${prefix}veraluguel* para ver o status do aluguel.`;
return txt;
},

AvisoAluguel: (res, nomeGrupo) => {
	const txt = `✅ *ALUGUEL RENOVADO!*\n\n🏢 *Grupo:* ${nomeGrupo}\n📅 *Nova Expiração:* ${new Date(res.expiraEm).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}`;
	return txt;
},

MsgGpAluguel: (res) => {
const txt = `📢 *SISTEMA DE ALUGUEL* 📢\n\n` +
    `✅ *Olá pessoal! Este grupo foi autorizado.*\n` +
    `🤖 *Agora todos podem usar as funções do bot.*\n\n` +
    `⏳ *Vencimento:* ${new Date(res.expiraEm).toLocaleDateString("pt-BR")}\n` +
    `👤 *Responsável:* @${res.dono.split('@')[0]}\n\n` +
    `🚀 *Divirtam-se!*`;
 return txt;
},

SucessTxtAluguel: (nomeGp, groupId,res) => {
const txt = `🚀 *ALUGUEL ATIVADO!* 🚀\n\n` +
            `🏢 *Grupo:* ${nomeGp}\n` +
            `🆔 *ID:* \`${groupId}\`\n` +
            `👤 *Dono:* @${res.dono.split('@')[0]}\n` +
            `📅 *Expira:* ${new Date(res.expiraEm).toLocaleString("pt-BR")}\n\n` +
            `*O bot foi autorizado com sucesso!*`;
 return txt;
},

Rpg_info: (prefix) => {
	let info_rpg = `╭─⭑🎮 *GUIA DE COMANDOS - SHIZUKU* ⭑─╮\n│\n`;

    info_rpg += `│ 📋 *COMO USAR OS COMANDOS:*\n`;
    info_rpg += `│ 💡 *Nota:* Onde tiver *@user*, você deve\n`;
    info_rpg += `│ marcar a pessoa no grupo.\n\n`;

    info_rpg += `│ 🛠️ *BÁSICOS E STATUS*\n`;
    info_rpg += `│ • *${prefix}perfilrpg*: Vê seus dados.\n`;
    info_rpg += `│ • *${prefix}carteira*: Ouro e XP rápido.\n`;
    info_rpg += `│ • *${prefix}rankgold*: Top 10 do servidor.\n`;
    info_rpg += `│ • *${prefix}delrpg*: Reseta sua conta.\n\n`;

    info_rpg += `│ ⛏️ *COLETA E TRABALHO*\n`;
    info_rpg += `│ • *${prefix}minerar*: Requer Picareta.\n`;
    info_rpg += `│ • *${prefix}capinar*: Requer Enxada.\n`;
    info_rpg += `│ • *${prefix}trabalhar*: Ganha Gold e XP.\n`;
    info_rpg += `│ • *${prefix}cacar*: Explora (Pode perder HP).\n`;
    info_rpg += `│ • *${prefix}missao*: Ganho diário garantido.\n\n`;

    info_rpg += `│ 🛒 *LOJA E COMPRAS*\n`;
    info_rpg += `│ • *${prefix}loja*: Vê os preços dos itens.\n`;
    info_rpg += `│ • *${prefix}comprar [item]*: Ex: *${prefix}comprar poção*\n`;
    info_rpg += `│ • *${prefix}comprar [item/tipo]*: Ex: *${prefix}comprar espada/ferro*\n`;
    info_rpg += `│ • *${prefix}pixrpg @user/valor*: Manda Gold.\n\n`;

    info_rpg += `│ ⚔️ *AÇÕES E COMBATE*\n`;
    info_rpg += `│ • *${prefix}pvp @user*: Desafia para duelo.\n`;
    info_rpg += `│ • *${prefix}aceitar*: Entra no duelo pendente.\n`;
    info_rpg += `│ • *${prefix}curar @user*: Usa Poção em alguém.\n`;
    info_rpg += `│ • *${prefix}roubar @user*: Tenta furtar Gold.\n`;
    info_rpg += `│ • *${prefix}vinganca @user*: Revida um roubo.\n\n`;

    info_rpg += `│ ❤️ *SISTEMA AMOROSO*\n`;
    info_rpg += `│ • *${prefix}namorar @user*: Pedido de namoro.\n`;
    info_rpg += `│ • *${prefix}casar*: Pede o(a) parceiro(a) em casamento.\n`;
    info_rpg += `│ • *${prefix}adotar @user*: Pede para ser pai/mãe.\n`;
    info_rpg += `│ • *${prefix}familia*: Vê sua árvore genealógica.\n`;
    info_rpg += `│ • *${prefix}terminar*: Inicia separação.\n`;
    info_rpg += `│ • *${prefix}confirmar*: Finaliza o divórcio.\n`;

    info_rpg += `│\n╰───⭑ Shizuku RPG ⭑───╯`;
 return info_rpg;
},

CarteiraRpg: (user, rpg) => {
	let mssg = `╭─⭑💰 *SHIZUKU RPG - CARTEIRA* 💰⭑─╮\n│\n`;
    mssg += `│ 👤 *Usuário:* ${user.nome}\n`;
    mssg += `│ 💰 *Ouro:* ${user.gold}\n`;
    mssg += `│ ⚔️ *Nível:* ${user.level}\n`;
    mssg += `│ ✨ *XP:* ${user.xp}/${rpg.xpToNext(user.level)}\n`;
    mssg += `│ ⛏️ *Mineração:* ${user.minerar_tentativas || 0}/5\n`;
    mssg += `│ 🛡️ *Escudos:* ${user.inventario.escudo}\n`;
    mssg += `│\n╰───⭑ Shizuku RPG ⭑───╯`;
    return mssg;
 },
 MsgPixRpg: (prefix, author, quantia, target, remetente, taxa) => {
 	let msgPix = `✅ *PIX REALIZADO!* ✅\n\n`;
    msgPix += `👤 *De:* @${author.split('@')[0]}\n`;
    msgPix += `👥 *Para:* @${target.split('@')[0]}\n`;
    msgPix += `💰 *Enviado:* ${quantia} Gold\n`;
    msgPix += `📉 *Taxa Bancária:* ${taxa} Gold\n`;
    msgPix += `🏦 *Seu Saldo:* ${remetente.gold} Gold\n\n`;
    msgPix += `╰───⭑ Shizuku RPG ⭑───╯`;
    return msgPix;
  },
LojaRpg: (user, prefix) => {
let shop = `╭─⭑🛒 *MERCADO DA SHIZUKU* 🛒⭑─╮\n│\n`;
    shop += `│ 👤 *Cliente:* ${user.nome}\n`;
    shop += `│ 💰 *Seu Ouro:* ${user.gold}\n`;
    shop += `│ 🧪 *Poções hoje:* ${user.compras_poção || 0}/1\n`;
    shop += `│ 🍺 *Bebidas hoje:* ${user.compras_bebida || 0}/2\n│\n`;
    shop += `│ 🧪 *CONSUMÍVEIS E SUPORTE:*\n`;
    shop += `│ 💊 Poção: 💰 300 (Recupera 50 HP)\n`;
    shop += `│ 🛡️ Escudo: 💰 200 (Defesa PVP/Roubo)\n`;
    shop += `│ 🍾 Bebida: 💰 200 (Cura/Embebeda)\n│\n`;
    shop += `│ ⛏️ *PICARETAS (Minerar):*\n`;
    shop += `│ - madeira: 💰 100 (15 usos)\n`;
    shop += `│ - ferro: 💰 500 (60 usos)\n│\n`;
    shop += `│ 🌾 *ENXADAS (Capinar):*\n`;
    shop += `│ - madeira: 💰 80 (12 usos)\n`;
    shop += `│ - ferro: 💰 350 (45 usos)\n│\n`;
    shop += `│ ⚔️ *ESPADAS (PVP):*\n`;
    shop += `│ - pedra: 💰 150 (20 usos)\n`;
    shop += `│ - ferro: 💰 400 (50 usos)\n`;
    shop += `│ - diamante: 💰 1000 (150 usos)\n│\n`;
    shop += `│ 🛒 *COMO COMPRAR:* \n`;
    shop += `│ Use: *${prefix}comprar item/material*\n`;
    shop += `│ Ex: *${prefix}comprar espada/diamante*\n`;
    shop += `│ Ex: *${prefix}comprar poção*\n`;
    shop += `╰───⭑ Shizuku RPG ⭑───╯`;
return shop;
},
 
PerfilRpg: (user, relacao, prefix, statusSocial, xpNecessario, barraHP, porcentagemHP) => {
	let texto = `╭─⭑💮 *SHIZUKU RPG - STATUS* 💮⭑─╮\n│\n`;
    texto += `│ 🧍 *Aventureiro:* ${user.nome}\n`;
    texto += `│ 👑 *Título:* ${user.level >= 50 ? 'Lenda' : user.level >= 20 ? 'Veterano' : 'Novato'}\n`;
    texto += `│ ⚔️ *Nível:* ${user.level}  |  ✨ *XP:* ${user.xp}/${xpNecessario}\n`;
    texto += `│ 💰 *Ouro:* ${user.gold}\n`;
    texto += `│ 💓 *Vínculo:* ${statusSocial}\n`;
    
    if (relacao.filhos && relacao.filhos.length > 0) {
        texto += `│ 👨‍👩‍👧 *Família:* ${relacao.filhos.length} filho(s)\n`;
    }
    
    texto += `│\n│ 🧪 *Vida:* [${barraHP}] ${Math.round(porcentagemHP * 100)}%\n`;
    texto += `│ 💪 *HP:* ${user.hp} / ${user.maxHp}\n`;
    texto += `│ 🛡️ *Atk:* ${user.atk}  |  🛡️ *Def:* ${user.def}\n`;
    if (user.bebado > 0) {
        texto += `│ 😵 *Estado:* ${user.bebado}% ${user.bebado > 50 ? '(Ressaca 🤢)' : '(Tonto 🥴)'}\n`;
    }

    texto += `│\n│ 🎒 *INVENTÁRIO:* \n`;
    texto += `│ 🛡️ Escudos: ${user.inventario.escudo || 0}\n`;
    texto += `│ 🧪 Poções: ${user.inventario.poção || 0}\n`;
    
    texto += `│\n│ 🛠️ *FERRAMENTAS:* \n`;
    texto += `│ ⛏️ Picareta: ${user.ferramentas.picareta ? `${user.ferramentas.picareta.tipo} (${user.ferramentas.picareta.usos} usos)` : '❌'}\n`;
    texto += `│ 🌾 Enxada: ${user.ferramentas.enxada ? `${user.ferramentas.enxada.tipo} (${user.ferramentas.enxada.usos} usos)` : '❌'}\n`;
    texto += `│ ⚔️ Espada: ${user.ferramentas.espada ? `${user.ferramentas.espada.tipo} (${user.ferramentas.espada.usos} usos)` : '❌'}\n`;
    texto += `│\n╰───⭑ Shizuku RPG ⭑───╯`;
    return texto;
   },
   
  MsgAdotou: (res, sender) => {
  	let msgSucesso = "";
  	      msgSucesso = `╭─⭑👪 *ADOÇÃO CONCLUÍDA* ⭑─╮\n│\n`;
            msgSucesso += `│ ❤️ Que lindo! @${sender.split('@')[0]} agora\n`;
            msgSucesso += `│ faz parte da família de @${res.autor.split('@')[0]}!\n│\n`;
            msgSucesso += `│ 🎁 *Herança:* +200 Gold & 1 Poção!\n`;
            msgSucesso += `╰───⭑ Shizuku RPG ⭑───╯`;
    return msgSucesso;
   },
   MsgCasou: (res, sender) => {
   	let msgSucesso = "";
       	msgSucesso = `╭─⭑💍 *CASAMENTO SAGRADO* 💍⭑─╮\n│\n`;
            msgSucesso += `│ ✨ *O AMOR VENCEU!* @${res.autor.split('@')[0]} e \n`;
            msgSucesso += `│ @${sender.split('@')[0]} subiram ao altar!\n│\n`;
            msgSucesso += `│ ❤️ *Bônus RPG:* +50 HP Máximo (Buff Vital)\n`;
            msgSucesso += `│ 🎉 Viva os noivos!\n`;
            msgSucesso += `╰───⭑ Shizuku RPG ⭑───╯`;
       return msgSucesso;
    },
    MsgNamorou: (res, sender) => {
    	let msgSucesso = "";
    	msgSucesso = `╭─⭑💕 *NOVO CASAL FORMADO* 💕⭑─╮\n│\n`;
            msgSucesso += `│ 🥳 *Parabéns!* @${res.autor.split('@')[0]} e \n`;
            msgSucesso += `│ @${sender.split('@')[0]} agora são um casal!\n│\n`;
            msgSucesso += `│ 💰 *Bônus RPG:* +500 Gold para cada!\n`;
            msgSucesso += `╰───⭑ Shizuku RPG ⭑───╯`;
      return msgSucesso;
},
}

module.exports = Mess