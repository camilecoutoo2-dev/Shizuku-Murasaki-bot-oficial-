
const baileys = require('@whiskeysockets/baileys');
const ytSearch = require('yt-search');
const chalk = require('chalk');
const path = require('path');
const mime = require('mime-types');
const stripAnsi = (str) => str?.replace(/\x1B\[[\d;]*m/g, '')

var { brancocmd, brancacmd, imgnazista, imgsafada, imgsafado, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, deathcmd, beijocmd, chutecmd, tapacmd, rnkgay, rnkgado, rnkcorno, rnkgostoso, rnkgostosa, rnknazista, rnkotaku, rnkpau, suruba, minado_bomb, thumbnail } = require("./shizuku-config/data/links_img.json");

const { fs, Boom, axios, crypto, util, P, linkfy, request, buscarNoGoogle, cheerio, ms, ffmpeg, webp_mp4, exec, spawn, execSync, moment, color, time, hora, date, getBuffer, recognize, fetchJson, fetchText, fetch, getBase64, createExif, addLimit, upload, JpUpload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, convertSticker, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, getpc, supre, wait, getExtension, generateMessageID, getGroupAdmins, getMembros, sendPoll, getRandom, temporizador, chyt, kyun, simih, colors, comand, manutencaoSistema, infoSystem, os, arcloud, infoClima, insert, response, addVIP, isVIP, getExpire, removeVIP, psycatgames } = require('./shizuku-def.js');

const {
  linguagem,
  listCommands,
  tratarMensagemAntiFlood,
  fuzzySimilarity,
  mess,
  getInfo,
  destrava,
  destrava2,
  tabela,
  conselhob,
  fatos,
  randomCantadas,
  palavrasc,
  ban,
  joguinhodavelhajs,
  joguinhodavelhajs2,
  nescessario,
  setting,
  muted,
  countMessage,
  sendVideoAsSticker,
  sendImageAsSticker,
  sendVideoAsSticker2,
  sendImageAsSticker2,
  sotoy,
  daily,
  comandos,
  limitefll,
  addVote,
  delVote,
  patentes,
  antispam,
  anotar,
  black_,
  enviarfiguUrl,
  getFileBuffer,
  DLT_FL,
  sleep,
  ANT_LTR_MD_EMJ,
  pegarCases
} = require('./shizuku-def.js');


const { removerHorarios, definirAbertura, definirFechamento, salvarHorarios, horarios } = require("./datab/grupos/FECHAR E ABRIR");

var { NomeDoBot, NickDono, prefix, OwnerNumber, Shizuku_site, Shizukusite, SHIZUKU_KEY, Site_API, TokenApi, SENHA_ADM, SHIZUKU_TOKEN, idChannel } = require("./shizuku-config/dono/settings.json");

const messageStore = {}
const limiteMencoes = 1
const botLigadoEm = Date.now();
const cooldownSuruba = new Map();
const cacheNick = new Map(); 
const playStore = {}; 

const { g1, Noticias, Noticias2 } = require("./datab/scraper/noticias")

const jogo = {jogador: "", now: true};

const { igDl } = require('./datab/downloads/igdl');
const { AutoBaixarUrl, AutoDownload } = require('./datab/downloads/autodl');
const { baixarTikTok, buscarTtk } = require('./datab/downloads/tiktok');

const { ffmpegSticker } = require("./database/sticker/sticker.js")

const reacoesMenu = require('./shizuku-config/data/reaçõesMenu.json');
const reagirmenu = reacoesMenu.emojis;
const reation = reagirmenu[Math.floor(Math.random() * reagirmenu.length)];
const { version } = require('./package');
const Mess = require("./armor/funcoes/getText");
const aluguel = require('./armor/funcoes/aluguel');
const antiflood = require('./armor/funcoes/antiSpamCmd');
const rpg = require('./armor/funcoes/rpg'); 
const rel = require('./armor/funcoes/relacionamento'); 
const parceria = require('./armor/funcoes/parcerias')
const { AIRich, Button, ButtonV2, Carousel } = require('./shizuku-config/lib/MessageButtons.js');

var numerodono_ofc = OwnerNumber.replace(new RegExp("[()+-/ +/]", "gi"), "");

async function iniciarBot() {

module.exports = upsert = async(upsert, shizuku) => {
async function msgupsrt() {

var hora120 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

manutencaoSistema(shizuku, hora120)

for (const info of upsert?.messages || []) {
const from = info.key.remoteJid;
const fromMe = info.key.fromMe;
const isGroup = from.endsWith('@g.us');
const isStatus = from.endsWith('@broadcast');
if (from.endsWith('@newsletter')) return;
const timestampMsg = info.messageTimestamp * 1000;
if (timestampMsg < botLigadoEm) {
console.log(`[IGNORADO] Mensagem antiga de: ${from}`);
return;
}
const id = info.key.id;
messageStore[id] = info

if(fs.existsSync(`./database/grupos/activation_gp/${from}.json`)) {
var jsonGp = JSON.parse(fs.readFileSync(`./database/grupos/activation_gp/${from}.json`));
}
if(!info.message) return;
if(upsert.type == "append") return;  
const type = baileys.getContentType(info.message);
const content = JSON.stringify(info.message);
const pushname = info.pushName ? info.pushName : shizuku.user.name || null;

const speed = require('performance-now');

var body = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || info.message?.buttonsResponseMessage?.selectedButtonId || info.message?.listResponseMessage?.singleSelectReply?.selectedRowId || info.message?.templateButtonReplyMessage?.selectedId || info?.text || ""
var Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""
const args = body.trim().split(/ +/).slice(1);
var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

if(isGroup && fs.existsSync(`./database/grupos/activation_gp/${from}.json`) && jsonGp[0].multiprefix) {
var prefix = jsonGp[0]?.prefixos[jsonGp[0]?.prefixos?.indexOf(String(body)?.trim()?.charAt(0))] || jsonGp[0].prefixos[0]
}

if(isGroup && fs.existsSync(`./database/grupos/activation_gp/${from}.json`) && !jsonGp[0].multiprefix) {
var prefix = setting.prefix;
} else if(!isGroup) {
var prefix = setting.prefix
};

var isCmd = body.trim().startsWith(prefix);
const command = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase(): null;
const q_2 = budy2.trim().split(/ +/).slice(1).join(' ');
const q = args.join(' ');
var budy = (type === 'conversation') ? info.message?.conversation : (type === 'extendedTextMessage') ? info.message?.extendedTextMessage?.text : '';
var budy3 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
var PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
const q_ofc = PR_String.trim().split(/ +/).slice(1).join(" ");

if (fromMe && !budy.startsWith(prefix) && !budy.startsWith(">") && !budy.startsWith("$") && !budy.startsWith("(>") ) return;
//======================================\\

const groupMetadata = isGroup ? await shizuku.groupMetadata(from) : ""|| null
const groupName = isGroup ? groupMetadata.subject : '';
const botNumberLID = shizuku?.user?.lid?.split(':')[0] + '@lid' || '';
const sender = baileys.jidNormalizedUser(isGroup ? info?.key?.participantAlt || 
await shizuku?.user?.id || 
info?.key?.participant : info?.key?.remoteJidAlt ||
info.key.remoteJid || await shizuku?.user.id
);

const messagesC = PR_String.slice(0).trim().split(/ +/).shift().toLowerCase();
const arg = body.substring(body.indexOf(' ') + 1);
const botNumber = shizuku.user.id.split(':')[0]+'@s.whatsapp.net';
const argss = body.split(/ +/g);
const testat = body;
const ants = body;
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isnit = nit.includes(sender) 
const issupre = supre.includes(sender)
const ischyt = chyt.includes(sender)
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const somembros = isGroup ? getMembros(groupMembers) : ''
//======================================\\
const dono1 = nescessario.dono1;
const dono2 = nescessario.dono2;
const dono3 = nescessario.dono3;
const dono4 = nescessario.dono4;
const dono5 = nescessario.dono5;
const dono6 = nescessario.dono6;
const nmrdn = setting.OwnerNumber;
const numerodono = [`${nmrdn}@s.whatsapp.net`, `${dono1}@s.whatsapp.net`, `${dono2}@s.whatsapp.net`, `${dono3}@s.whatsapp.net`, `${dono4}@s.whatsapp.net`, `${dono5}@s.whatsapp.net`, `${dono6}@s.whatsapp.net`, `${botNumber}`]

const { enviar, sortear, msgCmd } = require('./shizuku-config/message.js'); 

const diretorio_arqv = './datab/grupos/antiarqv.json';
const antiarqv = JSON.parse(fs.readFileSync(diretorio_arqv));
const dirGroup = `./database/grupos/activation_gp/${from}.json`
const nescj = "./shizuku-config/dono/nescessario.json"

if(isGroup && !fs.existsSync(dirGroup)){
var data = [{
name: groupName,
groupId: from, x9: false, 
antiimg: false, antivideo: false,
antiaudio: false, antisticker: false,
antidoc: false, antictt: false, antilinkD: false, antidelete: false, 
antiloc: false, antilinkgp: false,
antilinkhard: false, antifake: false, antiporn: false,
Odelete: false, antispam: false, 
antinotas: false, anticatalogo: false, visuUnica: false, 
registrarFIGUS: false, soadm: false, 
listanegra: [], advertir: [], prefixos: [`${setting.prefix}`],
advertir2: [], legenda_estrangeiro: "0",
legenda_documento: "0", legenda_video: "0",
legenda_imagem: "0", multiprefix: false, usentes: [],  
antipalavrao: {
active: false,
palavras: []
},
limitec: {
active: false,
quantidade: null
},
antiflood: {
status: false,
maxMensagem: 10,
intervalo: 10
},
welcome: {
ativo: false,
fundo_api: true,
entrar: {
texto: "Olá #numerodele#, seja bem vindo(a) ao Grupo: *#nomedogp#*, Shizuku lhe deseja as boas vindas 🕸️",
tipo: "imagem",
fundo: "https://shizukuapis.space/uploads/8ab4cfbd.jpeg",
arquivo: ""
},
sair: {
texto: "Adeus, #numerodele#, espero que não se arrependa pela sua decisão.",
tipo: "imagem",
fundo: "https://shizukuapis.space/uploads/8ab4cfbd.jpeg",
arquivo: ""
}
},
simi1: false, simi2: false,
autosticker: false, autoresposta: false,
jogos: false, level: false,
bangp: false, nsfw: false,
aluguel: false, 
autoDownload: false,
antimencao: false,
modoRpg: false,
modobn: false,
}]
fs.writeFileSync(dirGroup, JSON.stringify(data, null, 2) + '\n')
}

const dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined 

var DFNMULTIP = `./database/func/prefixo/multip_${from}.json`

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}

function setNes(index){
fs.writeFileSync(nescj, JSON.stringify(index, null, 2) + '\n')}

const adivinha = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'iPhone' : 'WhatsApp Web';

const quoted = info.quoted ? info.quoted : info

const isBot = info.key.fromMe || 
              (shizuku?.user?.lid 
                ? info?.key?.participant === shizuku.user.lid.split(':')[0] + '@lid' 
                : false);
                
const SoDono = numerodono.includes(sender) || isBot || isnit || issupre || ischyt

dfndofc = setting.OwnerNumber+"@s.whatsapp.net" || botNumber || botNumber + "@s.whatsapp.net";

const DonoOficial = dfndofc.includes(sender) 
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false || DonoOficial || SoDono
const isPremium = isVIP(sender) || SoDono;
const isBanned = ban.includes(sender)
const isVisualizar = nescessario.visualizarmsg
const isVerificado = nescessario.verificado
const isWelcomePrivate = nescessario.welcomepv
const isAudioMenu = nescessario.menu_audio
const isAntiPv2 = nescessario.banChats
const isConsole = nescessario.consoleoff
const isBotoff = nescessario.botoff
const listanegraG = nescessario.listanegraG
const isAntiPv = nescessario.antipv
const isAnticall = nescessario.anticall
const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false

//============(FUNÇÕES)============\\

const isAntiImg = isGroup ? dataGp[0].antiimg : undefined
const isAntiVid = isGroup ? dataGp[0].antivideo : undefined
const isAntiAudio = isGroup ? dataGp[0].antiaudio : undefined
const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined
const Antidoc = isGroup ? dataGp[0].antidoc : undefined
const isAntiCtt = isGroup ? dataGp[0].antictt : undefined
const Antiloc = isGroup ? dataGp[0].antiloc : undefined
const isAntilinkgp = isGroup ? dataGp[0].antilinkgp : undefined
const isAntiLinkHard = isGroup ? dataGp[0].antilinkhard : undefined
const isAntiLinkDelete = isGroup ? dataGp[0].antilinkD : undefined 
const isAntiPorn = isGroup ? dataGp[0].antiporn : undefined
const isAntifake = isGroup ? dataGp[0].antifake : undefined
const IS_DELETE = nescessario.Odelete
const So_Adm = isGroup ? dataGp[0].soadm: undefined
const isX9VisuUnica = isGroup ? dataGp[0].visuUnica : undefined
const ADVT = isGroup ? dataGp[0].advertir: undefined
const ADVT2 = isGroup ? dataGp[0].advertir2: undefined
const isx9 = isGroup ? dataGp[0].x9 : undefined
const isMultiP = isGroup ? dataGp[0].multiprefix : undefined
const isAntiNotas = isGroup ? dataGp[0].antinotas : undefined
const isAnticatalogo = isGroup ? dataGp[0].anticatalogo : undefined
const isWelkom = isGroup ? dataGp[0]?.welcome?.ativo : undefined
const isSimi = isGroup ? dataGp[0].simi1 : undefined
const isSimi2 = isGroup ? dataGp[0].simi2 : undefined
const isAutofigu = isGroup ? dataGp[0].autosticker : undefined
const isAutorepo = isGroup ? dataGp[0].autoresposta : undefined
const isLevelingOn = isGroup ? dataGp[0].level : undefined
const isBanchat = isGroup ? dataGp[0].bangp : undefined
const isNsfw = isGroup ? dataGp[0].nsfw : undefined
const isPalavrao = isGroup ? dataGp[0].antipalavrao.active : undefined
const isPalavras = isGroup ? dataGp[0].antipalavrao.palavras : undefined
const isAntiFlood = isGroup ? dataGp[0].limitec.active : undefined
const isAntiFlood2 = isGroup ? dataGp[0]?.antiflood?.status : undefined 
const isLimitec = isGroup ? dataGp[0].limitec.quantidade : undefined
var isCmdPremium = nescessario.cmd_premium
const isAutoDown = isGroup ? dataGp[0].autoDownload : undefined 
const IsModoRpg = isGroup ? dataGp[0]?.modoRpg : undefined 
const isAntiMencionar = isGroup ? dataGp[0]?.antimencao : undefined 
const isAntiDelete = isGroup ? dataGp[0]?.antidelete : undefined 
const isModobn = isGroup ? dataGp[0]?.modobn : undefined 
const isParceiro = parceria.isParceiro(from, sender);
//=======================================\\

const isQuotedVisuU = (message) => {
    const viewOnceMessage = message?.viewOnceMessageV2?.message || message?.viewOnceMessage?.message;
    return !!viewOnceMessage && (viewOnceMessage.imageMessage || viewOnceMessage.videoMessage);
};

//==========(VERIFICADO)===============\\
const selojp = nescessario.verificado ? { key: { fromMe: false, participant: "13135550002@s.whatsapp.net", ...(from ? { remoteJid: "status@broadcast" } : {}) },message: { contactMessage: { displayName: pushname, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;Meta AI;;;\nFN:Ai\nitem1.TEL;waid=13135550002:+1 (313) 555-0002\nitem1.X-ABLabel:Celular\nX-WA-BIZ-NAME:Meta AI\nEND:VCARD",caption: NomeDoBot }}} : info;

//=======================================\\
// simplificações \\
var conn = shizuku;
var client = shizuku;
var sabrina = shizuku;
var lalamdz = shizuku;
var yuno = shizuku;
var nodz = shizuku;
var sasah = selojp;
var selo = selojp;
var yuta = shizuku;

///////=============

// FUNÇÕES DE MARCAÇÕES ESSENCIAL \\
let menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant || '';
if (menc_prt.includes('@lid') && groupMetadata?.participants) {
menc_prt = groupMetadata.participants.find(v => v.id === menc_prt)?.phoneNumber || '';
}
const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
if (menc_jid2?.[0]?.includes('@lid') && groupMetadata?.participants) {
menc_jid2[0] = groupMetadata.participants.find(v => v.id === menc_jid2[0])?.phoneNumber || '';
}
const menc_os2 = q.includes("@") ? (Array.isArray(menc_jid2) && menc_jid2.length > 0 ? menc_jid2[0] : null) : menc_prt;
const menc_jid = baileys.jidNormalizedUser(menc_os2 || sender);
const sender_ou_n = q.includes("@") ? menc_jid2?.[0] : (menc_prt || sender);
const normalizar = alvo => {
if (alvo?.includes('@lid') && groupMetadata?.participants) {
return groupMetadata.participants.find(v => v.id === alvo)?.phoneNumber || alvo;
}
return alvo;
};
const numClean = txt => txt.replace(/[()+\-\/\s]/g, '') + '@s.whatsapp.net';
const mrc_ou_numero  = q.length > 6  && !q.includes('@') ? numClean(q)  : normalizar(menc_prt);
const marc_tds       = q.includes('@')                 ? normalizar(menc_jid) : q.length > 6  && !q.includes('@') ? numClean(q)  : normalizar(menc_prt);
const menc_prt_nmr   = q.length > 12 && !q.includes('@') ? numClean(q)  : normalizar(menc_prt);
const menc_prt3 = info.message?.extendedTextMessage?.contextInfo?.participant
const menc_jid3 = args?.join(" ").replace("@", "") + "@s.whatsapp.net"
const menc_jid23 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid
const sender_ou_n3 = q.includes("@") ? menc_jid : sender
const mrc_ou_numero3 = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_os23 = q.includes("@") ? menc_jid : menc_prt 
const marc_tds3 = q.includes("@") ? menc_jid : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_prt_nmr3 = q.length > 12 ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt
////////////////////////////////////////////
var isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}

const reply2 = async (content, type, options = {}) => {
  const isFullUrl = (url) =>
    new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/, 'gi').test(url);

  const mediaKeys = ['image', 'video', 'sticker', 'audio', 'document', 'history', 'md-app-state'];

  options[type || 'text'] = isFullUrl(content) && mediaKeys.includes(type) ? { url: content } : content;
  options.forwardingScore = 999;
  options.isForwarded = true;

  return shizuku.sendMessage(from, options, { quoted: selojp }).catch(e => {
    reply("Erro ao enviar a mensagem..");
  });
};

async function reply3(texto) {
try {
return conn.sendMessage(from, {text: texto, mentions: [sender, menc_os2, sender_ou_n], contextInfo: { forwardingScore: 999, isForwarded: true} }, {quoted : selo})
} catch(error) {
reply("Erro ao enviar mensagem.");
console.error(error);
}
};

async function reply(texto) {
  try {
    return conn.sendMessage(from, {
      text: texto,
      mentions: [menc_os2, sender, info?.key?.remoteJid]
    }, { quoted: selo });

  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
    return reply3("❌ Erro ao enviar mensagem.");
  }
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? shizuku.sendMessage(from, {text: teks.trim(), mentions: memberr}) : shizuku.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
	
const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
shizuku.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

//
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = 'Boa noite'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'Bom dia'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'Boa tarde'
} if(time2 > "18:00:00"){
var tempo = 'Boa noite'
}

const reagir = async (idgp, emj) => {
var reactionMessage = {
react: {
text: emj, 
key: info.key
}
} 
shizuku.sendMessage(idgp, reactionMessage)
}

const verificarN = async(sla) => {
const [result] = await shizuku.onWhatsApp(sla)
if(result == undefined) {
reply("Este usuário não é existente no WhatsApp")
} else {
reply(`${sla} Número inserido é existente no WhatsApp com o id: ${result.jid}`)
}
}

if(isAutofigu && isGroup) {
async function autofiguf() {
setTimeout(async() => {    

if(budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return

if(type == 'imageMessage') {
var pack = `👑 ⃟ᴄʀɪᴀᴅᴀ ᴘᴏʀ\n↳ ${NomeDoBot}\n\n↧ 🥀 ⃟ɴɪᴄᴋ ᴅᴏɴᴏ\n↳ ${NickDono}`
var author2 = `↧ ☁️ ⃟ɢʀᴜᴘᴏ\n↳ ${groupName}\n\n↧ 💻 ⃟ғᴇɪᴛᴀ ᴘᴏʀ:\n↳ ${pushname}`
owgi = await getFileBuffer(info.message.imageMessage, 'image')
let encmediaa = await sendImageAsSticker2(shizuku, from, owgi, info, { packname:pack, author:author2})
DLT_FL(encmediaa)
}

if(type == 'videoMessage') {
if((isMedia && info.message.videoMessage.seconds < 10)){
var pack = `👑 ⃟ᴄʀɪᴀᴅᴀ ᴘᴏʀ\n↳ ${NomeDoBot}\n\n↧ 🥀 ⃟ɴɪᴄᴋ ᴅᴏɴᴏ\n↳ ${NickDono}`
var author2 = `↧ ☁️ ⃟ɢʀᴜᴘᴏ\n↳ ${groupName}\n\n↧ 💻 ⃟ғᴇɪᴛᴀ ᴘᴏʀ:\n↳ ${pushname}`
owgi = await getFileBuffer(info.message.videoMessage, 'video')
let encmedia = await sendVideoAsSticker2(shizuku, from, owgi, info, { packname:pack, author:author2})
DLT_FL(encmedia)
}
} 
}, 1000)
}
autofiguf().catch(e => {
console.log(e)
})
}

// --- SISTEMA X9 (ANTI-DELETE & ANTI-EDIT) ---

if (info.message?.protocolMessage && isAntiDelete && isGroup) {
    const proto = info.message.protocolMessage;
    const type = proto.type; 
    if (type !== 0 && type !== 14) return;
    try {
        const msgId = proto.key.id;
        const from = info.key.remoteJid;
        const original = messageStore[msgId];
        if (!original || !original.message) return;
        const user = original?.key?.participantAlt || original?.key?.remoteJid;
        const userName = original.pushName || user.split('@')[0];
        const getReal = (m) => {
            return m?.viewOnceMessageV2?.message || m?.viewOnceMessage?.message || m?.ephemeralMessage?.message || m;
        };
        const realMsg = getReal(original.message);
        let profilePic = 'https://telegra.ph/file/24fa902ead26340f3df2c.png';
        try { profilePic = await shizuku.profilePictureUrl(user, 'image'); } catch {}
        const extractText = (m) => {
        const msg = getReal(m);
   
    const poll = msg?.pollCreationMessage || msg?.pollCreationMessageV3;
    if (poll) {
        const options = poll.options.map(opt => `• ${opt.optionName}`).join('\n');
        return `📊 *ENQUETE:* ${poll.name}\n\n*Opções:*\n${options}`;
    }
    if (msg?.pollResultSnapshotMessage) {
        const snap = msg.pollResultSnapshotMessage;
        const votes = snap.pollVotes.map(v => `• ${v.optionName} (${v.optionVoteCount} votos)`).join('\n');
        return `📈 *RESULTADO DE ENQUETE:* ${snap.name}\n\n*Votos registrados:*\n${votes}`;
    }
    return msg?.conversation || msg?.extendedTextMessage?.text || msg?.imageMessage?.caption || msg?.videoMessage?.caption || '';
        };
        if (type === 0) {
            const textoOriginal = extractText(original.message);
            const temMidia = realMsg?.imageMessage || realMsg?.videoMessage || realMsg?.stickerMessage || realMsg?.audioMessage || realMsg?.documentMessage;
            if (temMidia) {
                await shizuku.sendMessage(from, { 
                    text: `*🚨 X9 DETECTADO*\n\n*Usuário:* @${user.split('@')[0]}\n*Ação:* Apagou uma mídia abaixo.`, mentions: [ user ]}, { quoted: original });
                await shizuku.sendMessage(from, { forward: original }, { quoted: original });
            } else if (realMsg?.pollCreationMessage || realMsg?.pollCreationMessageV3) {
         const pollData = realMsg?.pollCreationMessage || realMsg?.pollCreationMessageV3;
           await shizuku.sendMessage(from, {
            poll: {
            name: pollData.name,
            values: pollData.options.map(v => v.optionName),
            selectableCount: pollData.selectableOptionsCount || 1
           }}, { quoted: original });
            } 
              else if (realMsg?.pollResultSnapshotMessage) {
              const textoSnapshot = extractText(original.message);
              await shizuku.sendMessage(from, { text: textoSnapshot, mentions: [ user ]}, {quoted: original});
            } else {
                await shizuku.sendMessage(from, { 
                    text: `*🚨 X9 DETECTADO*\n\n*Usuário:* @${user.split('@')[0]}\n*Conteúdo:* ${textoOriginal || '(Sem texto)'}`, mentions: [ user ]}, { quoted: original });
            }
            delete messageStore[msgId];
        }
        if (type === 14) {
            const oldText = extractText(original.message);
            const newText = extractText(proto.editedMessage);
            const textoFinal = `💢 *𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐌 𝐄𝐃𝐈𝐓𝐀𝐃𝐀*\n\n*👤 Usuário:* @${user.split('@')[0]}\n\n> 🕓 *𝙰𝙽𝚃𝙴𝚂:*\n- ${oldText || '(vazio/mídia)'}\n\n> 👀 *𝙳𝙴𝙿𝙾𝙸𝗦:*\n- ${newText || '(vazio/mídia)'}`;
            await shizuku.sendMessage(from, { 
                text: textoFinal, mentions: [ user ]}, { quoted: original });
            messageStore[msgId].message = proto.editedMessage;
        }
    } catch (e) {
        console.log('[X9 ERROR]', e);
    }
}

//ANTI MENÇÃO 
if (isGroup && isBotGroupAdmins &&!isGroupAdmins &&!SoDono &&!info.key.fromMe) {
  const isPayment = info.message?.paymentMessage || info.message?.invoiceMessage || info.message?.orderMessage
  const isTextWithMentions = menc_jid2 && menc_jid2.length > 0

  if (isPayment) {
    await shizuku.sendMessage(from, {
      text: `🚨 *O Usuário: [ @${sender.split("@")[0]} ] foi banido por enviar mensagem payment/invoice sem permissão.*`,
      mentions: [sender]
    })

    await shizuku.groupParticipantsUpdate(from, [sender], "remove")
    return 
  }

  if (isTextWithMentions && menc_jid2.length >= groupMembers.length - 1) {
    await shizuku.sendMessage(from, {
      text: `🚨 *O Usuário: [ @${sender.split('@')[0]} ] foi banido por marcar o grupo sem permissão.*`,
      mentions: [sender]
    })

    setTimeout(() => {
      shizuku.sendMessage(from, {
        delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender }
      })
    }, 1200)

    await shizuku.groupParticipantsUpdate(from, [sender], "remove")
  }
}

//ANTI - STATUS
if (info.message?.groupStatusMentionMessage && isGroup && isAntiMencionar && !SoDono && !isGroupAdmins && isBotGroupAdmins) {
    try {
        await shizuku.sendMessage(from, { 
            text: `🚫 @${sender.split("@")[0]} foi removido por marcar o grupo no Status (Anti-Status).`, 
            mentions: [sender] 
        });
        setTimeout(() => {
        shizuku.sendMessage(from, { delete: info.key });
        }, 1200);
        await shizuku.groupParticipantsUpdate(from, [sender], "remove");
    } catch (e) {
        console.log("Erro ao processar anti-status:", e);
    }
}

if (info.message?.groupStatusMessageV2 && isGroup && !SoDono && !isGroupAdmins && isBotGroupAdmins) {
    try {
        await shizuku.sendMessage(from, { 
            text: `🚫 @${sender.split("@")[0]} foi removido por postar status no grupo.`, 
            mentions: [sender] 
        });
        setTimeout(() => {
        shizuku.sendMessage(from, { delete: info.key });
        }, 1200);
        await shizuku.groupParticipantsUpdate(from, [sender], "remove");
    } catch (e) {
        console.log("Erro ao processar anti-status:", e);
    }
}

if (isGroup && fs.existsSync(`./database/func/afk/afk-@${nmrdn.split("@")[0]}.json`)) {
    if (budy.includes(`@${nmrdn.split('@')[0]}`)) {
        const tabelin = JSON.parse(fs.readFileSync(`./database/func/afk/afk-@${nmrdn.split("@")[0]}.json`));
        shizuku.sendMessage(from, { text: mess.absenceRecordOwner(NickDono, tabelin) }, { quoted: selojp });
    }
}

if (isGroup && dataGp[0].ausentes?.length > 0 && menc_jid2?.length > 0) {
    for (let jid of menc_jid2) {
        const usuarioAusente = dataGp[0].ausentes.find(a => a.id === jid);
        if (usuarioAusente) {
            const dadosParaEnvio = {
                ...usuarioAusente,
                isVip: isVIP(jid) ? true : false 
            };
            mention(exports.absenceRecordAdmin(dadosParaEnvio));
        }
    }
}

const aguardandoNick = cacheNick.get(`${sender}_${from}`);
if (aguardandoNick && !isNaN(budy)) {
    const indice = parseInt(budy) - 1;
    if (indice >= 0 && indice < aguardandoNick.nicks.length) {
        const nickEscolhido = aguardandoNick.nicks[indice].result;
        await shizuku.sendMessage(from, { text: nickEscolhido }, { quoted: info });
        clearTimeout(aguardandoNick.timeout);
        cacheNick.delete(`${sender}_${from}`);
        return; 
    }
}

const sendAudio = async (audio, ...args) => {
    try {
        if (Buffer.isBuffer(audio)) {
            return conn.sendMessage(from, { 
                audio: audio, 
                mimetype: "audio/mpeg", 
                ptt: false, 
                fileName: args[0] + ".mp3"
            }, { quoted });
        } else {
           return conn.sendMessage(from, { 
                audio: { url: audio }, 
                mimetype: "audio/mpeg", 
                ptt: false, 
                fileName: args[0] + ".mp3" || "áudio.mp3" 
            }, { quoted });
        }
    } catch (error) {
        reply("Erro ao enviar áudio:", error);
    }
}

const sendImg = async (img, ...args) => {
    try {
        if (Buffer.isBuffer(img)) {
            return conn.sendMessage(from, { 
                image: img,
                caption: args[0]
            }, { quoted });
        } else {
           return conn.sendMessage(from, { 
                image: { url: img }, 
                caption: args[0] || "" 
            }, { quoted });
        }
    } catch (error) {
        reply("Erro ao enviar Imagem:", error);
    }
}

const sendVideo = async (video, ...args) => {
    try {
        if (Buffer.isBuffer(video)) {
            return conn.sendMessage(from, { 
                video: video,
                mimetype: "video/mp4", 
                caption: args[0]
            }, { quoted });
        } else {
           return conn.sendMessage(from, { 
                video: { url: video }, 
                mimetype: "video/mp4", 
                caption: args[0] || "" 
            }, { quoted });
        }
    } catch (error) {
        reply("Erro ao enviar vídeo:", error);
    }
}

const sendSticker = async (sticker) => {
    const payload = Buffer.isBuffer(sticker) ? { sticker } : { sticker: { url: sticker } };
    return conn.sendMessage(from, payload, { quoted }).catch(e => {
        console.error("Erro ao enviar figurinha:", e);
        reply("Erro ao enviar a figurinha.");
    });
};

const sendEnquete = async (pergunta, totalVotos = 1, ...opcoes) => {
  try {
    if (!pergunta) {
        return reply("Por favor, adicione a pergunta para criar a enquete.");
    } 
    
    if (!opcoes || opcoes.length < 2) {
        return reply("Por favor, adicione pelo menos 2 opções para a enquete.");
    }

    return await conn.sendMessage(from, { 
        poll: { 
            name: pergunta, 
            values: opcoes, 
            selectableCount: totalVotos 
        } 
    });
   } catch (err) {
   reply("Erro ao enviar enquete...:", e.message)
  console.log(e)
  }
}

if(!isPremium && !SoDono && !info.key.fromMe && isCmdPremium.includes(command)) return reply(enviar.msg.premium)
//========================================\\

//BAN GRUPO & BOT OFF
if(isGroup && isCmd && isBanchat && !SoDono) return
if(isGroup && isCmd && So_Adm && !SoDono && !isGroupAdmins) return
if(isBotoff && !SoDono) return 

//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isVisuU2 = type == 'viewOnceMessageV2'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2")
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if(isImage) typeMessage = "Image"
else if(isVideo) typeMessage = "Video"
else if(isAudio) typeMessage = "Audio"
else if(isSticker) typeMessage = "Sticker"
else if(isContact) typeMessage = "Contact"
else if(isLocation) typeMessage = "Location"
else if(isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
            
//////BLOCK CMD///////
//(CREDITOS AO KAUAN GAY)\\
if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !SoDono && !isnit && getComandoBlock(from).includes(command))return reply('Comando bloqueado.')

////FIMMMMMMMMM/////

const C = {
    preto: '#0D0D0D', 
    cinzaEsc: '#2A2A2A', 
    cinza: '#6E6E6E', 
    cinzaCl: '#A3A3A3', 
    branco: '#E8E8E8', 
    osso: '#F5F5F5', 
    title: (t) => chalk.hex('#F5F5F5').bold(t),
    label: (t) => chalk.hex('#A3A3A3')(t),
    value: (t) => chalk.hex('#E8E8E8')(t),
    dim: (t) => chalk.hex('#6E6E6E')(t),
    destaque: (t) => chalk.hex('#F5F5F5').bold(t),
    alerta: (t) => chalk.hex('#A3A3A3').bold(t) 
}

const W = 41
function bordaSuperior(titulo) {
    const decor = '✦ ✧ ✦'
    const espacos = W - titulo.length - decor.length - 2
    const esquerda = Math.floor(espacos / 2)
    const direita = espacos - esquerda
    return C.dim('┌' + '─'.repeat(esquerda) + ' ') + C.title(titulo) + C.dim(' ' + '─'.repeat(direita) + '┐')
}

function bordaInferior() {
    return C.dim('└' + '─'.repeat(W) + '┘')
}

function separador(texto = '') {
    if (!texto) return C.dim('├' + '─'.repeat(W) + '┤')
    const decor = '✧'
    const espacos = W - texto.length - 4
    const esq = Math.floor(espacos / 2)
    const dir = espacos - esq
    return C.dim('├' + '─'.repeat(esq) + ' ' + decor + ' ') + C.label(texto) + C.dim(' ' + decor + ' ' + '─'.repeat(dir) + '┤')
}

function linha(label, value, icone = '▪') {
    const L = C.label(label.padEnd(8, ' '))
    let V = C.value(value)
    const maxLen = W - 14
    const valorLimpo = stripAnsi(value)
    if (valorLimpo?.length > maxLen) {
        V = C.value(value?.slice(0, maxLen - 1) + '…')
    }
    const tamanhoLinha = stripAnsi(L + ' › ' + V)?.length 
    return C.dim('│ ') + C.dim(icone) + ' ' + L + C.dim('› ') + V + C.dim(' '.repeat(Math.max(0, W - tamanhoLinha - 4)) + '│')
}

function linhaTexto(texto) {
    const maxLen = W - 4
    const linhas = []
    const palavras = texto?.split(' ')
    let atual = ''
    for (const palavra of palavras) {
        if (stripAnsi(atual + palavra)?.length > maxLen) {
            linhas.push(atual.trim())
            atual = palavra + ' '
        } else {
            atual += palavra + ' '
        }
    }
    if (atual) linhas.push(atual.trim())
    return linhas.map(l => {
        const tam = stripAnsi(l)?.length 
        return C.dim('│ ') + C.value('“' + l + '”') + C.dim(' '.repeat(Math.max(0, W - tam - 2)) + '│')
    })
}

const getTipo = (type) => {
    const tipos = {
        'audioMessage': 'Áudio',
        'stickerMessage': 'Sticker',
        'imageMessage': 'Imagem',
        'videoMessage': 'Vídeo',
        'documentMessage': 'Documento',
        'contactMessage': 'Contato',
        'locationMessage': 'Localização',
        'pollCreationMessage': 'Enquete',
        'conversation': 'Texto',
        'extendedTextMessage': 'Texto'
    }
    return tipos[type] || 'Mensagem'
}

if (isConsole && !isCmd && !isGroup &&!info.key.fromMe) {
    const logs = [
        bordaSuperior('MENSAGEM PRIVADA'),
        linha('Usuário', pushname, '✦'),
        linha('Número', sender.split("@")[0], '☎'),
        linha('Tipo', getTipo(type), '✉'),
        separador('Conteúdo'),
       ...linhaTexto(budy.slice(0, 35) || '(mídia)'),
        separador(),
        linha('Hora', time2, '⏱'),
        bordaInferior()
    ]
    console.log(logs.join('\n'))
}

if (isConsole && !isGroup && isCmd) {
    const logs = [
        bordaSuperior('COMANDO PV'),
        linha('Comando', command, '⚡'),
        linha('Usuário', pushname, '✦'),
        linha('Número', sender.split("@")[0], '☎'),
        linha('Data', date, '📅'),
        linha('Hora', time2, '⏱'),
        bordaInferior()
    ]
    console.log(logs.join('\n'))
}

if (isConsole && isCmd && isGroup) {
    const logs = [
        bordaSuperior('COMANDO GRUPO'),
        linha('Comando', command, '⚡'),
        linha('Usuário', pushname, '✦'),
        linha('Número', sender.split("@")[0], '☎'),
        linha('Grupo', groupName.slice(0, 20), '⬡'),
        linha('Hora', time2, '⏱'),
        bordaInferior()
    ]
    console.log(logs.join('\n'))
}

if (isConsole && !isCmd && isGroup &&!info.key.fromMe) {
    const logs = [
        bordaSuperior('MENSAGEM GRUPO'),
        linha('Usuário', pushname, '✦'),
        linha('Número', sender.split("@")[0], '☎'),
        linha('Grupo', groupName.slice(0, 20), '⬡'),
        linha('Tipo', getTipo(type), '✉'),
        separador('Conteúdo'),
       ...linhaTexto(budy.slice(0, 35) || '(mídia)'),
        separador(),
        linha('Hora', time2, '⏱'),
        bordaInferior()
    ]
    console.log(logs.join('\n'))
}

if (isConsole && isGroup && info.message?.reactionMessage?.text) {
    const logs = [
        bordaSuperior('REAÇÃO'),
        linha('Usuário', pushname, '✦'),
        linha('Número', sender.split("@")[0], '☎'),
        linha('Grupo', groupName.slice(0, 20), '⬡'),
        linha('Emoji', info.message.reactionMessage.text, '⊙'),
        linha('Hora', time2, '⏱'),
        bordaInferior()
    ]
    console.log(logs.join('\n'))
}

if (isConsole && isGroup && type === 'protocolMessage') {
    const logs = [
        bordaSuperior('EVENTO'),
        linha('Usuário', pushname, '✦'),
        linha('Ação', C.alerta('Deletada/Editada'), '!'),
        linha('Grupo', groupName.slice(0, 20), '⬡'),
        linha('Hora', time2, '⏱'),
        bordaInferior()
    ]
    console.log(logs.join('\n'))
}

///// FIMMMMMMMMMMMMM /////

if(isVisualizar) {
await shizuku.readMessages([info.key]);
} else {
if(from == "status@broadcast") return;
}

if (isStatus && isVisualizar) {
let statusContent = '';
if (info.message.conversation) {
statusContent = info.message.conversation; 
} else if (info.message.imageMessage) {
statusContent = '[Imagem]'; 
} else if (info.message.videoMessage) {
statusContent = '[Vídeo]'; 
}

await conn.sendMessage(
from,
{ react: { key: info.key, text: '🩶' } },
{ statusJidList: [info.key.remoteJidAlt, botNumber] }
 );
}

// ========= || Jogo da Velha || ======== \\

async function joguinhodavelha() {
if(joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if(fs.existsSync(`./armor/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if(budy == "Cex") return reply("why");
if(
budy.toLowerCase() == "s" ||
budy.toLowerCase() == "sim" ||
budy.toLowerCase() == "ok"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status)
return reply(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
mention(chatAccept);
}
} else if(
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status)
return reply(`O jogo já começou!`);
DLT_FL(`./armor/tictactoe/db/${from}.json`);
mention(`@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`)
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}
}
}

if(arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if(!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
if(
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if(moving.isWin) {
if(moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo da velha termina empatado 😐
`;
mention(chatEqual);
DLT_FL(`./armor/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*

O jogo da velha foi vencido pelo usuário: @${winnerJID}..`;

mention(chatWon);

setTimeout( () => {
if(fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
DLT_FL("./armor/tictactoe/db/" + from + ".json");
reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
} else {
console.log(colors.red(time, "red"), colors.magenta("[ EXPIRADO ]"), colors.red('Jogo da velha espirado..'));
}
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}, 300000) //5 minutos
mention(`Parabéns @${winnerJID} você ganhou o jogo da velha... 🥳\nParabéns aos ambos jogadores, vocês foram bem, perder não é o fim, perder faz parte da vida.. Não desista!`)   
DLT_FL(`./armor/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
const chatMove = `*『 🎮 Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸ 🕹️ 』*\n-\n❌ : @${moving.X}\n⭕ : @${moving.O}\n-\nAgora é a vez do jogador: @${moving.turn == "X" ? moving.X : moving.O}\n-\n${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}\n${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}\n${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}`;
mention(chatMove);
}
} 
} 
}

joguinhodavelha()
// ==========[ NAMORO ]==========\\
// --- SISTEMA DE ACEITAÇÃO (S / SIM) ---
if (['s', 'sim', 'aceito', 'aceitar', 'S', 'Sim', 'SIM', 'Aceitar', 'Aceito', 'ACEITO', 'ACEITAR'].includes(budy)) {
    const res = rel.aceitarPedido(sender, from);
    if (res.status) {
        let msgSucesso = "";
        if (res.tipo === 'namoro') {
            msgSucesso = Mess.MsgNamorou(res, sender);
        } 
        else if (res.tipo === 'casar') {
            msgSucesso = Mess.MsgNamorou(res, sender)
        } 
        else if (res.tipo === 'adotar') {
            msgSucesso = Mess.MsgAdotou(res, sender);
        }
        shizuku.sendMessage(from, { text: msgSucesso, mentions: [res.autor, sender] });
    }
}

// --- SISTEMA DE RECUSA (N / NÃO) ---
if (['n', 'nao', 'não', 'recusar', 'Recusar', 'Não', 'NÃO', 'NAO', 'N'].includes(budy)) {
    const res = rel.recusarPedido(sender, from);
    if (res.status) {
        let msgRecusa = `╭─⭑💔 *PEDIDO RECUSADO* ⭑─╮\n│\n`;
        msgRecusa += `│ @${sender.split('@')[0]} decidiu não aceitar \n`;
        msgRecusa += `│ o pedido de *${res.tipo}* de @${res.autor.split('@')[0]}.\n│\n`;
        msgRecusa += `│ ✨ A fila anda, aventureiro!\n`;
        msgRecusa += `╰───⭑ Shizuku Bot ⭑───╯`;
        shizuku.sendMessage(from, { text: msgRecusa, mentions: [res.autor, sender] });
    }
}

function contar(frase, letraProcurada) { 
var total = 0; [...frase].forEach(letra => {
if(letra === letraProcurada) total++; 
}); 
return total; 
}

const groupIdscount = [];
for(let obj of countMessage) {
groupIdscount.push(obj.groupId);
}

// MUTAR USUÁRIO 
const GroupsMutedActived = []
for(let obj of muted) {
    GroupsMutedActived.push(obj.jid)
}
const isMuted = (isGroup && GroupsMutedActived.indexOf(from) >= 0) ? true : false
const NumbersMuted = isMuted ? muted[GroupsMutedActived.indexOf(from)].numbers : []
if(isMuted && NumbersMuted.indexOf(sender) >= 0){
setTimeout(async () => {
    shizuku.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1000)
return
}

//========(CONTADOR-DE-MENSAGENS)========\\

const numbersIds = []
if (isGroup) {
if (!Array.isArray(countMessage)) countMessage = [];
    const agora = Date.now();
    const indiceGrupo = countMessage.findIndex(g => g.groupId === from);
    const isQuoted = type === 'extendedTextMessage';
    const msgType = isQuoted ? info.message.extendedTextMessage.contextInfo.quotedMessage : type;
    
    const stats = {
        isSticker: type === 'stickerMessage',
        isAudio: type === 'audioMessage',
        isVideo: type === 'videoMessage',
        isImage: type === 'imageMessage'
    };

    if (indiceGrupo >= 0) {
        const indiceUser = countMessage[indiceGrupo].numbers.findIndex(u => u.id === sender);
        
        if (indiceUser >= 0) {
            let user = countMessage[indiceGrupo].numbers[indiceUser];
            user.messages += isCmd ? 0 : 1;
            user.cmd_messages += isCmd ? 1 : 0;
            user.lastSeen = agora; 
            user.aparelho = adivinha;

            if (stats.isSticker) user.figus = (user.figus || 0) + 1;
            if (stats.isAudio) user.audios = (user.audios || 0) + 1;
            if (stats.isVideo) user.videos = (user.videos || 0) + 1;
            if (stats.isImage) user.imagens = (user.imagens || 0) + 1;

        } else {
            countMessage[indiceGrupo].numbers.push({
                id: sender,
                messages: isCmd ? 0 : 1,
                cmd_messages: isCmd ? 1 : 0,
                figus: stats.isSticker ? 1 : 0,
                audios: stats.isAudio ? 1 : 0,
                videos: stats.isVideo ? 1 : 0,
                imagens: stats.isImage ? 1 : 0,
                aparelho: adivinha,
                lastSeen: agora
            });
        }
    } else {
        countMessage.push({
            groupId: from,
            numbers: [{
                id: sender,
                messages: 1,
                cmd_messages: isCmd ? 1 : 0,
                figus: stats.isSticker ? 1 : 0,
                audios: stats.isAudio ? 1 : 0,
                videos: stats.isVideo ? 1 : 0,
                imagens: stats.isImage ? 1 : 0,
                aparelho: adivinha,
                lastSeen: agora
            }]
        });
    }
fs.writeFileSync('./shizuku-config/media/countmsg.json', JSON.stringify(countMessage, null, 2));
}

if(budy.startsWith('>')){
try {
if(info.key.fromMe) return 
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return
console.log('[', colors.cyan('EVAL'),']', colors.yellow(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss')), colors.green(budy))
return shizuku.sendMessage(from, {text: JSON.stringify(eval(budy.slice(2)),null,'\t')}).catch(e => {
return reply(String(e))
})
} catch (e){
return reply(String(e))
}
}

if(budy.startsWith('(>')){
try {
if(info.key.fromMe) return   
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if(sat == undefined){
bang = util.format(sul)
}
return shizuku.sendMessage(from, {text: bang}, {quoted: selojp})
}

shizuku.sendMessage(from, {text: util.format(eval(`;(async () => { ${konsol} })()`))}).catch(e => { 
return reply(String(e))
})
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, colors.green(">"), 'from', colors.green(sender.split('@')[0]), 'args :', colors.green(args.length))
} catch(e) {
return reply(String(e))
console.log(e)
}
}

//EXECUÇÕES EVAL
if(body.startsWith('$')) {
if(info.key.fromMe) return 
if(!SoDono && !isnit) return 
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if(stdout) {
reply(stdout)
}
})
}//FIM

//======================================\\

//======(ANTI-IMAGEM)========\\
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return shizuku.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: selojp})
if(dataGp[0].legenda_imagem != "0") {
shizuku.sendMessage(from, {text: dataGp[0].legenda_imagem}, {quoted: selojp})  
}
if(IS_DELETE) {
setTimeout(() => {
shizuku.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
shizuku.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-STICKER)========\\
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return shizuku.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: selojp})
shizuku.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: selojp})
if(IS_DELETE) {
setTimeout(() => {
shizuku.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
shizuku.groupParticipantsUpdate(from, [sender], 'remove')
}

//ANTI DOC
if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return shizuku.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: selojp})
if(dataGp[0].legenda_documento != "0") {
shizuku.sendMessage(from, {text: dataGp[0].legenda_documento}, {quoted: selojp}) 
}
if(IS_DELETE) {
setTimeout(() => {
shizuku.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
shizuku.groupParticipantsUpdate(from, [sender], 'remove')
}


//FIM
let isTrueFalse = Array('tiktok', 'facebook','instagram','twitter','ytmp3','ytmp4','play', 'playmix', 'play2', 'play3', 'playvid', 'playvid2').some(item => item === command)

//ANTI LINK!!
let textoParaVerificar = budy || "";

if (info.message?.pollCreationMessageV3) {
    textoParaVerificar = info.message.pollCreationMessageV3.name;
} else if (type === 'protocolMessage' && info.message?.protocolMessage?.editedMessage) {
    const editada = info.message.protocolMessage.editedMessage;
    textoParaVerificar = editada.conversation || editada.extendedTextMessage?.text || "";
}
const containsLink = isUrl(textoParaVerificar);
if (containsLink && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe && !isParceiro) {
    if (textoParaVerificar.includes("chat.whatsapp.com")) {
        const link_dgp = await shizuku.groupInviteCode(from);
        if (textoParaVerificar.includes(link_dgp)) return reply("Link do nosso grupo, Não irei remover.");
    }
    if (isCmd && isTrueFalse) return;
    await shizuku.sendMessage(from, { 
        delete: { 
            remoteJid: from, 
            fromMe: false, 
            id: info.key.id, 
            participant: sender 
        } 
    });
    await shizuku.groupSettingUpdate(from, 'announcement');
    setTimeout(async () => {
        await shizuku.groupSettingUpdate(from, 'not_announcement');
        if (JSON.stringify(groupMembers).includes(sender)) {
            await shizuku.groupParticipantsUpdate(from, [sender], 'remove');
            reply(`🚫 @${sender.split('@')[0]} banido por divulgar link em ${info.message?.pollCreationMessageV3 ? 'Enquete' : 'Mensagem'}.`);
        }
    }, 1200);
}

let checkLink = budy || ""; 
if (info.message?.pollCreationMessageV3) {
    checkLink = info.message.pollCreationMessageV3.name;
} else if (type === 'protocolMessage' && info.message?.protocolMessage?.editedMessage) {
    const edit = info.message.protocolMessage.editedMessage;
    checkLink = edit.conversation || edit.extendedTextMessage?.text || "";
}

if (isAntilinkgp && isGroup && isBotGroupAdmins && !isGroupAdmins && !info.key.fromMe && !isParceiro) {
    if (checkLink.includes("chat.whatsapp.com/")) {
        const codeEnviado = checkLink.split('chat.whatsapp.com/')[1].split(' ')[0];
        const link_dgp = await shizuku.groupInviteCode(from);
        if (codeEnviado === link_dgp) return reply("Link do nosso grupo, Não irei remover.");
        setTimeout(async () => {
            await shizuku.sendMessage(from, { 
                delete: { 
                    remoteJid: from, 
                    fromMe: false, 
                    id: info.key.id, 
                    participant: sender 
                } 
            });
        }, 300);
        if (groupMembers.map(m => m.phoneNumber).includes(sender)) {
            await shizuku.groupParticipantsUpdate(from, [sender], 'remove');
            shizuku.sendMessage(from, { 
                text: `🚫 @${sender.split('@')[0]} banido por divulgar link de outro grupo.`,
                mentions: [sender]
            });
        }
    }
}

// ANTI NOTAS FAKES ======================>

if(isAntiNotas && budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.message?.reactionMessage?.text && budy2.length > 20) {
let verificar = budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if(verificar && budy.length < 100) return  
if(IS_DELETE) {
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
}
//======(ANTI-VIDEO)========\\

if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return shizuku.sendMessage(from,{text: mess.messageProhibitedDetAdmin()}, {quoted: selojp})
if(dataGp[0].legenda_video == "0") {
shizuku.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: selojp})
} else {
shizuku.sendMessage(from, {text: dataGp[0].legenda_video}, {quoted: selojp})  
}
if(IS_DELETE) {
setTimeout(() => {
shizuku.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
shizuku.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return shizuku.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: selojp})
shizuku.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: selojp})
if(IS_DELETE) {
setTimeout(() => {
shizuku.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
shizuku.groupParticipantsUpdate(from, [sender], 'remove')
}

//========(ANTI-PV-QUE-BLOQUEIA)======\\

if(isAntiPv) {
if(!isGroup && !SoDono && !isnit && !isPremium){ 
await sleep(2500)
msgpvblock = `./database/func/pv-msg_block-${sender}.json`
fs.writeFileSync(msgpvblock, JSON.stringify(mess.antiPrivateBlock(), null, 2))
msgmsglbl = JSON.parse(fs.readFileSync(msgpvblock))
reply(msgmsglbl)
DLT_FL(msgpvblock)
setTimeout(async () => {
shizuku.updateBlockStatus(sender, 'block')
}, 2000)
return
}
}

//======================================\\

{var hora_ = moment.tz('America/Sao_Paulo').format('HH:mm');
var hora_2 = moment.tz('America/Sao_Paulo').format('mm');
for (i of black_) {
if(i.hora == hora_) {var blu_dc = true} else {var blu_dc = false}
}
if(blu_dc == true) {
for ( i of black_) {
if(i.hora == hora_) var ik = i}
for ( i of ik?.PUXAR) {
if(i.avisou == true) return
if(i.length == 0) return
shizuku.sendMessage(i.idgp, {text: i.msg})
i.avisou = true 
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
}}; for ( i of black_) {
if(hora_2 >= i.hora.split(":")[1]+parseInt(1)) {
var ik2 = i
var ik_r = true} else {var ik_r = false}
}; if(ik_r == true) { 
for ( i of ik2.PUXAR) {
if(i.avisou == true) {
i.avisou = false
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))}}}}

//=========(ANTIPV QUE IGNORA)==========\\

if(!isGroup && !isPremium && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe && isAntiPv2) return //reply(mess.antiPrivateNoBlock())

//======================================\\
const obterPatente = (qnt) => {
    const niveis = [
        { limite: 30000, nome: "Coronel V", level: 42 },
        { limite: 28000, nome: "Coronel IV", level: 41 },
        { limite: 25000, nome: "Coronel III", level: 40 },
        { limite: 20000, nome: "Coronel II", level: 39 },
        { limite: 17000, nome: "Coronel I", level: 38 },
        { limite: 15000, nome: "Tenente C V", level: 37 },
        { limite: 13000, nome: "Tenente C IV", level: 36 },
        { limite: 12000, nome: "Tenente C III", level: 35 },
        { limite: 11000, nome: "Tenente C II", level: 34 },
        { limite: 10000, nome: "Tenente C II", level: 33 },
        { limite: 9000, nome: "Tenente C I", level: 32 },
        { limite: 8000, nome: "Major V", level: 31 },
        { limite: 6500, nome: "Major IV", level: 30 },
        { limite: 6000, nome: "Major III", level: 29 },
        { limite: 5500, nome: "Major II", level: 28 },
        { limite: 5000, nome: "Major I", level: 27 },
        { limite: 4000, nome: "Capitão V", level: 26 },
        { limite: 3800, nome: "Capitão IV", level: 25 },
        { limite: 3400, nome: "Capitão III", level: 24 },
        { limite: 3200, nome: "Capitão II", level: 23 },
        { limite: 3000, nome: "Capitão I", level: 22 },
        { limite: 2000, nome: "Tenente I", level: 16 },
        { limite: 1000, nome: "Sargento VII", level: 11 },
        { limite: 500, nome: "Sargento III", level: 7 },
        { limite: 200, nome: "Sargento", level: 4 },
        { limite: 100, nome: "Soldado", level: 2 },
        { limite: 50, nome: "Recruta", level: 1 },
        { limite: 0, nome: "Aspirante", level: 0 }
    ];
    return niveis.find(n => qnt >= n.limite) || niveis[niveis.length - 1];
};

if (isGroup) {
    const idGrupoCount = countMessage.findIndex(i => i.groupId === from);
    let qnt_msg = 0;

    if (idGrupoCount !== -1) {
        const userIndex = countMessage[idGrupoCount].numbers.findIndex(i => i.id === sender);
        if (userIndex !== -1) {
            qnt_msg = countMessage[idGrupoCount].numbers[userIndex].messages;
        }
    }
    const infoPatente = obterPatente(qnt_msg);
    const patente = infoPatente.nome;
    const level_up = infoPatente.level;
    const milestones = [20, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000, 30000];
    if (isLevelingOn && type !== "stickerMessage" && milestones.includes(qnt_msg)) {
        shizuku.sendMessage(from, { 
            text: mess.updatePatente(sender, qnt_msg, patente, level_up), 
            mentions: [sender] 
        });
   }
    let groupPatIndex = patentes.findIndex(p => p.grupoID === from);
    if (groupPatIndex === -1) {
        patentes.push({ grupoID: from, usus: [] });
        groupPatIndex = patentes.length - 1;
    }
    let userPatIndex = patentes[groupPatIndex].usus.findIndex(u => u.id === sender);
    if (userPatIndex === -1) {
        patentes[groupPatIndex].usus.push({
            id: sender,
            level_usu: level_up,
            patente_usu: patente
        });
        fs.writeFileSync("./shizuku-config/media/patentes.json", JSON.stringify(patentes, null, 2));
    } else {
        let dadosUser = patentes[groupPatIndex].usus[userPatIndex];
        if (dadosUser.level_usu !== level_up || dadosUser.patente_usu !== patente) {
            dadosUser.level_usu = level_up;
            dadosUser.patente_usu = patente;
            fs.writeFileSync("./shizuku-config/media/patentes.json", JSON.stringify(patentes, null, 2));
        }
    }
}

let ultimaExecucao = {};

if (global.intervalHorarios) clearInterval(global.intervalHorarios);
global.intervalHorarios = setInterval(async () => {
    const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss');

    if (fs.existsSync("./datab/grupos/horarios")) {
        try {
            horarios = JSON.parse(fs.readFileSync("./datab/grupos/horarios"));
        } catch (e) {
            console.error("Erro ao recarregar horários:", e);
            horarios = {};
        }
    }

    for (const from in horarios) {
        const horario = horarios[from];
        if (!horario) continue;

        try {
            // FECHAMENTO
            if (horario.fechamento && time2 === horario.fechamento) {
                if (ultimaExecucao[from + '_fechamento'] !== horario.fechamento) {
                    await shizuku.groupSettingUpdate(from, 'announcement');
                    await shizuku.sendMessage(from, { text: `> *_🔒 Shizuku-Bot bloqueou o grupo! 🛡️_*\n\n> *_A partir de agora, apenas "administradores" podem enviar mensagens._*\n\n> *_Esta medida foi aplicada para manter a ordem e a organização._*`});
                    ultimaExecucao[from + '_fechamento'] = horario.fechamento;
                    console.log(`Grupo ${from} fechado às ${horario.fechamento}`);
                }
            }
            
            // ABERTURA
            if (horario.abertura && time2 === horario.abertura) {
                if (ultimaExecucao[from + '_abertura'] !== horario.abertura) {
                    await shizuku.groupSettingUpdate(from, 'not_announcement');
                    await shizuku.sendMessage(from, { text: `> *_🔓 Grupo liberado por ordem da Shizuku-Bot às ${horario.abertura}!_*\n\n> *_O Grupo: ${groupName} Esta liberado para todos os membros._*` });
                    ultimaExecucao[from + '_abertura'] = horario.abertura;
                    console.log(`Grupo ${from} aberto às ${horario.abertura}`);
                }
            }
        } catch (e) {
            console.error(`Erro ao atualizar grupo ${from}:`, e);
        }
    }
}, 1000); // Intervalo de 1 segundo


const msg = msgCmd(prefix, groupName, command);

//////RENAME AQUI
const { Sticker } = require("./datab/sticker/rename/sticker");

async function renameContextSticker(pack, autor, txt = ``, sttk) {
	try {
    const getfile = await getFileBuffer(sttk.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker');
    const _sticker = new Sticker();
    _sticker.addFile(getfile);
    _sticker.options.metadata = {
      pack: pack,
      author: autor,
      emojis: ['🤠', '🥶', '😻']
    };
const resultadoSt = await _sticker.start();
const stickerBuffer = Buffer.isBuffer(resultadoSt)
  ? resultadoSt
  : fs.existsSync(resultadoSt[0]?.value || resultadoSt?.path || resultadoSt)
  ? fs.readFileSync(resultadoSt[0]?.value || resultadoSt?.path || resultadoSt)
  : resultadoSt; 
    await shizuku.sendMessage(from, {
      sticker: stickerBuffer
    }, { quoted: selo });
    await fs.unlinkSync(resultadoSt[0].value);
  } catch (e) {
    console.log(e);
  }
}
//buceta
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

//FUNÇÃO QUE ENVIA OS MENUS
async function sendMenu(conn, from, texto, selo) {
    const path = require('path');
    const menuPath = './shizuku-config/dono/menu/media/';
    if (!fs.existsSync(menuPath)) {
        fs.mkdirSync(menuPath, { recursive: true });
    }
    const arquivos = fs.readdirSync(menuPath);
    const video = arquivos.find(file => file.endsWith('.mp4') || file.endsWith('.mov'));
    const imagem = arquivos.find(file => file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png'));
    try {
        if (video) {
            return await conn.sendMessage(from, {
                video: fs.readFileSync(path.join(menuPath, video)),
                 gifPlayback: true,
                  caption: texto,
                   mentions: [ sender ]
            }, { quoted: selo });
        } else if (imagem) {
            return await conn.sendMessage(from, {
                image: fs.readFileSync(path.join(menuPath, imagem)),
                  caption: texto,
                   mentions: [ sender ]
            }, { quoted: selo });
        } else {
            return await conn.sendMessage(from, {
                text: texto, 
                 mentions: [ sender ]
            }, { quoted: selo });
        }
    } catch (error) {
        console.error("Erro ao enviar menu dinâmico:", error);
        await conn.sendMessage(from, { text: texto }, { quoted: selo });
    }
}

////////////////////////++++++++++++++++++++++++++++++\\\\\\\\\\
//FUNÇÃO DO TAKE AQUI!!
const path5 = './database/take.json';
if (!fs.existsSync(path5)) fs.writeFileSync(path5, JSON.stringify({}, null, 2))
let takeDB = JSON.parse(fs.readFileSync(path5))
function saveTake() {
    fs.writeFileSync(path5, JSON.stringify(takeDB, null, 2))
}

const reagirMenu = async () => await shizuku.sendMessage(from, { react: { text: `${reation}`, key: info.key }});

if (isGroup && !SoDono && !info.key.fromMe) {
    const autorizado = await aluguel.verificar(shizuku, from, OwnerNumber);
    if (!autorizado) {
       if (isCmd) {
         await shizuku.sendMessage(from, { text: await Mess.Aluguel(OwnerNumber, from)});
        }
        return; 
    }
}

if (isCmd && !SoDono) {
    const estaEmCastigo = await antiflood.verificarFlood(shizuku, from, sender);
    if (estaEmCastigo) return; 
}

// --- SISTEMA AUTOMÁTICO RPG (REGISTRO & DIÁRIO) ---
if (isGroup && IsModoRpg) {
    const idUser = sender;
    const dbRPG = rpg.DB();
    const hoje = new Date().toLocaleDateString('pt-BR');
    if (!dbRPG.users[idUser]) {
        rpg.registrar(idUser, pushname);
        const bonusBoasVindas = 100;
        rpg.addGold(idUser, bonusBoasVindas);

        let msgBoasVindas = `✨ *BEM-VINDO AO RPG* ✨\n\n`;
        msgBoasVindas += `👋 Olá @${idUser.split('@')[0]}, você foi registrado!\n`;
        msgBoasVindas += `💰 Ganhou *${bonusBoasVindas} Gold* de bônus inicial.`;
        shizuku.sendMessage(from, { text: msgBoasVindas, mentions: [idUser] });
    }
    const usuario = dbRPG.users[idUser];
    if (usuario.last_daily_msg !== hoje) {
        const bonusDiario = 30;
        rpg.addGold(idUser, bonusDiario);
        usuario.last_daily_msg = hoje;
        rpg.SAVE(dbRPG);
        let msgDiaria = `🌟 *BÔNUS DIÁRIO* 🌟\n\n`;
        msgDiaria += `${tempo}, @${idUser.split('@')[0]}! 🥂\n`;
        msgDiaria += `Oba! Você ganhou *${bonusDiario} Gold* por sua primeira mensagem de hoje.\n`;
        msgDiaria += `📊 Total atual: *${usuario.gold} Gold*`;
        shizuku.sendMessage(from, { text: msgDiaria, mentions: [idUser] });
    }
}

//Obter informações de canal do whatsapp 
async function obterInfoCanal(link) {
    try {
        const code = link.split('channel/')[1]?.split('/')[0];
        if (!code) return { status: false, msg: "Link inválido!" };
        const metadata = await shizuku.newsletterMetadata("invite", code);
        if (!metadata) return { status: false, msg: "Canal não encontrado." };
        return {
            status: true,
            id: metadata.id, 
            nome: metadata.thread_metadata.name.text,
            descricao: metadata.thread_metadata.description.text,
            seguidores: metadata.thread_metadata.subscribers_count,
            foto: metadata.thread_metadata.preview.direct_path,
            criadoEm: metadata.thread_metadata.creation_time,
            verificado: metadata.thread_metadata.verification === 'VERIFIED'
        };
    } catch (e) {
        console.error("Erro ao buscar canal:", e);
        return { status: false, msg: "Erro na consulta da API do WhatsApp." };
    }
}

async function getperfil(user) {
      try {
        const pegarft = await conn.profilePictureUrl(user, 'image');
          if (pegarft) {
           return pegarft; 
            } else {
         return "https://shizukuapis.space/uploads/852159a3.jpg";
       }
     } catch {
    return "https://shizukuapis.space/uploads/852159a3.jpg"; 
  }
}
// ÍNICIO: CASES / COMANDOS COM PREFIXO:
switch(command){////\\\\\//////\\\\\\/////\\\\\\/////\\\\///\\\////\\\///\\\///\\\

// EXEMPLO DE BOTOES 
case 'carrossel': {
try {
const imagem = 'https://telegra.ph/file/24fa902ead26340f3df2c.png';
const media = await baileys.prepareWAMessageMedia({ image: { url: imagem } }, { upload: shizuku.waUploadToServer });
const criarCard = (texto) => ({
header: { ...media, hasMediaAttachment: true },
body: { text: texto },
footer: { text: 'Shizuku Bot' },
nativeFlowMessage: {
buttons: [
{ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: '☶ Menu', id: `${prefix}menu` }) },
{ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: '☶ Ping', id: `${prefix}ping` }) }
]
}
});

const carrossel = new Carousel(shizuku)
.setBody(`Olá ${pushname}! Confira os cards abaixo:`)
.setFooter('Shizuku Bot')
.addCard(criarCard('Primeiro card do carrossel'))
.addCard(criarCard('Segundo card do carrossel'));
await carrossel.send(from, { quoted: info });
} catch (e) {console.error('[CARROSSEL]', e);
reply('Erro ao enviar o carrossel: ' + e.message);
}
}
break;

case 'botaov2img': {
try {
const botaov2 = new ButtonV2(shizuku)
.setTitle('Shizuku Bot')
.setSubtitle('Selecione uma opção')
.setBody(`Olá ${pushname}! Escolha uma das opções abaixo:`)
.setFooter('Shizuku Bot')
.setThumbnail('https://telegra.ph/file/24fa902ead26340f3df2c.png')
.addButton('☶ Menu', `${prefix}menu`)
.addButton('☶ Ping', `${prefix}ping`);
await botaov2.send(from);
} catch (e) {console.error('[BOTAOV2IMG]', e);
reply('Erro ao enviar o menu de botões: ' + e.message);
}
}
break;

case 'botaov2': {
try {
const botaov2 = new ButtonV2(shizuku)
.setTitle('Shizuku Bot')
.setSubtitle('Selecione uma opção')
.setBody(`Olá ${pushname}! Escolha uma das opções abaixo:`)
.setFooter('Shizuku Bot')
.addButton('☶ Menu', `${prefix}menu`)
.addButton('☶ Ping', `${prefix}ping`);
await botaov2.send(from);
} catch (e) {console.error('[BOTAOV2]', e);
reply('Erro ao enviar o menu de botões: ' + e.message);
}
}
break;

case 'listaimg': {
try {
const lista = new Button(shizuku)
.setTitle('Shizuku Bot')
.setSubtitle('Selecione uma opção')
.setBody(`Olá ${pushname}! Escolha uma das opções abaixo:`)
.setFooter('Shizuku Bot')
.setImage('https://telegra.ph/file/24fa902ead26340f3df2c.png')
.addSelection('☶ Ver opções')
.makeSection('Comandos')
.makeRow('', 'Menu', 'Abrir o menu completo', `${prefix}menu`)
.makeRow('', 'Ping', 'Testar a velocidade do bot', `${prefix}ping`);
await lista.send(from, { quoted: info });
} catch (e) {console.error('[LISTAIMG]', e);
reply('Erro ao enviar a lista: ' + e.message);
}
}
break;

case 'lista': {
try {
const lista = new Button(shizuku)
.setTitle('Shizuku Bot')
.setSubtitle('Selecione uma opção')
.setBody(`Olá ${pushname}! Escolha uma das opções abaixo:`)
.setFooter('Shizuku Bot')
.addSelection('☶ Ver opções')
.makeSection('Comandos')
.makeRow('', 'Menu', 'Abrir o menu completo', `${prefix}menu`)
.makeRow('', 'Ping', 'Testar a velocidade do bot', `${prefix}ping`);
await lista.send(from, { quoted: info });
} catch (e) {console.error('[LISTA]', e);
reply('Erro ao enviar a lista: ' + e.message);
}
}
break;

case 'botaoimg': {
try {
const botao = new Button(shizuku)
.setTitle('Shizuku Bot')
.setSubtitle('Selecione uma opção')
.setBody(`Olá ${pushname}! Escolha uma das opções abaixo:`)
.setFooter('Shizuku Bot')
.setImage('https://telegra.ph/file/24fa902ead26340f3df2c.png')
.addReply('☶ Menu', `${prefix}menu`)
.addReply('☶ Ping', `${prefix}ping`);
await botao.send(from, { quoted: info });
} catch (e) {console.error('[BOTAOIMG]', e);
reply('Erro ao enviar o menu de botões: ' + e.message);
}
}
break;

case 'botao': {
try {
const botao = new Button(shizuku)
.setTitle('Shizuku Bot')
.setSubtitle('Selecione uma opção')
.setBody(`Olá ${pushname}! Escolha uma das opções abaixo:`)
.setFooter('Shizuku Bot')
.addReply('☶ Menu', `${prefix}menu`)
.addReply('☶ Ping', `${prefix}ping`);
await botao.send(from, { quoted: info });
} catch (e) {console.error('[BOTAO]', e);
reply('Erro ao enviar o menu de botões: ' + e.message);
}
}
break;
// FIM DOS EXEMPLO DE BOTOES 

case 'infocanal':
case 'canalid': {//criador death 
    const link = args[0];//canal
    if (!link || !link.includes('whatsapp.com/channel/')) {
        return reply(`Informe um link de canal válido!\nEx: ${prefix + command} https://whatsapp.com/channel/0029VbCtejN7YSdAbUpXOo26`);
    }
    await reply(enviar.espere());
    const res = await obterInfoCanal(link);
    if (!res.status) return reply(`❌ ${res.msg}`);
    let txt = `╭─⭑ 📢 *INFO DO CANAL* ⭑─╮\n`;
    txt += `│\n`;
    txt += `│ 🏷️ *Nome:* ${res.nome}\n`;
    txt += `│ 🆔 *ID:* ${res.id}\n`;
    txt += `│ 👥 *Seguidores:* ${res.seguidores || 'Privado'}\n`;
    txt += `│ ✅ *Verificado:* ${res.verificado ? 'Sim' : 'Não'}\n`;
    txt += `│ 📝 *Descrição:* ${res.descricao || 'Sem descrição'}\n`;
    txt += `│\n`;
    txt += `╰──⭑ Shizuku - Newsletter ⭑──╯`; 
    if (res.foto) {
        await shizuku.sendMessage(from, { image: {url: `https://pps.whatsapp.net${res.foto}` }, caption: txt }, { quoted: info });
    } else {
        await shizuku.sendMessage(from, { text: txt }, { quoted: info });
    }
    break;
}

case 'postar':
case 'anunciar': {
    if (!q) return reply("Digite a mensagem que deseja postar no canal!");
    try {
        await shizuku.sendMessage(idChannel, { 
            text: `📢 *ATUALIZAÇÃO SHIZUKU*\n\n${q}`,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true
            }
        });
        reply("Mensagem enviada com sucesso para o canal!");
    } catch (e) {
        console.error("Erro ao postar no canal:", e);
        reply("Não consegui postar. O bot é ADM do canal?");
    }
    break;
}

// COMANDO NAMORAR
case 'namorar': {
    const alvo = menc_os2;
    if (!alvo) return reply("⚠️ Marque alguém para abrir o seu coração!");
    const statusAutor = rel.getStatus(sender);
    const statusAlvo = rel.getStatus(alvo);
    if (statusAutor.casal) return reply("❌ Você já possui um compromisso ativo!");
    if (statusAlvo.casal) return reply("❌ Esta pessoa já está em um relacionamento!");
    if (sender === alvo) return reply("❌ O amor próprio é importante, mas para o bot você precisa de um parceiro!");
    rel.novoPedido(sender, alvo, 'namoro', from);
    let msgNamoro = `╭─⭑💌 *PEDIDO DE NAMORO* ⭑─╮\n│\n`;
    msgNamoro += `│ @${sender.split('@')[0]} abriu o coração para \n`;
    msgNamoro += `│ @${alvo.split('@')[0]}! 💕\n│\n`;
    msgNamoro += `│ 💰 *Bônus:* +500 Gold (ao aceitar)\n`;
    msgNamoro += `│ ⏳ *Expira em:* 2 horas\n`;
    msgNamoro += `│ 📝 *Responda:* "S" para aceitar ou "N"\n`;
    msgNamoro += `╰───⭑ Shizuku RPG ⭑───╯`;
    shizuku.sendMessage(from, { text: msgNamoro, mentions: [sender, alvo] });
    break;
}

case 'casar': {
    const status = rel.getStatus(sender);
    if (!status.casal || status.casal.status !== 'namorando') {
        return reply("⚠️ Você precisa estar *Namorando* para poder pedir alguém em casamento!");
    }
    const alvo = status.casal.u1 === sender ? status.casal.u2 : status.casal.u1;
    const agora = Date.now();
    const dataNamoro = status.casal.data_aceito;
    const tresDias = 3 * 24 * 60 * 60 * 1000; 

    if (agora - dataNamoro < tresDias) {
        const tempoRestante = tresDias - (agora - dataNamoro);
        const horasFaltando = Math.floor(tempoRestante / (1000 * 60 * 60));
        const minutosFaltando = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        
        return reply(`⏳ *Calma lá, apressadinho(a)!*\n\nO amor precisa de tempo para florescer. \nFaltam: *${horasFaltando}h e ${minutosFaltando}min* de namoro para o casamento! 💍`);
    }
    rel.novoPedido(sender, alvo, 'casar', from);
    
    let msgCasar = `╭─⭑💍 *PEDIDO DE CASAMENTO* ⭑─╮\n│\n`;
    msgCasar += `│ @${sender.split('@')[0]} se ajoelhou e pediu \n`;
    msgCasar += `│ a mão de @${alvo.split('@')[0]}! ✨\n│\n`;
    msgCasar += `│ ❤️ *Bônus:* +50 HP Máximo (Eterno)\n`;
    msgCasar += `│ 📝 *Responda:* "S" para aceitar!\n`;
    msgCasar += `╰───⭑ Shizuku RPG ⭑───╯`;
    
    shizuku.sendMessage(from, { video: { url: "https://telegra.ph/file/cc313adcf306bf602c695.mp4"}, gifPlayback: true, caption: msgCasar, mentions: [sender, alvo] });
    break;
}


case 'adotar': {
    const alvo = menc_os2;
    if (!alvo) return reply("⚠️ Marque quem você deseja adotar para sua família!");
    
    const statusAutor = rel.getStatus(sender);
    if (!statusAutor.casal || statusAutor.casal.status !== 'casados') {
        return reply("🏠 *Acesso Negado!*\n\nApenas casais oficialmente *Casados* podem formar uma linhagem e adotar filhos.");
    }

    const statusAlvo = rel.getStatus(alvo);
    if (statusAlvo.familiaComoFilho) return reply("❌ Este aventureiro já possui uma família!");
    if (statusAlvo.casal) return reply("❌ Você não pode adotar alguém que já está em um relacionamento!");
    if (alvo === sender) return reply("❌ Você não pode adotar a si mesmo!");

    rel.novoPedido(sender, alvo, 'adotar', from);
    
    let msgAdocao = `╭─⭑👪 *PEDIDO DE ADOÇÃO* ⭑─╮\n│\n`;
    msgAdocao += `│ @${sender.split('@')[0]} deseja te adotar\n`;
    msgAdocao += `│ como filho(a), @${alvo.split('@')[0]}!\n│\n`;
    msgAdocao += `│ 🎁 *Herança:* +200 Gold & 1 Poção\n`;
    msgAdocao += `│ 📝 Responda *S* para aceitar ser parte\n`;
    msgAdocao += `│ desta família!\n`;
    msgAdocao += `╰───⭑ Shizuku RPG ⭑───╯`;
    
    shizuku.sendMessage(from, { text: msgAdocao, mentions: [sender, alvo] });
    break;
}

case 'cancelar':
case 'cancelarpedido': {
    rel.limparPedidosExpirados();
    const res = rel.cancelarPedido(sender, from);
    if (!res.status) return reply("⚠️ Você não tem nenhum pedido pendente para cancelar.");
    let msgCancel = `╭─⭑🚫 *PEDIDO CANCELADO* ⭑─╮\n│\n`;
    msgCancel += `│ Você retirou o seu pedido de \n`;
    msgCancel += `│ *${res.tipo}* enviado para \n`;
    msgCancel += `│ @${res.alvo.split('@')[0]}.\n`;
    msgCancel += `│\n╰───⭑ Shizuku Bot ⭑───╯`;
    shizuku.sendMessage(from, { text: msgCancel, mentions: [sender, res.alvo] });
    break;
}

case 'terminar':
case 'divorcio':
case 'divorciar': {
    const status = rel.getStatus(sender);
    if (!status.casal) return reply("❌ Você não está em um relacionamento.");
    const tipo = status.casal.status === 'casados' ? 'divorcio' : 'terminar';
    rel.solicitarSeparacao(sender, tipo, from);
    let msgSep = `╭─⭑⚠️ *PROCESSO DE SEPARAÇÃO* ⭑─╮\n│\n`;
    msgSep += `│ @${sender.split('@')[0]}, você tem certeza?\n`;
    msgSep += `│ Isso dissolverá seus laços atuais.\n│\n`;
    msgSep += `│ 🔻 *Penalidade:* -300 XP\n`;
    msgSep += `│ 📝 Digite *#confirmar* para oficializar.\n`;
    msgSep += `╰───⭑ Shizuku RPG ⭑───╯`;
    reply(msgSep);
    break;
}

case 'confirmar': {
    rel.limparPedidosExpirados();
    const res = rel.confirmarSeparacao(sender, from);
    if (!res.status) return reply("⚠️ Não há nenhuma separação pendente para você confirmar.");
    
    let msgFinal = `╭─⭑⚖️ *SENTENÇA FINAL* ⭑─╮\n│\n`;
    msgFinal += `│ O vínculo entre @${sender.split('@')[0]} \n`;
    msgFinal += `│ e @${res.exParceiro.split('@')[0]} foi desfeito.\n│\n`;
    msgFinal += `│ 💔 Ambos perderam 30 XP.\n`;
    msgFinal += `╰───⭑ Shizuku RPG ⭑───╯`;
    
    shizuku.sendMessage(from, { text: msgFinal, mentions: [sender, res.exParceiro] });
    break;
}

case 'dupla': {
    const dpl = rel.getPerfilAmoroso(sender);
    if (!dpl.casado) return reply("⚠️ Você não possui um relacionamento registrado.");

    let msgdpl = `╭─⭑💕 *REGISTRO AMOROSO* 💕⭑─╮\n│\n`;
    msgdpl += `│ 👤 *Parceiro:* @${dpl.parceiro.split('@')[0]}\n`;
    msgdpl += `│ 📋 *Status:* ${dpl.status === 'casados' ? '💍 Casados' : '💖 Namorando'}\n`;
    msgdpl += `│ ⏳ *Tempo:* ${dpl.tempo}\n`;
    msgdpl += `│ 📅 *Desde:* ${dpl.data_inicio}\n`;
    
    if (dpl.status === 'casados') {
        msgdpl += `│ 👶 *Filhos:* ${dpl.filhos.length > 0 ? dpl.filhos.length : 'Nenhum adotado'}\n`;
    }
    
    msgdpl += `│\n╰───⭑ Shizuku RPG ⭑───╯`;
    shizuku.sendMessage(from, { text: msgdpl, mentions: [sender, dpl.parceiro] });
    break;
}

case 'familia': {
    const dpl = rel.getEstruturaFamiliar(sender);
    if (!dpl.casal && !dpl.familia && !dpl.eFilhoDe) {
        return reply("⚠️ Você ainda não tem vínculos familiares registrados.");
    }

    let msgFam = `╭─⭑👪 *ESTRUTURA FAMILIAR* ⭑─╮\n│\n`;
    
    if (dpl.eFilhoDe?.pais) {
        msgFam += `│ 👴 *Seus Pais:* ${dpl.eFilhoDe.pais.map(p => '@' + p.split('@')[0]).join(' & ')}\n`;
    }
    
    if (dpl.casal) {
        const conj = dpl.casal.u1 === sender ? dpl.casal.u2 : dpl.casal.u1;
        msgFam += `│ 💍 *Cônjuge:* @${conj.split('@')[0]} (${dpl.casal.status})\n`;
    }

    if (dpl.familia?.filhos?.length > 0) {
        msgFam += `│ 👶 *Seus Filhos:*\n`;
        dpl.familia.filhos.forEach((f, i) => {
            msgFam += `│    ${i + 1}. @${f.split('@')[0]}\n`;
        });
    }

    msgFam += `│\n╰───⭑ Shizuku RPG ⭑───╯`;
    
    const mencoes = [sender];
    if (dpl.casal) mencoes.push(dpl.casal.u1, dpl.casal.u2);
    if (dpl.familia?.filhos) mencoes.push(...dpl.familia.filhos);
    if (dpl.eFilhoDe?.pais) mencoes.push(...dpl.eFilhoDe.pais);

    shizuku.sendMessage(from, { text: msgFam, mentions: mencoes }); 
    break;
}

case 'limparrpg': {
    if (!SoDono) return reply("⛔ Apenas o dono pode realizar a limpeza do banco de dados.");
    const diasParaLimpar = parseInt(args[0]) || 15;
    const totalRemovidos = rpg.limparInativos(diasParaLimpar);
    if (totalRemovidos === 0) {
        return reply(`🧹 *LIMPEZA:* Nenhum usuário inativo há mais de *${diasParaLimpar}* dias foi encontrado.`);
    }
    let msgLimpeza = `╭─⭑🧹 *SHIZUKU RPG - MANUTENÇÃO* ⭑─╮\n│\n`;
    msgLimpeza += `│ 🗑️ *Ação:* Limpeza de Inativos\n`;
    msgLimpeza += `│ ⏳ *Filtro:* ${diasParaLimpar} dias ou mais\n`;
    msgLimpeza += `│ 💀 *Removidos:* ${totalRemovidos} usuários\n`;
    msgLimpeza += `│ ✅ *Status:* Banco de dados otimizado!\n│\n`;
    msgLimpeza += `╰───⭑ Shizuku RPG ⭑───╯`;
    mention(msgLimpeza);
    break;
}

case 'inativosrpg':
case 'usuariosinativos': {
    if (!SoDono) return reply("⛔ Apenas o dono pode monitorar a base de dados.");
    const diasFiltro = parseInt(args[0]) || 10;
    const inativos = rpg.listarInativos(diasFiltro);
    if (inativos.length === 0) {
        return reply(`✅ *BASE LIMPA:* Não há nenhum usuário inativo há mais de ${diasFiltro} dias.`);
    }
    let msgInativos = `╭─⭑🧹 *MONITORAMENTO DE INATIVOS* ⭑─╮\n│\n`;
    msgInativos += `│ 📊 *Filtro:* ${diasFiltro}+ dias parado\n`;
    msgInativos += `│ 👥 *Total encontrado:* ${inativos.length}\n│\n`;
    const listaExibicao = inativos.slice(0, 20);
    listaExibicao.forEach((u, i) => {
        msgInativos += `│ ${i + 1}. ${u.nome}\n`;
        msgInativos += `│ 🆔 ${u.id.split('@')[0]}\n`;
        msgInativos += `│ ⏳ Parado há: ${u.dias} dias (${u.ultima})\n`;
        msgInativos += `│ ───────────────\n`;
    });
    if (inativos.length > 20) {
        msgInativos += `│ ... e mais ${inativos.length - 20} usuários.\n`;
    }
    msgInativos += `│\n│ 💡 Use *${prefix}limparrpg* para deletar.\n`;
    msgInativos += `╰───⭑ Shizuku RPG ⭑───╯`;
    mention(msgInativos);
    break;
}

case 'perfilrpg':
case 'meurpg': {
    if (!IsModoRpg) return reply("🎮 O modo RPG está desativado!");
    const db = rpg.DB();
    const id = sender;
    const user = db.users[id];
    if (!user) return reply("⚠️ Você ainda não possui um registro! Envie uma mensagem no grupo para se registrar automaticamente.");
    const totalBarras = 10;
    const porcentagemHP = user.hp / user.maxHp;
    const preenchido = Math.round(porcentagemHP * totalBarras);
    const barraHP = "❤️".repeat(Math.max(0, preenchido)) + "🤍".repeat(Math.max(0, totalBarras - preenchido));
    const xpNecessario = rpg.xpToNext(user.level);
    const relacao = rel.getPerfilAmoroso(id);
    const statusSocial = relacao.casado 
        ? (relacao.status === 'casados' ? `💍 Casado(a) com @${relacao.parceiro.split('@')[0]}` : `💖 Namorando @${relacao.parceiro.split('@')[0]}`)
        : "🍃 Solteiro(a)";

    const mencoes = [id];
    if (relacao.casado) mencoes.push(relacao.parceiro);
    shizuku.sendMessage(from, { text: Mess.PerfilRpg(user, relacao, prefix, statusSocial, xpNecessario, barraHP, porcentagemHP), mentions: mencoes });
    break;
}

case 'loja':
case 'lojarpg':
case 'shop': {
    if (!IsModoRpg) return reply("🎮 O modo RPG está desativado!");
    const db = rpg.DB();
    const user = db.users[sender];
    if (!user) return reply("⚠️ Você precisa de um registro para acessar a loja! Envie uma mensagem no grupo.");
    reply(Mess.LojaRpg(user, prefix));
    break;
}

case 'comprar': {
    if (!IsModoRpg) return reply("🎮 O modo RPG está desativado!");
    if (!q) return reply(`🛍️ *COMO COMPRAR:* \n\nPara itens simples: *${prefix}comprar poção*\nPara ferramentas: *${prefix}comprar espada/diamante*`);

    const partes = q.includes('/') ? q.split('/') : q.split(' ');
    const itemAlvo = partes[0]?.trim().toLowerCase();
    const materialAlvo = partes[1]?.trim().toLowerCase() || null;
    const resultado = rpg.comprarItem(sender, itemAlvo, materialAlvo);
    if (resultado.status) {
        const nomeExibicao = materialAlvo ? `${itemAlvo} de ${materialAlvo}` : itemAlvo;
        
        reply(`✅ *COMPRA CONCLUÍDA!* ✅\n\n💰 Ouro descontado com sucesso.\n📦 *Item:* ${nomeExibicao}\n\n✨ _Aproveite sua nova aquisição!_`);
    } else {
        reply(`❌ *FALHA NA COMPRA:* \n${resultado.msg}`);
    }
    break;
}

case 'pvp':
case 'duelo': {
    if (!IsModoRpg) return reply("🎮 O modo RPG está desativado!");
    const db = rpg.DB();
    const author = sender;
    const user = db.users[author];
    const target = menc_os2;

    if (!target || target === author) return reply("⚔️ Marque um oponente!");
    const oponente = db.users[target];
    if (!oponente) return reply("❌ Oponente não registrado.");
    if (user.hp < (user.maxHp * 0.3)) return reply("🩸 Você está muito ferido para lutar! Use uma *#poção* primeiro.");
    if (oponente.hp < (oponente.maxHp * 0.3)) return reply("🩸 O oponente está muito fraco e não consegue segurar uma espada agora.");

    if (!user.ferramentas.espada) return reply("🗡️ Você precisa de uma espada para desafiar alguém.");

    let recomendacao = "";
    if (user.inventario.escudo <= 0 || oponente.inventario.escudo <= 0) {
        recomendacao = "\n⚠️ *DICA:* Um de vocês está sem escudo! Recomendamos comprar um na #loja para reduzir o dano recebido.";
    }
    global.duelos = global.duelos || [];
    global.duelos.push({ desafiante: author, oponente: target, status: 'pendente', tempo: Date.now() });

    let msg = `⚔️ *DESAFIO DE ARENA* ⚔️\n\n`;
    msg += `@${author.split('@')[0]} vs @${target.split('@')[0]}\n`;
    msg += `❤️ Vida: ${user.hp} HP | ${oponente.hp} HP\n`;
    msg += `🛡️ Escudo: ${user.inventario.escudo > 0 ? 'Equipado ✅' : 'Nenhum ❌'}\n`;
    msg += `🛡️ Escudo Opo: ${oponente.inventario.escudo > 0 ? 'Equipado ✅' : 'Nenhum ❌'}\n`;
    msg += `${recomendacao}\n\n`;
    msg += `👍 Oponente, digite *${prefix}aceitar* para lutar!`;

    shizuku.sendMessage(from, { text: msg, mentions: [author, target] });
    break;
}

case 'aceitar': {
    if (!global.duelos) return reply("❌ Não há duelos pendentes.");
    const dueloIdx = global.duelos.findIndex(d => d.oponente === sender && d.status === 'pendente');
    if (dueloIdx === -1) return reply("❌ Ninguém te desafiou ou o tempo expirou.");
    const duelo = global.duelos[dueloIdx];
    const db = rpg.DB();
    const p1 = db.users[duelo.desafiante];
    const p2 = db.users[duelo.oponente];
    const bonusEspada = { 'pedra': 5, 'ferro': 15, 'diamante': 35 };
let danoP1 = (p1.atk + bonusEspada[p1.ferramentas.espada.tipo]);
let danoP2 = (p2.atk + bonusEspada[p2.ferramentas.espada.tipo]);
if (p2.inventario.escudo > 0) {
    danoP1 = Math.floor(danoP1 / 2);
    p2.inventario.escudo -= 1;
}
if (p1.inventario.escudo > 0) {
    danoP2 = Math.floor(danoP2 / 2);
    p1.inventario.escudo -= 1;
}
p2.hp -= danoP1;
p1.hp -= danoP2;
p1.hp = Math.max(0, p1.hp);
p2.hp = Math.max(0, p2.hp);

    let vencedor, perdedor, danoVencedor;
    if (danoP1 > danoP2) {
        vencedor = duelo.desafiante; perdedor = duelo.oponente; danoVencedor = danoP1;
    } else {
        vencedor = duelo.oponente; perdedor = duelo.desafiante; danoVencedor = danoP2;
    }
    const winGold = 100;
    const winXp = 50;
    db.users[vencedor].gold += winGold;
    rpg.addXp(vencedor, winXp);
    rpg.usarFerramenta(duelo.desafiante, 'espada');
    rpg.usarFerramenta(duelo.oponente, 'espada');

    rpg.SAVE(db);
    global.duelos.splice(dueloIdx, 1); 

    let res = `🏟️ *RESULTADO DO ARENA* 🏟️\n\n`;
    res += `🏆 *Vencedor:* @${vencedor.split('@')[0]}\n`;
    res += `💀 *Derrotado:* @${perdedor.split('@')[0]}\n\n`;
    res += `💥 *Dano Final:* ${danoVencedor}\n`;
    res += `💰 *Prêmio:* ${winGold} Gold\n`;
    res += `✨ *XP:* +${winXp}\n`;
    res += `📉 *Durabilidade:* Ambas espadas perderam usos!\n\n`;
    res += `╰───⭑ Shizuku RPG ⭑───╯`;

    shizuku.sendMessage(from, { text: res, mentions: [vencedor, perdedor] });
    break;
}

case 'missao':
case 'quest': {
    if (!IsModoRpg) return reply("🎮 O modo RPG está desativado!");
    const db = rpg.DB();
    const id = sender;
    const user = db.users[id];
    if (!user) return reply("⚠️ Registro não encontrado.");
    const hoje = new Date().toLocaleDateString('pt-BR');
    if (user.missao_dia === hoje) {
        return reply("⏳ Você já completou sua missão diária! Volte amanhã.");
    }
    const listaMissoes = [
        { nome: "Escolta Real", xp: 50, gMin: 100, gMax: 200, d: "Protegeu a carruagem do Rei." },
        { nome: "Extermínio de Goblins", xp: 70, gMin: 150, gMax: 300, d: "Limpou a caverna de monstros." },
        { nome: "Entrega de Ervas", xp: 40, gMin: 80, gMax: 150, d: "Entregou ervas para a curandeira." },
        { nome: "Caça ao Tesouro", xp: 100, gMin: 200, gMax: 500, d: "Achou um baú antigo enterrado." }
    ];
    
    const missao = listaMissoes[Math.floor(Math.random() * listaMissoes.length)];
    const goldMissao = Math.floor(Math.random() * (missao.gMax - missao.gMin + 1)) + missao.gMin;
    const xpMissao = missao.xp;
    rpg.addGold(id, goldMissao);
    const up = rpg.addXp(id, xpMissao);
    user.missao_dia = hoje;
    rpg.SAVE(db);
    let textoQuest = `╭─⭑🎯 *MISSÃO DIÁRIA* ⭑─╮\n│\n`;
    textoQuest += `│ 👤 *Herói:* ${user.nome}\n`;
    textoQuest += `│ 📜 *Tarefa:* ${missao.nome}\n`;
    textoQuest += `│ 💬 ${missao.d}\n`;
    textoQuest += `│ 💰 *Recompensa:* ${goldMissao} Gold\n`;
    textoQuest += `│ ✨ *Experiência:* ${xpMissao} XP\n`;
    if (up.subiu) textoQuest += `│ 🆙 *LEVEL UP:* ${up.level}!\n`;
    textoQuest += `│\n╰───⭑ Shizuku RPG ⭑───╯`;
    reply(textoQuest);
    break;
}

case 'trabalhar': {
    if (!IsModoRpg) return reply("🎮 O modo RPG está desativado!");
    const db = rpg.DB();
    const id = sender;
    const user = db.users[id];
    if (!user) return reply("⚠️ Você ainda não possui um registro! Envie uma mensagem para começar.");
    const hpMinimo = Math.floor(user.maxHp * 0.2); 
    if (user.hp < hpMinimo) {
        return reply(`🚑 *ESTADO CRÍTICO:* Você está muito fraco para trabalhar!\n❤️ Vida atual: ${user.hp}/${user.maxHp}\n🧪 Use uma *#poção* ou descanse para recuperar suas forças.`);
    }
    const agora = Date.now();
    const cooldown = 1000 * 60 * 3; 
    const ultTrabalho = user.cooldowns?.trabalhar || 0;
    if (agora - ultTrabalho < cooldown) {
        const tempoRestante = cooldown - (agora - ultTrabalho);
        const minutos = Math.floor(tempoRestante / (1000 * 60));
        const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);
        return reply(`⏳ *DESCANSO:* Você já trabalhou demais!\nVolte em *${minutos}m ${segundos}s*.`);
    }
    const trabalhos = [
        { cargo: "👷 Mineiro", frase: "você escavou minérios raros!" },
        { cargo: "🧙 Alquimista", frase: "você destilou essências mágicas!" },
        { cargo: "💂 Guarda", frase: "você vigiou os portões da cidade!" },
        { cargo: "⚒️ Ferreiro", frase: "você forjou lâminas de aço!" },
        { cargo: "🚜 Fazendeiro", frase: "você colheu trigo e cevada!" },
        { cargo: "🧭 Explorador", frase: "você mapeou florestas densas!" }
    ];

    const trampo = trabalhos[Math.floor(Math.random() * trabalhos.length)];
    const ganhoGold = Math.floor(Math.random() * 80) + 40;
    const ganhoXp = Math.floor(Math.random() * 20) + 10;
    const cansaço = Math.floor(Math.random() * 5) + 2;
    user.hp = Math.max(0, user.hp - cansaço);
    rpg.addGold(id, ganhoGold);
    const up = rpg.addXp(id, ganhoXp);
    if (!user.cooldowns) user.cooldowns = {};
    user.cooldowns.trabalhar = agora;
    rpg.SAVE(db);
    let textoJob = `╭─⭑💮 *SHIZUKU RPG - TRABALHO* 💮⭑─╮\n│\n`;
    textoJob += `│ 👤 *${user.nome}* trabalhou como *${trampo.cargo}*!\n`;
    textoJob += `│ 💬 ${trampo.frase}\n`;
    textoJob += `│ 💰 *Ouro:* +${ganhoGold}\n`;
    textoJob += `│ ✨ *XP:* +${ganhoXp}\n`;
    if (up.subiu) textoJob += `│ 🆙 *NOVO NÍVEL:* ${up.level}!\n`;
    textoJob += `│ ❤️ *Vida:* ${user.hp}/${user.maxHp} (-${cansaço})\n`;
    textoJob += `│ 🏦 *Banco:* ${user.gold} Gold\n│\n`;
    textoJob += `╰───⭑ Shizuku RPG ⭑───╯`;
    reply(textoJob);
    break;
}

case 'cacar':
case 'caçar':
case 'explorar': {
    if (!IsModoRpg) return reply("🎮 O modo RPG está desativado!");
    const db = rpg.DB();
    const user = db.users[sender];
    if (!user) return reply("⚠️ Registro não encontrado.");
    if (user.hp < (user.maxHp * 0.25)) {
        return reply("🩸 *EXAUSTÃO:* Você está ferido demais para entrar na floresta. Descanse ou use uma #poção.");
    }
    const agora = Date.now();
    const cooldown = 1000 * 60 * 5; 
    const ultCaca = user.cooldowns?.cacar || 0;
    if (agora - ultCaca < cooldown) {
        const tempo = cooldown - (agora - ultCaca);
        const min = Math.floor(tempo / (1000 * 60));
        const seg = Math.floor((tempo % (1000 * 60)) / 1000);
        return reply(`🌲 A floresta ainda está agitada. Espere *${min}m ${seg}s* para caçar novamente.`);
    }
    const sorteio = Math.floor(Math.random() * 100) + 1;
    let msgCaca = `╭─⭑🏹 *SHIZUKU RPG - EXPEDIÇÃO* ⭑─╮\n│\n`;
    let ganhoGold = 0;
    let ganhoXp = 0;
    let perdaHp = 0;
    let itemGanho = "";
    if (sorteio <= 10) { 
        ganhoGold = Math.floor(Math.random() * 200) + 150;
        ganhoXp = Math.floor(Math.random() * 100) + 50;
        itemGanho = "🧪 Poção de Cura";
        user.inventario.poção = (user.inventario.poção || 0) + 1;
        msgCaca += `│ ✨ *TESOURO:* Você encontrou um acampamento abandonado com ouro e suprimentos!\n`;

    } else if (sorteio <= 30) {
        perdaHp = Math.floor(user.hp * 0.7); 
        ganhoXp = Math.floor(Math.random() * 80) + 40;
        msgCaca += `│ 🐺 *EMBOSCADA:* Um bando de lobos te atacou! Você sobreviveu por pouco, mas está sangrando.\n`;

    } else if (sorteio <= 50) {
        ganhoGold = Math.floor(Math.random() * 50) + 20;
        itemGanho = "🍾 Bebida";
        user.inventario.bebida = (user.inventario.bebida || 0) + 1;
        msgCaca += `│ 🍾 *ACHADO:* Você encontrou uma garrafa de rum perdida entre as raízes.\n`;

    } else if (sorteio <= 85) {
        ganhoGold = Math.floor(Math.random() * 100) + 50;
        ganhoXp = Math.floor(Math.random() * 40) + 20;
        perdaHp = Math.floor(Math.random() * 15) + 5;
        msgCaca += `│ 🦌 *SUCESSO:* Você caçou um cervo selvagem e vendeu a carne na cidade.\n`;

    } else {
        perdaHp = Math.floor(Math.random() * 20) + 10;
        msgCaca += `│ 💨 *FALHA:* Você passou horas rastreando, não achou nada e ainda tropeçou num espinheiro.\n`;
    }
    user.gold += ganhoGold;
    user.hp = Math.max(5, user.hp - perdaHp); 
    if (!user.cooldowns) user.cooldowns = {};
    user.cooldowns.cacar = agora;
    const up = rpg.addXp(sender, ganhoXp);
    rpg.SAVE(db);
    if (ganhoGold > 0) msgCaca += `│ 💰 *Ouro:* +${ganhoGold}\n`;
    if (ganhoXp > 0) msgCaca += `│ ✨ *XP:* +${ganhoXp}\n`;
    if (itemGanho) msgCaca += `│ 📦 *Item:* ${itemGanho}\n`;
    if (perdaHp > 0) msgCaca += `│ 🩸 *Dano:* -${perdaHp} HP\n`;
    if (up.subiu) msgCaca += `│ 🆙 *NÍVEL:* ${up.level}!\n`;
    msgCaca += `│ ❤️ *Vida Atual:* ${user.hp}/${user.maxHp}\n`;
    msgCaca += `│\n╰───⭑ Shizuku RPG ⭑───╯`;
    reply(msgCaca);
    break;
}

case 'curar':
case 'pocao':
case 'poção': {
    if (!IsModoRpg) return reply("🎮 O modo RPG está desativado!");
    const db = rpg.DB();
    const user = db.users[sender];
    if (!user) return reply("⚠️ Registro não encontrado.");
    if (!user.inventario.poção || user.inventario.poção <= 0) {
        return reply("🧪 Você não tem Poções de Cura! Compre uma na *#loja* por 300 Gold.");
    }
    const target = menc_os2 || sender; 
    const isSelf = target === sender;
    const alvo = db.users[target];
    if (!alvo) return reply("❌ O alvo da cura não possui registro no RPG.");
    if (alvo.hp >= alvo.maxHp) {
        return reply(isSelf ? "❤️ Sua vida já está cheia! Não jogue poção fora." : `❤️ @${target.split('@')[0]} já está com a vida cheia!`, {mentions: [target]});
    }
    const confirmacao = q.toLowerCase().includes('sim');
    if (!isSelf && user.hp < (user.maxHp * 0.3) && !confirmacao) {
        return reply(
            `⚠️ *CUIDADO:* Você está muito fraco (${user.hp} HP)!\n` +
            `Tem certeza que deseja gastar sua poção em @${target.split('@')[0]} em vez de se curar?\n\n` +
            `*Se sim, digite:* ${prefix}curar @user sim`, 
            {mentions: [target]}
        );
    }
    const curaPotencia = 50;
    const hpAntigo = alvo.hp;
    alvo.hp = Math.min(alvo.maxHp, alvo.hp + curaPotencia);
    const totalCurado = alvo.hp - hpAntigo;
    user.inventario.poção -= 1;
    rpg.SAVE(db);
    let msgSucesso = `✨ *ALQUIMIA:* ✨\n\n`;
    if (isSelf) {
        msgSucesso += `🧪 Você bebeu uma poção e recuperou *${totalCurado}* de vida!\n`;
    } else {
        msgSucesso += `🧪 @${sender.split('@')[0]} usou uma poção em @${target.split('@')[0]}!\n`;
        msgSucesso += `💖 +${totalCurado} HP para o aliado.\n`;
    }
    msgSucesso += `❤️ Vida atual do alvo: ${alvo.hp}/${alvo.maxHp}\n`;
    msgSucesso += `📦 Restam: ${user.inventario.poção} poções em sua bolsa.`;
    shizuku.sendMessage(from, { text: msgSucesso, mentions: [sender, target] });
    break;
}

// ----- Roubar ouro (roubar / roubarouro) -----
case 'roubar':
case 'roubarouro': {
    if (!IsModoRpg) return reply("🎮 O modo RPG está desativado!");
    const db = rpg.DB();
    const author = sender;
    const thief = db.users[author];
    if (!thief) return reply("⚠️ Você não tem um registro no RPG!");
    const target = menc_os2 ? menc_os2 : (quoted ? info.message.extendedTextMessage.contextInfo.participant : null);
    if (!target) return reply("⚠️ Marque quem você deseja roubar!");
    if (target === author) return reply("❌ Você não pode roubar a si mesmo.");
    const victim = db.users[target];
    if (!victim) return reply("❌ A vítima não possui registro no RPG.");
    const hoje = new Date().toLocaleDateString('pt-BR');
    if (!thief.cooldowns) thief.cooldowns = {};
    if (thief.last_roubo_date !== hoje) {
        thief.last_roubo_date = hoje;
        thief.roubos_hoje = 0;
    }
if (!victim.lista_agressores.includes(author)) {
    victim.lista_agressores.push(author);
}
    if (thief.roubos_hoje >= 5) return reply("⛔ Limite atingido! Você já tentou roubar 5 vezes hoje.");
    if (victim.gold < 50) {
        return reply("❌ A vítima é muito pobre! Ela precisa de pelo menos 50 de Gold.");
    }
    thief.roubos_hoje++; 
    if (victim.inventario.escudo > 0) {
        victim.inventario.escudo -= 1;
        rpg.SAVE(db);
        let msgEscudo = `🛡️ *ROUBO BLOQUEADO!* 🛡️\n\n`;
        msgEscudo += `👤 @${author.split('@')[0]} tentou roubar @${target.split('@')[0]}.\n`;
        msgEscudo += `⚔️ O alvo usou um *Escudo* para se defender!\n`;
        msgEscudo += `📉 O escudo da vítima foi danificado.\n`;
        msgEscudo += `⚠️ Tentativas usadas: ${thief.roubos_hoje}/5`;
        return shizuku.sendMessage(from, { text: msgEscudo, mentions: [author, target] });
    }
    const chanceSucesso = 50; 
    const sorteio = Math.floor(Math.random() * 100);
    if (sorteio <= chanceSucesso) {
        const porcentagem = Math.floor(Math.random() * 15) + 5; 
        const valorRoubado = Math.floor(victim.gold * (porcentagem / 100));
        victim.gold -= valorRoubado;
        thief.gold += valorRoubado;
        rpg.SAVE(db);
        let msgSucesso = `💥 *ROUBO BEM-SUCEDIDO!* 💥\n\n`;
        msgSucesso += `👤 *Ladrão:* @${author.split('@')[0]}\n`;
        msgSucesso += `👥 *Vítima:* @${target.split('@')[0]}\n`;
        msgSucesso += `💰 *Valor:* ${valorRoubado} Gold (${porcentagem}%)\n`;
        msgSucesso += `📊 *Tentativas:* ${thief.roubos_hoje}/5\n\n`;
        msgSucesso += `🤫 _Melhor esconder esse ouro rápido!_`;
        shizuku.sendMessage(from, { text: msgSucesso, mentions: [author, target] });
    } else {
        const multa = Math.floor(Math.random() * 30) + 10;
        const perdaReal = Math.min(thief.gold, multa);
        thief.gold -= perdaReal;
        victim.gold += perdaReal;
        rpg.SAVE(db);
        let msgFalha = `👮 *VOCÊ FOI PEGO!* 👮\n\n`;
        msgFalha += `❌ @${author.split('@')[0]}, você falhou miseravelmente.\n`;
        msgFalha += `💸 Teve que pagar uma multa de *${perdaReal} Gold* para a vítima.\n`;
        msgFalha += `⚠️ Tentativas: ${thief.roubos_hoje}/5`;
        shizuku.sendMessage(from, { text: msgFalha, mentions: [author] });
    }
    break;
}

case 'vingancagold':
case 'vingancaouro':
case 'vinganca': {
    if (!IsModoRpg) return reply("🎮 O modo RPG está desativado!");
    const db = rpg.DB();
    const victim = db.users[sender]; 

    if (!victim) return reply("⚠️ Registro não encontrado.");
    const hoje = new Date().toLocaleDateString('pt-BR');
    if (victim.last_reset_vinganca !== hoje) {
        victim.lista_agressores = [];
        victim.last_reset_vinganca = hoje;
        rpg.SAVE(db);
    }

    if (victim.lista_agressores.length === 0) {
        return reply("🕊️ *PAZ:* Ninguém tentou te roubar hoje. Não há motivos para vingança!");
    }
    const target = menc_os2 ? menc_os2 : null;
    
    if (!target) {
        let lista = `⚔️ *LISTA DE AGRESSORES (HOJE)* ⚔️\n\n`;
        victim.lista_agressores.forEach((id, i) => {
            lista += `${i + 1}. @${id.split('@')[0]}\n`;
        });
        lista += `\n*Use:* #vinganca @user para revidar!`;
        return shizuku.sendMessage(from, { text: lista, mentions: victim.lista_agressores });
    }
    if (!victim.lista_agressores.includes(target)) {
        return reply("❌ Este usuário não te atacou hoje. Você não pode usar a vingança contra ele!");
    }
    const thief = db.users[target]; 
    if (thief.inventario.escudo > 0) {
        thief.inventario.escudo -= 1;
        rpg.SAVE(db);
        return reply(`🛡️ @${target.split('@')[0]} usou um escudo e bloqueou sua vingança!`, {mentions: [target]});
    }
    const sorteio = Math.floor(Math.random() * 100);
    if (sorteio <= 70) {
        const valorVinganca = Math.floor(thief.gold * 0.25); 
        thief.gold -= valorVinganca;
        victim.gold += valorVinganca;
        victim.lista_agressores = victim.lista_agressores.filter(id => id !== target);
        rpg.SAVE(db);

        reply(`🔥 *VINGANÇA CONCLUÍDA!* 🔥\n\n@${sender.split('@')[0]} recuperou sua honra e roubou *${valorVinganca} Gold* de @${target.split('@')[0]}!`, {mentions: [sender, target]});
    } else {
        reply(`💀 *FALHA NA VINGANÇA:* Você tentou revidar, mas @${target.split('@')[0]} foi mais rápido e fugiu!`, {mentions: [target]});
    }
    break;
}

case 'embebedar': {
    if (!IsModoRpg) return reply("🎮 O modo RPG está desativado!");
    const db = rpg.DB();
    const user = db.users[sender];
    const target = menc_os2;

    if (!target) return reply("🍾 Marque quem você quer embebedar!");
    if (user.inventario.bebida <= 0) return reply("🛒 Você não tem cachaça! Compre na #loja.");

    const vitima = db.users[target];
    if (!vitima) return reply("❌ Alvo não registrado.");
    user.inventario.bebida -= 1;
    vitima.bebado = (vitima.bebado || 0) + 25;
    let extra = "";
    if (vitima.bebado > 70) {
        vitima.hp -= 15;
        extra = "\n🤢 O alvo está tão bêbado que passou mal e perdeu 15 de HP!";
    }
    rpg.SAVE(db);
    let msgBebado = `🍾 *SÁUDE!* 🍾\n\n`;
    msgBebado += `@${sender.split('@')[0]} obrigou @${target.split('@')[0]} a virar um copo de cachaça!\n`;
    msgBebado += `🍺 Nível de embriaguez do alvo: *${vitima.bebado}%*${extra}`;

    shizuku.sendMessage(from, { text: msgBebado, mentions: [sender, target] });
    break;
}

case 'pixrpg':
case 'transferir': {
    if (!IsModoRpg) return reply("🎮 O modo RPG está desativado!");
    const db = rpg.DB();
    const author = sender;
    const partes = q.includes('/') ? q.split('/') : q.split(' ');
    const alvoArg = partes[0]?.trim();
    const quantiaArg = partes[1]?.trim();
    const target = menc_os2 || (alvoArg ? (alvoArg.includes('@') ? alvoArg : alvoArg.replace(/\D/g,'') + '@s.whatsapp.net') : null);
    const quantia = Math.floor(Number(quantiaArg?.replace(/[^\d]/g, '')) || 0);
    if (!target || quantia <= 0) return reply(`⚠️ *Como usar:* \n${prefix}pixrpg @user/quantia`);
    if (target === author) return reply("❌ Você não pode fazer um PIX para você mesmo.");
    const remetente = db.users[author];
    const destino = db.users[target];
    if (!remetente) return reply("⚠️ Você não possui registro no RPG.");
    if (!destino) return reply("⚠️ O destinatário não possui registro no RPG.");
    if (remetente.gold < quantia) return reply("❌ Saldo insuficiente para a transferência.");
    const taxa = Math.floor(quantia * 0.05);
    const valorFinal = quantia - taxa;
    remetente.gold -= quantia;
    destino.gold += valorFinal;
    rpg.SAVE(db);
    shizuku.sendMessage(from, { text: Mess.MsgPixRpg(prefix, author, quantia, target, remetente, taxa), mentions: [author, target] });
    break;
}

case 'addgold':
case 'addouro': {
    if (!SoDono) return reply("⛔ Comando reservado ao dono.");
    const partes = q.includes('/') ? q.split('/') : q.split(' ');
    const target = menc_os2 || (partes[0] ? partes[0].replace(/\D/g,'') + '@s.whatsapp.net' : null);
    const quantia = Math.floor(Number(partes[1]?.replace(/[^\d]/g, '')) || 0);

    if (!target || quantia <= 0) return reply("⚠️ Use: #addgold @user/quantia");

    rpg.addGold(target, quantia);
    reply(`✅ *BENÇÃO DIVINA:* \nAdicionado ${quantia} Gold para @${target.split('@')[0]}.`, {mentions: [target]});
    break;
}

case 'addxp': {
    if (!SoDono) return reply("⛔ Comando reservado ao dono.");
    const partes = q.includes('/') ? q.split('/') : q.split(' ');
    const target = menc_os2 || (partes[0] ? partes[0].replace(/\D/g,'') + '@s.whatsapp.net' : null);
    const quantia = Math.floor(Number(partes[1]?.replace(/[^\d]/g, '')) || 0);

    if (!target || quantia <= 0) return reply("⚠️ Use: #addxp @user/quantia");

    const up = rpg.addXp(target, quantia);
    let msgXp = `✨ *XP CONCEDIDO:* \nAdicionado ${quantia} XP para @${target.split('@')[0]}.`;
    if (up.subiu) msgXp += `\n🆙 O usuário subiu para o nível *${up.level}*!`;

    reply(msgXp, {mentions: [target]});
    break;
}

case 'delrpg':
case 'resetrpg': {
    if (!IsModoRpg) return reply("🎮 O modo RPG está desativado!");
    const db = rpg.DB();
    if (!db.users[sender]) return reply("⚠️ Você não tem um perfil para deletar.");
    if (!global.confirmacaoReset) global.confirmacaoReset = [];
    
    if (!global.confirmacaoReset.includes(sender)) {
        global.confirmacaoReset.push(sender);
        reply(
            `⚠️ *ATENÇÃO: RESET DE PROGRESSO* ⚠️\n\n` +
            `Você está prestes a apagar todo seu ouro, nível e itens. Esta ação é irreversível!\n\n` +
            `Para confirmar, digite o comando novamente: *${prefix}delrpg*`
        );
        setTimeout(() => {
            global.confirmacaoReset = global.confirmacaoReset.filter(id => id !== sender);
        }, 20000);
    } else {
        delete db.users[sender];
        rpg.SAVE(db);
        global.confirmacaoReset = global.confirmacaoReset.filter(id => id !== sender);
        reply("💥 *RECOMEÇO:* Seu perfil foi deletado com sucesso. Envie qualquer mensagem para iniciar um novo registro.");
    }
    break;
}

case 'minerar': {
    if (!IsModoRpg) return reply("🎮 O modo RPG está desativado!");
    const db = rpg.DB();
    const user = db.users[sender];
    if (!user) return reply("⚠️ Registro não encontrado.");
    if (!user.ferramentas.picareta) {
        return reply("❌ Você não tem uma Picareta! Compre uma na *#loja* para poder minerar.");
    }
    const hoje = new Date().toLocaleDateString('pt-BR');
    if (user.minerar_data !== hoje) {
        user.minerar_tentativas = 0;
        user.minerar_data = hoje;
    }
    if (user.minerar_tentativas >= 5) {
        return reply("⛏️ Suas mãos estão cansadas! Você já minerou 5 vezes hoje. Volte amanhã.");
    }
    const acao = rpg.usarFerramenta(sender, 'picareta');
    user.minerar_tentativas++;
    const ouroGan = Math.floor(Math.random() * 60) + 30;
    const xpGan = Math.floor(Math.random() * 25) + 15;
    rpg.addGold(sender, ouroGan);
    const up = rpg.addXp(sender, xpGan);
    rpg.SAVE(db);

    let msgMinerar = `╭─⭑💎 *SHIZUKU RPG - MINERAÇÃO* 💎⭑─╮\n│\n`;
    msgMinerar += `│ 👤 *Minerador:* ${user.nome}\n`;
    msgMinerar += `│ ⛏️ *Ferramenta:* ${user.ferramentas.picareta ? user.ferramentas.picareta.tipo : 'Quebrou!'}\n`;
    msgMinerar += `│ 💰 *Ouro:* +${ouroGan}\n`;
    msgMinerar += `│ ✨ *XP:* +${xpGan}\n`;
    if (up.subiu) msgMinerar += `│ 🆙 *LEVEL UP:* ${up.level}!\n`;
    msgMinerar += `│ 📉 *Tentativas:* ${user.minerar_tentativas}/5\n`;
    if (acao === "QUEBROU") msgMinerar += `│ ⚠️ *AVISO:* Sua picareta quebrou!\n`;
    msgMinerar += `│\n╰───⭑ Shizuku RPG ⭑───╯`;
    shizuku.sendMessage(from, { 
        image: { url: "https://files.catbox.moe/cw7vwx.jpg" }, 
        caption: msgMinerar, 
        mentions: [sender] 
    }, { quoted: info });
    break;
}

case 'capinar':
case 'trabalharroça': {
    if (!IsModoRpg) return reply("🎮 O modo RPG está desativado!");
    const db = rpg.DB();
    const user = db.users[sender];
    if (!user) return reply("⚠️ Registro não encontrado. Envie uma mensagem comum primeiro.");
    if (!user.ferramentas.enxada) {
        return reply("❌ Você não tem uma *Enxada*! Compre uma na *#loja* para poder capinar o terreno.");
    }
    const hoje = new Date().toLocaleDateString('pt-BR');
    if (user.capinar_data !== hoje) {
        user.capinar_tentativas = 0;
        user.capinar_data = hoje;
    }
    if (user.capinar_tentativas >= 5) {
        return reply("🚜 Você já capinou demais por hoje e está exausto! Volte amanhã.");
    }
    const acao = rpg.usarFerramenta(sender, 'enxada');
    user.capinar_tentativas++;
    const ouroGan = Math.floor(Math.random() * 40) + 20; 
    const xpGan = Math.floor(Math.random() * 40) + 30;   
    rpg.addGold(sender, ouroGan);
    const up = rpg.addXp(sender, xpGan);
    rpg.SAVE(db);
    let msgCapinar = `╭─⭑🚜 *SHIZUKU RPG - CAPINAR* ⭑─╮\n│\n`;
    msgCapinar += `│ 👤 *Trabalhador:* ${user.nome}\n`;
    msgCapinar += `│ 🌾 *Serviço:* Limpeza de terreno\n`;
    msgCapinar += `│ ✨ *XP:* +${xpGan} (Foco em Evolução)\n`;
    msgCapinar += `│ 💰 *Ouro:* +${ouroGan}\n`;
    if (up.subiu) {
        msgCapinar += `│ 🆙 *LEVEL UP:* Você subiu para o nível ${up.level}!\n`;
    }
    msgCapinar += `│ 📉 *Tentativas:* ${user.capinar_tentativas}/5\n`;
    if (acao === "QUEBROU") {
        msgCapinar += `│ ⚠️ *AVISO:* Sua enxada quebrou de tanto trabalhar!\n`;
    }
    msgCapinar += `│\n╰───⭑ Shizuku RPG ⭑───╯`;
    shizuku.sendMessage(from, { 
        image: { url: "https://files.catbox.moe/cw7vwx.jpg" }, 
        caption: msgCapinar, 
        mentions: [sender] 
    }, { quoted: info });
    
    break;
}

case 'rankrpg':
case 'rankgold': {
    if (!IsModoRpg) return reply("🎮 O modo RPG está desativado!");
    const db = rpg.DB();
    const listaGeral = Object.keys(db.users).map(id => ({ id, ...db.users[id] }));
    const sorted = listaGeral.sort((a, b) => {
        if (b.level !== a.level) return b.level - a.level;
        return (b.xp || 0) - (a.xp || 0);
    });
    let msgRank = `╭─⭑🌟 *SHIZUKU RPG - RANKING* 🌟⭑─╮\n│\n`;
    sorted.slice(0, 10).forEach((u, i) => {
        const medalha = i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : "🔹";
        msgRank += `│ ${medalha} *${i + 1}º:* ${u.nome}\n`;
        msgRank += `│ ⚔️ Nível: ${u.level} | 💰 Ouro: ${u.gold}\n`;
        msgRank += `│ ───────────────\n`;
    });
    msgRank += `╰───⭑ Shizuku RPG ⭑───╯`;
    reply(msgRank);
    break;
}

case 'carteirarpg':
case 'carteira': {
    if (!IsModoRpg) return reply("🎮 O modo RPG está desativado!");
    const user = rpg.DB().users[sender];
    if (!user) return reply("⚠️ Registro não encontrado.");
    reply(Mess.CarteiraRpg(user, rpg));
    break;
}

case 'listarpg':
case 'rgrpglist': {
    if (!IsModoRpg) return reply("🎮 O modo RPG está desativado!");
    const db = rpg.DB();
    const users = Object.values(db.users);
    if (users.length === 0) return reply("⚠️ Nenhum usuário registrado.");
    let msgList = `╭─⭑💮 *AVENTUREIROS REGISTRADOS* 💮⭑─╮\n│\n`;
    users.forEach((u, i) => {
        msgList += `│ ${i + 1}. ${u.nome} (Lvl: ${u.level})\n`;
    });
    msgList += `│\n╰───⭑ Shizuku RPG ⭑───╯`;
    reply(msgList);
    break;
}

case 'info_rpg':
case 'rpghelp': {
await reagir(from, "🎉")
await sendMenu(conn, from, Mess.Rpg_info(prefix), info)
break;
}

case 'donogp': {
    try {
        if (!isGroup) return reply("Só em grupos");
        if (!SoDono) return reply("Só o dono do Bot");
        if (!antiarqv[from]) return reply('*O anti-roubo precisa estar ativo primeiro.*');
        if (!menc_os2) return reply('*Mencione alguém para tornar dono do grupo.*');
        if (!antiarqv[from].donos) {
            antiarqv[from].donos = ["", "", "", "", "", ""];
        }
        const novoDono = menc_os2;
        if (antiarqv[from].donos.includes(novoDono)) {
            return reply("*Este número já é um dos donos registrados.*");
        }
        let vagaEncontrada = antiarqv[from].donos.findIndex(d => d === "");
        if (vagaEncontrada !== -1) {
            antiarqv[from].donos[vagaEncontrada] = novoDono;
            reply(`*Dono registrado na vaga #${vagaEncontrada + 1}*`);
        } else {
            antiarqv[from].donos[0] = novoDono;
            reply('*Vagas cheias! O Dono #1 foi substituído pelo novo número.*');
        }
        fs.writeFileSync(diretorio_arqv, JSON.stringify(antiarqv, null, 2));
    } catch (e) {
        console.error(e);
        reply('*Erro ao registrar dono.*');
    }
    break;
}

case 'deldonogp': {
    try {
        if (!isGroup) return reply("Só em grupos");
        if (!SoDono) return reply("Só o dono do Bot");
        if (!antiarqv[from]?.donos) return reply('*Nenhum dono registrado neste grupo.*');
        if (!menc_os2) return reply('*Mencione quem você deseja remover dos donos.*');

        const alvo = menc_os2.replace('@', '') + '@s.whatsapp.net';
        const index = antiarqv[from].donos.indexOf(alvo);

        if (index === -1) {
            return reply("*Este usuário não consta na lista de donos do grupo.*");
        }
        antiarqv[from].donos[index] = "";
        fs.writeFileSync(diretorio_arqv, JSON.stringify(antiarqv, null, 2));
        
        reply(`*Usuário removido da vaga de dono #${index + 1} com sucesso.*`);
    } catch (e) {
        console.error(e);
        reply('*Erro ao remover dono.*');
    }
    break;
}

case 'anti-arqv': 
try {
if(!isGroup) return reply("So Em grupos")
if(!SoDono) return reply("Só o dono do bot")
const buxeta = await conn.groupMetadata(from)
        if (!antiarqv[from]) {
            antiarqv[from] = {
                ativo: true,
                nome: buxeta.subject,
                donos: ["","","","","",""],
            };
            fs.writeFileSync(diretorio_arqv, JSON.stringify(antiarqv, null, 2));
            reply('*anti roubo ativo*');
        } else {
            const ant_1 = antiarqv[from];
            antiarqv[from].ativo = !ant_1.ativo;
            fs.writeFileSync(diretorio_arqv, JSON.stringify(antiarqv, null, 2));
                reply(`*anti roubo de grupo ${antiarqv[from].ativo ? "ativado" : "desativado"} com sucesso*`);    
        }
    } catch (e) {
        console.error(e);
        reply('*erro..*');
    }
    break;
    
case 'listaaluguel':
case 'alugueis': {
    if (!SoDono) return reply(enviar.msg.donosmt);
    reply("⏳ *Aguarde...* Buscando informações dos grupos.");
    const listaMsg = await aluguel.listar(shizuku);
    await mention(listaMsg)
    break;
}

case 'aluguel':
case 'addaluguel': {
    if (!SoDono && !isnit) return reply(enviar.msg.donosmt);
    const partes = q.split('|');
    if (!q || partes.length < 1) {
        return reply(`📋 *Formato:* ${prefix}addaluguel @dono | índice | 30d\n\n*Exemplo:* ${prefix}addaluguel | 1 | 30d (pega criador do grupo 1)`);
    }
    let donoAluguel = partes[0]?.trim() || "";
    let inputId = partes[1]?.trim() || from; 
    let tempoAluguel = partes[partes.length - 1]?.trim();
    let groupId = inputId;
    if (!isNaN(inputId) && inputId.length <= 3) {
        const getGroups = await shizuku.groupFetchAllParticipating();
        const groups = Object.values(getGroups)
            .filter(v => v.id.endsWith('@g.us'))
            .sort((a, b) => (b.participants.length - a.participants.length));
        const indice = parseInt(inputId) - 1;
        if (groups[indice]) {
            groupId = groups[indice].id;
        } else {
            return reply("❌ Esse número de grupo não existe na lista.");
        }
    }
    if (!donoAluguel || donoAluguel === "") {
        try {
            const metadata = await shizuku.groupMetadata(groupId);
            donoAluguel = metadata.ownerPn || metadata.subjectOwnerPn || sender;
        } catch {
            donoAluguel = sender;
        }
    } else if (menc_os2) {
        donoAluguel = menc_os2[0]; 
    } else {
        donoAluguel = donoAluguel.split("@")[0] + "@s.whatsapp.net";
    }
    if (!tempoAluguel || !tempoAluguel.match(/\d+(d|h|m)/)) {
        return reply("❌ Tempo inválido! Use: 30d, 7d, 12h, etc.");
    }
    const res = aluguel.adicionar(groupId, donoAluguel, tempoAluguel);
    if (res) {
   await shizuku.sendMessage(groupId, { 
    text: Mess.MsgGpAluguel(res), 
    mentions: [res.dono] 
    });
        let nomeGp = "Grupo Registrado";
        try {
            const m = await shizuku.groupMetadata(groupId);
            nomeGp = m.subject;
        } catch {}
      mention(Mess.SucessTxtAluguel(nomeGp, groupId, res))
    } else {
        reply("❌ Erro ao salvar no banco de dados.");
    }
    break;
}

case 'rm_aluguel':
case 'rmaluguel': {
    if (!SoDono) return reply(enviar.msg.donosmt)
    const idRemovido = aluguel.remover(parseInt(q));
    if (idRemovido) reply(`🗑️ Grupo ${idRemovido} removido da base de aluguel.`);
    else reply("❌ Índice inválido.");
    break;
}

case 'statusaluguel':
case 'veraluguel': {
    if(!isGroup) return reply(enviar.msg.grupo)
    const msgStatus = await aluguel.statusAluguel(conn, from, OwnerNumber);
    reply(msgStatus, { mentions: true });
    break;
}

case 'renovar':
case 'renovar_aluguel': {
    if (!SoDono) return reply(enviar.msg.donosmt);
    const partes = q.split('/');
    if (partes.length < 2) return reply("❌ *Formato:* #renovar [número] / [tempo]\nEx: #renovar 1 /30d");
    const indice = parseInt(partes[0].trim());
    const tempo = partes[1].trim();
    const res = aluguel.renovar(indice, tempo);
    if (res === "FORMATO_INVALIDO") return reply("❌ Tempo inválido! Use d, h ou m (ex: 30d).");
    if (!res) return reply("❌ Esse número não corresponde a nenhum grupo na lista.");
    try {
        const mdata = await shizuku.groupMetadata(res.id);
        const nomeGrupo = mdata.subject;
        const adms = mdata.participants.filter(p => p.admin !== null).map(p => p.id);
        reply(Mess.AvisoAluguel(res, nomeGrupo));
        await shizuku.sendMessage(res.id, { text: Mess.AvisoGpAluguel(prefix, res),mentions: adms });
    } catch (e) {
        reply(`✅ *ALUGUEL RENOVADO!*\n\n⚠️ O tempo foi atualizado, mas não consegui avisar no grupo (talvez o bot não esteja lá).`);
    }
    break;
}

case 'delaluguel':
case 'del-aluguel': {
    if (!SoDono) return reply(enviar.msg.donosmt);
    const removido = aluguel.deletarLocal(from);
    if (removido) {
        reply("🗑️ *Registro removido!* Este grupo não possui mais aluguel e o bot poderá sair em breve.");
    } else {
        reply("⚠️ Este grupo não possui nenhum registro de aluguel no banco de dados.");
    }
    break;
}

case 'info_aluguel':
case 'ajuda_aluguel': {
if (!SoDono && !isnit) return reply(enviar.msg.donosmt);
reagir(from, "🎉");
await sendMenu(conn, from, Mess.GuiaAluguel(prefix), info);
break;
}

case 'rm_aviso':
case 'rm_avisos':  
if(!isGroup) return reply(enviar.msg.grupo)  
if(!isGroupAdmins) return reply(enviar.msg.adm)
for ( i of black_) {var RDFA = i}
if(!JSON.stringify(RDFA.PUXAR).includes(from)) return reply(mess.noWarning(prefix))
RDFA.PUXAR.splice(RDFA.PUXAR.indexOf(from))
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
reply(mess.warningRemoved())
break

case 'rg_aviso':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)  
var [hr, ms] = q.trim().split("|")
if(!q.trim().includes(":") && !q.trim().includes("|")) return reply(mess.warningSyntax(prefix))
var i5 = black_?.map(i => i?.hora)?.indexOf(hr)
if(JSON.stringify(black_[i5]?.PUXAR)?.includes(from)) {
black_[i5].PUXAR.splice(black_[i5].PUXAR.map(i => i.idgp).indexOf(from))
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
setTimeout(() => {
reply(mess.sucessDeleteWarning(prefix))
}, 500)
} else if(!JSON.stringify(black_).includes(hr)) {
black_.push({hora: hr, PUXAR: [{idgp: from, msg: ms, avisou: false}]})
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
reply(mess.sucessWarning())
} else if(!JSON.stringify(black_[i5].PUXAR).includes(from)) {
black_[i5].PUXAR.push({idgp: from, msg: ms, avisou: false})
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
reply(mess.sucessWarning())
}
break
  
case 'iddogrupo':
if(!SoDono) return reply(enviar.msg.donosmt)
reply(from)
break

case 'fechargp':
case 'fechamento': { 
    if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm);
    if (!isGroup || !isBotGroupAdmins) return reply(enviar.msg.grupo);
    try {
        let barra = q.trim(); 
        if (!barra.includes(':')) return reply("Formato inválido. Use HH:MM");
        let [horas, minutos] = barra.split(':');
        if (!horas || !minutos) return reply("Horário incompleto. Use HH:MM");
        if (isNaN(horas) || isNaN(minutos)) return reply("Use apenas números no horário.");
        horas = horas.padStart(2, '0');
        minutos = minutos.padStart(2, '0');
        if (parseInt(horas) > 23 || parseInt(minutos) > 59) return reply("Horário inválido.");

        let horarioFinal = `${horas}:${minutos}:00`;
        definirFechamento(from, horarioFinal); 
await reply(`🔒 O grupo será fechado às ${horarioFinal}~ 🕰️\nFiquem atentos, tá bom? A Shizuku-Bot vai cuidar de tudo! `);
    } catch (e) {
        console.error(e);
        reply("Ocorreu um erro ao definir o horário de fechamento.");
    }
}
break;

case 'abrirgp':
case 'abertura': {
    if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm);
    if (!isGroup || !isBotGroupAdmins) return reply(enviar.msg.grupo);
    try {
        let barra = q.trim(); 
        if (!barra.includes(':')) return reply("Formato inválido. Use HH:MM");
        let [horas, minutos] = barra.split(':');
        if (!horas || !minutos) return reply("Horário incompleto. Use HH:MM");
        if (isNaN(horas) || isNaN(minutos)) return reply("Use apenas números no horário.");
        horas = horas.padStart(2, '0');
        minutos = minutos.padStart(2, '0');
        if (parseInt(horas) > 23 || parseInt(minutos) > 59) return reply("Horário inválido.");

        let horarioFinal = `${horas}:${minutos}:00`;
        definirAbertura(from, horarioFinal); 
        reply(`🔓 O grupo vai abrir às ${horarioFinal}~ ⏰\nFiquem atentos, meus amores! Eu vou estar de olho em vocês`);
    } catch (e) {
        console.error(e);
        reply("Ocorreu um erro ao definir o horário de abertura.");
    }
}
break;

case 'rmhorario':
case 'remover_horario':
case 'removerhorario': { 
    if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm);
    if (!isGroup || !isBotGroupAdmins) return reply(enviar.msg.grupo);
    try {
if (!horarios[from]) return reply("❌ Nenhum horário definido para este grupo.");
removerHorarios(from); 
reply("✅ Horários removidos com sucesso!");
} catch (e) {
console.error("Erro ao remover horário:", e);
reply("Ocorreu um erro ao tentar remover os horários.");
}
}
break;
//=========== [ ÍNICIO JOGOS ] ========= //
case 'listfakes':
case 'fakelista':
case 'listafake': {
  if (!isGroup) return shizuku.sendMessage(from, { text: 'Este comando só pode ser usado em grupos!' }, { quoted: selo })
  if (!isBotGroupAdmins && !isGroupAdmins) return reply(enviar.msg.adm())
  
const groupMetadata2 = await shizuku.groupMetadata(from);
let participantes = groupMetadata2.participants;
let fakeList = participantes.filter(p => {
let num = p.phoneNumber.split('@')[0]
return !num.startsWith('55')
}).map(p => `@${p.phoneNumber.split('@')[0]}`)

if (fakeList.length === 0) {
await shizuku.sendMessage(from, { text: 'Nenhum número com DDD diferente de 55 foi encontrado no grupo.' }, { quoted: selo })
} else {
let texto = `🌐 *Números com DDD diferente de 55 (Fakes?)*:\n\n${fakeList.join('\n')}`
await shizuku.sendMessage(from, { text: texto, mentions: fakeList.map(u => u.replace('@', '') + '@s.whatsapp.net') }, { quoted: selo })
}
}
break

case 'banfake':
case 'banfakes': {
if (!isGroup) {
await shizuku.sendMessage(from, { text: 'Este comando só pode ser usado em grupos!' }, { quoted: selo });
return;
}
if (!isBotGroupAdmins) {
await reply("eu nem sou administrador, como vou realizar essa ação?");
return; 
}
if(!isGroupAdmins) {
await reply("você nem é administrador, humano inútil"); 
return;
}

const groupMetadata = await shizuku.groupMetadata(from);
const participantes = groupMetadata.participants;
const fakes = participantes.filter(p => !p.phoneNumber.startsWith('55'));

if (fakes.length === 0) {
shizuku.sendMessage(from, { text: 'Nenhum número com DDD diferente de 55 foi encontrado no grupo.' }, { quoted: selo });
} else {
const fakeIds = fakes.map(p => p.jid);
for (const fakeId of fakeIds) {
await shizuku.groupParticipantsUpdate(from, [fakeId], 'remove');
}
shizuku.sendMessage(from, { text: 'Membros com DDD diferente de 55 foram removidos do grupo.' }, { quoted: selo});
}
}
break;

case 'limpar_mortos-cnt':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.donosmt)
bla = [] 
var CNT_RS = countMessage[countMessage.map(i => i.groupId).indexOf(from)].numbers
for ( i = 0; i < CNT_RS.map( i => i.id).length; i++) { bla.push(CNT_RS.map( i => i.id)[i])};
for ( i of groupMembers) {bla.splice(bla.indexOf(i.id), 1)};
for ( i of bla) {CNT_RS.splice(CNT_RS.indexOf(i), 1)};
fs.writeFileSync("./shizuku-config/media/countmsg.json", JSON.stringify(countMessage))
reply("Usuários que já foi removido, ou saiu do grupo, foi tirado do contador de mensagens..")
break

case 'tirar_docnt':
if(!SoDono) return
if(!isGroup) return reply(enviar.msg.donosmt)
var i2 = countMessage.map(i => i.groupId).indexOf(from) 
var i = countMessage[i2].numbers.map(i => i.id).indexOf(q.trim()+"@s.whatsapp.net")  
countMessage[i2].numbers.splice(i,1)
fs.writeFileSync("./shizuku-config/media/countmsg.json", JSON.stringify(countMessage))
reply("Usuário tirado do contador de mensagens com sucesso...")
break

case 'anotar':
case 'tirar_nota':
case 'rmnota':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só adm pode utilizar este tipo de comando.`)
if(command == "anotar") {
var [q5, q10] = q.trim().split("|")
if(!q5 || !q10 || !q.includes("|")) return reply(`Digite o título da anotação e o texto que deseja anotar..\nExemplo: ${prefix}anotar Cachorro|Cachorros são bom pra comer na Venezuela...`)
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q5)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q5)  
if(anotar[i2].puxar[i3].nota == q5) return reply(`Esta anotação já está inclusa, utilize outro título.. Ou você pode tirar com\n${prefix}tirar_nota ${q5}`)
}
}
if(!JSON.stringify(anotar).includes(from)) {
anotar.push({grupo: from, puxar: [{nota: q5, anotacao: q10}]})
fs.writeFileSync("./database/func/tabela/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")
} else {
anotar[i2].puxar.push({nota: q5, anotacao: q10})
fs.writeFileSync("./database/func/tabela/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")  
}
} else {
if(!q) return reply("Digite qual anotação deseja tirar pelo título..")
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
}
}
if(0 > anotar[i2].puxar.map(i => i.nota).indexOf(q)) return reply("Esta nota não está inclusa, verifique com atenção...")
anotar[i2].puxar.splice(i3, 1)
fs.writeFileSync("./database/func/tabela/anotar.json", JSON.stringify(anotar))
reply(`Anotação ${q} tirada com sucesso...`)
}
break

case 'anotacao':
case 'anotacoes':  
case 'nota':
case 'notas':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(command == "anotacao" || command == "nota") {
if(!q) return reply("Digite o título da anotação que deseja puxar..")
if(!JSON.stringify(anotar).includes(from)) return reply("Este grupo não tem nenhuma anotação...")
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(!JSON.stringify(anotar[i2].puxar).includes(q)) return reply("Não contém nenhuma anotação com este título.")
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
mentions(`〈 ${anotar[i2].puxar[i3].anotacao} 〉`)
} else {
var i2 = anotar.map(i => i.grupo).indexOf(from)    
if(anotar[i2].puxar.length == 0) return reply("Este grupo não tem nenhuma anotação...")    
var i2 = anotar.map(i => i.grupo).indexOf(from) 
var antr = anotar[i2].puxar 
txtin = `Aqui está todas as anotações registradas em minha database do grupo: *[ ${groupName} ]*\n`
for ( i = 0; i < antr.length; i++) {
txtin += `\n↝ Anotação: ⟮ ${anotar[i2].puxar[i].nota} ⟯ - 〈 ${anotar[i2].puxar[i].anotacao} 〉\n`
}
txtin += ""
mentions(txtin)
}
break

case 'download-link':
if(q.includes("video") || q.includes("mp4")) {
shizuku.sendMessage(from, {video: {url: q}, mimetype: 'video/mp4'}, {quoted: selojp}).catch(e => {
reply("Erro, visualize se este link é válido...")
})
} else if(q.includes("webp") || q.includes("jpg")) {
shizuku.sendMessage(from, {image: {url: q}}, {quoted: selojp}).catch(e => {
reply("Erro, visualize se este link é válido...")
})
}
break

// --------------------------- MENUS ---------------------------

case 'menuprincipal':
case 'menup':{
await sendMenu(conn, from, linguagem.menup(prefix, NomeDoBot, sender, pushname, SoDono, isPremium), info)
}break;//

case 'menu': case 'm': {
await reagirMenu(); 
const menuTexto = linguagem.menu(prefix, NomeDoBot, nmrdn, sender,NickDono, pushname, SoDono, isPremium, version, adivinha, time, date);

 if(isAudioMenu) {
await conn.sendMessage(from, { audio: fs.readFileSync("./shizuku-config/dono/menu/audio-menu/audio-menu.mp3"), mimetype: "audio/mpeg"}, { quoted: selo });
}
await sendMenu(shizuku, from, menuTexto, selo);
} break;

case 'menuadm':
case 'adm': {
  await reagirMenu();
  const txtMenu = linguagem.menuadm(prefix, sender);
  await sendMenu(conn, from, txtMenu, info);
  break; 
}

case 'menudono':
case 'donomenu': {
  await reagir(from, "👑")
  const txtMenu = linguagem.menudn(prefix, sender);
  await sendMenu(conn, from, txtMenu, info);
  break;
}

case 'menudown':
case 'downloads': {
  await reagirMenu();
  const txtMenu = linguagem.menudl(prefix, sender);
  await sendMenu(conn, from, txtMenu, info);
  break;
}

case 'menuvip':
case 'menupremium': {
  await reagirMenu();
  const txtMenu = linguagem.menuvip(prefix, sender);
  await sendMenu(conn, from, txtMenu, info);
  break;
}

case 'alteradores':
case 'menualterar': {
  await reagirMenu();
  const txtMenu = linguagem.menual(prefix, sender);
  await sendMenu(conn, from, txtMenu, info);
  break;
}

case 'menufig':
case 'menufigurinhas': {
  await reagirMenu();
  const txtMenu = linguagem.menufig(prefix, sender);
  await sendMenu(conn, from, txtMenu, info);
  break;
}

case 'menulogos':
case 'logos': {
  await reagirMenu();
  const txtMenu = linguagem.menulg(prefix, sender);
  await sendMenu(conn, from, txtMenu, info);
  break;
}

case 'menupesquisas':
case 'pesquisas': {
  await reagirMenu();
  const txtMenu = linguagem.menupq(prefix, sender);
  await sendMenu(conn, from, txtMenu, info);
  break;
}

case 'plaquinhas': {
  await reagirMenu();
  const txtMenu = linguagem.menuadl(prefix, sender);
  await sendMenu(conn, from, txtMenu, info);
  break;
}

case 'efeitosimg':
case 'efeitosimagem':
case 'efeitos': {
  await reagirMenu();
  const txtMenu = linguagem.menuef(prefix, sender);
  await sendMenu(conn, from, txtMenu, info);
  break;
}

case 'menurpg':
case 'rpgmenu':{
  await reagirMenu();
  const txtMenu = linguagem.menuRPG(prefix, sender);
  await sendMenu(conn, from, txtMenu, info);
  break;
}

case 'menunoticias':
case 'noticiasMenu':{
  await reagirMenu();
  const txtMenu = linguagem.noticias(prefix, sender);
  await sendMenu(conn, from, txtMenu, info);
  break;
}

case 'menubrincadeiras':
case 'brincadeiras': {
  if (!isModobn) return reply(`Peça a um admin para ativar o modo brincadeira \n\nex: ${prefix}Modobrincadeira 1`);
  await reagirMenu();
  const txtMenu = linguagem.menubn(prefix, sender);
  await sendMenu(conn, from, txtMenu, info);
  break;
}

case 'verificado-global': 
case 'verificado':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isVerificado) {
nescessario.verificado = true
setNes(nescessario)
reply(`O verificado foi Ativado, ou seja, o selo foi colocado em todos os meus comandos! *Para remover o verificado dos comandos, use o comando novamente.*`) 
} else if(isVerificado) {
nescessario.verificado = false
setNes(nescessario)
reply("O verificado foi Desativado com sucesso, ou seja, o selo foi retirado de todos os meus comandos! *Para reativar é só digitar o comando novamente.*")
}
break

case 'audio-menu': 
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAudioMenu) {
nescessario.menu_audio = true
setNes(nescessario)
reply(`O áudio foi ativado para o menu com sucesso, se quiser desativar é só digitar o comando novamente...`)
} else if(isAudioMenu) {
nescessario.menu_audio = false
setNes(nescessario)
reply(`O áudio foi desativado para o menu com sucesso, se quiser ativar é só digitar o comando novamente...`)
}
break;

case 'get-audio':
case 'm-audio': {
	try {
		if(!SoDono) return reply(enviar.msg.donosmt);
		if(!isQuotedAudio) return reply("Você deve mencionar um áudio para definir como novo audio-menu ");
		await reagir(from, "⌛");
		const localAudioMenu = "./shizuku-config/dono/menu/audio-menu/audio-menu.mp3"
		const isAudio = isQuotedAudio  ? info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.audioMessage : info?.message?.audioMessage;
		const audioMenu  = await baileys.downloadContentFromMessage(isAudio, "audio")
		let buffer = Buffer.from([]);
		for await (const audiu of audioMenu) {
			buffer = Buffer.concat([buffer, audiu]);
			}
		if(fs.existsSync(localAudioMenu)) fs.unlinkSync(localAudioMenu);
	 	fs.writeFileSync(localAudioMenu, buffer);
		reply("*Audio-menu salvo localmente com sucesso.*");
	} catch (e) {
 reply("Erro ao salvar áudio do menu");
 console.log(e.message) 
 }
break
}

case 'console':   
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isConsole) {
nescessario.consoleoff = true
setNes(nescessario)
reply(`- O comando de tirar o console foi ativado com sucesso. Agora não verá mais os comandos nem mensagem dadas no console, mas funcionará perfeitamente, ok?, é bom para evitar banimento de spam no heroku.\n\nSe quiser desativar - Só digitar o comando novamente`)
} else if(isConsole) {
nescessario.consoleoff = false
setNes(nescessario)
reply(`- O comando de tirar o console foi desativado com sucesso. Agora verá os comandos e mensagens dadas no console, mas se for utilizar no heroku, recomendo ativar. é bom para evitar banimento de spam no heroku.\n\nSe quiser ativar - Só digitar o comando novamente`) 
}
break

case 'owner':
case 'odono':
case 'dono': 
case 'infodono':  
await reagir(from, "👑")
await sendMenu(conn, from, getInfo.infoOwner(prefix, NickDono, nmrdn, NomeDoBot, sender), info);
break 

case 'configurar-bot':
await sendMenu(conn, from, getInfo.configbot(prefix), info);
break

case 'destrava':
if(!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
shizuku.sendMessage(from, {text: destrava(prefix)}, {quoted: selojp})
break 

case 'perfil':
try {
    reply(enviar.espere());
    let ppimg
    try {
        ppimg = await shizuku.profilePictureUrl(sender_ou_n, "image")
    } catch {
        ppimg = "https://telegra.ph/file/b5427ea4b8701bc47e751.jpg"
    }
    let getbb
    try {
        const getbbb = await shizuku.fetchStatus(sender_ou_n)
        getbb = getbbb[0]?.status?.status;
    } catch {
        getbb = "privado, ou inexistente!"
    }
    const rand = () => Math.floor(Math.random() * 10)
    const conselho = palavrasc[Math.floor(Math.random() * palavrasc.length)]
    const perfil = await getBuffer(ppimg)
    await shizuku.sendMessage(from, {
        image: perfil,
        caption: Mess.Perfil(conselho, adivinha, getbb, time2, date, groupName, sender_ou_n, rand), mentions: [sender_ou_n]}, { quoted: selojp })
} catch (e) {
 console.error("Erro ao executar comando perfil: " + e)
 reply("erro, não consegui executar o comando, sinto muito")
}
break;

case 'conselhobiblico':
case 'conselhosbiblico':  
case 'conselhosb':   
case 'conselhob':  
var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)]
shizuku.sendMessage(from, {text: mess.conselhoBiblico(tempo, pushname, conselhosb, NomeDoBot, groupName)}, {quoted: selojp, contextInfo: {"mentionedJid": mess.conselhoBiblico(tempo, pushname, conselhosb, NomeDoBot, groupName)}})
break

case 'cantadas': case 'cantada':  
cantadasbb = randomCantadas[Math.floor(Math.random() * randomCantadas.length)]   
let cantadasText = `*${cantadasbb}*`
shizuku.sendMessage(from, {text: cantadasText}, {quoted: selojp, contextInfo: {"mentionedJid": cantadasText}})
break

case 'fatos': case 'curiosidades':  
fatoskk = fatos[Math.floor(Math.random() * fatos.length)]   
let fatosText = `*${fatoskk}*`
shizuku.sendMessage(from, {text: fatosText}, {quoted: selojp, contextInfo: {"mentionedJid": fatosText}})
break

case 'tabela':
shizuku.sendMessage(from, {text: tabela(prefix, NomeDoBot)}, {quoted: selojp})
break 

case 'destrava2':
if(!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
shizuku.sendMessage(from, {text: destrava2 (prefix)}, {quoted: selojp})
break 

case 'idiomas':
case 'idioma':
shizuku.sendMessage(from, {text: getInfo.listLanguages(prefix)}, {quoted: selojp})
break

case 'infobv':
case 'infowelcome':
case 'infobemvindo':
await sendMenu(conn, from, getInfo.bemvindo(prefix), info)
break

case 'getquoted':
case 'getinfo':  
case 'get':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'get-txt':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation, null, 2))
break

case 'gerarcpf':
try {
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
shizuku.sendMessage(from, {text: `CPF gerado com sucesso : ${cpf}`}, {quoted: selojp})
} catch {
reply(mess.error())
}
break

case 'ddd':
try {
if(args.length < 1) return reply(`Use ${prefix + command} 81`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
shizuku.sendMessage(from, {text: dddlist}, {quoted: selojp})	
} catch {
reply(mess.error())
}
break

//===========(ADMS-FUNÇÕES-AKI)=========\\

case 'calculadora':
case 'calcular':  
case 'calc':
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
return reply(JSON.stringify(eval(rsp, null,'\t')))
break 

case 'nomegp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
blat = args.join(" ")
shizuku.groupUpdateSubject(from, `${blat}`)
shizuku.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: selojp})
break

case 'descgp':
case 'descriçãogp':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.adm)
blabla = args.join(" ")
shizuku.groupUpdateDescription(from, `${blabla}`)
shizuku.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: selojp})
break

case 'setfotogp':
case 'fotogp':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
shizuku.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break

case 'linkgp':
case 'linkgroup':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
linkgc = await shizuku.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'recrutar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q) return reply("Cadê o número do usuário que você deseja convidar.")
rcrt = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
linkgc = await shizuku.groupInviteCode(from)
shizuku.sendMessage(rcrt, {text: "*Olá, tudo bem?* Você foi convidado(a) pelo(a) adminstrador(a) do grupo.\nPara entrar no grupo, clique acima!", contextInfo: {externalAdReply: {title: "Clique aqui para participar do grupo.", mediaType: 1, sourceUrl: "https://chat.whatsapp.com/"+linkgc}}})
reply("Convite de recrutamento do usuário, foi enviado para o privado dele com sucesso...")
break


case 'listatm':
if(!SoDono) return reply(enviar.msg.donosmt)
rgp = JSON.parse(fs.readFileSync("./database/func/tmgroup.json"))
if(rgp.length == 0) return reply(`Não contém nenhum registro de transmissão, utilize ${prefix}rgtm no grupo que deseja que ele receba as transmissões do bot..`)
bl = "";
for ( i = 0; i < rgp.length; i++) {
bl += `( ${i+1} ) - ID: ${rgp[i].id}\n- Nome do Usuário(a) ou Grupo: ${rgp[i].infonome}\n-\n`
}
reply(bl)
break

case 'rgtm':
if(!SoDono) return reply(enviar.msg.donosmt)
rgp = JSON.parse(fs.readFileSync("./database/func/tmgroup.json"))
if(JSON.stringify(rgp).includes(from)) return reply("Este grupo ja está registrado na lista de transmissão") 
rgp.push({id: from, infonome: `${isGroup ? groupName: pushname}`})
fs.writeFileSync("./database/func/tmgroup.json", JSON.stringify(rgp))
reply("Registrado com sucesso, quando for realizada as transmissões, esse grupo/usuário estará na lista.")
break

case 'tirardatm': {
    if (!SoDono) return reply(enviar.msg.donosmt);
    let rgp = JSON.parse(fs.readFileSync("./database/func/tmgroup.json"));
    if (rgp.length == 0) return reply("A lista está vazia.");
    let indice = parseInt(q.trim());
    let alvoIndex = -1;
    if (!isNaN(indice) && indice > 0 && indice <= rgp.length) {
        alvoIndex = indice - 1;
    } else {
        alvoIndex = rgp.findIndex(i => i.id === from);
    }
    if (alvoIndex === -1) return reply("❌ Não encontrei esse registro para remover.");
    const removido = rgp[alvoIndex].infonome;
    rgp.splice(alvoIndex, 1);
    fs.writeFileSync("./database/func/tmgroup.json", JSON.stringify(rgp, null, 2));
    reply(`✅ *${removido}* foi removido da lista de transmissão.`);
    break;
}


case 'fazertm': {
    if (!SoDono) return reply(enviar.msg.donosmt);
    
    let rgp = JSON.parse(fs.readFileSync("./database/func/tmgroup.json"));
    if (rgp.length == 0) return reply("❌ Nenhum grupo registrado.");
    const isQuoted = !!info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    const quotedMsg = isQuoted ? info.message.extendedTextMessage.contextInfo.quotedMessage : info.message;
    
    const tipoMidia = Object.keys(quotedMsg)[0];
    const mime = quotedMsg[tipoMidia]?.mimetype || '';
    
    let textoMencionado = quotedMsg.extendedTextMessage?.text || quotedMsg.conversation || quotedMsg[tipoMidia]?.caption || "";
    let textoBase = q ? q : textoMencionado;
    let msgTransmitir = {};
    try {
        if (/image|video|audio|sticker|document/.test(mime) || tipoMidia.includes('Message') && tipoMidia !== 'conversation' && tipoMidia !== 'extendedTextMessage') {
            const downloadMidia = async () => {
                const stream = await baileys.downloadContentFromMessage(quotedMsg[tipoMidia], tipoMidia.replace('Message', ''));
                let buffer = Buffer.from([]);
                for await (const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk]);
                }
                return buffer;
            };

            const bufferMidia = await downloadMidia();
            if (/image/.test(mime)) msgTransmitir = { image: bufferMidia, caption: textoBase, contextInfo: { mentionedJid: [OwnerNumber], externalAdReply: { title: 'TRANSSMISSÃO DO PROPRIETÁRIO', body: NickDono, mediaType: 1, thumbnailUrl: "https://uploads.shizukuapis.space/73fada67.png"}} };
            else if (/video/.test(mime)) msgTransmitir = { video: bufferMidia, caption: textoBase, contextInfo: { mentionedJid: [OwnerNumber], externalAdReply: { title: 'TRANSSMISSÃO DO PROPRIETÁRIO', body: NickDono, mediaType: 1, thumbnailUrl: "https://uploads.shizukuapis.space/73fada67.png"}} };
            else if (/audio/.test(mime)) msgTransmitir = { audio: bufferMidia, mimetype: 'audio/mp4', ptt: false, contextInfo: { mentionedJid: [OwnerNumber], externalAdReply: { title: 'TRANSSMISSÃO DO PROPRIETÁRIO', body: NickDono, mediaType: 1, thumbnailUrl: "https://uploads.shizukuapis.space/73fada67.png"}} };
            else if (/sticker/.test(mime)) msgTransmitir = { sticker: bufferMidia, contextInfo: { mentionedJid: [OwnerNumber], externalAdReply: { title: 'TRANSSMISSÃO DO PROPRIETÁRIO', body: NickDono, mediaType: 1, thumbnailUrl: "https://uploads.shizukuapis.space/73fada67.png"}} };
            else msgTransmitir = { document: bufferMidia, mimetype: mime, caption: textoBase, contextInfo: { mentionedJid: [OwnerNumber], externalAdReply: { title: 'TRANSSMISSÃO DO PROPRIETÁRIO', body: NickDono, mediaType: 1, thumbnailUrl: "https://uploads.shizukuapis.space/73fada67.png"}} };

        } else {
            msgTransmitir = { 
                text: textoBase,
                contextInfo: { mentionedJid: [OwnerNumber], externalAdReply: { title: 'TRANSSMISSÃO DO PROPRIETÁRIO', body: NickDono, mediaType: 1, thumbnailUrl: "https://uploads.shizukuapis.space/73fada67.png"}}
            };
        }
        reply(`⏳ Iniciando transmissão para ${rgp.length} destinos...`);
        let sucessos = 0;
        let falhas = 0;
        for (let item of rgp) {
            try {
                const metadata = await shizuku.groupMetadata(item.id).catch(() => null);
                if (metadata) {
                    const participantes = metadata.participants.map(p => p.id);
                    await shizuku.sendMessage(item.id, { ...msgTransmitir, mentions: participantes });
                } else {
                    await shizuku.sendMessage(item.id, msgTransmitir);
                }
                sucessos++;
                await sleep(2000); 
            } catch (e) {
                falhas++;
            }
        }
        reply(`✅ *Transmissão Concluída!*\n\n🚀 Sucessos: ${sucessos}\n❌ Falhas: ${falhas}`);

    } catch (err) {
        console.log(err);
        reply("❌ Erro ao processar mídia: " + err.message);
    }
    break;
}

case 'transmitir':
case 'transmissão': {
  if (!SoDono) return reply(resposta.dono)
  if (!q) return reply(`🔪 Envie o texto da transmissão.\n\nExemplo:\n${prefix + command} Bom dia, criaturas.`)

  let getGroups = await shizuku.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).map(entry => entry[1])
  let anu = groups.map(v => v.id)

  let enviados = 0

  for (let id of anu) {
    await sleep(2000)
    try {
      let metadata_ = await shizuku.groupMetadata(id)
      let participantes = metadata_.participants.map(p => p.phoneNumber)

      let txt = `╭─❍「 🕸️ 𝑺𝒉𝒊𝒛𝒖𝒌𝒖 - 𝑻𝒓𝒂𝒏𝒔𝒎𝒊𝒔𝒔𝒂̃𝒐 」
│
│ ⚠️ Atenção, criaturas do grupo...
│ 
│ ${q}
│
│ 🩸 Marcados: ${participantes.length} almas
╰──────────────────────────────❍`;

      await shizuku.sendMessage(id, {
        text: txt,
        mentions: participantes
      })
      
      enviados++
    } catch (e) {
      console.log(`⚠️ Erro ao enviar no grupo ${id}:`, e.message)
    }
  }

  reply(`✅ Transmissão enviada com sucesso para ${enviados}/${anu.length} grupos, meu mestre.`);
}
break

case 'grupo': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args[0] === 'a') {
reply(`- Como pedido senhor(a), o grupo foi aberto com sucesso..`)
shizuku.groupSettingUpdate(from, 'not_announcement')
} else if(args[0] === 'f') {
reply(`- Como pedido senhor(a), o grupo foi fechado com sucesso..`)
shizuku.groupSettingUpdate(from, 'announcement')
} else {
reply(`${prefix +command} F, para fechar o grupo.\n${prefix+command} A, para abrir o grupo.`)
}
break 

case 'antiflood': 
if (!isGroup) return reply(enviar.msg.grupo);
if (!isGroupAdmins) return reply(enviar.msg.soadm)
if (!isBotGroupAdmins) return reply(enviar.msg.botadm)
    let intervalo = 10, maxMensagem = 10, estadoNovo = !dataGp[0].antiflood.status;
if (args.length == 2) [maxMensagem, intervalo] = args.map(Number);
    else if (args.length == 1) [maxMensagem] = args.map(Number);
if (isNaN(intervalo) || intervalo < 10 || intervalo > 60) {
return reply('[❗] Escolha um valor entre 10-60 segundos para o intervalo do anti-flood.');
}
if (isNaN(maxMensagem) || maxMensagem < 5 || maxMensagem > 20) {
return reply('[❗] Escolha um valor entre 5-20 mensagens para o anti-flood.');
}

if (estadoNovo) {
dataGp[0].antiflood = { status: true, maxMensagem, intervalo };
setGp(dataGp); reply(`✅ O recurso de ANTI-FLOOD foi ativado para *${maxMensagem}* mensagens a cada *${intervalo}* segundos.`);
} else {
dataGp[0].antiflood.status = false;
setGp(dataGp);
reply('✅ O recurso de ANTI-FLOOD foi desativado com sucesso.');
}
break;

case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':  
if (!isGroup) return reply(enviar.msg.grupo);
if (!isGroupAdmins) return reply(enviar.msg.adm);
try {
  var ppUrl = await shizuku.profilePictureUrl(from, 'image');
} catch {
  var ppUrl = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`;
}
try {
const BucetaRoxa = await conn.groupMetadata(from);
await shizuku.sendMessage(from, {
  image: { url: ppUrl },
  caption: Mess.InfoGp(BucetaRoxa, prefix, moment, groupAdmins, somembros),
  mentions: [BucetaRoxa?.subjectOwner]
}, { quoted: selojp });
} catch (e) {
reply("Erro ao obter informações do grupo.");
console.log("Erro ao obter informações do grupo.", e);
}
break;

case 'totag':
case 'cita':
case 'hidetag': {
  if (!isGroup) return reply(enviar.msg.grupo)
  if (!isGroupAdmins) return reply(enviar.msg.adm)
  let DFC = ""
  const rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
  const MRC_TD = groupMembers.map(i => i.phoneNumber)
  const comandoRegex = new RegExp(escapeRegExp(prefix + command), "gi")
  const pink = isQuotedImage ? rsm?.imageMessage : info.message?.imageMessage
  const blue = isQuotedVideo ? rsm?.videoMessage : info.message?.videoMessage
  const purple = isQuotedDocument ? rsm?.documentMessage : info.message?.documentMessage
  const yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage : info.message?.documentWithCaptionMessage?.message?.documentMessage
  const aud_d = isQuotedAudio ? rsm?.audioMessage : ""
  const figu_d = isQuotedSticker ? rsm?.stickerMessage : ""
  const red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue && !purple && !yellow ? rsm?.conversation : info.message?.conversation
  const green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text
  
  if (pink && !aud_d && !purple) {
    pink.caption = q.length > 1 ? q.trim() : (pink.caption || '').replace(comandoRegex, ' ').trim()
    pink.image = { url: pink.url }
    pink.mentions = MRC_TD
    DFC = pink
  }
  else if (blue && !aud_d && !purple) {
    blue.caption = q.length > 1 ? q.trim() : (blue.caption || '').replace(comandoRegex, ' ').trim()
    blue.video = { url: blue.url }
    blue.mentions = MRC_TD
    DFC = blue
  }
  else if (red && !aud_d && !purple) {
    const black = {
      text: red.replace(comandoRegex, ' ').trim(),
      mentions: MRC_TD
    }
    DFC = black
  }
  else if (!aud_d && !figu_d && green && !purple) {
    const brown = {
      text: green.replace(comandoRegex, ' ').trim(),
      mentions: MRC_TD
    }
    DFC = brown
  }
  else if (purple) {
    purple.document = { url: purple.url }
    purple.mentions = MRC_TD
    DFC = purple
  }
  else if (yellow && !aud_d) {
    yellow.caption = q.length > 1 ? q.trim() : (yellow.caption || '').replace(comandoRegex, ' ').trim()
    yellow.document = { url: yellow.url }
    yellow.mentions = MRC_TD
    DFC = yellow
  }
  else if (figu_d && !aud_d) {
    figu_d.sticker = { url: figu_d.url }
    figu_d.mentions = MRC_TD
    DFC = figu_d
  }
  else if (aud_d) {
    aud_d.audio = { url: aud_d.url }
    aud_d.mentions = MRC_TD
    aud_d.ptt = false
    DFC = aud_d
  }
  if (DFC) {
    await shizuku.sendMessage(from, DFC).catch(e => console.log(e))
  } else {
    reply("⚠️ Nenhuma mensagem válida encontrada para citar ou marcar todos.")
  }
}
break

case 'marcar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
async function marcac() {
bla = []
blad = `- Shizuku-Bot Mencionando Todos os membros comuns do grupo/comunidade. ${!q ? "" : `\n*Mensagem:* ${q}`}\n\n`
for( let i of somembros ) {
blad += `» @${i.split("@")[0]}\n`
bla.push(i)
}
blam = JSON.stringify(somembros)
if(blam.length == 2) return reply(`❌️ Olá *${pushname}* - Não contém nenhum membro comum no grupo, é sim apenas administradores. `)
mentions(blad, bla, true)  
}
marcac().catch(e => {
console.log(e)
})
break

case 'marcar2':
try {
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando.")
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += ''
for (let mem of groupMembers) {
teks += `╠➥ @${mem.phoneNumber.split('@')[0]}\n`
members_id.push(mem.jid)
}
mention(teks)
} catch {
reply('Erro ao mencionar.')
}
break

case 'recusar':
if(!SoDono) return reply(enviar.msg.donosmt)
shizuku.sendMessage(`${q}@s.whatsapp.net`, {text: `Olá amigo(a), sinto muito dizer, mas seu convite foi recusado.`})
break

case 'join': case 'entrar':
if(!SoDono) return reply(enviar.msg.donosmt)
string = args.join(' ')
if(!string) return reply('Insira um link de convite ao lado do comando.')
if(string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.') ) {
const link = string.split('app.com/')[1]
try {
await shizuku.groupAcceptInvite(`${link}`)
} catch(erro) {
if(String(erro).includes('resource-limit') ) {
reply('O grupo já está com o alcance de 257 membros.')
}
if(String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
}
break

case 'recusarsolis': case '❌': {
    if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm) // Nk
    if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
    const req = await shizuku.groupRequestParticipantsList(from) 
    let totalRequest = req.length
    if (totalRequest == 0) return reply(`*TEM SOLICITAÇÃO NAO 🥰*`)
    for (let i of req) {
     let userJid = i.jid 
     await shizuku.groupRequestParticipantsUpdate(from, [userJid], "reject")
    }
  reply('*SOLICITAÇÕES RECUSADAS KARAI*')
}
break

case 'aceitar': case 'aceitarsolis': case '✅': {
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
const buxexa = await conn.groupRequestParticipantsList(from) 
let totalSolis = buxexa.length

if (totalSolis == 0) return reply(`*TEM SOLICITAÇÃO NAO 🥰*`)
for (let i of buxexa) {
let Bolsonaro = i.jid 
await shizuku.groupRequestParticipantsUpdate(from, [Bolsonaro], "approve")
 }
reply('*TOADAS AS SOLICITAÇÕES FORAM ACEITAS!!*')
}
break

case 'versolicitacoes': {
if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {
 const req = await shizuku.groupRequestParticipantsList(from)
 let totalRequest = req.length
if (totalRequest === 0) {
 return reply(`*Não há nenhuma solicitação pendente no grupo 🥰*`)
  } else {
 return reply(`*Existem ${totalRequest} solicitação(ões) pendente(s) no grupo!*`)
}
} catch (error) {
 console.error('Erro ao verificar as solicitações:', error)
reply(`*Ocorreu um erro ao tentar verificar as solicitações. Por favor, tente novamente mais tarde.*`)
}
}
break

case 'marcarwa':
try {
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
members_id = []
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += ''
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.phoneNumber.split('@')[0]}\n`
members_id.push(mem.phoNumber)
}
shizuku.sendMessage(from, {text: teks}, {quoted: selojp})
} catch {
reply('Erro ao mencionar.')
}
break

case 'reviverqr':
if(!SoDono && !isnit) return 
exec(`cd datab/shizuku-qr && rm -rf pre-key* sender* session*`)
setTimeout(async () => {
reply("Reiniciando..")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'ptvmsg':
if (!isQuotedVideo && !info.message.videoMessage) {
return reply('Marque um vídeo/gif que você deseja converter para mensagem de vídeo.')}
shizuku.relayMessage(from, {ptvMessage: isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage }, {})
break

case 'reviver':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!')
sleep(5000)
response2 = await shizuku.groupParticipantsUpdate(from, [menc_prt], "add" )
reply('Usuario adicionado de volta ao grupo.')
break

case 'sairgp':
if(isGroup && !SoDono && !info.key.fromMe) return reply(enviar.msg.donosmt)
try {
shizuku.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'ser':
if (!SoDono && !isnit) return reply(enviar.msg.donosmt);
if (!q) return reply(`Escolha uma opção:\n\n${prefix+command} adm\n${prefix+command} membro`);
const opcao = q.trim().toLowerCase();
const metadata_2 = await shizuku.groupMetadata(from);
const ownerId = metadata_2.owner;
const isSenderAdmin = groupAdmins.includes(sender);
const isCreator = sender === ownerId;
if (opcao === 'adm' ||opcao === 'admin') {
    if (isSenderAdmin) return reply("Você já é um administrador do grupo.");
    await shizuku.groupParticipantsUpdate(from, [sender], "promote");
    mentions(`@${sender.split("@")[0]} Pronto - Agora você é um administrador.`, [sender], true);
} else if (opcao === 'membro') {
    if (isCreator) return reply("Você é o criador do grupo, não pode ser rebaixado.");
    if (!isSenderAdmin) return reply("Você já é um membro comum.");
    await shizuku.groupParticipantsUpdate(from, [sender], "demote");
    mentions(`@${sender.split("@")[0]} Pronto - Agora você é um membro comum novamente.`, [sender], true);
} else {
    reply(`Opção inválida!\nEscolha:\n${prefix+command} adm\n${prefix+command} membro`);
}
break;

case 'adv':
case 'advertir':
case 'adverter': {
  if (!isGroup) return reply(enviar.msg.grupo)
  if (!isGroupAdmins) return reply(enviar.msg.adm)
  if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
  if (!menc_os2) return reply("Marque alguém para advertir.")
  if (menc_os2 == botNumber) return reply("Não pode advertir o próprio bot.")
  if (menc_os2 == OwnerNumber) return reply("Não pode advertir o dono do bot.")
  if (groupAdmins.includes(menc_os2)) return reply("Não pode advertir administradores.")
  if (!groupMembers.find(m => m.phoneNumber === menc_os2)) return reply("Usuário não encontrado no grupo.")
  ADVT.push(menc_os2)
  setGp(dataGp)
  let count = ADVT.filter(x => x === menc_os2).length
  let aviso = mess.warningAdvertencia(menc_os2, count)
  setTimeout(async () => {
    if (count < 3) {
      mentions(aviso, [menc_os2])
    } else {
      shizuku.sendMessage(from, { text: mess.finishAdvertencia(menc_os2), mentions: [menc_os2] })
      await sleep(1500)
      shizuku.groupParticipantsUpdate(from, [menc_os2], "remove")
      for (let i = 0; i < 3; i++) ADVT.splice(ADVT.indexOf(menc_os2), 1)
      setGp(dataGp)
    }
  }, 3000)
}
break

case 'listaadv':
case 'listaadvertidos':
case 'veradvertidos': {
  if (!isGroup) return reply(enviar.msg.grupo)
  if (!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
 let advertidos = [...new Set(ADVT)]
if (advertidos.length === 0) return reply("Nenhum usuário advertido até agora.")
 let lista = `🧾 Lista de advertidos do grupo:\n\n`
 advertidos.forEach((user, i) => {
let count = ADVT.filter(x => x === user).length
lista += `${i+1}. @${user.split("@")[0]} - ${count}/3 advertências\n`
  })
 mentions(lista, advertidos)
}
break

case 'removeradv':
case 'removeradvertencia':
case 'rmadv': {
if (!isGroup) return reply(enviar.msg.grupo)
 if (!isGroupAdmins) return reply(enviar.msg.adm)
 if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (!menc_os2) return reply("Marque o usuário que deseja limpar as advertências.")

  let antes = ADVT.length
  for (let i = ADVT.length - 1; i >= 0; i--) {
    if (ADVT[i] === menc_os2) ADVT.splice(i, 1)
  }
  setGp(dataGp)
  let depois = ADVT.length

  if (antes === depois) return reply("Esse usuário não possuía advertências.")
  mentions(`✅ As advertências de @${menc_os2.split("@")[0]} foram removidas.`, [menc_os2])
}
break

//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

case 'sairdogp':
if(!SoDono)return reply(enviar.msg.donosmt)  
if(!q) return reply(`Você deve visualizar o comando ${prefix}listagp e olhar de qual o grupo quer sair, e veja a numeração dele, e só digitar\nExemplo: ${prefix}sairdogp 0\nesse comando é para o bot sair do grupo que deseja..`)
var getGroups = await shizuku.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
try {
shizuku.sendMessage(ingfoo[q].id, {text: "Irei sair do grupo, por ordem do meu dono, adeus..."}) 
setTimeout(() => {
shizuku.groupLeave(ingfoo[q].id)
}, 5000)
} catch(erro) {
reply(String(erro))
}
reply("Pronto meu dono, sair do grupo que você queria, em caso de dúvidas acione o comando listagp pra verificar..")
break

case 'listagp': {
    if (!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
    var getGroups = await shizuku.groupFetchAllParticipating()
    var groups = Object.entries(getGroups).map(entry => entry[1])
    var ingfoo = groups.filter(v => v.id.endsWith('@g.us'))
    ingfoo.sort((a, b) => (b.participants.length - a.participants.length))

    let teks1 = `🏢 *LISTA DE GRUPOS /COMUNIDADE DA SHIZUKU* 🏢\n`
    teks1 += `📊 *Total de Grupos:* ${ingfoo.length}\n`
    teks1 += `────────────────────\n\n`

    for (let i = 0; i < ingfoo.length; i++) {
        let metadt = await shizuku.groupMetadata(ingfoo[i].id) 
        let linkdogp
        try {
            linkdogp = `https://chat.whatsapp.com/${await shizuku.groupInviteCode(ingfoo[i].id)}`
        } catch {
            linkdogp = "Sem permissão de link"
        }
        let criadorRaw = metadt.ownerPn || metadt.subjectOwnerPn || "Não encontrado"
        let criadorLimpo = criadorRaw.split("@")[0];

        teks1 += `📍 *Grupo:* ${i + 1}\n`
        teks1 += `📝 *Nome:* ${ingfoo[i].subject}\n`
        teks1 += `🆔 *ID:* \`${ingfoo[i].id}\`\n`
        teks1 += `👑 *Criador:* ${criadorLimpo}\n`
        teks1 += `🔗 *Link:* ${linkdogp}\n`
        teks1 += `👥 *Membros:* ${ingfoo[i].participants.length}\n`
        teks1 += `📅 *Criado em:* ${moment(ingfoo[i].creation * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm')}\n`
        teks1 += `────────────────────\n\n`
    }

    reply(teks1)
    break
}

case 'idgp': {
    if (!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
    if (!q) return reply(`❓ Digite o número do grupo da lista. Exemplo: ${prefix}idgp 1`)
    var getGroups = await shizuku.groupFetchAllParticipating()
    var groups = Object.values(getGroups).filter(v => v.id.endsWith('@g.us'))
    groups.sort((a, b) => (b.participants.length - a.participants.length))
    const indice = parseInt(q) - 1
    if (isNaN(indice) || !groups[indice]) {
        return reply("❌ Esse número não corresponde a nenhum grupo da sua lista atual.")
    }
    const gpAlvo = groups[indice]
    try {
        const metadt = await shizuku.groupMetadata(gpAlvo.id)
        let criadorRaw = metadt.ownerPn || metadt.subjectOwnerPn || "Não encontrado"
        let criadorLimpo = criadorRaw.split("@")[0];
        let textoId = `🆔 *DADOS DO GRUPO (${q})* 🆔\n\n`
        textoId += `📝 *Nome:* ${gpAlvo.subject}\n`
        textoId += `📌 *ID:* \`${gpAlvo.id}\`\n`
        textoId += `👑 *Criador:* ${criadorLimpo}\n\n`
        textoId += `💡 _Você pode copiar o ID clicando nele._`
        reply(textoId)
    } catch (e) {
        console.log(e)
        reply("❌ Erro ao buscar metadados do grupo. Verifique se o bot ainda está nele.")
    }
    break
}

case 'atividade':
case 'atividades': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm);
    const grupoData = countMessage.find(g => g.groupId === from);
    if (!grupoData || grupoData.numbers.length === 0) return reply('📊 *Nenhum dado de atividade encontrado para este grupo.*');
    let teks = `📝 *ATIVIDADE DOS MEMBROS*\n\n`;
    const ordenados = grupoData.numbers.sort((a, b) => b.messages - a.messages);
    ordenados.forEach((user, i) => {
        teks += `*${i + 1}.* @${user.id.split('@')[0]}\n`;
        teks += `   ├ 💬 Mensagens: ${user.messages}\n`;
        teks += `   ├ 🤖 Comandos: ${user.cmd_messages}\n`;
        teks += `   ├ 🎨 Figuras: ${user.figus || 0} | 🖼️ Fotos: ${user.imagens || 0}\n`;
        teks += `   ├ 🎥 Vídeos: ${user.videos || 0} | 🎙️ Áudios: ${user.audios || 0}\n`;
        teks += `   └ 📱 Disp: ${user.aparelho || 'S/N'}\n\n`;
    });
    shizuku.sendMessage(from, { text: teks, mentions: grupoData.numbers.map(u => u.id) });
    break;
}

case 'inativos':
case 'inativo': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm);
    const limiteMsg = isNaN(q) ? 0 : Number(q);
    const grupoData = countMessage.find(g => g.groupId === from);
    if (!grupoData) return reply('❌ Dados não encontrados.');
    const fantasmas = grupoData.numbers.filter(u => 
        u.messages <= limiteMsg && 
        !groupAdmins.includes(u.id) && 
        u.id !== botNumber &&
        !numerodono.includes(u.id.split('@')[0])
    );
    if (fantasmas.length === 0) return reply(`✅ Não há membros com menos de ${limiteMsg} mensagens.`);
    let bli = `👻 *LISTA DE FANTASMAS* (${limiteMsg} msgs ou menos)\n\n`;
    fantasmas.forEach((u, i) => {
        bli += `${i + 1}. @${u.id.split('@')[0]}\n`;
    });
    bli += `\n👉 Use *#banghost ${limiteMsg}* para remover.`;
    shizuku.sendMessage(from, { text: bli, mentions: fantasmas.map(u => u.id) });
    break;
}

case 'banghost': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!SoDono && !isGroupAdmins) return reply(enviar.msg.adm); 
    const limiteMsg = isNaN(q) ? 0 : Number(q);
    const grupoData = countMessage.find(g => g.groupId === from);
    if (!grupoData) return reply('❌ Dados não encontrados.');
    const alvos = grupoData.numbers.filter(u => 
        u.messages <= limiteMsg && 
        !groupAdmins.includes(u.id) && 
        u.id !== botNumber &&
        !numerodono.includes(u.id.split('@')[0])
    );
    if (alvos.length === 0) return reply(`✅ Nada para limpar.`);
    reply(`⚔️ *INICIANDO LIMPEZA*...\nRemovendo ${alvos.length} fantasmas com ${limiteMsg} mensagens ou menos.\n\n*Aguarde, isso pode demorar um pouco.*`);
    for (let u of alvos) {
        await sleep(2000); 
        await shizuku.groupParticipantsUpdate(from, [u.id], "remove").catch(e => console.log("Erro ao banir ghost"));
    }
    reply(`✅ *LIMPEZA CONCLUÍDA!* \n${alvos.length} fantasmas foram removidos.`);
    break;
}

case 'correio':
{
txt = args.join(" ")
if(!txt) return reply(mess.syntaxAnonymousMail(prefix))
let txt1 = txt.split("/")[0].replace(/\D/g,'');
let txt2 = txt.split("/")[1];
if(!txt1) return reply('*Cadê o número do destinatário?*')
if(!txt2) return reply('*Cadê a mensagem para ser enviada ao destinatário?*')
let [result] = await shizuku.onWhatsApp(txt1)
if(!result) return reply(`O número fornecido está indisponível no WhatsApp! Verifique por favor.`)
sendMsg = await shizuku.sendMessage(from, {react: {text: `💌`, key: info.key}})
reply(mess.sucessAnonymousMail())
shizuku.sendMessage(result.jid, {text: mess.anonymousMail(txt2)})
}
break

case 'nome-bot':
if(!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
NomeDoBot = q.trim()
setting.NomeDoBot = q.trim()
fs.writeFileSync('./shizuku-config/dono/settings.json', JSON.stringify(setting, null, 2))
reply(`O nome do bot foi alterado com sucesso para: ${q}`)
break

case 'nick-dono':
if(!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt) 
setting.NickDono = q.trim()
NickDono = setting.NickDono
fs.writeFileSync('./shizuku-config/dono/settings.json', JSON.stringify(setting, null, 2))
reply(`O nick do dono foi configurado para: ${q}`)
break

case 'numero-dono':
if(!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
if(q.match(/[a-z]/i)) return reply("É apenas números..")
reply(`O número dono foi configurado com sucesso para: ${q}`)
setting.OwnerNumber = q.trim().replace(new RegExp("[()+-/ +/]", "gi"), "");
OwnerNumber = setting.OwnerNumber
numerodn = setting.OwnerNumber
numerodono_ofc = setting.OwnerNumber
fs.writeFileSync('./shizuku-config/dono/settings.json', JSON.stringify(setting, null, 2))
break

case 'prefixo-bot': case 'setprefix':
if(args.length < 1) return
if(!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
setting.prefix = q
fs.writeFileSync('./shizuku-config/dono/settings.json', JSON.stringify(setting, null, 2))
reply(`Sucesso mestre, O prefixo foi alterado com sucesso para: ${setting.prefix}`)
break

case 'fundomenu': case 'setmenu': {
    if (!SoDono) return reply("*Apenas o dono pode usar este comando!*");
    const isQuoted = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    const mime = (info.message?.imageMessage || info.message?.videoMessage || isQuoted?.imageMessage || isQuoted?.videoMessage);
    if (!mime) return reply(`❌ *Erro!* Marque ou envie uma *Imagem* ou *Vídeo* com o comando *${prefix + command}*`);
    const type = mime.mimetype?.split('/')[0] === 'video' ? 'video' : 'image';
    const extensao = type === 'video' ? 'mp4' : 'jpg';
    const pathVideo = './shizuku-config/dono/menu/media/menu.mp4';
    const pathFoto = './shizuku-config/dono/menu/media/menu.jpg';
    await reagir(from, "⌛");
    try {
        let stream = await baileys.downloadContentFromMessage(mime, type);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
        }
        if (type === 'video') {
        if (fs.existsSync(pathFoto)) fs.unlinkSync(pathFoto);
        fs.writeFileSync(pathVideo, buffer);
        } else {
        if (fs.existsSync(pathVideo)) fs.unlinkSync(pathVideo);
       fs.writeFileSync(pathFoto, buffer);
      }
     reply(`*Fundo do menu atualizado com sucesso!*`);
    } catch (e) {
    console.log(e);
   reply("*Erro ao salvar o arquivo!* Tente novamente.");
  }
 }
break;

case 'privphotobot': {
if(!SoDono) return reply(enviar.msg.donosmt)
if (!q) return reply(mess.syntaxPrivatePhotoBot(prefix))
if (args[0] === 'all') {
reply(`- A minha foto do perfil agora está visível à todos.`)
await shizuku.updateProfilePicturePrivacy('all')
} else if (args[0] === 'cntt') {
reply(`- A minha foto do perfil agora está visível somente aos meus contatos.`)
await shizuku.updateProfilePicturePrivacy('contacts')
} else if (args[0] === 'ngm') {
reply(`- A foto do meu perfil está privada a todos, até mesmo ao senhor mestre.`)
await shizuku.updateProfilePicturePrivacy('none')
}
}
break

case 'privaddgroup': {
if(!SoDono) return reply(enviar.msg.donosmt)
if (!q) return reply(mess.syntaxPrivAddGroup(prefix))
if (args[0] === 'all') {
reply(`- Pronto, agora todos pode me adicionar em grupo normalmente.`)
await shizuku.updateGroupsAddPrivacy(`all`)
} else if (args[0] === 'cntt') {
reply(`- Agora somente meus contatos, pode me adicionar em grupo.`)
await shizuku.updateGroupsAddPrivacy(`contacts`)
} else if (args[0] === 'ngm') {
reply(`- Agora ninguém pode ousar me adicionar em grupo, pois será negado.`)
await shizuku.updateGroupsAddPrivacy('none')
}
}
break

case 'setprefix':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./shizuku-config/dono/settings.json', JSON.stringify(setting, null, 2))
reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
break

case 'nomegp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
shizuku.groupUpdateSubject(from, `${body.slice(9)}`)
shizuku.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: selojp})
break

case 'bcgp':
case 'bcgc':  
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!q) return reply('Cade o texto?')
var nomor = info.participant
if(isMedia && !info.message.videoMessage || isQuotedImage) {
encmedia = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
for (i = 0; i < groupMembers.length; i++) {
await sleep(2000)  
shizuku.sendMessage(groupMembers[i].id, {image: buff}, {caption: `*「 TRANSMISSÃO 」*\n-\nGrupo: ${groupName}\n• Número: wa.me/${sender.split('@')[0]}\n• Mensagem: ${body.slice(6)}`})
}
reply('A transmissão foi enviada com êxito.')
} else {
for (i = 0; i < groupMembers.length; i++) {
await sleep(2000)
sendMess(groupMembers[i].id, `*「 TRANSMISSÃO 」*\n-\n• Grupo: ${groupName}\n• Número: wa.me/${sender.split('@')[0]}\n• Mensagem: ${body.slice(6)}`)
}
reply('Grupo de transmissão bem-sucedido.')
} 
break

case 'dono1':
case 'dono2':
case 'dono3':
case 'dono4':
case 'dono5':
case 'dono6':
    if (!SoDono && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt);

    let numero = command.replace('dono', ''); 

    let alvo7 = menc_os2 || q.split("@")[0];

    if (!alvo7 && info.quoted) {
        alvo7 = info.quoted.sender;
    }

    if (!alvo7 || !q?.trim()) return reply('❌ Informe o número, mencione ou responda a mensagem do usuário que deseja tornar dono(a).');
    
    let jidFull = baileys.jidNormalizedUser(alvo7);  
    let numeroLimpo = jidFull.split('@')[0] || q;

    nescessario[`dono${numero}`] = numeroLimpo;
    global[`dono${numero}`] = nescessario[`dono${numero}`];
    setNes(nescessario);
    
    reply(`✅ Sucesso mestre! O ${numero == 1 ? 'segundo' : numero == 2 ? 'terceiro' : numero == 3 ? 'quarto' : numero == 4 ? 'quinto' : 'novo'} dono(a) foi alterado com sucesso para: ${nescessario[`dono${numero}`]}`);
break;

case 'listadonos':
case 'donos':
await sendMenu(conn, from, mess.ownersList(NomeDoBot, nmrdn, dono1, dono2, dono3, dono4, dono5, dono6), info);
break

case 'admins':
case 'listadmins':  
case 'listaadmins':   
if(!isGroup) return reply(enviar.msg.grupo)
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\n*Total de Adminstradores:* ${groupAdmins.length}\n-\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `( ${no.toString()} ) - @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break

case 'criartabela': case 'criartbl': case 'criartab':
if(!isGroupAdmins && !SoDono) return reply("Só adm ou dono pode utilizar este comando.")
if(!q.trim()) return reply("Digite o que deseja colocar na tabela do grupo..")
msgz = args.join(" ")
msgtmpol = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
fs.writeFileSync(`./database/func/tabela/tabela-${from}.json`,
JSON.stringify({Horario: msgtmpol, Data: datinhaofc, Tabela: msgz}, null, 2));
reply(`Tabela do grupo foi criada com sucesso..`)
break

case 'tabelagp': case 'tabeladogp': case 'tabelinha': 
if(!fs.existsSync(`./database/func/tabela/tabela-${from}.json`)) {
reply(`Cade a tabela, cria ela com o comando\nExemplo: ${prefix}criartabela lindas do grupo : e etc ..`)
}
const tabelagpofc = JSON.parse(fs.readFileSync(`./database/func/tabela/tabela-${from}.json`)); 
mention(tabelaGrupo(groupName, tabelagpofc))
break

case 'ativo': 
case 'on': 
case 'voltei': {
    if (!isGroupAdmins && !SoDono && !isPremium) {
        return reply("❌ Este comando é restrito para ADMs, Donos ou usuários VIP/Premium.");
    }
    if (SoDono) {
        const pathAfk = `./database/func/afk/afk-@${setting.OwnerNumber.split("@")[0]}.json`;
        if (fs.existsSync(pathAfk)) {
            fs.unlinkSync(pathAfk); 
            reply("👋 Bem-vindo de volta, Proprietário! Agora você está online 🙂");
        } else {
            reply("❓ Você não tinha nenhuma mensagem de ausência registrada.");
        }

    } else {
        const indexAusente = dataGp[0].ausentes.findIndex(i => i.id === sender);

        if (indexAusente === -1) {
            return reply("❓ Não encontrei nenhum registro de ausência para você neste grupo.");
        }

        dataGp[0].ausentes.splice(indexAusente, 1);
        setGp(dataGp);
        
        reply("✅ Registro de ausência removido! Bem-vindo de volta. 🙂");
    }
    break;
}

case 'ausente': 
case 'off': 
case 'afk': {
    if (!isGroupAdmins && !SoDono && !isPremium) {
        return reply("❌ Este comando é restrito para ADMs, Donos ou usuários VIP/Premium.");
    }
    if (SoDono) {
        const msgtmp = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
        fs.writeFileSync(`./database/func/afk/afk-@${setting.OwnerNumber.split("@")[0]}.json`,
            JSON.stringify({
                Ausente_Desde: msgtmp, 
                Motivo_Da_Ausência: q || "Sem motivo especificado"
            }, null, 2));
        reply(`✅ Mensagem de ausência do *Proprietário* criada com sucesso!`);

    } else {
        if (!q.trim()) return reply(`⚠️ Digite o motivo da ausência.\nExemplo: ${prefix + command} Estudando...`);

        const indexAusente = dataGp[0].ausentes.findIndex(i => i.id === sender);
        if (indexAusente === -1) {
            dataGp[0].ausentes.push({ id: sender, msg: q.trim() });
            setGp(dataGp);
            reply("✅ Sua mensagem de ausência foi ativada!\n\nUse o comando *#ativo* para voltar.");
        } else {
            dataGp[0].ausentes[indexAusente].msg = q.trim();
            setGp(dataGp);
            reply("📝 Sua mensagem de ausência foi alterada com sucesso!");
        }
    }
    break;
}

case 'addvip': {
if (!SoDono) return reply("Apenas o dono do bot");
let tempovip = q.split("/")[1];
if (!menc_os2  || !tempovip) 
return reply(`✳ Exemplo:
${prefix}addvip @user/4d
${prefix}addvip @user/2h
${prefix}addvip @user/10min`);

let result = addVIP(menc_os2, tempovip);
if (!result) return reply("❌ Formato inválido. Use d, h ou min.");

reply(`✅ VIP ATIVADO!

👤 Usuário: @${menc_os2.split("@")[0]}
⏰ Expira em: ${new Date(result).toLocaleString("pt-BR")}`);
}
break;

case 'ver-vip': {
if (!isPremium) return reply(enviar.msg.premium)
let exp = getExpire(sender);
reply(`🌟 SEU VIP

✅ Status: ATIVO
⏳ Expira: ${new Date(exp).toLocaleString("pt-BR")}`);
}
break;

case 'delvip': {
if (!SoDono) return reply("Apenas o dono do bot");
if(!menc_os2) return reply("cade o user?")
if(!isVIP(menc_os2)) return reply("o usuário mencionado não é vip");
removeVIP(menc_os2);
reply("✅ VIP removido.");
}
break;

case 'premiumlist':
case 'listavip': {
    if (!SoDono && !isPremium) return reply(enviar.msg.premium)
    const vips = JSON.parse(fs.readFileSync('./database/VIP/vips.json'));
    const keys = Object.keys(vips);
    if (keys.length === 0) return reply("✨ A lista VIP está vazia.");
    let texto = `⭐ *LISTA DE USUÁRIOS VIP* ⭐\n\n`;
    const agora = Date.now();
    keys.forEach((jid, index) => {
        const dados = vips[jid];
        const restante = dados.expire - agora;
        const dias = Math.floor(restante / (24 * 60 * 60 * 1000));
        const expiraEm = new Date(dados.expire).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

        texto += `*${index + 1}.* @${jid.split('@')[0]}\n`;
        texto += `   ├ 📅 Adicionado: ${new Date(dados.added).toLocaleDateString("pt-BR")}\n`;
        texto += `   ├ ⏳ Restam: ${restante > 0 ? dias + " dias" : "Expirado"}\n`;
        texto += `   └ 🗓️ Expira: ${expiraEm}\n\n`;
    });
    texto += `👉 Use *#rmvip [número]* para remover.`;
    shizuku.sendMessage(from, { text: texto, mentions: keys });
    break;
}

case 'rmvip': {
    if (!SoDono) return reply(enviar.msg.donosmt);
    if (!q) return reply(`❌ Digite o número da lista. Ex: ${prefix}rmvip 1`);
    const vips = JSON.parse(fs.readFileSync('./database/VIP/vips.json'));
    const keys = Object.keys(vips);
    const indice = parseInt(q) - 1; 
    if (isNaN(indice) || !keys[indice]) {
        return reply("❌ Número inválido. Verifique a lista novamente.");
    }
    const jidAlvo = keys[indice];
    delete vips[jidAlvo];
    fs.writeFileSync('./database/VIP/vips.json', JSON.stringify(vips, null, 2));
    reply(`✅ Usuário @${jidAlvo.split('@')[0]} removido da lista VIP com sucesso!`, {
        mentions: [jidAlvo]
    });
    break;
}

case 'limpar':
if (!isGroup) {
await reply(enviar.msg.grupo);
return;
};
if (!isGroupAdmins) {
await reply(enviar.msg.adm);
return;
};
if(!Number(q)) {
await reply(`Voce deve adicionar uma quantidade desejada para fazer a limpeza`);
return;
};
if(q >= 15) {
await reply("não pode ser acima de 15, coloque abaixo de 15 por favor");
return;
};
let clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`

await shizuku.groupSettingUpdate(from, 'announcement')
for (let i = 0; i < q; i++) {
setTimeout(() => {
shizuku.sendMessage(from, { text: clear }, { quoted: selojp, contextInfo: { forwardingScore: 500, isForwarded: true } })
}, 1400);
};
await new Promise(resolve => setTimeout(resolve, 5000))
await shizuku.groupSettingUpdate(from, 'not_announcement')
  
let finalMsg = `✅ *Lɪᴍᴘᴇᴢᴀ ᴄᴏɴᴄʟᴜɪ́ᴅᴀ!*\n\nAgora o grupo foi reaberto`;

await shizuku.sendMessage(from, { text: finalMsg }, { quoted: selojp })
break;

case 'gerarlink':
case 'jplink':
case 'link': {
    let mediaData = null;
    let mimeType = '';
    let extensao = '';
    let nomeOriginal = '';
    let realMimetype = '';

    if (isQuotedImage || isImage) {
        mediaData = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage;
        mimeType = 'image';
    } else if (isQuotedVideo || isVideo) {
        mediaData = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage;
        mimeType = 'video';
    } else if (isQuotedAudio || isAudio) {
        mediaData = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage;
        mimeType = 'audio';
    } else if (isQuotedSticker || isSticker) {
        mediaData = isQuotedSticker ? info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : info.message.stickerMessage;
        mimeType = 'sticker';
    } else if (isQuotedDocument || isDocument) {
        mediaData = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage;
        mimeType = 'document';
    } else {
        return reply(`Marque ou envie uma Imagem, Vídeo, Áudio, Figurinha ou Documento para gerar o link.`);
    }

    if (!mediaData) return reply("Falha ao capturar os dados do arquivo.");

    realMimetype = mediaData.mimetype || ''; 

    if (mediaData.fileName) {
        nomeOriginal = mediaData.fileName;
        extensao = path.extname(nomeOriginal).toLowerCase().replace('.', '');
    }
    
    if (!extensao) {
        extensao = mime.extension(realMimetype) || {
            'image': 'png',
            'video': 'mp4',
            'audio': 'mp3',
            'sticker': 'webp',
            'document': 'bin'
        }[mimeType] || 'bin';
    }
    
    if (!nomeOriginal) nomeOriginal = `arquivo_${Date.now()}.${extensao}`;

    if (mimeType === 'sticker' || realMimetype === 'image/webp') {
        extensao = 'webp';
        realMimetype = 'image/webp';
        nomeOriginal = nomeOriginal.replace(/\.[^.]+$/, '') + '.webp'; 
    }

    if (mimeType === 'audio') {
        if (realMimetype.includes('ogg') || realMimetype.includes('opus')) {
            extensao = 'opus';
            realMimetype = 'audio/ogg; codecs=opus';
        } else if (realMimetype.includes('mp4') || realMimetype.includes('aac')) {
            extensao = 'm4a';
            realMimetype = 'audio/mp4';
        }
        nomeOriginal = nomeOriginal.replace(/\.[^.]+$/, '') + `.${extensao}`;
    }

    await reply("Processando seu arquivo nos servidores Shizuku... Aguarde.");

    try {
        const buffer = await getFileBuffer(mediaData, mimeType);

        if (buffer.length > 100 * 1024 * 1024) {
            return reply(`Arquivo muito grande! Limite: 100MB\nTamanho: ${(buffer.length / (1024 * 1024)).toFixed(2)}MB`);
        }

        const nomeArquivo = nomeOriginal || `bot_${Date.now()}.${extensao}`;
        const JpzinhLink = await JpUpload(buffer, nomeArquivo, realMimetype);

        if (JpzinhLink && JpzinhLink.startsWith('http')) {
            reply(`*Link Gerado com Sucesso!*\n\n🔗 ${JpzinhLink}\n\n*Nome:* ${nomeOriginal}\n*Tipo:* ${mimeType.toUpperCase()} -.${extensao}\n*Tamanho:* ${(buffer.length / (1024 * 1024)).toFixed(2)} MB\n*Status:* Permanente`);
        } else {
            reply(`Erro ao subir arquivo: ${JpzinhLink || 'Servidor rejeitou. Verifique token ou tamanho.'}`);
        }
    } catch (e) {
        console.log("Erro no Case Link:", e);
        reply(`Ocorreu um erro interno: ${e.message}`);
    }
    break;
}

case 'deletar': case 'delete': case 'del':  case 'd':{
if(!isGroupAdmins && !SoDono && !isPremium) return reply(enviar.msg.adm)
await reagir(from, "🚮");
const ctx = info.message?.extendedTextMessage?.contextInfo
if(!ctx?.stanzaId) return reply("❌ Marque a mensagem que deseja apagar.")
 const keyToDelete = { remoteJid: from, fromMe: false, id: ctx.stanzaId, participant: ctx.participant }
await conn.sendMessage(from, { delete: keyToDelete })
}
break

case 'antiligar':
case 'antiligacao':  
case 'antiligação':  
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAnticall) {
nescessario.anticall = true
setNes(nescessario)
reply(`O anti ligação foi ativado com sucesso. Caso alguém efetue uma ligação para o bot será bloqueado.`)
} else if(isAnticall) {
nescessario.anticall = false
setNes(nescessario)
reply('O anti ligação foi desativado com sucesso.')
}
break

case 'antipv':  
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAntiPv) {
nescessario.antipv = true
setNes(nescessario)
reply(`O anti privado foi ativado com sucesso. Caso alguém envie mensagem para o bot, será bloqueado!`)
} else if(isAntiPv) {
nescessario.antipv = false
setNes(nescessario)
reply('O anti privado foi desativado com sucesso.')
}
break

case 'antipv2':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAntiPv2) {
nescessario.banChats = true
setNes(nescessario)
reply("Sucesso! Foi alterado para modo antipv, pv não poderá ser utilizado, mas não bloquearei o usuário, só flodarei mensagem a cada mensagem dele.")
} else if(isAntiPv2) {
nescessario.banChats = false
setNes(nescessario)
reply("Modo anti privado que não bloqueia foi desligado, pv liberado com scuesso.")
}
break

case 'block':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!q.length > 6) return reply("Marque o @ do usuário que deseja bloquear de ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numblc = ban.indexOf(blcp)
if(numblc >= 0) return reply('*Esse número já esta incluso na lista de bloqueio.*')
ban.push(blcp)
fs.writeFileSync('./database/usuarios/banned.json', JSON.stringify(ban))
shizuku.sendMessage(from, {text: mess.bannedMessage(blcp), mentions: [blcp]})
break

case 'unblock':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!q.length > 6) return reply("Marque o @ do usuário que deseja desbloquear pra ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numbl = ban.indexOf(blcp)
if(numbl < 0) return reply('*Esse número não está incluso na lista de bloqueados.*')
pesquisar = blcp
processo = ban.indexOf(pesquisar)
while(processo >= 0){
ban.splice(processo, 1)
processo = ban.indexOf(pesquisar)
}
fs.writeFileSync('./database/usuarios/banned.json', JSON.stringify(ban))
shizuku.sendMessage(from, {text: mess.unbannedMessage(blcp), mentions: [blcp]})
break

case 'blocklist':
jrc = `[Total: *${ban.length}*] - Usuários bloqueados:\n-\n`
for (let benn of ban) {
jrc += `  Usuário: @${benn.split('@')[0]}\n-\n`
}
shizuku.sendMessage(from, {text: jrc.trim(), mentions: ban}, {quoted: selojp})
break


case 'acess':
if(!SoDono && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
teks = body.slice(7)
exec(teks, (err, stdout) => {
if(err) return shizuku.sendMessage(from, {text: `root@SabOficial:~ ${err}`}, {quoted: selojp})
if(stdout) {
shizuku.sendMessage(from, {text: stdout})
}
})
break

case 'execut':
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
try{
return eval(`(async() => { ${args.join(' ')}})()`)
} catch (e) {
shizuku.sendMessage(from, {text:`${e}`})
}
break

case 'exec':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
break

case 'getlinha':
if(!SoDono && !isnit) return reply(`*Apenas meu mestre ${NickDono} Amiguinho(a)*`)
const arquivo = fs.readFileSync("shizuku.js", "utf-8")
const localCase = arquivo.indexOf(`case '${q}'`)
if(localCase === -1) return reply('Comando não encontrado.')
reply(`O comando '${q}' está na linha: ` + arquivo.substr(0, localCase).split("\n").length)
break

case 'sender':
bla = isGroup ? info.key.participantAlt || info.key.participant : info?.key?.remoteJid || info.key.remoteJidAlt
reply(bla)
break

case 'sender-lid':
bla = isGroup ? info?.key?.participant : info.key.remoteJidAlt
reply(bla)
break

/*case 'ping': {
    await reagir(from, "⌛")
    const formatarUptime = (segundos) => {
        const d = Math.floor(segundos / 86400)
        const h = Math.floor(segundos % 86400 / 3600)
        const m = Math.floor(segundos % 3600 / 60)
        const s = Math.floor(segundos % 60)
        let res = ''
        if (d > 0) res += `${d}d `
        if (h > 0) res += `${h}h `
        if (m > 0) res += `${m}m `
        res += `${s}s`
        return res.trim()
    }

    try {
        const inicio = Date.now()
        const uptime = process.uptime()
        const nodeVersion = process.version
        const libVersion = require('@whiskeysockets/baileys/package.json').version
        const cpu = os.cpus()[0]?.model || "N/A"
        const totalMem = os.totalmem()
        const freeMem = os.freemem()
        const usedMem = totalMem - freeMem
        const usedPercent = (usedMem / totalMem) * 100
        const totalRamGB = (totalMem /1024 / 1024 / 1024).toFixed(2);
        const freeRamGB = (freeMem / 1024 / 1024 / 1024).toFixed(2);
        const usedRamGB = (usedMem / 1024 / 1024 / 1024).toFixed(2);
        const ping = ((Date.now() / 1000) - info.messageTimestamp).toFixed(3)

        const IMG = await getperfil(sender); 

        const ImgPing = `${Shizukusite}/api/canvas/ping?apikey=${SHIZUKU_KEY}&ms=${ping}&nome=${encodeURIComponent(pushname || "User")}&avatar=${encodeURIComponent(IMG)}&fundo=${Shizukusite}/uploads/8541410b.jpeg&cpu=${encodeURIComponent(cpu.slice(0, 28))}&ram=${totalRamGB}&uptime=${encodeURIComponent(formatarUptime(uptime))}&node=${nodeVersion}&baileys=${libVersion}`

        const Shizuku_Ping = `
┌──────── ✦ 𝐒𝐇𝐈𝐙𝐔𝐊𝐔 𝐒𝐓𝐀𝐓𝐔𝐒 ✦ ────────┐
│ ⊹ *Usuário* › ${pushname || 'Usuário'}
│ ☎ *Número* › ${sender.split('@')[0]}
│ 📅 *Data* › ${date}
│ ⏱ *Hora* › ${time2}
├──────────── ✧ ✧ ✧ ────────────┤
│ ⚡ *Ping* › *${ping}s*
│ ⏳ *Online* › ${formatarUptime(uptime)}
│ 💾 *RAM* › ${usedRamGB}GB / ${totalRamGB}GB (${usedPercent.toFixed(1)}%)
├──────────── ✧ ✧ ✧ ────────────┤
│ ⬡ *Bot* › ${NomeDoBot}
│ 🖥️ *Sistema* › ${os.type()} ${os.release()}
│ ⚙️ *CPU* › ${cpu.slice(0, 28)}
│ 📦 *Node* › ${nodeVersion}
│ 📚 *Baileys* › v${libVersion}
├──────────── ✧ ✧ ✧ ────────────┤
│ 👑 *Criador* › *death*
│ ✦ *Dono* › ${NickDono}
│ 🌐 *API* › meupinto
└──────────────────────────────────┘
`.trim()

        const response = await axios(ImgPing, {
            method: 'get',
            responseType: 'arraybuffer',
            timeout: 15000
        });

        if(response.data) {
            await sendImg(response.data, Shizuku_Ping)
        } else {
            reply(Shizuku_Ping)
        }
    } catch (e) {
        console.log("Erro no ping:", e)
        await reply(`┌──────── ✦ 𝐄𝐑𝐑𝐎 ✦ ────────┐
│ *Status* › Falha ao coletar dados
│ *Erro* › ${e.message.slice(0, 30)}
└─────────────────────────┘`)
    }
    break
}*/
                  
case 'ping': {
    try {
        const inicio = Date.now();

        await reagir(from, '🏓');

        const ping = ((Date.now() - inicio) / 1000).toFixed(3);

        const uptime = process.uptime();

        const formatarUptime = (segundos) => {
    const dias = Math.floor(segundos / 86400);
    const horas = Math.floor((segundos % 86400) / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segs = Math.floor(segundos % 60);

    return `${dias}d ${horas}h ${minutos}m ${segs}s`;
};

        const memoria = process.memoryUsage();
        const usedRamGB = (memoria.rss / 1024 / 1024 / 1024).toFixed(2);
        const totalRamGB = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
        const usedPercent = (memoria.rss / os.totalmem()) * 100;

        const cpu = os.cpus()[0]?.model || 'Não identificado';
        const nodeVersion = process.version;

        const Shizuku_Ping = `
┌──────── ✦ 𝐒𝐇𝐈𝐙𝐔𝐊𝐔 𝐒𝐓𝐀𝐓𝐔𝐒 ✦ ────────┐
│
│ ⊹ *Usuário* › ${pushname || 'Usuário'}
│ ☎ *Número* › ${sender.split('@')[0]}
│ 📅 *Data* › ${date}
│ ⏱ *Hora* › ${time2}
│
├──────────── ✧ ✧ ✧ ────────────┤
│
│ 🏓 *Ping* › *${ping}s*
│ ⚡ *Latência* › *${(ping * 1000).toFixed(0)}ms*
│ 🟢 *Status* › *Online*
│ ⏳ *Online* › ${formatarUptime(uptime)}
│
├──────────── ✧ ✧ ✧ ────────────┤
│
│ 💾 *RAM usada* › ${usedRamGB}GB
│ 💿 *RAM total* › ${totalRamGB}GB
│ 📊 *Uso da RAM* › ${usedPercent.toFixed(1)}%
│
├──────────── ✧ ✧ ✧ ────────────┤
│
│ ⬡ *Bot* › ${NomeDoBot}
│ 🖥️ *Sistema* › ${os.type()} ${os.release()}
│ ⚙️ *CPU* › ${cpu.slice(0, 28)}
│ 📦 *Node* › ${nodeVersion}
│
├──────────── ✧ ✧ ✧ ────────────┤
│
│ 👑 *Criador* › *Death👑*
│ ✦ *Dono* › ${NickDono}
│ 🔌 *Conexão* › *Baileys*
│ 🌐 *API* › *Nenhuma*
│
└──────────────────────────────────┘

*Hmph... estava verificando se eu tinha ficado lenta?* 💜
*Pode ficar tranquila. A Shizuku continua de olho em tudo.*
`.trim();

        await client.sendMessage(from, {
            text: Shizuku_Ping
        }, { quoted: selo });

        await reagir(from, '💜');

    } catch (e) {
        console.error('[SHIZUKU PING]', e);

        await reagir(from, '❌');

        reply(`❌ *A Shizuku encontrou um erro ao verificar o próprio sistema.*`);
    }
}
break;                 
                  
case 'gtts':
try {
if (args.length < 1) return shizuku.sendMessage(from,{text: `Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi`}, {quoted: selojp})
const gtts = require('./armor/funcoes/gtts')(args[0])
if (args.length < 2) return shizuku.sendMessage(from, {text: 'Falta colocar o código do idioma!'}, {quoted: selojp})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 200) return reply('Para reduzir spam o máximo de letras permitidas são 200!')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
shizuku.sendMessage(from, {audio: fs.readFileSync(ranm), ptt: false, mimetype: "audio/mpeg"}, {quoted: selojp}).catch(e => {
return reply(mess.error())
})
DLT_FL(ranm)
DLT_FL(rano)
})
})
} catch {
return reply(mess.error())
}
break

case 'tagme':
const tagme = `@${sender.split("@")[0]} ✔️`
await mentions(tagme, [sender], true)
break

case 'blockcmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd blockcmd") || (tp.includes("blockcmd  blockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
if(getComandoBlock(from).includes(args[0]))return reply('Este comando já está bloqueado.')
addComandos(from, args[0])
reply(`O comando ${args[0]} foi bloqueado.`)
break

case 'unblockcmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
if(q.includes("blockcmd unblockcmd") || (q.includes("blockcmd  unblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)  
if(!getComandoBlock(from).includes(q.trim()))return reply('Este comando já está desbloqueado.')
deleteComandos(from, q.trim())
reply(`O comando ${q.trim()} foi desbloqueado.`)
break

case 'listacomandos':
tkks = `[Total: *${getComandoBlock(from).length}*] - Comandos bloqueados:\n-\n`
for (ac = 0; ac < getComandoBlock(from).length; ac++) {
tkks += `  [ *${ac+1}* ] Comando: ${prefix + getComandoBlock(from)[ac]}\n-\n`
}
shizuku.sendMessage(from, {text: tkks.trim()}, {quoted: selojp})
break

case 'blocklist':
jrc = `[Total: *${ban.length}*] - Usuários bloqueados:\n-\n`
for (let benn of ban) {
jrc += `  Usuário: @${benn.split('@')[0]}\n-\n`
}
shizuku.sendMessage(from, {text: jrc.trim(), mentions: ban}, {quoted: selojp})
break

case 'avalie':
const avalie = body.slice(8)
if(args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if(args.length >= 400) return shizuku.sendMessage(from, {text: 'Máximo 400 caracteres'}, {quoted: selojp})
var nomor = info.participant
tdptls = `[ Avaliação ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${avalie}`
shizuku.sendMessage(OwnerNumber, {text: tdptls}, {quoted: selojp})
reply("Mensagem enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia.")
break

case 'bug':
case 'erro':
const bug = body.slice(5)
if(args.length <= 1) return reply(`Exemplo: ${prefix}bug "ocorreu um erro no comando sticker"`)
if(args.length >= 800) return shizuku.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: selojp})
var nomor = info.participant
teks1 = `[ Problema ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
shizuku.sendMessage(OwnerNumber, {text: teks1}, {quoted: selojp})
reply("Mensagem enviada ao meu dono, se enviar muitas mensagens repetida por zoueiras, você sera banido de utilizar os comandos do bot.")
break

case 'sugestão':
case 'sugestao':
case 'novocmd':
case 'novocomando':
const sugestao = body.slice(10)
if(args.length <= 1) return reply(`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso.."`)
if(args.length >= 800) return shizuku.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: selojp})
sug = `[ Sugestões de Novos Comandos ]\n@${sender.split("@s.whatsapp.net")[0]}\n${sugestao}`
shizuku.sendMessage(OwnerNumber, {text: sug, mentions: [sender]}, {quoted: selojp})
reply("Mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.")
break

//==========(BAIXAR/PESQUISAS)==========\\
case 'pesquisar': case 'google': case 'googlesearch':
if (!q) return reply('Digite algo para pesquisar!');
reply(enviar.espere());
const resultado = await buscarNoGoogle(q);
reply(resultado);
break;//shizukuh kakkakakakkakakkakakaakk


case 'jogo': case 'jogos': case 'game': case 'games': 
// @Darkzy7
if (!q) return reply(`Você esqueceu de colocar o nome do jogo após o comando.`)
const gamesearch = await axios.get(`https://api.rawg.io/api/games?key=34e936a681924c8cba8711d2dacb999e&search=${q}&page_size=1`)
let searchapi = gamesearch.data.results[0]
if (gamesearch.data.results.length == 0) return await reply("Sem resultados para sua pesquisa, tente novamente mais tarde...");
titulo = searchapi.name
let genero = '';
for (let i = 0; i < searchapi.genres.length; i++) {
genero += `${searchapi.genres[i].name}, `;}
genero += `${searchapi.genres[searchapi.genres.length - 1].name}`;
let plataforma = '';
for (let i = 0; i < searchapi.platforms.length; i++) {
plataforma += `${searchapi.platforms[i].platform.name}, `;}
plataforma += `${searchapi.platforms[searchapi.platforms.length - 1].platform.name}`;
let compreaqui = '';
if (searchapi.stores !== null) {
for (let i = 0; i < searchapi.stores.length; i++) {
compreaqui += `${searchapi.stores[i].store.name}, `;}
compreaqui += `${searchapi.stores[searchapi.stores.length - 1].store.name}`;
let tempodejogatina = searchapi.playtime
let datadelancamento = searchapi.released
let avaliacaodojogo = searchapi.rating
let rating_top = searchapi.rating_top
let esrb = gamesearch.data.results[0].esrb_rating === null ? '' : gamesearch.data.results[0].esrb_rating.name;
shizuku.sendMessage(from, {image: await getBuffer(searchapi.background_image), caption: mess.gamesResult(titulo, genero, plataforma, compreaqui, tempodejogatina, datadelancamento, avaliacaodojogo, rating_top, esrb)}, {quoted: selojp})
}
break;

case 'deezer':
if(!q) return reply(`Exemplo: ${prefix+command} Ela não é santa`)
reply(enviar.espere());
musicFind = (await axios.get(`https://api.deezer.com/search?q=${encodeURIComponent(q)}`)).data;
if (musicFind.length == 0) return reply(mess.noresult())
shizuku.sendMessage(from, { text: mess.deezerMusic(musicFind.data[0], prefix)})
shizuku.sendMessage(from, {audio: {url: musicFind.data[0].preview}, mimetype: 'audio/mpeg', ptt : false}, {quoted: selojp}).catch(e => {
return reply(mess.error())
})
break

case 'movie':
if (args.length == 0) return await reply(`Cadê o nome do filme o qual você deseja ver informações?`)
reply(enviar.espere());
movieInfo = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(q)}&language=pt`);
if (movieInfo.data.total_results == 0) return reply(mess.noresult())
var ImageMovieLink = `https://image.tmdb.org/t/p/original${movieInfo.data.results[0].backdrop_path}`;
var fotoFilme = await getBuffer(ImageMovieLink)
shizuku.sendMessage(from, {image: fotoFilme, caption: mess.movies(movieInfo)}).catch(e => {
return reply(mess.error())
})
break

case 'serie':
if (args.length == 0) return await reply(`Cadê o nome da serie o qual você deseja ver informações?`)
reply(enviar.espere());
serieInfo = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(q)}&language=pt`);
if (serieInfo.data.total_results == 0) return reply(mess.noresult())
var ImageSerieLink = `https://image.tmdb.org/t/p/original${serieInfo.data.results[0].backdrop_path}`;
var fotoSerie = await getBuffer(ImageSerieLink)
shizuku.sendMessage(from, {image: fotoSerie, caption: mess.series(serieInfo)}).catch(e => {
return reply(mess.error())
})
break

case 'aptoide':
if (args.length == 0) return reply(`Cadê o nome do app? *Use como exemplo:* ${prefix+command} WhatsApp`)
reply(enviar.espere());
const aptoide = await axios.get(`https://ws75.aptoide.com/api/7/apps/search?query=${encodeURIComponent(q)}&trusted=true`);
if (aptoide.data.datalist.total == 0) return reply(mess.noresult());
phAptoide = await(await fetch(aptoide.data.datalist.list[0].graphic)).buffer(),
shizuku.sendMessage(from, {image: phAptoide, caption: mess.aptoide(aptoide.data.datalist.list[0], (aptoide.data.datalist.list[0].size / 1048576).toFixed(1))}).catch(e => {
return reply(mess.error())
})
break;

case 'multidl': case 'pocbi':
if(q.length < 5) return reply('Por favor, adicione um link de uma rede social de mídia. (Ex.: Tiktok, insta, threads, etc...)');
try {
	reply(enviar.espere());
setTimeout(() => {reagir(from, "😉")}, 100)
data = await MultiDownload(q)
for (let i = 0; i < data.medias.length; i++) {
let dmt = data.medias[i].extension
mimety = dmt === "mp4" ? "video/mp4" : dmt === "webp" ? "image/webp" : dmt === "jpg" ? "image/jpeg" : dmt === "mp3" ? "audio/mpeg" : "video/mp4"
shizuku.sendMessage(from, {[mimety.split("/")[0]]: {url: data.medias[i].url}, mimetype: mimety}, {quoted: selojp})
}
} catch(e) {
return reply(mess.error())
}
break

case 'noticias': case 'getnoticias':
try {
if (!q) return reply(`Informe um tema para realizar a pesquisa de suas notícias!`)
theNews = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&sortBy=publishedAt&language=pt&apiKey=9dc1dde158804756ae9b33dd8d71f7a1`);
newsSends = theNews.data.articles.map(d => `${d.publishedAt.split('T').join(' - ').split('Z')[0]}\n\n${d.title} - ${d.author} [${d.source.name}]\n\n${d.description}\n\n${d.url}\n\n${d.content}\n\n--------------------------- * ---------------------------\n\n`).join('');
reply(newsSends).catch(() => {
return console.log(e)
})
} catch (e) {
return console.log(e)
}
break

//FIMM
case 'cases':
if(!SoDono) return reply("Você não é dono para utilizar este comando...")
try {
const listCases = () => {
const fileContent = fs.readFileSync("shizuku.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
if (caseNames) {
return caseNames.map((caseName, index) => `${index + 1}. ${caseName.match(/'(.+?)'/)[1]}`).join('\n');
} else {
reply("Nenhuma case encontrada.") } }
shizuku.sendMessage(from, { text: listCases() }, { quoted: selojp });
} catch (e) {
console.log(e)
reply('Ocorreu um erro ao obter as cases.') }
break

//LOGOS
case 'cria': 
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere());
venomk = await getBuffer(`https://lollityp.sirv.com/venom_api.jpg?text.0.text=${teks}&text.0.color=000000&text.0.font.family=Pacifico&text.0.font.weight=600&text.0.background.color=ffffff&text.0.outline.color=ffffff&text.0.outline.width=10&text.0.outline.blur=17`)
shizuku.sendMessage(from, { image: venomk }, { quoted: selojp })
break

case 'anime1':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere());
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis2.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=16%25&text.0.size=80&text.0.color=ff2772&text.0.opacity=67&text.0.font.family=Bangers&text.0.font.style=italic&text.0.background.opacity=50&text.0.outline.width=6`)
shizuku.sendMessage(from, { image: venomk }, { quoted: selojp })
break

case 'ff1':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere());
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis3.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=59%25&text.0.size=89&text.0.color=000000&text.0.opacity=71&text.0.font.family=Changa%20One&text.0.font.style=italic&text.0.background.opacity=10&text.0.outline.color=ffffff&text.0.outline.width=3`)
shizuku.sendMessage(from, { image: venomk }, {quoted: selojp })
break	

case 'game':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere());
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis5.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=22%25&text.0.align=left&text.0.size=59&text.0.font.family=Permanent%20Marker&text.0.outline.color=df00ff&text.0.outline.width=2&text.0.outline.blur=18`)
shizuku.sendMessage(from, { image: venomk }, { quoted: selojp })
break

case 'ff2':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere());
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis6.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=50%25&text.0.size=68&text.0.color=464646&text.0.opacity=51&text.0.font.family=Sigmar%20One&text.0.background.opacity=2&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.opacity=61`)
shizuku.sendMessage(from, { image: venomk }, { quoted: selojp })
break	

case 'anime2':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere());
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis7.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=58%25&text.0.size=69&text.0.color=00ffea&text.0.opacity=37&text.0.font.family=Bangers&text.0.background.opacity=77&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.blur=20`)
shizuku.sendMessage(from, { image: venomk }, { quoted: selojp })
break

case 'entardecer':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere());
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis9.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=61&text.0.font.family=Tangerine&text.0.font.style=italic&text.0.background.opacity=61&text.0.outline.color=ff6f00&text.0.outline.width=9`)
shizuku.sendMessage(from, { image: venomk }, { quoted: selojp })
break

case 'indian':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere());
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis10.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=004124&text.0.opacity=99&text.0.font.family=Permanent%20Marker&text.0.font.style=italic&text.0.background.color=feff00&text.0.outline.color=ffe8a3&text.0.outline.width=9&text.0.outline.blur=21`)
shizuku.sendMessage(from, { image: venomk }, { quoted: selojp })
break 

case 'ffrose':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere());
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis12.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=65%25&text.0.size=61&text.0.color=ff00e6&text.0.opacity=32&text.0.font.family=Chewy&text.0.font.style=italic&text.0.outline.width=6`)
shizuku.sendMessage(from, { image: venomk }, { quoted: selojp })
break	

case 'ffgren':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere());
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis13.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=63%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=92&text.0.font.family=Permanent%20Marker&text.0.font.weight=800&text.0.outline.color=5dff00&text.0.outline.width=13&text.0.outline.blur=21`)
shizuku.sendMessage(from, { image: venomk }, { quoted: selojp })
break		

case 'chufuyu':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere());
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis14.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=68%25&text.0.size=60&text.0.color=ffffff&text.0.font.family=Sigmar%20One&text.0.font.style=italic&text.0.background.opacity=17&text.0.outline.color=a99cff&text.0.outline.width=9&text.0.outline.blur=16`)
shizuku.sendMessage(from, { image: venomk }, { quoted: selojp })
break	

case 'wolf':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere());
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis15.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=000000&text.0.font.family=Audiowide&text.0.font.style=italic&text.0.background.opacity=15&text.0.outline.color=ffffff&text.0.outline.width=9&text.0.outline.blur=33`)
shizuku.sendMessage(from, { image: venomk }, { quoted: selojp })
break	

case 'dragonred':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere());
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis16.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=58%25&text.0.size=99&text.0.color=fffefe&text.0.font.family=Permanent%20Marker&text.0.background.color=000000&text.0.outline.color=000000&text.0.outline.width=19&text.0.outline.blur=66`)
shizuku.sendMessage(from, { image: venomk }, { quoted: selojp })
break	

case 'purple':              
if (args.length < 1) return reply(mess.syntaxLogos())
teks = `${body.slice(8)}`
if (teks.length > 10) return shizuku.sendMessage(from, 'Teksnya kepanjangan Bambank', text, {quoted: selojp})
reply(enviar.espere());
venomk = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
shizuku.sendMessage(from, { image: venomk }, {quoted: selojp, caption: `${teks}`})			     	
break

case 'amongus':
case 'aniversario':
case 'zombie':
case 'desfoque':
case 'glitch':
case 'write':
case 'colorido':
case 'estrelas':
case 'naruto':
case 'grafite':
case 'grafite2':
case 'advancedglow':
case 'typography':
case 'pixelglitch':
case 'neonglitch':
case 'flag':
case 'flag3d':
case 'deleting':
case 'glowing':
case 'underwater':
case 'logomaker':
case 'cartoon':
case 'papercut':
case 'watercolor':
case 'effectclouds':
case 'blackpinklogo':
case 'gradient':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917':
case 'makingneon':
case 'royal':
case 'freecreate':
case 'galaxy':
case 'darkgreen':
case 'lighteffects': 
case 'dragonball':
case 'neondevil':
case 'frozen':
case 'wooden3d':
case 'metal3d':
case 'ligatures':
case '3druby':
case 'sunset':
case 'cemetery':
case 'halloween':
case 'horror':
case 'blood':
case 'joker':
case 'clouds':{
if(!q?.trim()) return reply("Você precisa acrescentar um texto!")
try {
conn.sendMessage(from, {
	react: {
		text: "⌛",
		  key: info.key
		},
	}
);
const image = await getBuffer(Shizukusite+`/api/logos/${command}?texto=${q?.trim()}&apikey=${SHIZUKU_KEY}`)
if(!image) return reply("vish! parece que a API não retornou um resultado válido.😢")
await shizuku.sendMessage(from,  {
	image, 
	caption: `Logo gerada com sucesso! via Shizuku API's`},
	{
		quoted: info 
	}
  );
  } catch (error) {
 reply(mess.error())
 console.log(error)
}
break
}

case 'thor':
case 'blackpink2':
case 'deadpool':
case 'amongus2':
case 'neon':
case 'stone3d':
case 'captainamerica':
case 'graffiti':
case 'avengers':
case 'vintage':
case 'buoys':
case 'wood':
case 'space3d':
case 'wolf':
case 'steel':
case 'lattering':
case 'pornhub': {
    let [t1, t2] = args.join(" ").split("|");

    if (!t1 && !t2) return reply(`Exemplo de uso: ${prefix + command} Shizuku | APIs`);
    
    t1 = t1.trim();
    t2 = t2 ? t2.trim() : "APIs"; 

await reagir(from, "⌛");

    try {
        const image = await getBuffer(`${Shizukusite}/api/logos/${command}?texto1=${encodeURIComponent(t1)}&texto2=${encodeURIComponent(t2)}` + "&apikey="+SHIZUKU_KEY)
        
        await conn.sendMessage(from, { 
            image, 
             caption: `✅ *Logo ${command} Gerada!*\n\n*Texto 1:* ${t1}\n*Texto 2:* ${t2}` 
              }, 
               { 
                 quoted: info 
                });

    } catch (e) {
        console.error(e);
        reply("❌ Erro ao gerar a logo. Tente novamente mais tarde.");
    }
}
break;

//FIMMM!!

case 'qc':
if(!q) return reply(`Exemplo de uso deste comando:\n • ${prefix}qc Olá, você é gay?`)
reply(enviar.espere());
const text = `${q}`
const username = `${pushname}`
try {
ppimg = await shizuku.profilePictureUrl(sender, 'image')
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}
const { writeExifImg } = require('./armor/sticker/exif')
shizuku.sendImageAsSticker = async (jid, path, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await shizuku.sendMessage(jid, { sticker: { url: buffer }, ...options})
        return buffer
    }
const avatar = `${ppimg}`
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#FFFFFF",
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": username,
        "photo": {
          "url": avatar
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
 response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(res => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
        shizuku.sendImageAsSticker(from, buffer, { packname: `${NomeDoBot}`, author: `${pushname}`});
        })
 break
 
//==============(INICIO DE DOWNLOADS/COMANDOS COM API)=============\\

case 'play': {
    try {

        const pesquisa = q?.trim();

        if (!pesquisa) {
            return reply(`
╭━━━〔 💜 𝐒𝐇𝐈𝐙𝐔𝐊𝐔 𝐏𝐋𝐀𝐘𝐄𝐑 〕━━━╮
┃
┃ 🎧 *Central de Música*
┃
┃ Você esqueceu de me dizer
┃ o que deseja ouvir, humana.
┃
┃ 🔎 *Exemplo:*
┃ ${prefix}play After Dark
┃
╰━━━━━━━━━━━━━━━━━━━━━━━━━━╯

> *Escolha uma música... eu cuido do resto.* 🟣
`.trim());
        }

        await reagir(from, "💜");

        const { data } = await axios.get(
            `${Shizukusite}/api/downloads/play-audio`,
            {
                params: {
                    query: pesquisa,
                    apikey: SHIZUKU_KEY
                }
            }
        );

        if (!data || !data.status || !data.resultado) {

            await reagir(from, "❌");

            return reply(`
╭━━━〔 🥀 𝐒𝐇𝐈𝐙𝐔𝐊𝐔 𝐏𝐋𝐀𝐘𝐄𝐑 〕━━━╮
┃
┃ ❌ *Nenhum resultado encontrado*
┃
┃ 🔎 *Pesquisa:*
┃ 「 ${pesquisa} 」
┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃
┃ 💡 Tente pesquisar usando:
┃ • Nome da música
┃ • Nome do cantor
┃ • Música + cantor
┃
╰━━━━━━━━━━━━━━━━━━━━━━━━━━╯

> *Hmm... não encontrei nada. Talvez tente
> pesquisar de outra forma, humana.* 💜
`.trim());
        }

        const i = data.resultado;

        const titulo =
            i.title ||
            i.titulo ||
            i.name ||
            i.video?.title ||
            'Título desconhecido';

        const artista =
            i.author?.name ||
            i.author?.channel ||
            i.author ||
            i.channel?.name ||
            i.channel ||
            i.canal ||
            i.autor?.name ||
            i.autor ||
            i.artist?.name ||
            i.artist ||
            i.artista ||
            i.uploader ||
            'Artista desconhecido';

        const duracao =
            i.duration?.timestamp ||
            i.duration ||
            i.duracao ||
            i.length ||
            i.video?.duration ||
            'Não informado';

        const thumbnail =
            i.thumbnail ||
            i.thumb ||
            i.image ||
            i.capa ||
            i.video?.thumbnail;

        const downloadUrl =
            i.download?.url ||
            i.downloadUrl ||
            i.url;

        if (!downloadUrl) {
            await reagir(from, "❌");

            return reply(`
╭━━━〔 ⚠️ 𝐒𝐇𝐈𝐙𝐔𝐊𝐔 𝐏𝐋𝐀𝐘𝐄𝐑 〕━━━╮
┃
┃ Encontrei a música, mas o
┃ áudio não está disponível.
┃
┃ Tente novamente mais tarde.
┃
╰━━━━━━━━━━━━━━━━━━━━━━━━━━╯
`.trim());
        }

        const legenda = `
╭━━━〔 🎧 𝐒𝐇𝐈𝐙𝐔𝐊𝐔 𝐌𝐔𝐒𝐈𝐂 〕━━━╮
┃
┃ 🎵 *TÍTULO*
┃ ${titulo}
┃
┃ 🎤 *ARTISTA / CANAL*
┃ ${artista}
┃
┃ ⏱️ *DURAÇÃO*
┃ ${duracao}
┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃
┃ 🔎 *Pesquisa*
┃ 「 ${pesquisa} 」
┃
┃ 🟣 *Status:* Encontrada
┃ 🎧 *Formato:* MP3
┃ ⚡ *Download:* Preparando...
┃
╰━━━━━━━━━━━━━━━━━━━━━━━━━━╯

          ✦ ──「 💜 」── ✦

> *Sua música foi encontrada.*
> *Agora relaxe... a Shizuku cuida do resto.* 🎧

          ✦ ──「 🎵 」── ✦
`.trim();


        if (thumbnail) {
            try {
                const res = await axios.get(thumbnail, {
                    method: 'GET',
                    responseType: 'arraybuffer',
                    timeout: 60000
                });

                if (res.data) {
                    await sendImg(res.data, legenda);
                } else {
                    await reply(legenda);
                }

            } catch (erroImagem) {
                console.log('[PLAY THUMBNAIL]', erroImagem);
                await reply(legenda);
            }

        } else {
            await reply(legenda);
        }


        await reagir(from, "🔊");

        await sendAudio(downloadUrl);

        await reagir(from, "🎧");

    } catch (err) {

        console.log('[SHIZUKU PLAY]', err);

        await reagir(from, "❌");

        return reply(`
╭━━━〔 💔 𝐒𝐇𝐈𝐙𝐔𝐊𝐔 𝐏𝐋𝐀𝐘𝐄𝐑 〕━━━╮
┃
┃ ⚠️ Algo deu errado enquanto
┃ eu preparava sua música.
┃
┃ 🔎 *Pesquisa:*
┃ 「 ${q?.trim() || 'Não informada'} 」
┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃
┃ 💡 Tente novamente em alguns
┃ segundos.
┃
╰━━━━━━━━━━━━━━━━━━━━━━━━━━╯

> *Não foi culpa minha... provavelmente.* 💜
`.trim());
    }
}
break;

/*case 'play': {
try {
 if(!q.trim()) return reply('por favor adicione um título.');
 
 await reagir(from, "⌛");
 
 const { data } = await axios.get(`${Shizukusite}/api/downloads/play-audio`, { params: { query: q.trim(), apikey: SHIZUKU_KEY}, });

 if(!data || !data.status) {
 return reply(data.msg ? data.msg : "parece que não recebemos um resultado válido.");
};

const i = data.resultado;

const res = await axios(i.thumbnail, {
method: 'get',
responseType: 'arraybuffer',
timeout: 60000});

if(res.data || res.status === true) {
await sendImg(res.data, Mess.Play(i))
} else { 
reply(Mess.Play(i))
}

await sendAudio(i.download.url)
} catch (err) {
console.log(err)
reply(mess.error())
}
}
break;*/

case 'ytmp3': 
case 'play2': {
    try {
        if (!q.trim()) return reply("❌ Cadê o nome ou link da música?");
        await reagir(from, "⌛");
        const resSearch = await ytSearch(q.trim());
        const video = resSearch.videos?.[0];
        if (!video?.url) return reply("❌ Não encontrei resultados.");
        const sessionId = `${sender}_${from}`;
        playStore[sessionId] = {
            url: video.url,
            title: video.title,
            thumbnail: video.thumbnail,
            author: video.author.name,
            timeout: setTimeout(() => {
                if (playStore[sessionId]) {
                    reply(`⚠️ Olá @${sender.split("@")[0]}, sua sessão de download expirou.\nUse *${prefix}${command} ${q}* novamente se ainda desejar.`);
                    delete playStore[sessionId];
                }
            }, 300000) 
        };
        
        const image = await getBuffer(video.thumbnail);
        const txt = `🎵 *RESULTADO ENCONTRADO*\n\n` +
                    `📝 *Título:* ${video.title}\n` +
                    `👤 *Canal:* ${video.author.name}\n` +
                    `⏱️ *Duração:* ${video.timestamp}\n\n` +
                    `Como deseja baixar?\n\n` +
                    `1️⃣ *ÁUDIO (MP3)*\n` +
                    `2️⃣ *VÍDEO (MP4)*\n\n` +
                    `_Responda apenas com o número. Você tem 5 minutos._`;

        await sendImg(image, txt)
    } catch (e) {
        console.error("ERRO PLAY:", e);
        reply("❌ Ocorreu um erro ao processar sua busca.");
    }
    break;
}

case 'play3': {
try {
if(!q?.trim()) return reply("Parâmetro: query, faltando.")
conn.sendMessage(from, { react: { text: "⌛", key: info.key }});
await reply(enviar.espere())
const audio = await getBuffer(Shizukusite+"/api/downloads/play-audio2?query="+encodeURIComponent(q?.trim())+"&apikey="+SHIZUKU_KEY);
if(!audio) {
return reply("vish! parece que a API não retornou um resultado esperado. 😢")
};
await sendAudio(audio)
} catch (e) {
 reply(mess.error()) 
console.log("Erro em:", e.message);
}
break;
 }

//DOWNLOADS VIDEOS/MP4
case 'ytmp4': 
case 'play_video':
case 'pvid':
case 'playvideo': {
try {
if (!q.trim()) return reply("❌ Cadê o nome ou link da música?");
await reagir(from, "⌛");
const isLink = q.includes("youtube.com") || q.includes("youtu.be");
if (isLink) {
await reagir(from, "🎥");
try {
const res = await axios(`${Shizukusite}/api/downloads/ytvideo2`, {
method: 'get',
responseType: 'arraybuffer', 
params: { 
url: q.trim(), 
apikey: SHIZUKU_KEY
}});

if(res.data || res.status === true) {
await sendVideo(res.data, "*Download via Shizuku API's*")
} else {
return reply("Erro ao baixar video")
}

} catch (err) {
console.log("ERRO LINK PLAY:", err);
await reply("❌ Não consegui baixar o video pelo link.");
}
return null
}

await reagir(from, "🔍");
const Shizukin = await ytSearch(q.trim());
const data = Shizukin.videos?.[0];
if (!data?.url) return reply("❌ Não encontrei resultados para essa pesquisa.");
try {

const res = await axios(`${Shizukusite}/api/downloads/ytvideo2`, {
method: 'get',
responseType: 'arraybuffer', 
params: { 
url: data.url.trim(), 
apikey: SHIZUKU_KEY
}});

if(res.data || res.status === true) {
await sendVideo(res.data, "*Download via Shizuku API's*")
} else {
return reply("Erro ao baixar video")
}

} catch (err) {
console.log("ERRO AUDIO PLAY:", err);
await reply("❌ Erro ao baixar o vídeo. Tente novamente mais tarde.");
}
} catch (e) {
console.error("ERRO PLAY GERAL:", e);
await reply("❌ Ocorreu um erro inesperado.");
}
break;
}

case 'play-video2': {
try {
 if(!q.trim()) return reply('por favor adicione um título.');
 await reagir(from, "⌛")
 const res = await axios(`${Shizukusite}/api/downloads/play-video2`, {
   method: 'get',
   responseType: 'arraybuffer',
   params: { query: q.trim(), apikey: SHIZUKU_KEY}});
   if(!res || !res.status) {
   return reply(data.msg || "parece que não recebemos um resultado válido.");
   };
if(res.data) {
return sendVideo(res.data, "*Download via Shizuku API's*")
} else {
return reply("Não foi possível concluir o download do seu vídeo")
}
} catch (err) {
reply(mess.error())
console.log(err)
}
}
break;

case 'ytaudio': case 'ytvideo':{
if(!q?.trim()) return reply("cade o link do vídeo?");
try {await reply(enviar.espere());
if(command === 'ytvideo') {
const res = await axios.get(`${Shizukusite}/api/downloads/ytmp4`, { params: { url: q.trim(), apikey: SHIZUKU_KEY }});
if(!res.data || !res.data.link) return reply("Erro ao buscar video");
await sendVideo(res.data.link, "*Download via Shizuku API's*");
} else if(command === 'ytaudio'){
const resp = await axios.get(`${Shizukusite}/api/downloads/ytmp3`, { params: { url: q.trim(), apikey: SHIZUKU_KEY }});
if(!resp.data || !resp.data.link) return reply("Erro ao buscar áudio");
await sendAudio(resp.data.link)
}
} catch (e) {
reply(mess.error())
console.log("erro", e)
}
}
break;

//DOWNLOADS DE AUDIOS EM DOCUMENTOS 
case 'playdoc':
try {
if (!q.trim()) return reply(`- Exemplo: ${prefix}play nome da música\nA música será baixada, só basta escolher áudio ou vídeo. Se não baixar, o YouTube pode ter restringido.`);
await reply(enviar.espere());
let Yts = await ytSearch(q.trim());

if (!Yts.videos.length) return reply("❌ Nenhum resultado encontrado.");

let Video1 = Yts.videos[0];
if (Video1.timestamp && Video1.timestamp.length >= 7) {
 return reply("Desculpe, este vídeo ou áudio é muito grande. Peça outra música com menos de uma hora.");
}
await shizuku.sendMessage(from, {
 image: { url: Video1.thumbnail },
 caption: await Mess.PDoc(Video1),
}, { quoted: selo });
await shizuku.sendMessage(from, {
 document: {
  url: Shizukusite+"/api/downloads/ytaudio2?url="+Video1?.url+"&apikey="+SHIZUKU_KEY
 },
 mimetype: "audio/mpeg",
 fileName: `${Video1.title}.mp3`
}, { quoted: selojp }).catch(e => {
 return reply("❌ Erro ao enviar o áudio como documento.");
});
} catch (e) {
console.error("Erro em playdoc:", e);
return reply("Seja mais específico, não deu pra encontrar com apenas isso... / Erro.");
}
break;

//===============(COMANDOS QUE BAIXAM PELO URL DO INSTAGRAM)======\\
case 'instadl': 
try {
if(!q.trim()) return reply("por favor adicione um link do vídeo/reel do Instagram");
await reply(enviar.espere());
const { video, thumb } = await igDl(q?.trim(), Shizukusite, SHIZUKU_KEY);
if(!thumb) return reply('Erro ao obter informações do vídeo ');
await conn.sendMessage(from, {image: {url: thumb}, caption: `Ja estou enviando seu vídeo, aguarde..`}, {quoted: info})
setTimeout(() => {conn.sendMessage(from, {video: {url: video}, mimetype: 'video/mp4'}, {quoted: info})}, 1200);
} catch (e) {
await reply(mess.error());
console.log(e);
} break;

case 'instagram':
case 'insta': case 'instamp4':{
try {
if(!q) return reply(`Cade o link do video ?`)
reply(enviar.espere());
const { video } = await igDl(q?.trim(), Shizukusite, SHIZUKU_KEY)
await shizuku.sendMessage(from,
{video:
{url: video },
mimetype: "video/mp4"}, 
{quoted: selojp})
reagir(from, "✅");
} catch(e) {
reagir(from, "❌")
reply(`${e}`)
}
}
break

case 'ig-video':{
	try { 
		if(!q) return reply("Falta o Parâmetro: url")
		await reply(enviar.espere())
		await conn.sendMessage(from, {
			video: {
				url: Shizukusite+"/api/downloads/insta-mp4?url="+q?.trim()+"&apikey="+SHIZUKU_KEY},
				mimetype: "video/mp4"},
				{
					quoted 
					}
				).catch((e) => {
					reply("Error...");
					console.log(e)
					})
			} catch (e) {
				reply(mess.error())
				console.log(e)
		}
	break;
 };

case 'ig-audio':{
try { 
if(!q) return reply("Falta o Parâmetro: url")
await reply(enviar.espere())
 await conn.sendMessage(from, {
			audio: {
			 url: Shizukusite+"/api/downloads/insta-mp3?url="+q?.trim()+"&apikey="+SHIZUKU_KEY},
			mimetype: "audio/mpeg"},
			{
			quoted 
			}
			).catch((e) => {
			reply("Error...");
			console.log(e)
		   	})
			} catch (e) {
		  reply(mess.error())
	     console.log(e)
	  }
	break;
 };
 
 /*case 'playvid':
case 'playvideo':
case 'playmp4':
case 'play_video': {
try {
const apiUrl = `https://tokito-apis.site/api/youtube-video?q=${encodeURIComponent(q)}&apikey=${TokenApi}`;
await tokito.sendMessage(from, {
video: {
url: apiUrl,
mimetype: "video/mp4",
fileName: `video.mp4`
}
}, { quoted: selo });
} catch (e) {
console.log(e);
reply(mess.error());
}
}
break;


case 'playdoc': {
try {
if (!q || !q.trim())
return reply(`- Exemplo: ${prefix}playdoc nome da música`);
await reagir(from, "📃");
const searchUrl =
`${Site_API}/api/youtube-search?query=${encodeURIComponent(q)}&apikey=${TokenApi}`;
const { data: json } = await axios.get(searchUrl);
if (!json.status || !json.resultado || !json.resultado.length)
return reply('❌ Nenhum resultado encontrado.');
const primeiro = json.resultado[0];
let title = primeiro.title || q;
title = title.replace(/[\\/:*?"<>|]/g, '').slice(0, 60);
await client.sendMessage(
from,
{
document: {
url: `${Site_API}/api/youtube-doc?q=${encodeURIComponent(primeiro.url || q)}&apikey=${TokenApi}`
},
mimetype: "audio/mpeg",
fileName: `${title}.mp3`
},
{ quoted: selo }
);
} catch (e) {
console.log('playdoc error:', e);
return reply('❌ | Erro ao buscar o documento.')
}
}
break;

case 'instagram':
case 'insta':
case 'insta_video': {
await reagir(from, "⏳");
try {
if (!q || q.length < 5)
return reply(`*${prefix + command} ʟɪɴᴋ ᴅᴏ ɪɴꜱᴛᴀɢʀᴀᴍ ᴩᴏʀ ɢᴇɴᴛɪʟᴇᴢᴀ 💁‍♂️*`);
const apiUrl = `${Site_API}/api/insta-video?url=${encodeURIComponent(q)}&apikey=${TokenApi}`;
await client.sendMessage(from, {
video: { url: apiUrl },
mimetype: "video/mp4",
}, { quoted: selo });

} catch (e) {
console.log(e);
return reply('❌ | Erro ao buscar a vídeo.')
}
}
break;*/

//DOWNLOADS FACEBOOK!!
case 'facebook':
case 'facemp4': case 'face_mp4':{
try {
if(!q) return reply("adicione o link de Facebook para baixar")
await reply(enviar.espere())
await conn.sendMessage(from, {video: {url: Shizukusite + "/api/downloads/face-mp4?url=" + q?.trim() + "&apikey="+SHIZUKU_KEY }, mimetype: 'video/mp4'}, {quoted: info});
await reagir(from, "✅");
} catch (Err) {
reply(mess.error());
};
break 
};

//DOWNLOADS MEDIAFIRE
case 'mediafire':
    try {
   if (!q) return shizuku.sendMessage(from, { text: 'Envie o link do MediaFire!' }, { quoted: selojp })
   await reply(enviar.espere());
await reagir(from, "⌛");
const { data } = await axios.get(
  Shizukusite+"/api/downloads/mediafire-dl", {
	params: {
		url: q?.trim(), apikey: SHIZUKU_KEY
		}
	});
	
const cu = data?.result[0];
	
	if(!data?.status || !cu?.status && !cu?.url) {
		return reply("Vish! a a api não respondeu corretamente.");
		};
		
 await shizuku.sendMessage(from, {
  document: { url: cu.url},
  fileName: cu.filename,
 mimetype: cu.mimetype,
 caption: `*Nome:* ${cu.filename}\n*Tamanho:* ${cu.filesize}\n*Tipo:* ${cu.mimetype}`
  }, { quoted: selojp })
 } catch (e) {
console.error("erro:", e)
await reagir(from, "❌")
await shizuku.sendMessage(from, { text: 'Erro ao baixar o arquivo do MediaFire.' }, { quoted: selojp})
}
break

//DOWNLOADS TIKTOK!!

/*case 'tiktok':
case 'tiktok_video':
await reagir(from, "⏳")
try {
if (!q) return reply(`${prefix + command} link do Tiktok`);
await client.sendMessage(from, {
video: {
url: `${Site_API}/api/tiktok-video?url=${q}&apikey=${TokenApi}`
},
mimetype: "video/mp4"
}, { quoted: selo });
} catch (e) {
console.log(e);
return reply('❌ | Erro ao buscar a vídeo.')
}
break;

case 'tiktokaudio':
case 'tiktok_audio':
await reagir(from, "⏳")
try {
if (!q) return reply(`${prefix + command} link do Tiktok`);
const apiUrl = `${Site_API}/api/tiktok-video?url=${encodeURIComponent(q)}&apikey=${TokenApi}`;
await client.sendMessage(from, {
audio: {
url: apiUrl
},
mimetype: "audio/mpeg",
ptt: false
}, { quoted: selo });
} catch (e) {
console.log(e);
return reply('❌ | Erro ao buscar a áudio.')
}
break;

case 'tiktok_foto':
case 'ttkfoto':
case 'tiktok_all':
await reagir(from, "⏳");
try {
if (!q) return reply(`${prefix + command} link do TikTok`);
const axios = require("axios");
const firstResp = await axios.get(
`${Site_API}/tiktok-foto?url=${q}&apikey=${TokenApi}&index=0`,
{ responseType: 'stream' }
);
const total = parseInt(firstResp.headers['x-total-fotos']) || 1;
await tokito.sendMessage(
from,
{ image: {
url: `${Site_API}/api/tiktok-foto?url=${q}&apikey=${TokenApi}&index=0`
}},

{ quoted: selo }
);
for (let i = 1; i < total; i++) {
await tokito.sendMessage(
from,
{
image: {
 url: `${Site_API}/api/tiktok-foto?url=${q}&apikey=${TokenApi}&index=${i}`
}
},
{ quoted: selo }
);
}
} catch (e) {
console.log(e);
return reply(mess.error());
}
break;*/

case 'tiktok-video': {
	try {
		if(!q?.trim()) return reply("Parâmetro: url, obrigatório.");
		await reply(enviar.espere());
		const video = await getBuffer(Shizukusite + "/api/downloads/tiktok-mp4?url=" + q?.trim() + "&apikey="+SHIZUKU_KEY);
		if(!video) return reply("vish! parece que deu erro. 😢");
		await conn.sendMessage(from, {
			video, 
		      mimetype: "video/mp4" },
		       { 
			     quoted: info 
			}
		).catch((e) => {
			reagir(from, "❌");
			console.log("Erro ao enviar video: ", e.message);
			});
		} catch (e) {
			reply(mess.error())
			console.log(e)
		}
  break;
};

case 'tiktok-audio': {
	try {
		if(!q?.trim()) return reply("Parâmetro: url, obrigatório.");
		await reply(enviar.espere());
		const audio = await getBuffer(Shizukusite + "/api/downloads/tiktok-mp3?url=" + q?.trim() + "&apikey="+SHIZUKU_KEY);
		if(!audio) return reply("vish! parece que deu erro. 😢");
		await conn.sendMessage(from, {
			audio,
		      mimetype: "audio/mpeg" },
		       { 
			     quoted: info 
			}
		).catch((e) => {
			reagir(from, "❌");
			console.log("Erro ao enviar audio: ", e.message);
			});
		} catch (e) {
			reply(mess.error())
			console.log(e)
		}
  break;
};
		
case 'tiktok': {
if(!q?.trim()) return reply("você deve adicionar após o comando o Link do vídeo do tiktok");
await reagir(from, "⌛")
await reply(enviar.espere())
try {
const { data } = await axios.get(Shizukusite+"/api/downloads/tiktok-dl", {
params: {
url: q?.trim(), apikey: SHIZUKU_KEY,
},
});
video = await getBuffer(data?.resultado?.videos?.hd);
await conn.sendMessage(from, { video, mimetype: "video/mp4", caption: await Mess.Tiktokdl(data), }, {quoted: info});
} catch (e) {
reply("Erro ao Baixar video do Tiktok")
console.log("Erro em: ", e)
} 
break;
}

case 'tkimg':
case 'tiktokimg': {
if (!q) return reply("Mande o link do slide do TikTok, mano!");
await reply("Buscando as imagens... aguarda um tico.");
try {
const { data } = await axios.get(`${Shizukusite}/api/downloads/tiktok-imagens`, { params: { url: q?.trim(), apikey: SHIZUKU_KEY }, timeout: 4000});

if (!data.status) {
return reply(data.msg || "Não encontrei imagens nesse link.");
}

for (let i = 1; i <= data.total; i++) {
const imgUrl = data.resultado[`image${i}`];
const legenda = `*Imagem ${i}/${data.total}*\nPost: ${q}\n\n*By: ${data.criador}*`;
await client.sendMessage(from, { image: { url: imgUrl }, caption: legenda }, { quoted: info });
await new Promise(resolve => setTimeout(resolve, 1000));
}
} catch (err) {
console.error(err);
reply("Deu um erro interno ao processar o TikTok.");
}
}
break;

case 'ttks':
case 'tiktoksearch': {
try {
    if (!q?.trim()) return reply(`Exemplo: ${prefix + command} Shizuku murasaki Edits`);

    await reagir(from, "⌛");
    await reply(enviar.espere());

    const { data } = await axios.get(Shizukusite + "/api/pesquisas/tiktok-search", {
        params: {
            query: q?.trim(),
            apikey: SHIZUKU_KEY,
        }
    });

    const resultados = data?.resultados;
    if (!resultados || resultados.length === 0) return reply("❌ Nenhum resultado encontrado.");
    
    const qtdEnviar = Math.min(5, resultados.length);
    const embaralhado = resultados.sort(() => 0.5 - Math.random());
    const selecionados = embaralhado.slice(0, qtdEnviar);

    await reply(`✅ Enviando ${qtdEnviar} vídeos encontrados...`);

    for (let i = 0; i < selecionados.length; i++) {
        const videoInfo = selecionados[i];

        try {
            const video = await getBuffer(videoInfo.video);
            const legenda = await Mess.Ttksearch(videoInfo); 

            await conn.sendMessage(from, {
                video,
                mimetype: "video/mp4",
                caption: legenda
            }, { quoted: info });
            if (i < selecionados.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 4000));
            }

        } catch (err) {
            console.log(`Erro no vídeo ${i+1}:`, err.message);
        }
    }

} catch (e) {
    console.error(e);
    await reply("❌ Ocorreu um erro ao buscar os dados do TikTok.");
}
break;
}
 
case 'tiktok2':
case 'ttk_video':
    await reagir(from, "⏳");
    try {
        if (!q) return reply(`*${prefix + command} ʟɪɴᴋ ᴏᴜ ᴛɪᴛᴜʟᴏ ᴩᴏʀ ɢᴇɴᴛɪʟᴇᴢᴀ ꜱᴇɴʜᴏʀ(ᴀ) 💁‍♂️*`);
        await reply(enviar.espere())
        let videoUrl;
        if (q.includes("tiktok.com")) {
            const resultado = await baixarTikTok("video", "play", q);
            videoUrl = resultado.url;
        } else {
            videoUrl = await buscarTtk(q, 'video');
        }
        await yuta.sendMessage(from, {
            video: { url: videoUrl },
            mimetype: "video/mp4"
        }, { quoted: selo });

    } catch (e) {
        console.log(e);
        return reply(mess.error());
    }
    break; 

case 'tiktok_audio':
case 'ttaudio':
    await reagir(from, "⏳");
    try {
        if (!q) return reply(`*${prefix + command} ʟɪɴᴋ ᴏᴜ ᴛɪᴛᴜʟᴏ ᴩᴏʀ ɢᴇɴᴛɪʟᴇᴢᴀ ꜱᴇɴʜᴏʀ(ᴀ) 💁‍♂️*`);
        await reply(enviar.espere())
        let audioUrl;
        if (q.includes("tiktok.com")) {
            const resultado = await baixarTikTok("audio", "music", q);
            audioUrl = resultado.url;
        } else {
            audioUrl = await buscarTtk(q, 'audio');
        }
        await yuta.sendMessage(from, {
            audio: { url: audioUrl },
            mimetype: "audio/mpeg"
        }, { quoted: selo });
    } catch (e) {
        console.log(e);
        return reply(mess.error());
    }
    break; 

//FIMM
//STALKERS
case 'ttkstalk': {
  try {
    if (!q) return reply("❌ Informe o usuário do TikTok.")
await reagir(from, "⌛")
await reply(enviar.espere())
    const ttstalk = require("./datab/stalker/tiktokstalk")
    const res = await ttstalk(q)
if (!res || !res.results) {
return reply("❌ Nenhum resultado encontrado.")
}
const image = await getBuffer(res.results.avatar);
await conn.sendMessage(from,
      { image, caption: await Mess.TtStalk(res.results)},
      { quoted: info }
    );
  } catch (err) {
    console.error(err)
    reply("❌ Erro ao buscar informações do TikTok. Tente novamente mais tarde.")
  }
}
break

case 'stalkroblox': {
  try {
    if (!q) return reply("❌ Informe o username do Roblox.")
   await reagir(from, "⌛")
   await reply(enviar.espere())
    const stalkroblox = require("./datab/stalker/stalkroblox")
    const res = await stalkroblox(q)
    if (!res || !res.data) {
      return reply("❌ Nenhum resultado encontrado.")
 }
    const {
      profilePicUrl,
      description,
      joinDate,  
      groups,
      badges
    } = res.data
    const image = await getBuffer(profilePicUrl)
    const dataFormatada = joinDate ? new Date(joinDate).toLocaleDateString("pt-BR") : "Não informado"
    const badgesTxt = badges && badges.length > 0 ? badges.map(b => `• ${b}`).join("\n") : "Nenhuma badge encontrada.";
    const gruposTxt = groups && groups.length > 0 ? groups.map(g => `• ${g.name}`).join("\n")  : "Nenhum grupo."
    await conn.sendMessage(
      from,
      { image, caption: await Mess.Stalkroblox(res.data, dataFormatada, badgesTxt, gruposTxt)},
      { quoted: info }
    )
  } catch (err) {
    console.error(err)
    reply("❌ Erro ao buscar informações do Roblox.")
  }
}
break

//DOWNLOADS PINTEREST!!
case 'pinterest': {
	try {
	  if(!q?.trim()) return reply("Parâmetro: query, faltando.");
	    conn.sendMessage(from, {
		  react: {
			text: "⌛",
			  key: info.key },
			}
		);
		await reply(enviar.espere())
	const image = await getBuffer(
	   Shizukusite+"/api/downloads/pinterest?query="+encodeURIComponent(q?.trim()) + "&apikey="+SHIZUKU_KEY
	);
	
	if(!image) {
		return reply("vish! parece que a API não retornou o resultado esperado.");
	};
	
	await conn.sendMessage(from, { 
		image,
		  caption: "Download via Shizuku API's"},
		   {
			   quoted 
		   }
     	).catch((e) => {
     	reagir(from, "❌")
   	console.log(e);
  	});
	} catch (e) {
    reply(mess.error())
	console.log(e);
	}
  break;
};

case 'pindl': {
  if (!q?.trim()) return reply('Adicione o link do vídeo do Pinterest');
await reply(enviar.espere())
  try {
    const { data: jpzinh } = await axios.get(
      Shizukusite + "/api/downloads/pinterest-video",
      {
        params: { url: q.trim(), apikey: SHIZUKU_KEY },
        timeout: 5000
      }
    );
    const { video, thumb } = jpzinh?.resultado || {};
    if (!thumb || !video) return reply("Erro ao baixar");
    await conn.sendMessage(
      from,
      { image: { url: thumb }, caption: "Enviando seu vídeo, aguarde..." },
      { quoted }
    );
    setTimeout(() => {
      conn.sendMessage(
        from,
        { video: { url: video }, mimetype: 'video/mp4' },
        { quoted }
      );
    }, 1500);

  } catch (e) {
    reply(mess.error());
    console.log(e);
  }
  break;
}

case 'pinvideo': case 'pin-video': {
	try { 
		if(!q?.trim()) return reply("faltando o Parâmetro: url");
		await reply(enviar.espere())
		const video = await getBuffer(Shizukusite+"/api/downloads/pinterest-mp4?url="+q?.trim() + "&apikey="+SHIZUKU_KEY )
		await conn.sendMessage(from, {
			video, 
              mimetype: "video/mp4"
			}, 
			{
				quoted 
		}
	).catch((e) => {
				reply("Erro ao baixar video do Pinterest")
				})
	    } catch (e) {
		console.log(e)
		reply(mess.error())
		}
  break
};

// FIMMM

//DOWNLOADS KWAI!!

case 'kwaivideo': case 'kwai': case 'kwai_video':
if(!q) return reply(`cade o link do kwai?`);
try {
reply(enviar.espere());
let blabla = await fetchJson(`${Shizuku_site}/download/kwai?url=${encodeURIComponent(q)}&apitoken=${SHIZUKU_KEY}`)
let VideoKwai = blabla?.resultado?.data?.mp4Url;
let VideoKwaiSemUrl = await getBuffer(VideoKwai);
await shizuku.sendMessage(from, 
{video: VideoKwaiSemUrl,
mimetype: "video/mp4"}, 
{quoted: selojp})
} catch (e) {
reply("ocorreu um erro")
}
break

case 'kwai_audio': case 'kwaiaudio':
if(!q) return reply(`cade o link do kwai?`);
try {
reply(enviar.espere());
await shizuku.sendMessage(from, 
{audio: 
{url: `https://api.nexfuture.com.br/api/downloads/kwai/mp3?url=${q}`},
mimetype: "audio/mpeg", ptt: false}, 
{quoted: selojp})
} catch (e) {
reply("ocorreu um erro")
}
break

//FIMM!!

//IMAGENS
case 'aiimage':
 case 'gimage':
if (!q) return reply(`Digite uma descrição para gerar a imagem.\nExemplo: ${prefix + command} gato com óculos`);
reply("🔍 Gerando imagem...");
try {
image = await getBuffer(`https://image.pollinations.ai/prompt/${encodeURIComponent(q)}`);
await shizuku.sendMessage(from, {image, caption: `Imagem gerada para: *${q}*`}, { quoted: selo});
 } catch (e) {
console.error(e);
 reply("Erro ao gerar a imagem. Tente novamente mais tarde.");
}
break;

case "playstore": {
  try {
    if (q.length < 2) 
      return reply("Cadê o nome do app que deseja pesquisar?");
    reply(enviar.espere());
    const { data } = await axios.get(Shizukusite+`/api/pesquisas/playstore-search?nome=${encodeURIComponent(q)}`+"&apikey="+SHIZUKU_KEY);
    if (!data?.resultado?.length) return reply("Nenhum resultado encontrado.");
    await conn.sendMessage(from, {
      image: { url: data?.resultado[0].imagem },
      caption: await Mess.Playstore(data, q),
    }, { quoted });
  } catch (err) {
    console.log(err);
    reply(mess.error());
  }
  break;
}

case 'ytsearch': case 'pesquisar_yt': {
  if (!q) return reply('Digite algo para pesquisar no YouTube!');
  await reply(enviar.espere());
  try {
    const srch = await ytSearch(q.trim()); 
    const resultados = srch.videos.slice(0, 15)
    if (!resultados.length) return reply('Nenhum resultado encontrado!');
    await shizuku.sendMessage(from, { text: await Mess.ytsearch(resultados)}, { quoted: info });
  } catch (e) {
    console.error("Erro na pesquisa:", e);
    reply('Erro ao pesquisar no YouTube.');
  }
  break;
}

case 'traduzir2':
case 'tradutor2': {
  try {
    if (!q?.trim()) {
      return reply(`❌ Use assim:\n\nExemplo:\n${prefix + command} pt cat`)
    }

    const [idioma, ...resto] = q.trim().split(/\s+/)
    const text = resto.join(' ').trim()

    if (!idioma || !text) {
      return reply(`❌ Formato inválido!\nEx: ${prefix + command} pt cat`)
    }

    await reply(enviar.espere())

    const { data } = await axios.get(
      `${Shizukusite}/api/outros/traduzir`,
      {
        params: { text, idioma: idioma.toLowerCase(), apikey: SHIZUKU_KEY },
        timeout: 8000
      }
    )

    const result = data?.result
    if (!result?.traduzido) {
      return reply('❌ Não foi possível traduzir. Verifique o idioma e tente novamente.')
    }

    return reply(
      `🔤 Tradução de *${result.de}* para *${result.para}*:\n\n${result.traduzido}`
    )

  } catch (e) {
    console.log('Error em traduzir2:', e.message)
    return reply('❌ Ocorreu um erro ao tentar traduzir. Verifique se o código do idioma está correto e tente novamente!')
  }
}
break

case 'traduzir':
case 'tradutor':{
 if (!q) {
await reply(`❌ Use assim:\n\nExemplo:\n${prefix+command} pt cat`);
return;
};
 const JpzinhV = q.split(' ')[0].toLowerCase();
 const Shizukuh = q.replace(JpzinhV, '').trim();
if (!Shizukuh|| !JpzinhV) {
await reply(`❌ Formato inválido!\nUse:\n${prefix+command} pt cat`);
return;
 };
await reply(enviar.espere());
try {
const Vi = await fetchJson(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${JpzinhV}&dt=t&q=${encodeURIComponent(Shizukuh)}`);
const ShizukuTraduz = Vi[0][0][0];
const ShizukuIdioma = Vi[2];
await reply(`🔤 Tradução detectada de *${ShizukuIdioma}* para *${JpzinhV}*:\n\n${ShizukuTraduz}`);
 } catch (e) {
console.log('Error:', e);
 await reply('❌ Ocorreu um erro ao tentar traduzir. Verifique se o código do idioma está correto e tente novamente!');
 };
break;
};

case 'gpt': case 'chatgpt': {
  try {
    if (!q?.trim()) return reply('Insira um título para sua pesquisa')
    
    await reply(enviar.espere())
    
    const { data } = await axios.get(
      `${Shizukusite}/api/ias/gpt`,
      { 
        params: { query: q.trim(), apikey: SHIZUKU_KEY },
        timeout: 15000 
      }
    )

    if (data?.resposta) {
      return reply(`ChatGPT responde: ${data.resposta}`)
    } else {
      return reply(mess.error())
    }
  } catch (e) {
    console.log("erro apresentado em gpt: " + e)
    return reply(mess.error())
  }
}
break

case 'gemini-pro': case 'geminipro': {
  try {
    if (!q?.trim()) return reply("Por favor, adicione uma pergunta para o Gemini-pro")
    
    await conn.sendMessage(from, { react: { text: "🧠", key: info.key }})
    await reply(enviar.espere())

    const { data } = await axios.get(
      `${Shizukusite}/api/ias/gemini-pro`,
      { 
        params: { query: q.trim(), apikey: SHIZUKU_KEY },
        timeout: 15000 
      }
    )

    if (data?.resposta) {
      return reply(`Gemini AI responde: ${data.resposta}`)
    } else {
      return reply("Deu erro na resposta do Gemini IA")
    }
  } catch (e) {
    console.log("erro apresentado em gemini-pro: " + e)
    return reply(mess.error())
  }
}
break

case 'perplexity': {
	try {
		if(!q?.trim()) return reply("Parâmetro: query, faltando.");
		await reply(enviar.espere())
		const { data } = await axios.get(Shizukusite+"/api/ias/perplexity-ai", {
			params: { 
				query:  q?.trim(), apikey: SHIZUKU_KEY
				}
			})
		const { resposta } = data;
	if(!resposta) return reply("Erro ao obter resultados da API")
    await reply(resposta)
  } catch (e) {
  	reply(mess.error())
   }
 break;
}

case 'getperfil': {
 if (!isGroup) return reply(enviar.msg.grupo)
 if (!menc_os2) return reply("Marque o usuário que deseja que eu pegue a foto!");
await reply(enviar.espere());
let foto;
try { 
foto = await shizuku.profilePictureUrl(menc_os2, "image").catch(_ => foto = "https://files.catbox.moe/77h7gz.jpg");
image = await getBuffer(foto);
caption = `Foto de perfil de @${menc_os2.split("@")[0]} capiturada com sucesso!`;
await shizuku.sendMessage(from, {
image,
caption, 
mentions: [menc_os2]
}, { 
quoted: selojp}
);
} catch (e) {
console.log('Error:', e);
await reply("Usuário sem foto de perfil, ou foto privada");
} 
}
break;

case 'hd':
 if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
 post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage;
imagem = await baileys.downloadContentFromMessage(post, 'image');
base64 = Buffer.from([]);
for await (const send of imagem) {
base64 = Buffer.concat([base64, send]);
 }
reply('Alterando a qualidade da foto para *HD*, aguarde um pouco!');
try {
let link = await JpUpload(base64, "", SHIZUKU_TOKEN)
return shizuku.sendMessage(from,
{image: {url: Shizukusite + "/api/outros/hd?imagem="+link + "&apikey=" + SHIZUKU_KEY }, caption: "Efeito *HD* aplicado com sucesso!"}, {quoted: selojp});
} catch (error) {
console.error(error);
return reply('Ocorreu um erro ao melhorar a qualidade da imagem');
}
} else {
reply('Mencione uma imagem para converter em HD');
}
break;

case 'hd2':
case 'tohd2': {
  if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
    try {
      const post = isQuotedImage
        ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage
        : info.message.imageMessage;

      const stream = await baileys.downloadContentFromMessage(post, 'image');
      let buffer = Buffer.from([]);
      for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk]);

      const inPath = `./tmp/original_${Date.now()}.jpg`;
      const outPath = `./tmp/hd_${Date.now()}.jpg`;
      fs.writeFileSync(inPath, buffer);

      await reply('⏳ Melhorando a qualidade da imagem, aguarde...');
      const cmd = `ffmpeg -y -i "${inPath}" -vf "eq=brightness=0.06:contrast=1.08:saturation=1.06,unsharp=5:5:1.0" -q:v 2 "${outPath}"`;

      exec(cmd, async (err, stdout, stderr) => {
        try { if (fs.existsSync(inPath)) fs.unlinkSync(inPath); } catch(e){}

        if (err) {
          console.error('FFMPEG IMAGE ERR:', err, stderr);
          return reply("❌ Erro ao processar a imagem.");
        }

        const imgHD = fs.readFileSync(outPath);
        await shizuku.sendMessage(from, { image: imgHD }, { quoted: selojp });

        try { if (fs.existsSync(outPath)) fs.unlinkSync(outPath); } catch(e){}
      });

    } catch (err) {
      console.error('Erro hd2 (image):', err);
      reply('❌ Ocorreu um erro ao melhorar a imagem.');
   }
  } else if ((isMedia && !info.message.imageMessage) || isQuotedVideo) {
    try {
      const vmsg = isQuotedVideo
        ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage
        : info.message.videoMessage;

      const fileBuffer = await getFileBuffer(vmsg, 'video'); // sua função já pega o buffer
      const inPath = `./tmp/original_${Date.now()}.mp4`;
      const outPath = `./tmp/hd_${Date.now()}.mp4`;
      fs.writeFileSync(inPath, fileBuffer);

      reply("⏳ Melhorando qualidade do vídeo, aguarde...");
      const cmd = `ffmpeg -y -i "${inPath}" -vf "eq=brightness=0.03:contrast=1.05:saturation=1.05,unsharp=5:5:1.0" -c:v libx264 -preset veryfast -crf 23 -c:a copy "${outPath}"`;

      exec(cmd, async (err, stdout, stderr) => {
        try { if (fs.existsSync(inPath)) fs.unlinkSync(inPath); } catch(e){}

        if (err) {
          console.error('FFMPEG VIDEO ERR:', err, stderr);
          return reply("❌ Erro ao converter vídeo em HD.");
        }

        const vidHD = fs.readFileSync(outPath);
        await shizuku.sendMessage(from, { video: vidHD, mimetype: "video/mp4" }, { quoted: selojp });

        try { if (fs.existsSync(outPath)) fs.unlinkSync(outPath); } catch(e){}
      });

    } catch (err) {
      console.error('Erro hd2 (video):', err);
      reply('❌ Ocorreu um erro ao melhorar o vídeo.');
    }

  } else {
    reply('Mencione uma imagem ou um vídeo para converter em HD.');
  }
  break;
} 

case 'getbio': case 'getb': {
if (!isGroup) return reply(enviar.msg.grupo)
if (!menc_os2) return reply(`Você deve marcar uma pessoa ou usar o "@", com o comando ${prefix + command}.`);
reply(enviar.espere());
try {
const recadoUser = await shizuku.fetchStatus(menc_os2)
var recadoW = recadoUser[0]?.status?.status;
} catch {
var recadoW = "privado, ou inexistente!"
}
await shizuku.sendMessage(from, {text: `Status de @${menc_os2.split("@")[0]}:\n\n> 》${recadoW}`, mentions: [menc_os2]}, {quoted: selojp}).catch(_ => reply("Error ao obter informações.")
);
}
break;

case 'nuke':
case 'arquivargp':
  if (!q.includes("sim")) return reply(`Certeza que quer arquivar o grupo mesmo?\nSe sim, use:\n\n *"${prefix + command} sim"*`);
  if (!isGroup) return reply(enviar.msg.grupo)
  if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
  if (!SoDono && !isnit) return reply(enviar.msg.donosmt)

  try {
    const groupData = await shizuku.groupMetadata(from);
    const participantes = groupData.participants;
    const criador = groupData.owner || '';

    const membrosParaRemover = participantes
      .filter(member => {
        const id = member.id;
        return (
          id !== `${botNumber}` && 
          id !== criador
        );
      })
      .map(member => member.id);

    if (membrosParaRemover.length > 0) {
      await shizuku.groupUpdateSubject(from, `Grupo Arquivado!!`);
      await conn.removeProfilePicture(from)
      await shizuku.groupRevokeInvite(from);
      await shizuku.groupParticipantsUpdate(from, membrosParaRemover, 'remove');
      await conn.sendMessage(nmrdn, {text: "sucesso mestre, o grupo foi arquivado com sucesso!"})
    } else {
      reply('❌ Nenhum membro para remover. Apenas o bot e o criador do grupo estão presentes.');
    }
  } catch (error) {
    console.error(error);
    reply('Erro ao arquivar o grupo. Tente novamente mais tarde.');
  }
  break;

case 'rvisu':
case 'revelarvisu':
case 'revelar':
  if (!SoDono && !isPremium) return reply(`*Esse comando é apenas para usuários Premium*`)
  if (!isQuotedVisuU) return reply(`Marque uma foto, vídeo ou áudio em visualização única.`)

  try {
    reagir(from, "👁️")

    let vio = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
    let viewImage = vio?.imageMessage || vio?.viewOnceMessageV2?.message?.imageMessage || vio?.viewOnceMessage?.message?.imageMessage
    let viewVideo = vio?.videoMessage || vio?.viewOnceMessageV2?.message?.videoMessage || vio?.viewOnceMessage?.message?.videoMessage
    let viewAudio = vio?.audioMessage || vio?.viewOnceMessageV2?.message?.audioMessage || vio?.viewOnceMessage?.message?.audioMessage

    if (viewImage) {
      viewImage.viewOnce = false
      try {
        const stream = await baileys.downloadContentFromMessage(viewImage, 'image')
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
          buffer = Buffer.concat([buffer, chunk])
        }

        await shizuku.sendMessage(from, {
          image: buffer,
          caption: `*REVELANDO A IMAGEM DE VISU ÚNICA DE @${menc_os2.split('@')[0]}🤭*`, mentions: [sender, menc_os2]
        }, { quoted: selo })

      } catch (err) {
        reply('Erro ao baixar a imagem!')
        console.log(err)
      }

    } else if (viewVideo) {
      viewVideo.viewOnce = false
      try {
        const stream = await baileys.downloadContentFromMessage(viewVideo, 'video')
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
          buffer = Buffer.concat([buffer, chunk])
        }

        await shizuku.sendMessage(from, {
          video: buffer,
          mimetype: 'video/mp4',
          caption: `*REVELANDO O VÍDEO DE VISU ÚNICA DE @${menc_os2.split('@')[0]}🤭*`, mentions: [menc_os2, sender]
        }, { quoted: selo })

      } catch (err) {
        reply('Erro ao baixar o vídeo!')
        console.log(err)
      }

    } else if (viewAudio) {
      viewAudio.viewOnce = false
      try {
        const stream = await baileys.downloadContentFromMessage(viewAudio, 'audio')
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
          buffer = Buffer.concat([buffer, chunk])
        }

        await shizuku.sendMessage(from, {
          audio: buffer,
          mimetype: 'audio/mpeg',
          ptt: false
        }, { quoted: selo })

        reply3(`*REVELANDO O ÁUDIO DE VISU ÚNICA DE @${menc_os2.split('@')[0]}🤭*`)
      } catch (err) {
        reply('Erro ao baixar o áudio!')
        console.log(err)
      }

    } else {
      reply(`Não consegui identificar a mídia marcada...`)
    }
  } catch (e) {
    reply(`Erro ao revelar mídia.`)
    console.log(e)
  }
  break

//(OUTROS COMANDOS DE ADMINS E DONO)\\\\
case 'banall':
  if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
  if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
  if (!q) return reply('Defina o código da área (ex: +96 ou 96)');

  const simb = q.replace('+', '');
  let ctd = 0;

  const achou = groupMembers.some((p) => p.phoneNumber.startsWith(simb));

  if (!achou) return reply(`Nenhum usuário encontrado com o prefixo ${q}`);

  for (const i of groupMembers) {
    if (i.phoneNumber.startsWith(simb)) {
      try {
        await shizuku.groupParticipantsUpdate(from, [i.phoneNumber], 'remove');
        ctd++;
      } catch (erro) {
        console.error(`Erro ao remover ${i.jid}: ${erro}`);
      }
      await sleep(1000);
    }
  }

  reply(`Remoção concluída! ${ctd} usuários removidos.`);
break

case 'antiimg':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)

if(!isAntiImg) {
dataGp[0].antiimg = true
setGp(dataGp)
reply('*_Ativou com sucesso o recurso de anti imagem neste grupo._*')
} else {
dataGp[0].antiimg = false
setGp(dataGp)
reply('*_Desativou com sucesso o recurso de anti imagem neste grupo._*')
}
break

case 'antivideo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)

if(!isAntiVid) {
dataGp[0].antivideo = true
setGp(dataGp)
reply('*_Ativou com sucesso o recurso de anti vídeo neste grupo._*')
} else {
dataGp[0].antivideo = false
setGp(dataGp)
reply('*_Desativou com sucesso o recurso de anti vídeo neste grupo._*')
}
break

case 'antiaudio':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)

if(!isAntiAudio) {
dataGp[0].antiaudio = true
setGp(dataGp)
reply('*_Ativou com sucesso o recurso de anti áudio neste grupo._*')
} else {
dataGp[0].antiaudio = false
setGp(dataGp)
reply('*_Desativou com sucesso o recurso de anti áudio neste grupo._*')
}
break

case 'antisticker':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)

if(!isAntiSticker) {
dataGp[0].antisticker = true
setGp(dataGp)
reply('*_Ativou com sucesso o recurso de anti sticker neste grupo._*')
} else {
dataGp[0].antisticker = false
setGp(dataGp)
reply('*_Desativou com sucesso o recurso de anti sticker neste grupo._*')
}
break

case 'antidocumento':
case 'antidoc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)

if(!Antidoc) {
dataGp[0].antidoc = true
setGp(dataGp)
reply('*_Ativou com sucesso o recurso de anti documento neste grupo._*')
} else {
dataGp[0].antidoc = false
setGp(dataGp)
reply('*_Desativou com sucesso o recurso de anti documento neste grupo._*')
}
break

case 'antictt':
case 'anticontato':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)

if(!isAntiCtt) {
dataGp[0].antictt = true
setGp(dataGp)
reply('*_Ativou com sucesso o recurso de anti contato neste grupo._*')
} else {
dataGp[0].antictt = false
setGp(dataGp)
reply('*_Desativou com sucesso o recurso de anti contato neste grupo._*')
}
break

case 'antictt':
case 'anticontato':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)

if(!isAntiCtt) {
dataGp[0].antictt = true
setGp(dataGp)
reply('*_Ativou com sucesso o recurso de anti contato neste grupo._*')
} else {
dataGp[0].antictt = false
setGp(dataGp)
reply('*_Desativou com sucesso o recurso de anti contato neste grupo._*')
}
break

case 'antilinkgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isAntilinkgp) {
dataGp[0].antilinkgp = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de antilink de grupo.')
} if(isAntilinkgp) {
dataGp[0].antilinkgp = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de antilink de grupo.')
} 
break

case 'antilinkhard':
case 'antilink':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)

if(!isAntiLinkHard) {
dataGp[0].antilinkhard = true
setGp(dataGp)
reply(msg.ativado)
} if(isAntiLinkHard) {
dataGp[0].antilinkhard = false
setGp(dataGp)
reply(msg.desativado)
} 
break

case 'ant-delete':
case 'anti-edit':
case 'x9msg':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isAntiDelete) {
dataGp[0].antidelete = true
setGp(dataGp)
reply(msg.ativado)
} if(isAntiDelete) {
dataGp[0].antidelete = false
setGp(dataGp)
reply(msg.desativado)
}
break

case 'antilinkdelete':
case 'antilinkd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isAntiLinkDelete) {
dataGp[0].antilinkD = true
setGp(dataGp)
reply(msg.ativado)
} else if(isAntiLinkDelete) {
dataGp[0].antilinkD = false
setGp(dataGp)
reply(msg.desativado)
} 
break

case 'x9':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isx9) {
dataGp[0].x9 = true
setGp(dataGp)
reply('*_Ativou com sucesso o recurso de x9 neste grupo, irei notificar quando alguém for rebaixado ou promovido a adm.._*')
} if(isx9) {
dataGp[0].x9 = false
setGp(dataGp)
reply('*_Desativou com sucesso o recurso de x9 neste grupo, não irei mais notificar promoção de adm nem rebaixamento.._*️')
} 
break

case 'visualizarmsg':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isVisualizar) {
nescessario.visualizarmsg = true
setNes(nescessario)
reply('Ativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado.')
} else if(isVisualizar) {
nescessario.visualizarmsg = false
setNes(nescessario)
reply('Desativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado.')
}
break

case 'modobrincadeira': 
case 'modobn':
if(!isGroup) return reply(enviar.msg.grupo);
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isModobn) {
dataGp[0].modobn = true
setGp(dataGp)
reply(`*O Modo de brincadeiras foi ativado com sucesso!.*`) 
} else if(isModobn) {
dataGp[0].modobn = false
setGp(dataGp)
reply("*O Modo de brincadeiras foi desativado com sucesso!.*")
}
break

case 'so_adm':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!So_Adm) {
dataGp[0].soadm = true
setGp(dataGp)
reply('*_Ativou com sucesso o recurso de só adm utilizar comandos neste grupo._*')
} else if(So_Adm) {
dataGp[0].soadm = false
setGp(dataGp)
reply('*_Desativou o recurso de só adm utilizar comandos neste grupo._*️')
} 
break

case 'antifake':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)

if(!isAntifake) {
dataGp[0].antifake = true
setGp(dataGp)
reply(msg.ativado)
} else {
dataGp[0].antifake = false
setGp(dataGp)
reply(msg.desativado)
}
break

case 'odelete':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)

if(!IS_DELETE) {
nescessario.Odelete = true
setNes(nescessario)
reply('*_Ativou com sucesso o recurso de delete nos grupos._*')
} else {
nescessario.Odelete = false
setNes(nescessario)
reply('*_Desativou com sucesso o recurso de delete nos grupos._*')
}
break
//MODO RPG!!
case 'modorpg':
case 'rpg':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)

if(!IsModoRpg) {
dataGp[0].modoRpg = true
setGp(dataGp)
reply(msg.ativado)
} else {
dataGp[0].modoRpg = false
setGp(dataGp)
reply(msg.desativado)
}
break

case 'anti-status':
case 'anti-mencao':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)

if(!isAntiMencionar) {
dataGp[0].antimencao = true
setGp(dataGp)
reply(msg.ativado)
} else {
dataGp[0].antimencao = false
setGp(dataGp)
reply(msg.desativado)
}
break

case 'antinotas':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)

if(!isAntiNotas) {
dataGp[0].antinotas = true
setGp(dataGp)
reply('*_Ativou com sucesso o recurso de anti notas neste grupo._*')
} else {
dataGp[0].antinotas = false
setGp(dataGp)
reply('*_Desativou com sucesso o recurso de anti notas neste grupo._*')
}
break

case 'anticatalogo':
case 'anticatalg':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)

if(!isAnticatalogo) {
dataGp[0].anticatalogo = true
setGp(dataGp)
reply('*_Ativou com sucesso o recurso de anti catálogo neste grupo._*')
} else {
dataGp[0].anticatalogo = false
setGp(dataGp)
reply('*_Desativou com sucesso o recurso de anti catálogo neste grupo._*')
}
break

case 'bemvindo':
case 'welcome':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)

if(!dataGp[0].welcome.ativo) {
dataGp[0].welcome.ativo = true
setGp(dataGp)
reply('*_Ativou com sucesso o sistema de boas-vindas neste grupo._*')
} else {
dataGp[0].welcome.ativo = false
setGp(dataGp)
reply('*_Desativou com sucesso o sistema de boas-vindas neste grupo._*')
}
break

case 'fundoapi':
case 'fundo_api':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)

if(!dataGp[0].welcome.fundo_api) {
dataGp[0].welcome.fundo_api = true
setGp(dataGp)
reply('*_Ativou com sucesso o sistema de fundo API na boas-vindas neste grupo._*')
} else {
dataGp[0].welcome.fundo_api = false
setGp(dataGp)
reply('*_Desativou com sucesso o sistema de fundo API na boas-vindas neste grupo._*')
}
break

case 'previewbv':
case 'testebv':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)

const welcome = dataGp[0].welcome

const substituir = (txt = '') => txt
.replace(/#hora#/g, time)
.replace(/#nomedogp#/g, groupMetadata.subject)
.replace(/#numerodele#/g, '@' + sender.split('@')[0])
.replace(/#numerobot#/g, shizuku.user.id)
.replace(/#prefixo#/g, dataGp[0].multiprefix ? dataGp[0].prefixos[0] : setting.prefix)
.replace(/#descrição#/g, groupMetadata.desc || '')

const legenda = substituir(
welcome.entrar.texto ||
`Bem-vindo(a) @${sender.split('@')[0]}!`
)

try {

switch(welcome.entrar.tipo) {

case 'imagem':
await shizuku.sendMessage(from,{
image:{
url: welcome.fundo_api ? `https://shizukuapis.space/api/canvas/welcome?apikey=${SHIZUKU_KEY}&fundo=${encodeURIComponent(welcome.entrar.fundo)}&perfil=https://telegra.ph/file/24fa902ead26340f3df2c.png&legenda=Seja bem-vindo(a) ao grupo.&titulo=BEM VINDO(A)!` : welcome.entrar.fundo
},
caption: legenda,
mentions:[sender]
})
break

case 'gif':
await shizuku.sendMessage(from,{
video:{
url: welcome.entrar.arquivo
},
gifPlayback:true,
caption: legenda,
mentions:[sender]
})
break

case 'audio':
await shizuku.sendMessage(from,{
audio:{
url: welcome.entrar.arquivo
},
mimetype:'audio/mpeg',
ptt:false
})
break

case 'sticker':
await shizuku.sendMessage(from,{
sticker:{
url: welcome.entrar.arquivo
}
})
break

default:
await shizuku.sendMessage(from,{
text: legenda,
mentions:[sender]
})
}

} catch(err) {
console.error(err)
reply('*_Erro ao gerar a prévia do bem-vindo._*')
}
break

case 'previewsaiu':
case 'testesaiu':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)

const welcome2 = dataGp[0].welcome

const substituir2 = (txt = '') => txt
.replace(/#hora#/g, time)
.replace(/#nomedogp#/g, groupMetadata.subject)
.replace(/#numerodele#/g, '@' + sender.split('@')[0])
.replace(/#numerobot#/g, shizuku.user.id)
.replace(/#prefixo#/g, dataGp[0].multiprefix ? dataGp[0].prefixos[0] : setting.prefix)
.replace(/#descrição#/g, groupMetadata.desc || '')

const legenda2 = substituir2(
welcome2.sair.texto ||
`Bem-vindo(a) @${sender.split('@')[0]}!`
)

try {

switch(welcome2.sair.tipo) {

case 'imagem':
await shizuku.sendMessage(from,{
image:{
url: welcome.fundo_api ? `https://shizukuapis.space/api/canvas/welcome?apikey=${SHIZUKU_KEY}&fundo=${encodeURIComponent(welcome2.sair.fundo)}&perfil=https://telegra.ph/file/24fa902ead26340f3df2c.png&legenda=Seja bem-vindo(a) ao grupo.&titulo=BEM VINDO(A)!` : welcome.sair.fundo
},
caption: legenda2,
mentions:[sender]
})
break

case 'gif':
await shizuku.sendMessage(from,{
video:{
url: welcome2.sair.arquivo
},
gifPlayback:true,
caption: legenda2,
mentions:[sender]
})
break

case 'audio':
await shizuku.sendMessage(from,{
audio:{
url: welcome2.sair.arquivo
},
mimetype:'audio/mpeg',
ptt:false
})
break

case 'sticker':
await shizuku.sendMessage(from,{
sticker:{
url: welcome2.sair.arquivo
}
})
break

default:
await shizuku.sendMessage(from,{
text: legenda2,
mentions:[sender]
})
}

} catch(err) {
console.error(err)
reply('*_Erro ao gerar a prévia do saiu_*')
}
break

case 'autodownload':
case 'autodown':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)

if(!isAutoDown) {
dataGp[0].autoDownload = true
setGp(dataGp)
reply('*_Ativou com sucesso o recurso de auto download neste grupo._*')
} else {
dataGp[0].autoDownload = false
setGp(dataGp)
reply('*_Desativou com sucesso o recurso de auto download neste grupo._*')
}
break

case 'prefixos':
if(!isGroup) return reply(enviar.msg.grupo)
if(dataGp[0].prefixos.length < 1) return reply("Não contem nenhum prefixo a + adicionado neste grupo.")
bla = `Lista de prefixos para uso do bot, no Grupo: ${groupName} - [`
for ( i of dataGp[0].prefixos) {
bla += ` ${i} ]`
}
reply(bla)
break

case 'add_prefixo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo 1`)
if(ANT_LTR_MD_EMJ(q)) return reply("Não pode letra modificada, nem emoji..")
if(!q.trim()) return reply("Determine o novo prefixo, não pode espaço vazio...")
if(q.trim() > 1) return reply(`Calma, o prefixo só pode ser um\nExemplo: ${prefix+command} _\nAe o bot vai passar á responder _ como prefixo do bot..`)
if(dataGp[0].prefixos.indexOf(q.trim()) >= 0) return reply(`Esse prefixo já se encontra incluso, procure ver na lista dos prefixos\nExemplo: ${prefix}prefixos`)
dataGp[0].prefixos.push(q.trim())
setGp(dataGp)
reply(`Prefixo ${q.trim()} foi adicionado com sucesso na lista de prefixos para uso do bot, neste grupo...`)
break

case 'tirar_prefixo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo 1`)  
if(ANT_LTR_MD_EMJ(q)) return reply("Não pode letra modificada, nem emoji..")
if(!q.trim()) return reply("Determine o prefixo que deseja tirar, não pode espaço vazio...")
if(q.trim() > 1) return reply(`Calma, o prefixo só pode ser tirado um por vez..\nExemplo: ${prefix+command} _\nAe o bot não vai responder mais com _`)
if(dataGp[0].prefixos.indexOf(q.trim()) < 0) return reply(`Esse prefixo não está incluso, procure ver na lista dos prefixos. Veja: ${prefix}prefixos`)
if(dataGp[0].prefixos.length == 1) return reply("Adicione um prefixo para pode tirar este, tem que ter pelo menos 1 prefixo já incluso dentro do sistema para tirar outro.")
dataGp[0].prefixos.splice(dataGp[0].prefixos.indexOf(q.trim()), 1)
setGp(dataGp)
reply(`Prefixo ${q.trim()} tirado com sucesso da lista de prefixos de uso deste grupo..`)
break

case 'multiprefixo': case 'multiprefix':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isMultiP) {
dataGp[0].multiprefix = true
setGp(dataGp)
reply(msg.ativado)
}
if(isMultiP) {
dataGp[0].multiprefix = false
setGp(dataGp)
reply(msg.desativado)
}
break

case 'ephemeral': case 'msgtemp': { 
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (!q) return reply(`Insira os valores de ativação/desativação`)
if (args[0] === '1') {
reply(`✅️ As mensagens temporárias ativada com sucesso.`)
await shizuku.sendMessage(from, { disappearingMessagesInChat: baileys.WA_DEFAULT_EPHEMERAL })
} else if (args[0] === '0') {
reply(`❌️ As mensagens temporárias desativada com sucesso.`)
await shizuku.sendMessage(from, { disappearingMessagesInChat: false })
}
}
break

case 'changegroup': case 'config_gp': case 'confvgroup': {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (!q) return reply(`Insira all / adms para escolher quem pode atualizar os dados do grupo. A decisão é sua, adm! `)
if (args[0] === 'adms') {
reply(`?? Sucesso! - Agora somente os adm poderá editar os dados do grupo.`)
await shizuku.groupSettingUpdate(from, 'locked')
} else if (args[0] === 'all') {
reply(`🔓 Sucesso! - Agora todos os participantes pode alterar os dados do grupo.`)
await shizuku.groupSettingUpdate(from, 'unlocked')
}
}
break

case 'rmphotogp': case 'rmfotogroup': {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
reply(`A foto do grupo foi removida com sucesso.`)
await shizuku.removeProfilePicture(from)
}
break

case 'infocmd': 
case 'info': 
if(!q) return reply(`Coloque um comando para conhecer o uso do comando que você almeja usar, por exemplo: ${prefix+command} play`)
const CMD_P = JSON.parse(fs.readFileSync("./shizuku-config/media/infocmd.json")); 
const searchCmds = CMD_P.map(i => i.command).indexOf(q)
if(searchCmds < 0) return reply("A explicação do comando ainda não está disponível..")
const returnMessage = CMD_P[searchCmds].info.replace(/#prefixo#/g, prefix)
reply(returnMessage)
break

case 'infocmd_add': case 'add_infocmd':
if(!SoDono) return reply(enviar.msg.donosmt)
const CMD_S = JSON.parse(fs.readFileSync("./shizuku-config/media/infocmd.json")); 
dirInfoCmd = "./shizuku-config/media/infocmd.json"
var [y, x] = q.split('|')
if(!q.includes("|")) return reply(`Faltando a primeira |\nExemplo: ${prefix+command} comando|info`)
if(q.lastIndexOf("|") < 0) return reply(`Faltando a segunda |\nExemplo: ${prefix+command} comando|info`)
kirv = []
for (i of CMD_S) {kirv.push(i.command)}
if(kirv.indexOf(y) >= 0) return reply("A informação sobre este comando já foi adicionada, ou seja, já é existente...")
CMD_S.push({command: y, info: x})
fs.writeFileSync(dirInfoCmd, JSON.stringify(CMD_S, null, 2))
reply(`Informação sobre o comando ${y} foi atribuida a ele com sucesso...`)
break 

case 'infocmd_del': case 'del_infocmd':
if(!SoDono) return reply(enviar.msg.donosmt) 
const CMD_D = JSON.parse(fs.readFileSync("./shizuku-config/media/infocmd.json")); 
var i7 = CMD_D.map(i => i.command).indexOf(q.trim())
dirInfoCmd = "./shizuku-config/media/infocmd.json"
CMD_D.splice(i7, 1)
fs.writeFileSync(dirInfoCmd, JSON.stringify(CMD_D, null, 2))
reply(`A informação sobre o comando ${q} foi removida com sucesso...`)
break


case 'legendabv':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
const textoBv = q
if(!textoBv) return reply(
`Digite a legenda de boas-vindas.\n\nExemplo:\n${prefix}textobv Olá #numerodele#, seja bem-vindo(a)!`
)

dataGp[0].welcome.entrar.texto = textoBv
setGp(dataGp)

reply('*_Texto de boas-vindas definido com sucesso!_*')
break

case 'legendasaiu':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
const textoSaiu = q
if(!textoSaiu) return reply(
`Digite a legenda de saída.\n\nExemplo:\n${prefix}textosaiu Adeus #numerodele#, até mais!`
)
dataGp[0].welcome.sair.texto = textoSaiu
setGp(dataGp)

reply('*_Texto de saída definido com sucesso!_*')
break

case 'fundobv': {
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)

const arg = q?.trim()

// Limpar
if(arg === '0') {
dataGp[0].welcome.entrar.tipo = 'texto'
dataGp[0].welcome.entrar.fundo = ''
dataGp[0].welcome.entrar.arquivo = ''
setGp(dataGp)

return reply('*_Mídia de boas-vindas removida com sucesso. Agora será enviado apenas o texto._*')
}

// Link direto
if(arg && /^https?:\/\//.test(arg)) {

const ext = arg.split('.').pop().toLowerCase().split('?')[0]

let tipo = 'texto'

if(['jpg','jpeg','png','webp'].includes(ext)) {
tipo = 'imagem'
dataGp[0].welcome.entrar.fundo = arg
} else if(['mp4','gif','webm'].includes(ext)) {
tipo = 'gif'
dataGp[0].welcome.entrar.arquivo = arg
} else if(['mp3','ogg','m4a','wav'].includes(ext)) {
tipo = 'audio'
dataGp[0].welcome.entrar.arquivo = arg
} else if(['webp'].includes(ext)) {
tipo = 'sticker'
dataGp[0].welcome.entrar.arquivo = arg
}

dataGp[0].welcome.entrar.tipo = tipo
setGp(dataGp)

return reply(`*_Mídia de boas-vindas definida com sucesso!_*\n\nTipo: ${tipo}`)
}

const quoted = info.message?.extendedTextMessage?.contextInfo?.quotedMessage

const media =
isQuotedImage ? quoted?.imageMessage :
isQuotedVideo ? quoted?.videoMessage :
isQuotedAudio ? quoted?.audioMessage :
isQuotedSticker ? quoted?.stickerMessage :
null

if(!media)
return reply('*_Marque uma imagem, vídeo, áudio ou figurinha._*')

try {

const tipo = isQuotedImage ? 'imagem' : isQuotedVideo ? 'gif' : isQuotedAudio ? 'audio' : 'sticker'

const buffer = await getFileBuffer(
media,
tipo === 'gif'
? 'video'
: tipo === 'audio'
? 'audio'
: tipo === 'sticker'
? 'sticker'
: 'image'
)

const url = await JpUpload(buffer,'',SHIZUKU_TOKEN)

dataGp[0].welcome.entrar.tipo = tipo
if(tipo === 'imagem')
dataGp[0].welcome.entrar.fundo = url
else
dataGp[0].welcome.entrar.arquivo = url
setGp(dataGp)
reply(`*_Mídia de boas-vindas definida com sucesso!_*\n\nTipo: ${tipo}`)
} catch(err) {
console.error(err)
reply('*_Erro ao processar a mídia._*')
}
}
break

case 'fundosaiu': {
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)

const arg = q?.trim()

// Limpar
if(arg === '0') {
dataGp[0].welcome.sair.tipo = 'texto'
dataGp[0].welcome.sair.fundo = ''
dataGp[0].welcome.sair.arquivo = ''
setGp(dataGp)

return reply('*_Mídia de saída removida com sucesso. Agora será enviado apenas o texto._*')
}

// Link direto
if(arg && /^https?:\/\//.test(arg)) {

const ext = arg.split('.').pop().toLowerCase().split('?')[0]

let tipo = 'texto'

if(['jpg', 'jpeg', 'png'].includes(ext)) {
tipo = 'imagem'
dataGp[0].welcome.sair.fundo = arg
} else if(['mp4', 'gif', 'webm'].includes(ext)) {
tipo = 'gif'
dataGp[0].welcome.sair.arquivo = arg
} else if(['mp3', 'ogg', 'm4a', 'wav'].includes(ext)) {
tipo = 'audio'
dataGp[0].welcome.sair.arquivo = arg
}

dataGp[0].welcome.sair.tipo = tipo
setGp(dataGp)

return reply(`*_Mídia de saída definida com sucesso!_*\n\nTipo: ${tipo}`)
}

const quoted = info.message?.extendedTextMessage?.contextInfo?.quotedMessage

const media =
isQuotedImage ? quoted?.imageMessage :
isQuotedVideo ? quoted?.videoMessage :
isQuotedAudio ? quoted?.audioMessage :
isQuotedSticker ? quoted?.stickerMessage :
null

if(!media)
return reply('*_Marque uma imagem, vídeo, áudio ou figurinha._*')

try {

const tipo = isQuotedImage ? 'imagem' : isQuotedVideo ? 'gif' : isQuotedAudio ? 'audio' : 'sticker'

const buffer = await getFileBuffer(
media,
tipo === 'gif'
? 'video'
: tipo === 'audio'
? 'audio'
: tipo === 'sticker'
? 'sticker'
: 'image'
)

const url = await JpUpload(buffer, '', SHIZUKU_TOKEN)

dataGp[0].welcome.sair.tipo = tipo
if(tipo === 'imagem') {
dataGp[0].welcome.sair.fundo = url
} else {
dataGp[0].welcome.sair.arquivo = url
}
setGp(dataGp)
reply(`*_Mídia de saída definida com sucesso!_*\n\n📦 Tipo: ${tipo}`)
} catch(err) {
console.error(err)
reply('*_Erro ao processar a mídia._*')
}
}
break

case 'legenda_estrangeiro':
case 'legenda_estrangeiros': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
if(isAntifake) {
dataGp[0].legenda_estrangeiro = q
setGp(dataGp)
reply('*Mensagem de remoção de estrangeiros definida com sucesso!*')
} else {
reply(`Ative o antifake primeiro com ${prefix}antifake 1`)
}
break

case 'legenda_video': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_video = q
setGp(dataGp)
reply('*Mensagem de remoção de video definida com sucesso!*')
break

case 'legenda_imagem': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_imagem = q
setGp(dataGp)
reply('*Mensagem de remoção de imagem definida com sucesso!*')
break

case 'legenda_documento': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_documento = q
setGp(dataGp)
reply('*Mensagem de remoção de documento definida com sucesso!*')
break

case 'addautorm':
case 'addautoban':
case 'listanegra':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
const nmr = mrc_ou_numero || menc_os2.split("@")[0];
if(!nmr) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra..")
if(dataGp[0].listanegra.includes(nmr)) return reply('*Esse Número ja esta incluso*')
dataGp[0].listanegra.push(nmr)
setGp(dataGp)
reply(`*Número adicionado a lista de autoban*`)
break

case 'autobang':
case 'listanegrag':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra Global..")
if(listanegraG.includes(mrc_ou_numero)) return reply('*Esse Número ja esta incluso*')
listanegraG.push(mrc_ou_numero)
fs.writeFileSync('./shizuku-config/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`*Número adicionado a lista de autoban*`)
break

case 'tirardalistag':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..")
if(!listanegraG.includes(mrc_ou_numero)) return reply('*Esse Número não esta incluso*')
var i = listanegraG.indexOf(mrc_ou_numero)
listanegraG.splice(i, 1)
fs.writeFileSync('./shizuku-config/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`*Número foi removido da lista negra*`)
break

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
const nmr2 = mrc_ou_numero || menc_os2.split('@')[0];
if(!nmr2) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..")
if(!dataGp[0].listanegra.includes(nmr2)) return reply('*Esse Número não esta incluso*')
var i = dataGp[0].listanegra.indexOf(nmr2)
dataGp[0].listanegra.splice(i, 1)
setGp(dataGp)
reply(`*Número foi removido da lista de autoban*`)
break

case 'listban':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(dataGp[0].listanegra.length < 1) return reply('*Nenhum Número não foi adicionado*')
teks = '*Números que vou moer na porrada se voltar:*\n'
for(i=0;i<dataGp[0].listanegra.length;++i) {
teks += `➤ *${dataGp[0].listanegra[i].split('@')[0]}*\n`
}
teks += '*Esses ai vou descer meu martelo do ban.*'
reply(teks)
break

case 'mute':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (!menc_os2) return reply('Marque o número que deseja mutar.')
if (JSON.stringify(numerodono).indexOf(menc_os2) >= 0) return reply(`nao posso mutar meu dono kakakkakaka`)
if(isMuted) {
let tekks;
var ind = GroupsMutedActived.indexOf(from)
for (let _ of menc_os2) {
tekks = `Olá *@${menc_os2?.split('@')[0]}*, você acaba de ser mutado, ação realizada pelo(a) adm: *@${sender.split('@')[0]}*.`
muted[ind].numbers.push(_)
}
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2))
tekks += '\n–\n• Caso você dar um piu, sua(s) mensagem(ns) vai ser apagada.'
mentions(tekks, [menc_os2, sender], true)
} else {
 const data = {
jid: from,
numbers: menc_os2
}
muted.push(data)
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of menc_os2) {
tekks = `Olá *@${menc_os2?.split('@')[0]}*, você acaba de ser mutado, ação realizada pelo(a) adm: *@${sender.split('@')[0]}*.`
}
tekks += '\n–\n• Caso você dar um piu, sua(s) mensagem(ns) vai ser apagada.'
mentions(tekks, [menc_os2, sender], true)
}
break

case 'desmute':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (!menc_os2) return reply('Marque o número que deseja desmutar.')
var ind = muted.findIndex(g => g.jid === from);
if (ind === -1) {
  muted.push({ jid: from, numbers: [] });
  ind = muted.length - 1;
}
if (!Array.isArray(muted[ind].numbers)) {
  muted[ind].numbers = [];
}
if(isMuted) {
let teks;
for(let _ of menc_os2) {
if(muted[ind].numbers.indexOf(_) >= 0) {
var rmind = muted[ind].numbers.indexOf(_)
muted[ind].numbers.splice(rmind, 1)
}
}
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of menc_os2) {
teks = `Olá usuário *@${menc_os2?.split('@')[0]}* você acaba de ser desmutado pelo(a) adm *@${sender.split('@')[0]}*.`
}
teks += '\n–\n• Agora você pode falar a vontade no grupo, sem interrupções.'
mentions(teks, [menc_os2, sender], true)
} else {
const data = {
jid: from,
numbers: []
}
muted.push(data)
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of menc_os2) {
teks = `Olá usuário @${menc_os2?.split('@')[0]} você acaba de ser desmutado pelo(a) adm @${sender.split('@')[0]}.`
}
teks += '\n–\n• Agora você pode falar a vontade no grupo, sem interrupções.'
mentions(teks, [menc_os2, sender], true)
}
break

case 'roletarussa':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
jds = []
A2 = groupMembers; B2 = groupMembers
TAMBOR = ["na perna.","na cabeça.","no pescoço.","no peito.","no olho.","no estômago.","na boca.","na perna.","na testa.","no braço."]
C2 = A2[Math.floor(Math.random() * A2.length)]
if(C2 === sender || C2 === botNumber+"@s.whatsapp.net") {
return reply(`*Escolhi* @${C2.id.split('@')[0]} mas infelizmente correu de covardia...*`)
}
tpa = TAMBOR[Math.floor(Math.random() * (TAMBOR.length))]	 		
reply(`*A escolha é minha! 1 membro irá morrer, que os jogos comecem...*`)
setTimeout( () => {
D1 = `*Que pena... você não sobreviveu ao meu jogo* @${C2.id.split('@')[0]}, *hora de enterrar o cadáver, infelizmente morreu com tiro* *${tpa}*`             			
mentions(D1, jds, true)
}, 5000)
jds.push(C2.id)				  
setTimeout( () => {
jds.push(C2.id)
shizuku.groupParticipantsUpdate(from, [C2.id], "remove")
}, 6000) 
break

case 'totext':
  if (!isQuotedAudio && !(isMedia && info.message.audioMessage)) return reply('Marque um áudio para transcrever.');
  try {
 const audioMsg = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage;
const stream = await baileys.downloadContentFromMessage(audioMsg, 'audio');
let buffer = Buffer.from([]);
for await (const chunk of stream) {
 buffer = Buffer.concat([buffer, chunk]);
 }

reply(enviar.espere())
const audioUrl = await JpUpload(buffer, "Áudio.mp3", SHIZUKU_TOKEN); 
 const transcriptRes = await fetch('https://api.assemblyai.com/v2/transcript', {
 method: 'POST',
 headers: {
  'authorization': '22be3718b6bf42019d9cc59f70133b83',
 'content-type': 'application/json'
  },
 body: JSON.stringify({
 audio_url: audioUrl,
 language_code: 'pt' // define que é português
})
});

const transcriptData = await transcriptRes.json();
if (!transcriptData.id) return reply('❌ Erro ao enviar áudio para transcrição.');

 const id = transcriptData.id;

 let status = 'queued';
 let transcriptResult;

 while (status === 'queued' || status === 'processing') {
 await new Promise(resolve => setTimeout(resolve, 4000));
const statusRes = await fetch(`https://api.assemblyai.com/v2/transcript/${id}`, {
headers: { 'authorization': '22be3718b6bf42019d9cc59f70133b83' }
});
transcriptResult = await statusRes.json();
 status = transcriptResult.status;
}

if (status !== 'completed') return reply('❌ Erro ao transcrever o áudio.');

let textoFinal = transcriptResult.text || '[Nenhum texto reconhecido]';
reply(`🗣️ *Transcrição:*\n\n${textoFinal}`);
} catch (e) {
console.log(e);
reply('❌ Ocorreu um erro ao transcrever o áudio.');
}
break;
  

case 'wikipedia': case 'wiki': {
	try {
		if(!q?.trim()) return reply("Parâmetro: query, obrigatório.");
		await reply(enviar.espere());
		const { data } = await axios.get(
		  Shizukusite+"/api/pesquisas/wiki-search", {
			params: { 
				query: q?.trim(),
				 apikey: SHIZUKU_KEY},
				}
			);
		if(!data || !data?.status) {
			return reply("Vish! parece que a API retornou um resultado inválido.")
			};
		const i = data?.resultado;
		
		const caption = `🌐 ᴡɪᴋɪᴘᴇᴅɪᴀ sᴇᴀʀᴄʜ

📌 ᴛɪ́ᴛᴜʟᴏ: ${i?.titulo || "ɴᴀ̃ᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ"}
📆 ᴘᴏsᴛᴀᴅᴏ: ${i?.data_atualizacao || "ᴅᴀᴛᴀ ɪɴᴅᴇꜰɪɴɪᴅᴀ"}
​📝 ᴅᴇsᴄʀɪᴄ̧ᴀ̃ᴏ: ${i?.descricao || "ᴜᴍ ᴍɪsᴛᴇ́ʀɪᴏ ᴀᴛᴇ́ ᴘᴀʀᴀ ᴏ ᴊᴘᴢɪɴʜ..."}

📖 ʀᴇsᴜᴍᴏ: ${i?.resumo || "ᴘᴀʀᴇᴄᴇ ǫᴜᴇ ɴᴀ̃ᴏ ʜᴀ́ ɴᴀᴅᴀ ᴘᴀʀᴀ ʟᴇʀ ᴀǫᴜɪ... ᴠᴀᴢɪᴏ ɪɢᴜᴀʟ sᴜᴀs ɪᴅᴇɪᴀs."}

🔗 ʟɪɴᴋ: ${i?.link || "sᴇᴍ ᴀᴄᴇssᴏ ᴅɪʀᴇᴛᴏ"}

⚡ Shizuku API's & Shizuku Bot`;

const image = await getBuffer(i?.imagem || i?.imagem_original)

if(image) {
return conn.sendMessage(from, { image, caption }, { quoted: info });
  } else {
   return reply(caption?.trim())
  }
 } catch (e) {
   reply(mess.error())
  console.log(e)
 }
break;
};

case 'book':
if (args.length == 0) return reply(`*Exemplo:* ${prefix+command} Nome do Livro`)
try {
reply(enviar.espere());
const takeBook = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&langRestrict=pt`);
const getBook = await axios.get(`${takeBook.data.items[0].selfLink}`);
var bookImage = await getBuffer(getBook.data.volumeInfo.imageLinks.thumbnail)
shizuku.sendMessage(from, {image: bookImage, caption: mess.searchBooks(getBook)}).catch(e => {
reply(mess.error())
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
return console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply(mess.error())
}
}
break

case 'cotacao': {
if (!isPremium) return reply(enviar.msg.premium)
moedas = ["dolar", "euro", "bitcoin", "libra", "ethereum"]
if(!moedas.includes(q_2)) return reply("A moeda está inexistente em meu banco de dados!\n*Disponíveis:* dolar, euro, bitcoin, libra, ethereum\n*Observação:* Use letras minúsculas para não ocorrer erros!")
if (encodeURIComponent(q) == "dolar") {
var money = "USD-BRL";
} else if (encodeURIComponent(q) == "euro") {
var money = "EUR-BRL";
} else if (encodeURIComponent(q) == "bitcoin") {
var money = "BTC-BRL";
} else if (encodeURIComponent(q) == "libra") {
var money = "GBP-BRL";
} else if (encodeURIComponent(q) == "ethereum") {
var money = "ETH-BRL";
}
axios.get(`https://economia.awesomeapi.com.br/last/${money}`)
.then((response) => {
if (encodeURIComponent(q) == "dolar") {
var resposta = response.data.USDBRL;
} else if (encodeURIComponent(q) == "euro") {
var resposta = response.data.EURBRL;
} else if (encodeURIComponent(q) == "bitcoin") {
var resposta = response.data.BTCBRL;
} else if (encodeURIComponent(q) == "ethereum") {
var resposta = response.data.ETHBRL;
} else if (encodeURIComponent(q) == "libra") {
var resposta = response.data.GBPBRL;
}
reply(mess.quoteCurrencies(resposta));
}).catch((response) => {
reply("Erro ao obter informações!️");
});
}
break;

case 'clima':
if (args.length == 0) return reply(`*Exemplo:* ${prefix}Clima Maceió`)
reply(enviar.espere());
try {
const wttrin = (await axios.get(`https://pt.wttr.in/${encodeURIComponent(q)}?format=j1`)).data;
var wttrImage = await getBuffer(`https://wttr.in/${encodeURIComponent(q)}.png`)
shizuku.sendMessage(from, {image: wttrImage, caption: mess.clima(wttrin)}).catch(e => {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply(mess.error())
}
}
break

case 'simih':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isSimi) return reply('O modo simi está ativo')
dataGp[0].simi1 = true
setGp(dataGp)
reply(msg.ativado)
} else if(Number(args[0]) === 0) {
if(!isSimi) return reply('Já está Desativado.')
dataGp[0].simi1 = false
setGp(dataGp)
reply(msg.desativado)
} else {
reply('1 para ativar, 0 para desativar, lerdao vc emkkkk')
}
break

case 'simih2':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isSimi2) return reply('O modo Simi está ativo')
dataGp[0].simi2 = true
setGp(dataGp)
reply(msg.ativado)
} else if(Number(args[0]) === 0) {
if(!isSimi2) return reply('Já está Desativado.')
dataGp[0].simi2 = false
setGp(dataGp)
reply(msg.desativado)
} else {
reply('1 para ativar, 0 para desativar, lerdao vc emkkkk')
}
break

case 'autofigu': case 'autosticker':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAutofigu) return reply('Ja esta ativo')
dataGp[0].autosticker = true
setGp(dataGp)
reply(msg.ativado)
} else if(Number(args[0]) === 0) {
if(!isAutofigu) return reply('Ja esta Desativado')
dataGp[0].autosticker = false
setGp(dataGp)
reply(msg.desativado)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'patente':
case 'level': {
    if (!isGroup) return reply(enviar.msg.grupo)
    const groupPatIndex = patentes.findIndex(p => p.grupoID === from)
    let userPatente = "Aspirante"
    let userLevel = 0

    if (groupPatIndex !== -1) {
        const userPatIndex = patentes[groupPatIndex].usus.findIndex(u => u.id === sender)
        if (userPatIndex !== -1) {
            userPatente = patentes[groupPatIndex].usus[userPatIndex].patente_usu
            userLevel = patentes[groupPatIndex].usus[userPatIndex].level_usu
        }
    }
    shizuku.sendMessage(from, {
        text: mess.infoPatente(tempo, sender, userPatente, userLevel), 
        mentions: [sender]
    }, { quoted: selojp })
    break
}

case 'leveling':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('Ative pressione 1, Desativar pressione 0')
if(Number(args[0]) === 1) {
if(isLevelingOn) return reply('*O recurso de nível já estava ativo antes*')
dataGp[0].level = true
setGp(dataGp)
reply(enviar.levelon) 
} else if(Number(args[0]) === 0) {
if(!isLevelingOn) return reply(`O recurso de level já está Desativado neste grupo.`)
dataGp[0].level = false
setGp(dataGp)
reply(enviar.leveloff)
} else {
reply('Adicionar parâmetro 1 ou 0 ')
}
break

case 'bangp':
case 'unbangp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(command == 'bangp'){
if(isBanchat) return reply(`Este grupo já está banido.`)
dataGp[0].bangp = true
setGp(dataGp)
reply(`Grupo banido com sucesso`)
} else {
if(!isBanchat) return reply(`Este grupo não está mais banido.`)
dataGp[0].bangp = false
setGp(dataGp)
reply(`Grupo desbanido...`)
}
break

case 'boton':
case 'botoff':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isBotoff) {
nescessario.botoff = true
setNes(nescessario)
reply('Desativando funções e parando a execução de comandos por membros com sucesso...')
} else if(isBotoff) {
nescessario.botoff = false
setNes(nescessario)
reply(`Ativando todos os funcionamentos do bot novamente...`)
}
break

case 'modonsfw':
case 'nsfw':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isNsfw) return reply('O modo nsfw já está ativo.')
dataGp[0].nsfw = true
setGp(dataGp)
reply(msg.ativado)
} else if(Number(args[0]) === 0) {
if(!isNsfw) return reply('O modo nsfw já está desativado.')  
dataGp[0].nsfw = false
setGp(dataGp)
reply(msg.desativado)
} else {
reply('1 para ativar, 0 para desligar')
}
break

case 'antipalavrão':
case 'antipalavrao':  
case 'antipalavra':    
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply(`1/0, Exemplo: ${prefix + command} 1`)
if(Number(args[0]) === 1) {
if(isPalavrao) return reply('Ja esta ativo.')
dataGp[0].antipalavrao.active = true
setGp(dataGp)
reply(msg.ativado)
} else if(Number(args[0]) === 0) {
if(!isPalavrao) return reply('Ja esta Desativado')
dataGp[0].antipalavrao.active = false
setGp(dataGp)
reply(msg.desativado)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'addpalavra':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isPalavrao) return reply('Anti palavrão desativado!')
if(args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(isPalavras.includes(texto)) return reply('Já foi adicionada')
dataGp[0].antipalavrao.palavras.push(texto)
setGp(dataGp)
reply('Palavrão adicionado com sucesso!')
break

case 'listapalavrão': case 'listapalavra':
case 'listpalavra':
if(!isPalavrao) return reply('Anti palavrão desativado!')
let lbw = `Esta é a lista de palavrão\nTotal: ${isPalavras.length}\n`
for (let i of isPalavras) {
lbw += `➸ ${i}\n`
}
await reply(lbw)
break

case 'limitecaracteres':
case 'limiteflood':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply(`Digite ${prefix + command} 1 para ativar`)
if(Number(args[0]) === 1) {
if(isAntiFlood) return reply(`O recurso limite de caracteres já está ativo no grupo.`)
dataGp[0].limitec.active = true
setGp(dataGp)
reply(msg.ativado)
} else if(Number(args[0]) === 0) {
 if(!isAntiFlood) return reply('O recurso limite de caracteres não está ativado no grupo.')
dataGp[0].limitec.active = false
setGp(dataGp)
reply(msg.desativado)
} else {
reply(`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`)
}
break

case 'limitec_global':
case 'limitec':
if(!SoDono && !isnit && !ischyt) return reply(enviar.msg.donosmt)
if(!isAntiFlood) return reply(`Ative este recurso primeiro ${prefix}limiteflood 1`)
if(!q) return reply(`Cade a quantidade? Ex: ${prefix + command} 5000`)
if(isNaN(q) == true) return reply('Digite apenas números')
if(command == 'limitec'){
dataGp[0].limitec.quantidade = q
setGp(dataGp)
reply(`Foi alterado o limite de caracteres para: ${q}`)
} else {
var data = { limitefl: q }
fs.writeFileSync('./database/usuarios/flood.json', JSON.stringify(data, null, '\t'))
reply(`Foi adicionado um limite global de caracteres de: ${q}`)
}
break

case 'status':{
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(mess.onlyAdmins()) 
await conn.sendMessage(from, { react: { text: "❕", key: info.key }});
const descricao = `╭─⭑ 💠 *Shizuku - Info* 💠 ─╮
│
│ ⚙️ *Status das Funções:*
│ Ative ou desative proteções do grupo. 🛡️
│
│ 🚫 *Anti-Pv Block* & 📞 *Anti-Ligação*  
│ Somente o Dono pode usar. 👑
│
│ Quando ativos:
│ ⤷ ❌ Sem comandos no PV do bot  
│ ⤷ 🔒 Ligações = bloqueio automático
│
│ 💬 Use com sabedoria.  
│ ♡ Shizuku cuida de você. ♡
╰────────────────────────────╯
`;
const status = `
╭───⭑『 ??𝙝𝙞𝙯𝙪𝙠𝙪 - 𝙎𝙮𝙨𝙩𝙚𝙢 』⭑───╮
│
│ 🔰 *_Proteções:_*
│ ▸ 𖣐 Anti-Flood: ${isAntiFlood2 ? '🟢 Ativado' : '🔴 Desativado'}
│ ▸ 𖣐 Anti-Status: ${isAntiMencionar ? '🟢 Ativado' : '🔴 Desativado'}
│ ▸ 𖣐 Anti-Ligação: ${isAnticall ? '🟢 Ativado' : '🔴 Desativado'}
│ ▸ 𖣐 Anti-PV (Bloqueio): ${isAntiPv ? '🟢 Ativado' : '🔴 Desativado'}
│ ▸ 𖣐 Anti-Imagem: ${isAntiImg ? '🟢 Ativado' : '🔴 Desativado'}
│ ▸ 𖣐 Anti-Vídeo: ${isAntiVid ? '🟢 Ativado' : '🔴 Desativado'}
│ ▸ 𖣐 Anti-Áudio: ${isAntiAudio ? '🟢 Ativado' : '🔴 Desativado'}
│ ▸ 𖣐 Anti-Sticker: ${isAntiSticker ? '🟢 Ativado' : '🔴 Desativado'}
│ ▸ 𖣐 Anti-Documento: ${Antidoc ? '🟢 Ativado' : '🔴 Desativado'}
│ ▸ 𖣐 Anti-Contato: ${isAntiCtt ? '🟢 Ativado' : '🔴 Desativado'}
│ ▸ 𖣐 Anti-Localização: ${Antiloc ? '🟢 Ativado' : '🔴 Desativado'}
│ ▸ 𖣐 Anti-Link Grupo: ${isAntilinkgp ? '🟢 Ativado' : '🔴 Desativado'}
│ ▸ 𖣐 Anti-Link Hard: ${isAntiLinkHard ? '🟢 Ativado' : '🔴 Desativado'}
│ ▸ 𖣐 Anti-Fake: ${isAntifake ? '🟢 Ativado' : '🔴 Desativado'}
│ ▸ 𖣐 Anti-Notas: ${isAntiNotas ? '🟢 Ativado' : '🔴 Desativado'}
│ ▸ 𖣐 Anti-Catálogo: ${isAnticatalogo ? '🟢 Ativado' : '🔴 Desativado'}
│ ▸ 𖣐 Anti-Palavrão: ${isPalavrao ? '🟢 Ativado' : '🔴 Desativado'}
│ ▸ 𖣐 Limite de Caracteres: ${isAntiFlood ? '🟢 Ativado' : '🔴 Desativado'}
│ ▸ 𖣐 X9Msg: ${isAntiDelete ? '🟢 Ativado' : '🔴 Desativado'}
│ ▸ 𖣐 X9Admin: ${isx9 ? '🟢 Ativado' : '🔴 Desativado'}
│
│ 🛸 *_Outros Módulos:_*
│ ▸ 𖠁 Boas-vindas: ${isWelkom ? '🟢 Ativo' : '🔴 Desativo'}
│ ▸ 𖠁 Simi ①: ${isSimi ? '🟢 Ativo' : '🔴 Desativo'}
│ ▸ 𖠁 Simi ②: ${isSimi2 ? '🟢 Ativo' : '🔴 Desativo'}
│ ▸ 𖠁 Auto-Sticker: ${isAutofigu ? '🟢 Ativo' : '🔴 Desativo'}
│ ▸ 𖠁 Auto-Download: ${isAutoDown ? '🟢 Ativo' : '🔴 Desativo'}
│ ▸ 𖠁 Auto-Resposta: ${isAutorepo ? '🟢 Ativa' : '🔴 Desativada'}
│ ▸ 𖠁 Sistema de Level: ${isLevelingOn ? '🟢 Ativo' : '🔴 Desativo'}
│ ▸ 𖠁 Modo Rog: ${IsModoRpg ? '🟢 Ativo' : '🔴 Desativo'}
│ ▸ 𖠁 Modo Brincadeiras: ${isModobn ? '🟢 Ativo' : '🔴 Desativo'}
│
╰───➤ 𖤐 𝙎𝙝𝙞𝙯𝙪𝙠𝙪 - 𝘾𝙝𝙖𝙣𝙣𝙚𝙡 𖤐
`;
const painel = descricao + status
await sendMenu(conn, from, painel, info);
}
break

case 'limparqr': {
    if (!SoDono) return reply('Apenas meu dono')
    try {
        const caminho = './datab/shizuku-qr'
        reply('Desconectando pra limpar a sessão...')
        await conn.end() 
        await new Promise(r => setTimeout(r, 2000)) 
        const arquivos = fs.readdirSync(caminho)
        const arquivosPraDeletar = arquivos.filter(arquivo => {
            return /qr|lock|temp/i.test(arquivo) && !/creds\.json/i.test(arquivo)
        })
        let deletados = 0
        for (const arquivo of arquivosPraDeletar) {
            try {
                fs.unlinkSync(`${caminho}/${arquivo}`)
                deletados++
            } catch (err) {
                console.error(`Erro ao deletar ${arquivo}:`, err)
            }
        }
        await reply(`${deletados} arquivo(s) de QR/lock deletados. Reinicie o bot pra escanear novamente.`)
    } catch (e) {
        console.log(e)
        reply(`Ocorreu um erro: ${e.message}`)
    }
    break
}

case 'reiniciar': case 'r':{
if(!SoDono) return reply(enviar.msg.donosmt)
setTimeout(async () => {
reply("Reiniciando...")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
}
break

case 'novoqr':
if(!SoDono) return reply(enviar.msg.donosmt);
reply("Será apagado o qrcode, e irá gerar um novo, fique atento no terminal para ler novamente..");
setTimeout(() => {
fs.rmdirSync('./datab/shizuku-qr', { recursive: true}); }, 1500)
break;

case 'metadinha': {
	try {
		conn.sendMessage(from, {
			react: {
				text: "💖", 
				   key: info.key}
				}
			);
			await reply(enviar.espere())
		const { data: api } = await axios.get(
		   Shizukusite+"/api/animes/random/metadinha?apikey=" + SHIZUKU_KEY
		       );
		const { masculino, feminino } = api?.resultado;
		if(!masculino && !feminino) return reply("Erro ao buscar por metadinhas")
		await conn.sendMessage(from, {
			image: {
				url: feminino}, 
				   caption: "👰 | 𝐏𝐄𝐑𝐅𝐈𝐋 𝐅𝐄𝐌𝐈𝐍𝐈𝐍𝐎"},
				      {
					     quoted 
					}
				)
			setTimeout(() => {
		conn.sendMessage(from, {
			image: {
				url: masculino},
				   caption: "🤵 | 𝐏𝐄𝐑𝐅𝐈𝐋 𝐌𝐀𝐒𝐂𝐔𝐋𝐈𝐍𝐎"},
				     { 
					    quoted 
					}
				);
			}, 1200);
		} catch (e) {
	reply(mess.error())
	console.log("Erro apresentado em: ", e.message)
  }
 break;
}

case 'substituir':
if(!SoDono && !isnit) return reply("Só dono..")
 if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(q, doc)
await shizuku.sendMessage(from, {text:'O arquivo foi substituído para outro local com sucesso.'},{quoted: selojp})
} else {
reply('Marque o documento ou arquivo..')
}
break

case 'index-bot':
if(!SoDono)return reply(enviar.msg.donosmt)
if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync('./shizuku.js', doc)
await shizuku.sendMessage(from, {text: "O arquivo './index.js' foi atualizado com sucesso."},{quoted: selojp})
} else {
reply('Marque o documento ou o arquivo que deseja enviar pra determinar pasta ou substituir..')
}
break

case 'totalcmd': case 'totalcases':
try {
const fileContent = fs.readFileSync("shizuku.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
const cont = caseNames.length;
await reply(`*_Atualmente A ${NomeDoBot} Possui〖 ${cont} 〗comandos/cases_*`);
} catch (error) {
reply("Erro ao obter o total de comandos");
}
break;

case 'getcase':
case 'puxarcase': {
  if (!SoDono && !isnit) return reply(mess.onlyOwner());
  if (!q || !q.trim()) return reply('*😤 ɪɴғᴏʀᴍᴇ ᴏ ɴᴏᴍᴇ ᴅᴀ(s) ᴄᴀsᴇ(s) sᴇᴘᴀʀᴀᴅᴏs ᴘᴏʀ vírgula. 🤷‍♂️*');
  await reagir(from, "💢");
  const nomes = q.split(',').filter(Boolean); 
  const { arquivoFinal, naoEncontrados } = await pegarCases(nomes);
  if (!arquivoFinal) {
    await reply('*❌ ɴᴀ̃ᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴀ ɴᴇɴʜᴜᴍᴀ ᴄᴀsᴇ. 🤷‍♂️*');
    return;
  }
  await yuta.sendMessage(from, {
    document: Buffer.from(arquivoFinal, 'utf-8'),
    fileName: `commands.js`,
    mimetype: 'application/javascript'
  }, { quoted: selo });
  if (naoEncontrados.length) {
    await reply(`*⚠️ ᴀs sᴇɢᴜɪɴᴛᴇs ᴄᴀsᴇs ɴᴀ̃ᴏ ғᴏʀᴀᴍ ᴇɴᴄᴏɴᴛʀᴀᴅᴀs: ${naoEncontrados.join(', ')} 🤷‍♂️*`);
  }
  await reagir(from, "✅");
}
break;

case 'getcase2':
case 'puxarcase2':
  try {
if (!SoDono && !isnit) return reply(enviar.msg.donosmt)
if (!q.includes('/')) return reply(`Use o formato: ${prefix+command} 559999999|nome da case`);

var [numbr, nomeCase] = q.split('/')
numberr = menc_os2 || numbr.replace(/\D/g, '') + '@s.whatsapp.net'
number = baileys.jidNormalizedUser(numberr);
if (!nomeCase) return reply('ɪɴғᴏʀᴍᴇ ᴏ ɴᴏᴍᴇ ᴅᴀ ᴄᴀsᴇ, sʀ.')
await reply('- 𝙱𝚞𝚜𝚌𝚊𝚗𝚍𝚘 𝚎 𝚎𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚌𝚊𝚜𝚎, 𝚜𝚛..')
const getCase = (cases) => {
return 'case ' + `'${cases}'` + fs.readFileSync("./shizuku.js").toString().split("case '" + cases + "'")[1].split("break")[0] + "break"
}
setTimeout(() => {
shizuku.sendMessage(number, { text: `${getCase(nomeCase.trim())}//by: shizuku & jpzinh`}, { quoted: selojp })
}, 1200)
setTimeout(() => {
conn.sendMessage(from, { text: `Case *${nomeCase.trim()}* enviada para o número *@${number.split('@')[0]}*!`, mentions: [sender, number]});
}, 1200);
} catch (e) {
await reply('❌️ Comando não encontrado ou erro ao enviar! ❌')
}
break

case 'add': case 'unkick':
if(!SoDono) return reply(enviar.msg.donosmt);
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q && info.message.extendedTextMessage === null) return reply('Marque a mensagem ou coloque o número de quem você quer adicionar no grupo.')
try {
useradd = `${args.join(" ").replace(/\D/g,'')}` ? `${args.join(" ").replace(/\D/g,'')}` : info.message.extendedTextMessage.contextInfo.participant
let id = `${useradd.replace(/\D/g,'')}`
if(!id) return reply(`Número inválido.`)
let [result] = await shizuku.onWhatsApp(id)
if(!result) return reply(`Esse número não está registrado no WhatsApp.`)
let response = await shizuku.groupParticipantsUpdate(from, [result.jid], "add")
if(response[0].status == "409") {
shizuku.sendMessage(from, {text: `Ele já está no grupo, como eu vou adicionar?`, mentions: [result.jid, sender]})
} else if(response[0].status == "403") {
shizuku.sendMessage(from, {text: `Não consegui adicionar o @${result.phoneNumber.split("@")[0]} porque ele privou a conta.`, mentions: [result.jid, sender]})
} else if(response[0].status == "408") {
shizuku.sendMessage(from, {text: `Não consegui adicionar o @${result.phoneNumber.split("@")[0]} porque ele saiu recentemente do grupo.`, mentions: [result.jid, sender]})
} else if(response[0].status == "401") {
shizuku.sendMessage(from, {text: `Não consegui adicionar o @${result.phoneNumber.split("@")[0]} porque ele bloqueou o bot.`, mentions: [result.jid, sender]})
} else if(response[0].status == "200") {
shizuku.sendMessage(from, {text: `Prontinho fiz o que você pediu.`, mentions: [result.jid, sender]})
} else {
reply("Vish acho que algo deu errado")
}
} catch(e) {
console.log("[ERROR]:"+ e)
}
break


case 'ban': case 'banir': case 'kick': case 'avadakedavra':
if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm);
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin);
try {

if (!menc_os2 || menc_jid2[1]) 
return reply("Marque a mensagem do usuário ou mencione o @ dele. Apenas um usuário por vez.");
if (!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível rebaixar.");
 
if (botNumber.includes(menc_os2)) {
await shizuku.groupParticipantsUpdate(from, [sender], "demote");
return reply("Você tentou me banir! Agora perdeu o cargo de administrador.");
}

if (numerodono.includes(menc_os2)) {
await shizuku.groupParticipantsUpdate(from, [sender], "demote");
return reply("Você tentou banir meu dono,  Agora perdeu o cargo de administrador.");
}

await shizuku.sendMessage(from, {text: `@${menc_os2.split("@")[0]} foi removido(a) com sucesso.`, mentions: [menc_os2] });
await shizuku.groupParticipantsUpdate(from, [menc_os2], "remove");  
 } catch (e) {
console.error(e);
reply("Ocorreu um erro ao tentar remover o usuário.");
 }
break; // by: shizukuh

case 'rebaixar': 
if (!isGroupAdmins) return reply(enviar.msg.adm);
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin);
if (!menc_os2 || menc_jid2.length > 1) return reply("Marque a mensagem do usuário ou mencione apenas um @.");
 if (!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível rebaixar.");
 if (botNumber.includes(menc_os2)) return reply('Não sou besta de rebaixar eu mesmo né 🙁, mas estou decepcionado com você.');

await shizuku.groupParticipantsUpdate(from, [menc_os2], "demote");
await shizuku.sendMessage(from, { 
 text: `@${menc_os2.split("@")[0]} foi rebaixado para [ MEMBRO COMUM ] com sucesso.`, 
mentions: [menc_os2] 
});
break;

case 'promover': 
if (!isGroupAdmins) return reply(enviar.msg.adm);
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin);
 if (!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele... Lembre de só marcar um usuário.");
if (!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível promover.");

await shizuku.groupParticipantsUpdate(from, [menc_os2], "promote");
await shizuku.sendMessage(from, {text: `@${menc_os2.split("@")[0]} foi promovido(a) para ADM com sucesso.`,
mentions: [menc_os2]
});
break;

case 'sorteio':
if(!isGroupAdmins) return reply(enviar.msg.adm)
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$`)
d = []
teks = `🎉 Meus parabéns ao vencedor do sorteio: ${q}\n-\n`
let BucetaRosa = await conn.groupMetadata(from)
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * BucetaRosa.participants.length + 0)
teks += `• *Mencionando o vencedor:*  @${groupMembers[r].phoneNumber.split('@')[0]}`
d.push(groupMembers[r].phoneNumber)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'sorteionumero':
case 'sorteionumeros':  
if(!isGroupAdmins) return reply(enviar.msg.adm)
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteionumero de 100 R$`)
var numerossrt = sortear[Math.floor(Math.random() * sortear.length)] 
d = []
teks =  `🎉 Parabéns ao número do sortudo, por ganhar o sorteio ${q}:\n-\n`
for(i = 0; i < 1; i++) {
teks += `• O número sorteado foi: ${numerossrt}`
d.push(numerossrt)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

/////////////(INICIO DE JOGOS && BRINCADEIRAS && ETC...))\\\\\

case 'ranklevel':
case 'rankpatente':
case 'rankativos': 
case 'rankativo': {
    if (!isGroup) return reply(enviar.msg.grupo)
    const groupIdx = countMessage.findIndex(i => i.groupId === from)
    if (groupIdx === -1) return reply("❌ Ainda não há dados de atividade para este grupo.")
    let usuarios = [...countMessage[groupIdx].numbers]
    usuarios.sort((a, b) => {
        const totalA = (a.messages || 0) + (a.cmd_messages || 0) + (a.figus || 0)
        const totalB = (b.messages || 0) + (b.cmd_messages || 0) + (b.figus || 0)
        return totalB - totalA
    })
    const limite = Math.min(usuarios.length, 5)
    const isRankPatente = command.includes('patente') || command.includes('level')
    let texto = isRankPatente ? `🏆 *RANK DE LEVEL E PATENTES* 🏆\n` : `🏆 *RANK DOS MAIS ATIVOS* 🏆\n`
    texto += `👥 *Grupo:* ${groupName}\n`
    texto += `────────────────────\n`
    let menc = []
    const groupPatIndex = patentes.findIndex(p => p.grupoID === from)
    for (let i = 0; i < limite; i++) {
        const user = usuarios[i]
        menc.push(user.id)
        let infoPat = { level_usu: 0, patente_usu: "Aspirante" }
        if (groupPatIndex !== -1) {
            const pIdx = patentes[groupPatIndex].usus.findIndex(u => u.id === user.id)
            if (pIdx !== -1) infoPat = patentes[groupPatIndex].usus[pIdx]
        }
        texto += `*${i + 1}º Lugar:* @${user.id.split('@')[0]}\n`
        if (isRankPatente) {
            texto += `⭐ Level: *${infoPat.level_usu}* | Patente: *${infoPat.patente_usu}*\n\n`
        } else {
            texto += `💬 Msgs: *${user.messages}* | 🛠️ Cmds: *${user.cmd_messages}*\n`
            texto += `🖼️ Figus: *${user.figus || 0}* | 📱: *${user.aparelho || 'S/I'}*\n\n`
        }
    }
    shizuku.sendMessage(from, { text: texto, mentions: menc })
    break
}

case 'rankinativo':
case 'rankinativos': {
    if (!isGroup) return reply(enviar.msg.grupo)
    if (!isGroupAdmins) return reply(enviar.msg.adm)
    const groupIdx = countMessage.findIndex(i => i.groupId === from)
    if (groupIdx === -1) return reply("❌ Sem dados para este grupo.")
    let inativos = countMessage[groupIdx].numbers.filter(u => (u.messages || 0) <= 1)
    inativos.sort((a, b) => (a.messages || 0) - (b.messages || 0))
    let boardi = `🗑️ *RANK DE INATIVOS (TOP 5)*\n`
    boardi += `👥 *Grupo:* ${groupName}\n`
    boardi += `────────────────────\n\n`
    if (inativos.length === 0) return reply("✅ Nenhum usuário inativo (0-1 msgs) encontrado!")
    let menc_inativos = []
    const limite = Math.min(inativos.length, 5)
    for (let i = 0; i < limite; i++) {
        boardi += `*${i + 1}º Lugar:* @${inativos[i].id.split('@')[0]}\n`
        boardi += `📉 Mensagens: *${inativos[i].messages || 0}*\n`
        boardi += `📱 Aparelho: *${inativos[i].aparelho || 'S/I'}*\n\n`
        menc_inativos.push(inativos[i].id)
    }
    shizuku.sendMessage(from, { text: boardi, mentions: menc_inativos })
    break
}

case 'checkativo': {
    if (!isGroup) return reply(enviar.msg.grupo)
    const alvo = menc_os2 ? menc_os2 : (quoted ? info.message.extendedTextMessage.contextInfo.participant : sender)
    const groupIdx = countMessage.findIndex(i => i.groupId === from)
    if (groupIdx === -1) return reply("❌ Sem dados para este grupo.")
    const userIdx = countMessage[groupIdx].numbers.findIndex(u => u.id === alvo)
    let textoCheck = `🔍 *ATIVIDADE INDIVIDUAL* 🔍\n\n`
    textoCheck += `👤 *Usuário:* @${alvo.split('@')[0]}\n`
    textoCheck += `🏢 *Grupo:* ${groupName}\n`
    textoCheck += `────────────────────\n`
    if (userIdx !== -1) {
        const d = countMessage[groupIdx].numbers[userIdx]
        textoCheck += `💬 *Mensagens:* ${d.messages}\n`
        textoCheck += `🛠️ *Comandos:* ${d.cmd_messages}\n`
        textoCheck += `🖼️ *Figurinhas:* ${d.figus || 0}\n`
        textoCheck += `📱 *Aparelho:* ${d.aparelho || 'Desconhecido'}`
    } else {
        textoCheck += `⚠️ *Aviso:* Este usuário ainda não possui registros de atividade neste grupo.`
    }
    shizuku.sendMessage(from, { text: textoCheck, mentions: [alvo] })
    break
}

case 'jogodavelha':
if(!isGroup) return reply(enviar.msg.grupo)
if(!menc_jid2 || !menc_os2) return reply("Marque junto com o comando, o @ do usuário que deseja desafiar..")
joguinhodavelhajs.push(sender)
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.push(from)
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
if(fs.existsSync(`./armor/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `『 *🎮 Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸ 🕹️* 』\n-\n💢 Alguém está jogando o *jogo da velha* no momento! Por favor, aguarde o término da partida para iniciar a próxima.\n-\n• @${boardnow.X} VS @${boardnow.O}\n-\nSua vez: @${boardnow.turn == "X" ? boardnow.X : boardnow.O}\n-\n${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}\n${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}\n${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}`;
shizuku.sendMessage(from, {text: chatMove}, {quoted: selojp,
mentions: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
]});
return;
}
const boardnow = setGame(`${from}`);
console.log(colors.red(time, "red"), colors.magenta("[ JOGO DA VELHA ]"), colors.red(`Iniciado - Sessão: ${boardnow.session}`));
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = menc_os2?.split("@")[0] || menc_jid;
var blabord = [`${boardnow.X}`, `${boardnow.O}`]
fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `『 *📌 ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ ⚔️* 』\n-\n@${sender.replace("@s.whatsapp.net", "")} _está te desafiando para uma partida de jogo da velha..._\n_[ @${menc_os2.split("@")[0]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._\n-\nEm caso de problemas, marque algum administrador para resetar o jogo com o comando ${prefix}rv`;
b = [sender, menc_os2]
mentions(strChat, b, true)
break
    
case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'resetvelha':
case 'rv': 
if(!isJoguin && !isGroupAdmins) return reply(`Fale com quem iniciou o jogo, só ele pode resetar, ou então algum admin.`)
if(fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
DLT_FL("./armor/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break

//FIGURINHAS 

case 'figurinhas':
if(!q) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 7`)
if(q >= 15) return reply("Coloque abaixo de 15...")
 await reply(`${isGroup ? "*_Shizuku-Bot está enviando sua figurinha no privado, aguarde com carinho..._*" : "*_Calma, meu amor, Shizuku-Bot já está enviando a figurinha para você..._*"} 🩶`);
 await conn.sendMessage(from, {react: {text: "💖", key: info?.key}})         
async function figuss() {
 var rnd = Math.floor(Math.random() * 8051)
 setTimeout(() => {
shizuku.sendMessage(sender, { sticker: { url: `https://raw.githubusercontent.com/badDevelopper/Testfigu/main/fig (${rnd}).webp` }}, {quoted: selo})}, 1200);
};
for (i = 0; i < q; i++) {
await sleep(680)
figuss()
}
break
 
case 'figu_raiva': case 'figu_engracada':
case 'figu_memes': case 'figu_anime': case 'figu_coreana': case 'figu_bebe': case 'figu_desenho': case 'figu_animais':
case 'figu_flork': case 'figu_emoji':{
if (!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 20`)
if (q >= 10) return reply("Coloque abaixo de 10..")
await reply(`${isGroup ? "*_Shizuku-Bot está enviando sua figurinha no privado, aguarde com carinho..._*" : "*_Calma, meu amor, Shizuku-Bot já está enviando a figurinha para você..._*"} 🩶`);
await conn.sendMessage(from, {react: {text: "💖", key: info?.key}})         
async function figu_figura() {
setTimeout(() => {
shizuku.sendMessage(sender, {
sticker: {
url: `${Shizukusite}/api/stickers/${command}&apikey=${SHIZUKU_KEY}`},
}, {quoted: selo})}, 1200)
};
for (i = 0; i < q; i++) {
figu_figura()
await new Promise(resolve => setTimeout(resolve, 1200)); 
}
break
}

case 'figale': case 'figuale':{
if (!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 20`)
if (q >= 20) return reply("Coloque abaixo de 20..")
await reply(`${isGroup ? "*_Shizuku-Bot está enviando sua figurinha no privado, aguarde com carinho..._*" : "*_Calma, meu amor, Shizuku-Bot já está enviando a figurinha para você..._*"} 🩶`);
await conn.sendMessage(from, {react: {text: "💖", key: info?.key}})         
async function figu_Jpzinh() {
var rnd = Math.floor(Math.random() * 8051)
setTimeout(() => {
shizuku.sendMessage(sender, {
sticker: {
url: `${Shizukusite}/stickers/figurinhas?apikey=${SHIZUKU_KEY}`
},
}, {quoted: selo})}, 1200);
};
for (i = 0; i < q; i++) {
figu_Jpzinh()
await new Promise(resolve => setTimeout(resolve, 1200)); 
}
break
};

case 'attp': case 'attp2':
try {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} boooo`);
await conn.sendMessage(from, {react: {text: "💖", key: info?.key}})       
reply(enviar.espere())  
const ISTIKER = await getBuffer(`${Shizuku_site}/sticker/${command}?texto=${encodeURIComponent(q)}&apitoken=${SHIZUKU_KEY}`);
await conn.sendMessage(from, {sticker: ISTIKER, fileName: pushname}, {quoted: selojp}).catch(() => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;

case 'ttp': 
try {if (!q) return reply(`por favor, use exemplo: ${prefix + command} jpzinh`);
await reply(enviar.espere());
const i = await getBuffer(`${Shizuku_site}/api/sticker/ttp?texto=${encodeURIComponent(q)}&apitoken=${SHIZUKU_KEY}`);
let FIGURA = await sendImageAsSticker2(conn, from, i, selo, {packname: pushname, author: `@${sender.split("@")[0]}`})
await DLT_FL(FIGURA);
}catch (e) {
reply(e)
} break;
	
//==========(Sticker-Stickers)===========\\
case 'figfundo':
case 'figvideo':
case 'figusemfundo': 
case 'sfundo':  
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {
rafa = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
reply(enviar.espere());
buff = await getFileBuffer(rafa, 'image')
bas64 = `data:image/jpeg;base64,${buff.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `Usuário: ${pushname}`
sd = `📍Criado por: ${NomeDoBot}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${sd}`
var mantap = await convertSticker(bas64, `${dua}`, `${satu}`)
var sti = new Buffer.from(mantap, 'base64');
shizuku.sendMessage(from, {sticker: sti}, {quoted: selojp})
} else {
return reply(`So imagem amigo(a)!`)
}
break

case 'fstiker':
case 'fsticker':
case 'f':
{
  const RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
  const boij = RSM?.imageMessage || info.message?.imageMessage || 
               RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || 
               info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage

  const boij2 = RSM?.videoMessage || info.message?.videoMessage || 
                RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || 
                info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage  

  const pack = `𝚏𝚎𝚒𝚝𝚊 𝚙𝚘𝚛: ${NomeDoBot}\n\n𝙵𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊: 𝚃??𝚙 𝚍𝚎 𝚖𝚊????!`
  const author2 = `𝙳𝚘𝚗𝚘: ${NickDono}\n\n𝚂𝚘𝚕𝚒𝚌𝚒𝚝𝚊𝚍𝚊 𝚙𝚘𝚛: ${pushname}`

  if (boij) {
    reply(enviar.espere());
    const buffer = await getFileBuffer(boij, 'image')
    const stickerBuffer = await imagemParaWebp(buffer) 
    await shizuku.sendMessage(from, { sticker: stickerBuffer}, { quoted: info })

  } else if (boij2 && boij2.seconds <= 10) {
    reply(enviar.espere());
    const buffer = await getFileBuffer(boij2, 'video')
    const stickerBuffer = await videoParaWebp(buffer) 
    await shizuku.sendMessage(from, { sticker: stickerBuffer}, { quoted: info })

  } else {
    reply(`Enviar imagem / vídeo / gif com legenda\n${prefix}sticker (máximo 10 segundos)`)
  }
}
break

case 'figu':
case 'fig':
case 'figura':
case 'figuraanimada':
case 'sks':
{
  const RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
  const boij = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
  const boij2 = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
  await reply(enviar.espere())
  if (boij) {
    const pack = `𝙵𝚎𝚒𝚝𝚊 ??𝚘𝚛: ${NomeDoBot}\n\n𝙵𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊: 𝚃𝚘𝚙 𝚍𝚎 𝚖𝚊𝚒𝚜!`
    const author2 = `𝙳𝚘𝚗𝚘: ${NickDono}\n\n𝚂𝚘𝚕𝚒𝚌𝚒𝚝𝚊𝚍𝚊 𝚙𝚘𝚛: ${pushname}`
    reply(enviar.espere());
    const owgi = await getFileBuffer(boij, 'image')
    const sticker = await sendImageAsSticker(shizuku, from, owgi, info, { packname: pack, author: author2 })
    await DLT_FL(sticker)
  } else if (boij2 && boij2.seconds < 11) {
    const pack = `𝙵𝚎𝚒𝚝𝚊 𝚙𝚘𝚛: ${NomeDoBot}\n\n𝙵𝚒𝚐𝚞𝚛𝚒𝚗??𝚊: 𝚃𝚘𝚙 𝚍𝚎 𝚖𝚊𝚒𝚜!`
    const author2 = `𝙳𝚘𝚗𝚘: ${NickDono}\n\n𝚂𝚘𝚕𝚒𝚌𝚒𝚝𝚊𝚍𝚊 𝚙𝚘??: ${pushname}`
    reply(enviar.espere());
    const owgi = await getFileBuffer(boij2, 'video')
    const sticker = await sendVideoAsSticker(shizuku, from, owgi, info, { packname: pack, author: author2 })
    await DLT_FL(sticker)
  } else {
    reply(`Envie uma imagem ou vídeo (de até 10 segundos) com a legenda\n${prefix}figu`)
  }
}
break

case 's2':
  if (!isQuotedImage && !isQuotedVideo) return reply('Marque uma *imagem* ou *vídeo de até 9s* para transformar em figurinha.');

  try {
    reply(enviar.espere())
    const quotedMsg = info.message.extendedTextMessage.contextInfo.quotedMessage;
    const tipoMidia = isQuotedImage ? 'imageMessage' : 'videoMessage';
    const mediaMsg = quotedMsg[tipoMidia];

    const buffer = await getFileBuffer(mediaMsg, isQuotedImage ? 'image' : 'video');

    const stickerBuffer = await ffmpegSticker(buffer, {
      packname: pushname,
      author: NomeDoBot,
      fps: 15,
      loop: 0,
      quality: 70
    });

    await shizuku.sendMessage(from, { sticker: stickerBuffer}, { quoted: info });
  } catch (e) {
    console.log('Erro ao criar figurinha:', e);
    reply('Erro ao criar figurinha!');
  }
  break;

case 'st':
case 'stk':
case 'sticker':
case 's': {
    await conn.sendMessage(from, { react: { text: `⌛`, key: info.key } });
    const RSM = isQuotedImage || isQuotedVideo || isQuotedSticker ? (info.message?.extendedTextMessage?.contextInfo?.quotedMessage || info.message) : info.message;

    const msgImagem = RSM?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage;
    const msgVideo = RSM?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage;

    let owgi;

    try {
        if (msgImagem) {
            const pack = ` ➲ ꜱᴏʟɪᴄɪᴛᴀᴅᴏ ᴩᴏʀ  ➠\n ➲ ɴᴏᴍᴇ ᴅᴏ ʙᴏᴛ ➠\n ➲ ɴɪᴄᴋ ᴅᴏɴᴏ ➠`;
            const author2 = ` 「 ${pushname} 」 \n「 ${NomeDoBot} 」\n「 ${NickDono} 」`;
            
            owgi = await getFileBuffer(msgImagem, 'image');
            let encmediaa = await sendImageAsSticker2(conn, from, owgi, info, { packname: pack, author: author2 });
            if (typeof DLT_FL === 'function') await DLT_FL(encmediaa);
        } else if (msgVideo && (msgVideo.seconds < 11)) {
            const pack = `➲ꜱᴏʟɪᴄɪᴛᴀᴅᴏ ᴩᴏʀ➠`;
            const author2 = ` ${pushname}`;
            owgi = await getFileBuffer(msgVideo, 'video');
            let encmedia = await sendVideoAsSticker2(conn, from, owgi, info, { packname: pack, author: author2 });
            if (typeof DLT_FL === 'function') await DLT_FL(encmedia);
        } else {
            return reply(`⚠️ *ERRO:* Marque uma imagem ou vídeo de até 10s para fazer a figurinha.`);
        }
    } catch (e) {
        console.log(e);
        reply("❌ Ocorreu um erro ao processar a mídia.");
    }
}
break;

case 'brat':
case 'brat-img': {
	try {
		if(!q?.trim()) return reply("Ta faltando o Parâmetro: text")
		await reply(enviar.espere())
		const stk = await getBuffer(Shizukusite+"/api/stickers/brat-img?text="+encodeURIComponent(q?.trim()) + "&apikey=" + SHIZUKU_KEY)
		let stk2 = await sendImageAsSticker2(conn, from, stk, selo, { packname: pushname, author: sender?.split("@")[0]})
		await DLT_FL(stk2)
		} catch (e) {
		reply(mess.error())
	}
 break;
}

case 'brat2':
case 'brat-video': {
	try {
		if(!q?.trim()) return reply("Ta faltando o Parâmetro: text")
		await reply(enviar.espere())
		const stk = await getBuffer(Shizukusite+"/api/stickers/brat-vid?text="+encodeURIComponent(q?.trim()) + "&apikey=" + SHIZUKU_KEY)
		let stk2 = await sendVideoAsSticker2(conn, from, stk, selo, { packname: pushname, author: sender?.split("@")[0]})
		await DLT_FL(stk2)
		} catch (e) {
		reply(mess.error())
	}
 break;
}

case 'toimg':
if(!isQuotedSticker) return reply('Por favor, *mencione um sticker* para executar o comando.')
try {
reply(enviar.espere());
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
shizuku.sendMessage(from, {image: buff}, {quoted: selojp}).catch(e => {
console.log(e);
reply('Ocorreu um erro ao converter o *sticker para imagem.*')
})
} catch {
reply(mess.error())
}
break

case 'idfigu': case 'idfig':
  if (!isQuotedSticker) return reply('Por favor, *mencione uma figurinha* para ver o ID.')
reply(enviar.espere())
try {
const stickerInfo = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage
  const stickerID = stickerInfo.fileSha256.toString('base64') 
reply(`🆔 ID da figurinha:\n${stickerID}`)
} catch (e) {
console.log(e)
reply('Ocorreu um erro ao pegar o ID da figurinha.')
  }
  break
//FIM DE FIGURINHAS 

//COMANDOS +18

case 'plaq1':
case 'plaq2':
case 'plaq3':
case 'plaq4':
case 'plaq5':
case 'plaq6':
case 'plaq7':
case 'plaq8':
case 'plaq9':
case 'plaq10':
if(!q) return reply(`informe o seu nome`)
if(!isPremium && !SoDono) return reply(enviar.msg.grupo)
reply(`${isGroup ? "Enviando a plaquinha no seu pv." : "enviando..."}`);
image = await getBuffer(`${Shizukusite}/api/plaquinhas/${command}?query=${encodeURIComponent(q)}&apikey=${SHIZUKU_KEY}`);
await shizuku.sendMessage(sender, {image,  caption: `Aqui está a sua plaquinha, ${pushname}`}, {quoted: selojp}).catch(e => {
reagir(from, "❌")
reply('Erro ao fazer sua plaquinha')
})
break

case 'videocontrario':
case 'reversevid':
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) { 
reply(enviar.espere());
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
shizuku.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: selojp})
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break 

case 'videolento':
case 'slowvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(enviar.espere()); 
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
shizuku.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: selojp })
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break

case 'videorapido':
case 'fastvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(enviar.espere());
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
shizuku.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: selojp })
DLT_FL(ran)
})	
} else {
reply("Marque o vídeo..")
}
break

case 'grave2':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere());
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
shizuku.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt: false}, {quoted: selojp})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'grave':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere());
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
shizuku.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt: false}, {quoted: selojp})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'adolesc':
case 'vozmenino':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere());
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
shizuku.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt: false}, {quoted: selojp})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break  

case 'tomp3':
if((isMedia && !info.message.imageMessage || isQuotedVideo)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
reply(enviar.espere());
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
DLT_FL(media)
if(err) return reply('Ocorreu uma falha ao fazer a conversão do vídeo para mp3.')
const SHIZUKU = fs.readFileSync(ran)
shizuku.sendMessage(from, {audio: SHIZUKU, mimetype: 'audio/mpeg', ptt: false}, {quoted: selojp})
DLT_FL(ran)
})
} else {
reply("Marque o vídeo para transformar em áudio por favor..")
}
break

case 'bass3':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere());
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
shizuku.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt: false}, {quoted: selojp})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'bass': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere());
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
shizuku.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt: false}, {quoted: selojp})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'bass2': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere());
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
shizuku.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt: false}, {quoted: selojp})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'estourar': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere());
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
shizuku.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt: false}, {quoted: selojp})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'eco': //Guxtakkkj
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere());
const delay = 500
const decay = 0.5
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af "aecho=0.8:0.9:${delay}:${decay}" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
shizuku.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt: false}, {quoted: selojp})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'robo':
  if (!isQuotedAudio) return reply('Marque um áudio pra virar robô.');
  reply(enviar.espere())
  try {
    const audioMsg = info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage;
    const inputBuffer = await getFileBuffer(audioMsg, 'audio');
    const inputPath = './datab/robo_input.ogg';
    const outputPath = './datab/robo_output.ogg';

    fs.writeFileSync(inputPath, inputBuffer);

    const { exec } = require('child_process');
    await new Promise((resolve, reject) => {
      exec(`ffmpeg -i ${inputPath} -af "afftfilt=real='hypot(re,im)':imag='0'" ${outputPath}`, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });

    const shizukuhAudio = fs.readFileSync(outputPath);
    await shizuku.sendMessage(from, { audio: shizukuhAudio, mimetype: 'audio/mpeg', ptt: false}, { quoted: info });

    fs.unlinkSync(inputPath);
    fs.unlinkSync(outputPath);
  } catch (err) {
    console.log('Erro no efeito robô:', err);
    reply('Erro ao aplicar o efeito robô.');
  }
  break;

case 'demonio':
  if (!isQuotedAudio) return reply('Marque um áudio pra invocar o capiroto.');
  reply(enviar.espere())
  try {
    const audioMsg = info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage;
    const inputBuffer = await getFileBuffer(audioMsg, 'audio');
    const inputPath = './datab/demon_input.ogg';
    const outputPath = './datab/demon_output.ogg';

    fs.writeFileSync(inputPath, inputBuffer);

    const { exec } = require('child_process');
    await new Promise((resolve, reject) => {
      exec(`ffmpeg -i ${inputPath} -af "asetrate=44100*0.6,atempo=1.1,areverse" ${outputPath}`, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });

    const shizukuhAudio = fs.readFileSync(outputPath);
    await shizuku.sendMessage(from, { audio: shizukuhAudio, mimetype: 'audio/mpeg', ptt: false}, { quoted: info });

    fs.unlinkSync(inputPath);
    fs.unlinkSync(outputPath);
  } catch (err) {
    console.log('Erro no efeito demoníaco:', err);
    reply('Erro ao aplicar o efeito demoníaco.');
  }
  break;
  

case 'fast':
case 'audiorapido':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere());
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro')
hah = fs.readFileSync(ran)
shizuku.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt: false}, {quoted: selojp})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'esquilo':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere());
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
shizuku.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt: false}, {quoted: selojp})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'audiolento': 
case 'slow':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere());
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
shizuku.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt: false}, {quoted: selojp})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

///////

case 'fakechat':
 if (!args[0]) return reply(`Use: *${prefix + command} mensagem|@numero|resposta*`)

shizukuhkk = args.join(" ").split("|")
shizukuhDnv = shizukuhkk[0]?.trim()
shizukuhkarai2 = menc_os2 || shizukuhkk[1]?.replace(/\D/g, "") + "@s.whatsapp.net";
const shizukuhkarai = baileys.jidNormalizedUser(shizukuhkarai2);
resposta = shizukuhkk[2]?.trim()

if (!shizukuhDnv) return reply('*Cadê a mensagem do usuário?*')
if (!shizukuhkarai) return reply('*Cadê o número do destinatário?*')
if (!resposta) return reply('*Cadê a resposta do bot?*')

shizukuhNumEfake = {
key: {
fromMe: false,
remoteJid: from,
participant: shizukuhkarai
},
message: {
conversation: shizukuhDnv
}
}
await shizuku.sendMessage(from, {
text: resposta,
contextInfo: {
participant: shizukuhkarai,
quotedMessage: {
conversation: shizukuhDnv
}
}
}, { quoted: shizukuhNumEfake })
 break

//==========(EFEITOS-MARCAR)==========\\

case 'convite':
if(!budy.includes("chat.whatsapp.com")) return reply("Cadê o link do grupo que você deseja que eu entre?")  
cnvt = args.join(" ")
reply(`O convite para o bot entrar em seu grupo, foi enviado, espere o dono aceitar..`)
shizuku.sendMessage(nmrdn, {text: mess.groupInvitation(sender, cnvt, prefix)}, {quoted: selojp})
break

case 'sip': case 'ip': 
if (!q) return reply(`Informe o ip que você deseja! *Exemplo:* ${prefix+command} 8.8.8.8`)
reply(enviar.espere());
try {
ip = await axios.get(`https://ipwhois.app/json/${encodeURIComponent(q)}`);
shizuku.sendMessage(from, {image: {url: `https://maps.googleapis.com/maps/api/streetview?size=1400x1400&location=${ip.data.latitude},%20${ip.data.longitude}&sensor=false&key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg`}, caption: mess.searchIpAdress(ip)})
shizuku.sendMessage(from, {location: {degreesLatitude: ip.data.latitude,degreesLongitude: ip.data.longitude, addrees: ''}})
} catch {
reply(mess.error())
}
break

case 'gbuzon':
textobuzon = "• ```Números gerados com sucesso:```\n*Obs:* Os números são gerados de forma aleatória, então alguns não podem estar disponíveis no WhatsApp.\n-\n"
for (let i = 0; i < args[1]; i++) {
const numerobuzon = args[0].replace(/x/g, () => Math.floor(Math.random() * 10));
textobuzon += "   ```Número:``` wa.me/"+numerobuzon+"\n-\n"
}
await reply(textobuzon)
break


case 'hentai': {
  try {
    if (!isPremium) return reply(enviar.msg.premium)

    await reagir(from, "🔥");
    reply(isGroup ? "enviando no seu pv." : "enviando...");

    const { data: jpzinh } = await axios.get(
      Shizukusite + "/api/animes/hentai-video?apikey=" + SHIZUKU_KEY
    );
    const { results } = jpzinh;
    const i = results[Math.floor(Math.random() * results.length)];
    if (!i) return reply("Erro ao buscar vídeo.");

    const x = "indefinido";
    const textos = `🍓 *Title:* ${i.title || x}
📁 *Category:* ${i.category || x}
🔁 *Shares:* ${i.shary_count || x}
👀 *Views:* ${i.views_count || x}
🔗 *Link:* ${i.link || x}

> ✨ _Powered by Shizuku — Hentai Collection_ 
`;

    await conn.sendMessage(
      sender,
      {
        video: { url: i.video_1 },
        mimetype: i?.type || 'video/mp4',
        caption: textos 
      },
      { quoted: info }
    );

  } catch (err) {
    console.log(err);
    reply(mess.error());
  }
  break;
}
 
case 'cantada+18':
case 'cantadas+18':
if(!isNsfw) return reply(`*Este comando só pode ser executado com o modo+18 ativo...*
*Para ativa-lo, digite* ${prefix}modo+18`)
setTimeout(() => {reagir(from, "🌚")}, 300)
const cantf1 = ['Não quero problema para cima de mim, só se o problema for você', 'Minha roupa ficaria linda jogada no chão do seu quarto', 'Me chama de videogame e me joga no sofá', 'Sabe que horas são? hora da gente se pegar', 'Eu não sei fazer seu mundo girar, mas sei fazer sua cama balançar', 'Estou pegando no sono, mas queria estar pegando você', 'Minha boca na sua, rola? Se quiser, a gente tira a vírgula...', 'Gosto de café assim como de sexo... Quente, forte e todos os dias', 'Oi, a minha cama mandou perguntar se você quer dormir aqui', 'Queria ser o seu sabonete, para deslizar no seu corpo', 'Vc é fazendeira ? Pq vc fez o meu pepino crescer...', 'Posso te chamar de picolé de uva ? Pra vc deixar minha boca roxa...', 'Me chama de Buzz Lightyear e deixa eu te mostrar o infinito e além...', 'Deixa eu te ensinar o que eu aprendi com Danone... Enquanto você me ensina o que aprendeu com pirulito']
const cantf2 = cantf1[Math.floor(Math.random() * (cantf1.length))]
cantftxt = `*Cantadas +18 pra vc...*

> _"${cantf2}"_ 🥵
*_By_* ?? ${NomeDoBot} 🔥`
reply(cantftxt)
break

case 'piadas':
case 'piada':
rate = body.slice(6)
var piada =['O que é um pontinho brilhando no jardim? Uma formiga de aparelho!','O que é um pontinho marrom cantando? Carlinhos Brown.',' Como o Batman faz para abrir a bat-caverna? Ele bat-palma.',' O que é um pontinho verde em Pernambuco? É um frevo de 4 folhas.',' Por que as loiras entram no banco rebolando? Para movimentar a poupança.',' Qual a semelhança entre uma loira e uma garrafa de cerveja? Do pescoço pra cima elas não tem nada.','Qual é a diferença entre a bicicleta e o vaso sanitário? Resp: a bicicleta você senta pra correr e o vaso sanitário você corre pra sentar! ','- Joãozinho você bebe 3 vinhos, depois bebe + 4 vinhos e depois + 7. Quantos vinhos voce bebeu? - Puxa!! Isto já é sacanagem, a esta hora, eu já estou bêbado! ']
var shizukuh = piada[Math.floor(Math.random() * piada.length)]
reply(` ${shizukuh} `)
break

case 'frasedeamor':
case 'frasesdeamor':
rate = body.slice(6)
var amor =['Me perguntaram qual era o meu lugar favorito e eu respondi: Você!','Amar alguém profundamente te dá forças. Ser amado profundamente por alguém te dá coragem.','Eu orei por você sem te conhecer. E agora tenho você aqui, muito mais do que eu pedi.','Acordar com você no meu pensamento é a forma mais doce de começar meu dia.','Não quero a ilusão de um amor perfeito, quero a felicidade de um amor verdadeiro.','O verdadeiro amor nunca se desgasta. Quanto mais se dá, mais se tem.','Meu bem, eu que nunca me lembro de nada não me esqueço de você.','Não procure alguém que te complete. Complete a si mesmo e procure alguém que te transborde.']
var shizukuebom = amor[Math.floor(Math.random() * amor.length)]
reply(` ${shizukuebom} `)
break					

case 'cantadas':
case 'cantada':
rate = body.slice(6)
var cantada =['Existe um vazio no meu coração que tem as suas medidas. Quer entrar?','Não existe amor à primeira vista. O que existe é a pessoa certa, no momento certo. Você por acaso estava lá!','O seu sorriso é o vírus que infectou o meu coração. ','Se o mar fosse um sentimento... seria tão grande quanto o amor que sinto por você. ',' Você sabe qual é o motivo do meu sorriso todos os dias? A primeira palavra dessa frase.','O Ministério da Saúde adverte: te ver longe de mim me faz sentir saudades. ','Quem te conhece deve ter que tomar calmante pro resto da vida, não estou certo? Você deixa qualquer um doido por você! ',' Amar você é loucura? Então não tem psiquiatra que me cure.']
var shizukuebom = cantada[Math.floor(Math.random() * cantada.length)]
reply(` ${shizukuebom} `)
break				

case 'ansiedade':
case 'ansiedades':
rate = body.slice(6)
var ansiedade =['Quanto mais medo eu sinto, mais trêmulo fico de ansiedade. Eu me fortaleço nas dificuldades.','A ansiedade me acompanha mundo afora, mas sei que para ser feliz preciso dela como precaução, como freio para meus sonhos infinitos....','Já não me importa o tempo perdido, eu sinto uma ansiedade imensa de mergulhar no que ainda não vivi. ','Ansiedade é o desejo para que o futuro se transforme logo no seu maior presente. ','De repente nos vemos sofrendo antecipadamente por causa de algo que talvez jamais aconteça, é a agulha da ansiedade a nos espetar... ','A ansiedade é o acelerador que ganhamos de brinde por não sabermos esperar nosso próprio tempo. ','Não me sinto bem em parte nenhuma e ando cheio de ansiedade de coisas que não posso nem sei realizar. ','De repente nos vemos nus diante da ansiedade que nos deixa cegos e indefesos, porém dentro de nós estão as armas para nos livrar de suas garras. ']
var shizukuebom = ansiedade[Math.floor(Math.random() * ansiedade.length)]
reply(` ${shizukuebom} `)
break				

case 'indiretas':
case 'indireta':
rate = body.slice(6)
var indireta =['Que essa frente fria consiga amenizar esse seu fogo.','Por que eu ainda fico lembrando de tudo aquilo que você já esqueceu?','Não olho para o passado, pois tudo de bom que tive nele está no meu presente, o que ficou pra trás foi só o que não servia pra nada. ','Algumas pessoas merecem um grande aplauso pelo teatro que fazem! 👏👏?? ',' Meu cupido é gari, só me traz lixo e você é a prova disso...',' Não lhe compete julgar a realidade que você não vive. ??',' Às vezes, sem querer, a gente esbarra em alguém que vale a pena.',' Não sei porque ainda me explico. Não devo explicações. Só para os meus pais, e somente até aos 18.']
var shizukuebom = indireta[Math.floor(Math.random() * indireta.length)]
reply(` ${shizukuebom} `)
break

case 'criador':
case 'suporte-dono':
case 'death':
case 'deathh': {await conn.sendMessage(from, { react: { text: "👨‍💻", key: info.key}});
    const vcard = `
BEGIN:VCARD
VERSION:3.0
N:;Death!!;;;
FN: Death!!
item1.TEL;waid=554796146896:+55 47 9614-6896
item1.X-ABLabel:Celular
END:VCARD`.trim()

await shizuku.sendMessage(from, {
        contacts: {
            displayName: `death num é programadora`,
            contacts: [{ vcard }]
        }
    })

const blabla = `╭─❍ 「 🕸️ Contato do Criador 」 
│
│ 🖤 Nome: death!
│ 🩸 WhatsApp: wa.me/554796146896
│
│ ⚠️ Caso esteja usando algum 
│ sistema *𝘪𝘮𝘶𝘯𝘦*, fale com ela... 
│ antes que eu fale por você. 🔪
│
│ 🗓️ Data: ${date}
│ ⌛ Hora: ${time2}
│ 🧠 Solicitado por: @${sender.split("@")[0]}
│
╰─◉ Shizuku-Bot observa...`;
await conn.sendMessage(from, { video: { url: "https://uploads.shizukuapis.space/4ce18492.mp4"}, gifPlayback: true, caption: blabla, mentions: [sender]}, {quoted: info});
    
    break
}


case 'transcrever': case 'totext2': {
if (!isQuotedAudio) return reply("marque um audio...")
reply(enviar.espere());
try {
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffaudio = await getFileBuffer(muk, 'audio')
linkaudio = await JpUpload(buffaudio, "Totext.mp3", SHIZUKU_TOKEN)
const { data } = await axios.get(`${Shizuku_site}/api/transcrever`, { params: { link: linkaudio, apitoken: SHIZUKU_KEY}});
if(!data || !data.resultado) return conn.sendMessage(from, { text: "❌ | Ocorreu algum erro ao tentar trascrever o áudio"}, {quoted: info});
reply(`✅ | O áudio foi transcrito com sucesso!!\n\n📝 | transcrição: ${data.resultado.texto}\n\n> 💎 | Shizuku-Bot & Shizuku API's`)
} catch (e) {
reply(mess.error(), e)
}
} break//by: shizukuh

case 'comandos-termux': 
case 'commands-termux': 
case 'termux-commands':
reagir(from, "👀")
await sendMenu(conn, from, linguagem.termuxTxt(prefix, pushname, sender), info)
break;

case 'checkme':
case 'meustats': {
    if (!isGroup) return reply(enviar.msg.grupo);

    const grupoData = countMessage.find(g => g.groupId === from);
    if (!grupoData) return reply('⚠️ Nenhuma atividade registrada neste grupo ainda.');

    const membro = grupoData.numbers.find(u => u.id === sender);
    if (!membro) return reply('⚠️ Você ainda não possui registros de atividade aqui.');

    const agora = Date.now();
    const tempoPassado = agora - (membro.lastSeen || agora);
    const minutos = Math.floor(tempoPassado / 60000);
    const vistoAgora = minutos < 1 ? "Agora mesmo" : `Há ${minutos} min`;

    let texto = `👤 *SUAS ESTATÍSTICAS NO GRUPO*\n\n`;
    texto += `📝 *Geral:*\n`;
    texto += `   ├ 💬 Mensagens: *${membro.messages}*\n`;
    texto += `   ├ 🤖 Comandos: *${membro.cmd_messages}*\n`;
    texto += `   └ 📱 Aparelho: *${membro.aparelho || 'Desconhecido'}*\n\n`;

    texto += `📦 *Mídias Enviadas:*\n`;
    texto += `   ├ 🎨 Figurinhas: *${membro.figus || 0}*\n`;
    texto += `   ├ 🖼️ Imagens: *${membro.imagens || 0}*\n`;
    texto += `   ├ 🎙️ Áudios: *${membro.audios || 0}*\n`;
    texto += `   └ 🎥 Vídeos: *${membro.videos || 0}*\n\n`;

    texto += `🕒 *Visto por último:* ${vistoAgora}\n`;
    texto += `🔥 *Nível:* ${
        membro.messages > 500 ? '👑 Lenda do Grupo'
        : membro.messages > 200 ? '⚡ Super Ativo'
        : membro.messages > 50 ? '✅ Participativo'
        : '💤 Sumido'
    }`;

    await shizuku.sendMessage(from, { text: texto, mentions: [sender] }, { quoted: selo });
    break;
}

case 'check':
case 'stats': {
    if (!isGroup) return reply(enviar.msg.grupo);
    let alvo = menc_os2 || (info.message.extendedTextMessage?.contextInfo?.participant);
    if (!alvo) return reply('❌ Marque ou responda a mensagem de alguém para ver os stats.');

    const grupoData = countMessage.find(g => g.groupId === from);
    if (!grupoData) return reply('⚠️ Nenhuma atividade registrada neste grupo.');

    const membro = grupoData.numbers.find(u => u.id === alvo);
    if (!membro) return reply('⚠️ Este membro ainda não possui registros no contador.');

    const agora = Date.now();
    const tempoPassado = agora - (membro.lastSeen || agora);
    const minutos = Math.floor(tempoPassado / 60000);
    const vistoAgora = minutos < 1 ? "Agora mesmo" : `Há ${minutos} min`;

    let texto = `📊 *ESTATÍSTICAS DE @${alvo.split('@')[0]}*\n\n`;
    texto += `📝 *Geral:*\n`;
    texto += `   ├ 💬 Mensagens: *${membro.messages}*\n`;
    texto += `   ├ 🤖 Comandos: *${membro.cmd_messages}*\n`;
    texto += `   └ 📱 Aparelho: *${membro.aparelho || 'Desconhecido'}*\n\n`;

    texto += `📦 *Mídias Enviadas:*\n`;
    texto += `   ├ 🎨 Figurinhas: *${membro.figus || 0}*\n`;
    texto += `   ├ 🖼️ Imagens: *${membro.imagens || 0}*\n`;
    texto += `   ├ 🎙️ Áudios: *${membro.audios || 0}*\n`;
    texto += `   └ 🎥 Vídeos: *${membro.videos || 0}*\n\n`;

    texto += `🕒 *Visto por último:* ${vistoAgora}\n`;
    texto += `🔥 *Nível:* ${
        membro.messages > 500 ? '👑 Lenda do Grupo'
        : membro.messages > 200 ? '⚡ Super Ativo'
        : '💤 Observador'
    }`;

    await shizuku.sendMessage(from, { text: texto, mentions: [alvo] }, { quoted: selo });
    break;
}


case 'trolar':
case 'caiu':
if(!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
await shizuku.sendMessage(from, {text: `removeu você                                     








 













                                   



























         


*veio correndo pra saber se o adm tinha removido vc neh, caiu na trolagem mais já que tá aqui vms querer falar no grupo*`, mentions: groupMembers.map(a => a.phoneNumber)})
break

case 'usuarios':
case 'usertotal':{
const shizukuhD = JSON.parse(fs.readFileSync('./shizuku-config/media/countmsg.json'))
let UserJpBot = new Set()
for (let grupo of shizukuhD) {
for (let user of grupo.numbers) {
UserJpBot.add(user.id)
}
}
let total = UserJpBot.size
await  shizuku.sendMessage(from, { text: `Atualmente tenho ${total} usuários únicos registrados.` }, { quoted: selojp})
}
break

case 'totalgp':{
if(!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
getGroups = await shizuku.groupFetchAllParticipating()
groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
ingfoo = groups.map(v => v)
totalgp = ingfoo.length;
await shizuku.sendMessage(from, {text: `Atualmente ${NomeDoBot} esta ativo em ${totalgp} grupos Mestre!`}, {quoted: selojp});
}
break//by: shizukuh
 
 case 'suicidio':
setTimeout(() => {reagir(from, `☹️`)}, 100)
{
if(!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply("> "+enviar.msg.Badmin)
await reply(`🥺 Lembre-se ${pushname} você sempre estara em nossos corações! ☔😔`)
await sleep(3000)
await shizuku.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(1000)
reply('Agora que ja se foi vamos falar mal dele kkk😈')
}
break

case 'bugchat': {//Não muda nada, só o cliente mesmo pdp? créditos by Nk Swėatër 
    try {//vulgo Nk Petrøv
     if(!SoDono) return reply(enviar.msg.donosmt)
        if (!q) return reply(`Use: ${prefix + command} número`);

        const target = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        const message = {
            botInvokeMessage: {
                        message: {
                            newsletterAdminInviteMessage: {
                                newsletterJid: '33333333333333333@newsletter',
                                newsletterName: "😈😈" + "ྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃ".repeat(1999),
                                jpegThumbnail: "",
                                caption: "ྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃ".repeat(1999),
                                inviteExpiration: Date.now() + 1814400000,
                            },
                        },
                    },
                };
        await conn.relayMessage(target, message, { userJid: target });
    } catch (err) {
        console.log(err);
        reply("Erro ao enviar.");
    }
}
break;

case 'print': case 'printsite': {
try {
if(!q?.trim()) {
return reply(`Falta o link do site, ex: ${prefix+command} https://shizukuapis.space`);
};
await reply(enviar.espere());
const image = await getBuffer(Shizukusite+"/api/outros/printsite?url="+encodeURIComponent(q?.trim()) + "&apikey=" + SHIZUKU_KEY);
await shizuku.sendMessage(from, {image, fileName: "Shizuku.png", caption: `✅ Sucesso!`, mentions: [sender]}, {quoted: selojp});
} catch (JpzinhError) {
await reply("Error apresentado em:" + JpzinhError);
console.log("Error:", JpzinhError);
return;
};
break;
};

case 'rename':
case 'roubar': {
reagir(from, "✅️")
if (!q.includes('/')) {
return reply(`*Formato inválido!*\n\nUse assim:\n> $(prefix + command} Author/pack\n\nExemplo:\n> Ex: ${prefix+command} jpzinh/👑`)
}
const [criador, pacote] = q.split('/').map(a => a.trim()) || null;
 if (!criador || !pacote) {
return reply(`*Faltou algum campo!\n\nFormato correto:*\n> Ex: ${prefix + command} death/👑`)
 }
renameContextSticker(criador, pacote, `@${pushname}`, info)
.catch(err => {
reagir(from, "❌️")
reply(`❌ Erro ao renomear figurinha, tente mais tarde.`)
console.log('Erro no take:', err)
})
break;
};

case 'rgtake': {
if (takeDB[sender]) return reply('❕| Voce já ésta registrado! ')
if (!q.includes('/')) {
return reply('❌ Formato inválido!\n\nUse assim:\n> +rgtake author/pack\n\nExemplo:\n> +rgtake jpzinh edits/Shizuku-Bot')
}
const [author, pack] = q.split('/').map(a => a.trim()) || null;
 if (!author || !pack) {
return reply('⚠️ Faltou algum campo!\n\nFormato correto:\n> +rgtake author/pack')
 }
takeDB[sender] = {
author,
pack,
registrado_em: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
}
saveTake()
reply(`✅ Marca registrada com sucesso!\n\n🪶 *Author:* ${author}\n📦 *Pack:* ${pack}`)
break
}

// remover marca
case 'rmtake': {
if (!takeDB[sender]) return reply('❌ Você ainda não tem nenhuma marca registrada.')
delete takeDB[sender]
saveTake()
reply('🗑️ Registro removido com sucesso!')
break
};

// aplicar marca em figurinhas
case 'rbale':
case 'take': {
reagir(from, "✅️")
const registro = takeDB[sender]
if (!registro) return reply('⚠️ Você ainda não registrou uma marca!\nUse: *+rgtake author/pack*')
if (!isQuotedSticker) return reply("❌ Falta marcar a figurinha!");
const criador = registro.author || null;
const pacote = registro.pack || null;
renameContextSticker(criador, pacote, `@${pushname}`, info)
.catch(err => {
reagir(from, "❌️")
reply(`❌ Erro ao renomear figurinha, tente mais tarde.`)
console.log('Erro no take:', err)
})
break;
};

case 'descdogp':
case 'infogp2':{
if(!isGroupAdmins) return reply('Voçe precisa ser admin do grupo.');
if(!isBotGroupAdmins) return reply('O bot precisa ser admin para executar esse comando.');
const buscardesc = await shizuku.groupMetadata(from);
const resultdesc = await buscardesc.desc;
let finaldesc;
try {
finaldesc = resultdesc;
} catch {
finaldesc = 'sem descrição.';
}
if(!finaldesc) {
return reply('Nao consegui obter a descrição do grupo.')
}
let fotogp;
try { 
fotogp = await shizuku.profilePictureUrl(from, 'image');
} catch {
fotogp = 'https://files.catbox.moe/ytcxwr.jpg';
}
if(!fotogp) {
return reply('nao consegui obter a imagem do grupo!');
}
await shizuku.sendMessage(from, {image: {url: fotogp}, caption: "*Descrição do grupo:* " + finaldesc}, {quoted: info});
break;
}

case 'gemini':{
try {
if(!q) {
return reply('Adicione uma pergunta!');
}
await reply(enviar.espere());
await conn.sendMessage(from, {react: {text: "🧠", key: info?.key}});
const { data } = await axios.get(`${Shizukusite}/api/ias/gemini`, { params: { query: q, apikey: SHIZUKU_KEY}});   
const { resposta } = data;
await reply(resposta);
} catch (Err) {
console.log(Err);
return reply(mess.error())
}
break;
};

case 'gemini-vos': {
	try {
		if(!q?.trim()) return reply("ta faltando o Parâmetro: query")
		await reply(enviar.espere())
			await conn.sendMessage(from, {
				audio: {
					url: Shizukusite+"/api/ias/geminivoz?query=" +q?.trim() + "&apikey="+SHIZUKU_KEY },
					mimetype: "audio/mpeg"},
					{ 
						quoted 
					}
				);
		} catch (e) {
	reply(mess.error)
  }
 break;
}

case 'lyrics': {
if(!q?.trim()) return reply("falta um nome de uma música");
conn.sendMessage(from, { react: { text: "🤏", key: info.key}})
await reply(enviar.espere())
try {
 const { data: i } = await axios.get(Shizukusite+"/api/pesquisas/lyrics-search", { params: { query: q?.trim(), apikey: SHIZUKU_KEY }, timeout: 4000});
if(!i?.status) return reply("Erro na resposta da api")

const { image, link, titulo, artista, letra } = i?.result[0];

if(letra) {
conn.sendMessage(from, { image: { url: image}, caption: "*Titulo:* "+titulo+"\n*Artista:* "+artista+"\n*link:* "+link+"\n\n*Letra:* "+letra}, {quoted })
} else if(i?.resposta) {
return reply(`${i.resposta}`)
} else {
return reply("Parece que não obtive resposta da api ")
}
} catch (e) {
reply(mess.error())
console.log("Error: ", e)
}
break;
}

case 'idfigu2': case 'idfig2':
if (!info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage) {
return reply('Por favor, *responda uma figurinha* para ver o ID.');
}
try {
const stickerMsg2 = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage;
const stickerId2 = Buffer.from(stickerMsg2.fileSha256).toString("hex");
reply(`🆔 ID da figurinha:\n${stickerId2}`);
} catch (e) {
console.log(e);
reply('❌ Ocorreu um erro ao pegar o ID da figurinha.');
}
break;
    
//TOGIF

case 'togif':
    try {
        const quoted = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
        const isQuotedSticker = quoted?.stickerMessage;
        if (!isQuotedSticker) return reply("Marca uma figurinha animada pra converter em gif.")
        if (!isQuotedSticker.isAnimated) return reply("Essa figurinha não é animada.")
        await reply(enviar.espere())
        const getBufferWebP = await getFileBuffer(isQuotedSticker, "sticker")
        const inputPath = "./armor/sticker/convert.webp"
        fs.writeFileSync(inputPath, getBufferWebP)
        const { FiguMp4OuGif } = require('./armor/sticker/togif.js')
        const convertWebP = await FiguMp4OuGif(inputPath)
        await conn.sendMessage(from, {
            video: { url: convertWebP }, 
            gifPlayback: true, 
            caption: 'Tá aqui seu gif ✨',
            fileName: 'sticker-sb.gif'
        }, { quoted: info })
        fs.unlinkSync(inputPath)
      } catch (e) {
     console.log(e)
    reply("Bateu um soninho... 😴 Deu erro na conversão")
  }
break
//GERAR NICK

case 'gerarnick':
case 'fazernick': {
    try {
        const nick = args.join(' ');
        if (!nick) return reply(`✍️ Escreva um nome para eu gerar.\n\n*Exemplo:* ${prefix + command} jpzinh`);

        await reply("⏳ Gerando estilos de nicks, aguarde...");
        const response = await axios.get(`${Shizukusite}/api/geradores/gerar-nicks?text=${encodeURIComponent(nick)}&apikey=${SHIZUKU_KEY}`);
        const resultados = response.data.resultado;
        if (!resultados || resultados.length === 0) 
            return reply("❌ Não consegui gerar nicks para este nome.");
        cacheNick.set(`${sender}_${from}`, {
            nicks: resultados,
            timeout: setTimeout(() => cacheNick.delete(`${sender}_${from}`), 300000) 
        });
        
const seta = "➤"; 
let txt = `╭━━━〔 💈 *ESTILOS DE NICK* 💈 〕━━━╮\n`;
txt += `┃\n`;
txt += `┃ 👤 *Usuário:* @${sender.split('@')[0]}\n`;
txt += `┃ 📝 *Instrução:* Digite apenas o número\n`;
txt += `┃ para receber o texto isolado.\n`;
txt += `┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓\n`;
txt += `┃\n`;

resultados.forEach((r, i) => {
    const num = (i + 1).toString().padStart(2, '0');
    txt += `┃  ◈ ${num} ${seta}  ${r.result}\n`;
});

txt += `┃\n`;
txt += `┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛\n`;
txt += `┃ ⏳ *Expira em:* 05 Minutos\n`;
txt += `╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━➤\n`;
txt += `  ⛓️ 𝙎𝙝𝙞𝙯𝙪𝙠𝙪 - 𝙉𝙞𝙘𝙠𝘴`;

await shizuku.sendMessage(from, { text: txt, mentions: [sender] }, { quoted: info });
 } catch (e) {
console.error(e);
reply("❌ Ocorreu um erro ao conectar com a API.");
}
}
break;


case 'remover-fundo':
case 'remover-bg':
 if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
 const post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage;
const img = await baileys.downloadContentFromMessage(post, 'image');
base64 = Buffer.from([]);
for await (const send of img) {
base64 = Buffer.concat([base64, send]);
 }
await reply(enviar.espere())
try {
let ImgUrl = await JpUpload(base64, "", SHIZUKU_TOKEN);
const { data } = await axios.get(`${Shizukusite}/api/outros/remover-fundo`, { params: { imgUrl: ImgUrl, apikey: SHIZUKU_KEY }});
const { low_resolution } = data?.resultado?.data
await conn.sendMessage(from, { image: { url: low_resolution }}, { quoted: selo});
} catch (error) {
console.error(error);
return reply('Ocorreu um erro ao processar  imagem');
}
} else {
reply('Mencione uma imagem para remover o fundo.');
}
break; 

// CASE DO SHAZAM
case 'shazam':
if (!isQuotedAudio) return reply("🎵 *Envie ou marque um áudio para identificar a música!*");
const slh = isQuotedAudio ? info?.message?.extendedTextMessage?.contextInfo.quotedMessage?.audioMessage : info.message?.audioMessage;
try {
await reply(enviar.espere())
const audioU = await getFileBuffer(slh, "audio");
const AudioUrl = await JpUpload(audioU, "áudio.mp3", SHIZUKU_TOKEN);
const { data } = await axios.get(`${Shizukusite}/api/outros/shazam`, { params: { url: AudioUrl, apikey: SHIZUKU_KEY }});
if(!data || !data.resultado) return reply("Erro ao buscar resultados");
await conn.sendMessage(from, {image: {url: data?.resultado?.capa}, caption: await Mess.Shazam(data)}, {quoted: info});
await conn.sendMessage(from, {audio: {url: data?.resultado?.preview}, mimetype: "audio/mpeg", ptt: false, fileName: `${data?.resultado?.titulo || "música"}.mp3`}, {quoted: info});
await reagir(from, "✅");
} catch (e) { console.error(e), reply("⚠️ Ocorreu um erro ao identificar a música.") };
break;

case 'gethtml':{
if(!isPremium) return reply(enviar.msg.premium);
if(!q?.trim()) { return reply("Voce deve adicionar o link do site que deseja puxar o HTML") };
await reagir(from, "💎")
await reply(enviar.espere())
try {
const { data } = await axios.get(q?.trim());
await reply(data);
} catch (e) { reply("Erro ao puxar HTML do site"), console.log("Erro em:", e) }
}
break;

case 'g1': {
try {
await reagir(from, "🌐")
await reply(enviar.espere())
const { titulo, desc, link, data, img } = await g1(Shizukusite, SHIZUKU_KEY);
caption = `📝 *Título:* ${titulo || undefined }
✏️ *Descrição:* ${desc || undefined }
📆 *Postada em:* ${data || undefined }
🌐 *Link:* ${link || undefined }
	`;
if(img) {
await sendImg(img, caption).catch(() => {
return reply("Erro ao enviar resultados");
})
} else { return reply(caption) }
} catch (e) { reply(mess.error()), console.log(e) };
break;
}//

case 'noticias-atuais':
case 'esportes':
case 'politica': {
try {
conn.sendMessage(from, { react: { text: "🌐", key: info.key }});
await reply(enviar.espere())
const { categoria, fonte, titulo, desc, content, link, image, publicado } = await Noticias(command, Shizukusite, SHIZUKU_KEY);
		 
if(!link && !image && !desc) return reply("vish! parece que a a API não retornou um resultado válido.");
const caption = `✨ *ɴᴏᴛɪ́ᴄɪᴀs ꜰʀᴇsǫᴜɪɴʜᴀs* ✨

📂 *ᴄᴀᴛᴇɢᴏʀɪᴀ:* ${categoria}
📡 *ꜰᴏɴᴛᴇ:* ${fonte}
📌 *ᴛɪ́ᴛᴜʟᴏ:* ${titulo}
📝 *ᴅᴇsᴄʀɪᴄ̧ᴀ̃ᴏ:* ${desc}
📖 *ᴄᴏɴᴛᴇᴜ́ᴅᴏ:* ${content}
📅 *ᴘᴜʙʟɪᴄᴀᴅᴏ:* ${publicado}
🔗 *ʟɪɴᴋ:* ${link}

⚡ Sʜɪᴢᴜᴋᴜ API's - Iɴꜰᴏʀᴍᴀᴄ̧ᴀ̃ᴏ ɴᴀ ᴘᴀʟᴍᴀ ᴅᴀ ᴍᴀ̃ᴏ!`;

if(image) { 
return sendImg(image, caption);
} else { return reply(caption) }
} catch (e) { reply(mess.error()), console.log(e) }
break;
};

case 'cnn': case 'uol': {
try {
conn.sendMessage(from, { react: { text: "🌐", key: info.key}});
reply(enviar.espere())
const { categoria, desc, titulo, link, publicado } = await Noticias2(command, Shizukusite, SHIZUKU_KEY); 
if(!categoria && !desc && !link) {
return reply("resposta da api veio inválida.");
};
const NOT = ` ✨ *ɴᴏᴛɪ́ᴄɪᴀs ꜰʀᴇsǫᴜɪɴʜᴀs* ✨\n
📂 *ᴄᴀᴛᴇɢᴏʀɪᴀ:* ${categoria}
📌 *ᴛɪ́ᴛᴜʟᴏ:* ${titulo}
📝 *ᴅᴇsᴄʀɪᴄ̧ᴀ̃ᴏ:* ${desc}
📅 *ᴘᴜʙʟɪᴄᴀᴅᴏ:* ${publicado}
🔗 *ʟɪɴᴋ:* ${link}

⚡ Sʜɪᴢᴜᴋᴜ API's - Iɴꜰᴏʀᴍᴀᴄ̧ᴀ̃ᴏ ɴᴀ ᴘᴀʟᴍᴀ ᴅᴀ ᴍᴀ̃ᴏ!`;
return reply(NOT?.trim())
} catch (e) { reply(mess.error()), console.log(e) };
break;
};

case 'emoji-mix': {
	try {
		if (!q || !q.includes("+")) return reply(`uso incorreto, use: ${prefix + command} 😢+😢`);
        reply(enviar.espere())
		const [emoji1, emoji2] = q.split("+").map(e => e.trim());
        const image = await getBuffer(
			Shizukusite + `/api/outros/emoji-mix?emoji1=${encodeURIComponent(emoji1)}&emoji2=${encodeURIComponent(emoji2)}` + "&apikey="+SHIZUKU_KEY
		);
		await sendImg(image)
	} catch (e) {
		reply("Erro na solicitação");
		console.log("Erro apresentado em: ", e.message);
	}
	break;
}

case 'qrcode': {
	try {
		if(!q?.trim()) return reply("Parâmetro: text, faltando.")
		  reply(enviar.espere())
		   const image = await getBuffer(
		     Shizukusite+"/api/geradores/qrcode?text="+encodeURIComponent(q?.trim()) +
		     "&apikey="+SHIZUKU_KEY
		 );
		if(!image) return reply("Ouve algum problema na resposta da api 😢");
		await sendImg(image, `✅ *Qrc-ode gerado com sucesso!*\n*📝 Conteudo:* ${q?.trim()}`);
	} catch (e) {
   reply("Erro na solicitação.");
   console.log("Erro ao gerar QR-CODE: ", e.message);
  }
 break;
};

//MEGA DO
case "megadl": {
    if (!q) return reply("Manda o link do Mega.");
    reply(enviar.espere())
    try {
        const megaUrl = `${Shizukusite}/api/downloads/megadl?url=${encodeURIComponent(q)}` + "&apikey="+SHIZUKU_KEY;

        const response = await axios.get(megaUrl, {
            responseType: "arraybuffer"
        });

        const buffer = Buffer.from(response.data);

        await conn.sendMessage(from, {
            document: buffer,
            mimetype: response.headers["content-type"] || "application/octet-stream",
            fileName: "arquivo.zip"
        }, { quoted: info });
    } catch (err) {
        console.log(err);
        reply("Erro ao baixar do Mega.");
    }
}
break;

case 'igstalk': {
  try {
    if(!q?.trim()) return reply("parametro: username, obrigatório.");
    reagir(from, "⌛");
    reply(enviar.espere())
    const { data } = await axios.get(Shizukusite + "/api/stalker/instagram", {
      params: { 
        username: q?.trim(), 
         apikey: SHIZUKU_KEY },
           timeout: 4000 });
          
          if(!data || !data?.results) {
          return reply("vish! parece que o usuário não foi encontrado.");
          };
        const image = await getBuffer(data.results?.foto) 
        if(image) {
       return sendImg(image, Mess.igstalk(data))
        } else {
        return reply(caption)
        }
    } catch (err) {
    reply(mess.error());
   console.log(err)
  }
 break;
}

case 'sendngl':
case 'ngl': {
  try {
    if (args.length < 3) {
      return reply("Use assim:\n.ngl link mensagem aqui 10");
    }
    const link = args[0];
    const quantidade = Number(args[args.length - 1]);
    if (isNaN(quantidade)) {
      return reply("A quantidade precisa ser um número válido.");
    }
    const mensagem = args.slice(1, -1).join(" ");
    reagir(from, "⌛");
    reply(enviar.espere())
    const { data } = await axios.get(Shizukusite + "/api/outros/sendngl", {
      params: { 
        link,
         mensagem,
          quantidade,
           apikey: SHIZUKU_KEY
         },
       }
     );
    if (!data?.status || !data?.enviado_para) {
      return reply("Vish! Algo deu errado. 😢");
    }
   await reply(await Mess.Ngl(data, mensagem));
  } catch (e) {
   reply(mess.error());
   console.log(e);
  }
 break;
}

case 'addparceiro': {
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!menc_os2) return reply("Marque o usuário.")
if(parceria.addParceiro(from, menc_os2)){
reply(`Usuário adicionado como parceiro\n\nNúmero: ${menc_os2.split("@")[0]}`)
}else{
reply("Esse usuário já é parceiro.")
}
}
break

case 'listaparceiros': {
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
let parceiros = parceria.listParceiros(from)
if(parceiros.length < 1) return reply("Nenhum parceiro cadastrado.")
let teks = "Lista de Parceiros do Grupo\n\n"
parceiros.forEach((num, i) => {
teks += `${i+1} - @${num.split("@")[0]}\n`
})
mention(teks)
}
break

case 'delparceiro': {
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
let parceiros = parceria.delParceiros(from)
if(!args[0]) return reply("Marque ou informe número da lista.")
if(isNaN(args[0])){
parceria.delParceiro(from, menc_os2)
reply("Parceiro removido.")
}else{
let index = Number(args[0]) - 1
if(!parceiros[index]) return reply("Número inválido.")
parceria.delParceiro(from, parceiros[index])
reply("Parceiro removido da lista.")
}
}
break

case 'cpf': {
    try {
        if (!q) return reply(`⚠️ Digite um CPF para consultar.\nEx: ${prefix + command} 00000000000`);
         const cpfLimpo = q.replace(/\D/g, '')
         if (cpfLimpo.length !== 11) {
            return reply(`⚠️ *ERRO DE FORMATO*\n\nO CPF deve conter exatamente 11 números.\nVocê enviou: ${cpfLimpo.length} dígitos.\n\nExemplo: ${prefix + command} 123.456.789-01`);
        }
        
        const sequenciasLeigas = ["00000000000", "11111111111", "22222222222", "33333333333", "44444444444", "55555555555", "66666666666", "77777777777", "88888888888", "99999999999"];
        if (sequenciasLeigas.includes(cpfLimpo)) {
            return reply("🚫 *CPF INVÁLIDO*\n\nPor favor, pare de brincar e envie um CPF real.");
        }
        await reply(enviar.espere());
        await reagir(from, "🔍");

        const response = await axios.get(`${Shizukusite}/api/consultas/info-cpf`, { params: { query: cpfLimpo, apikey: SHIZUKU_KEY }});
        const res = response.data;

        if (!res.results.status || !res.results) {
            return reply("❌ CPF não encontrado ou erro na API.");
        }

        const data = res.results;
        const dados = data.dados;
        const prof = data.dados_profissionais;
        
        let txtConteudo = `📂 RELATÓRIO DE CONSULTA - SHIZUKU\n`;
        txtConteudo += `──────────────────────────\n\n`;
        txtConteudo += `👤 DADOS PESSOAIS:\n`;
        txtConteudo += `• Nome: ${dados.nome}\n`;
        txtConteudo += `• CPF: ${dados.cpf}\n`;
        txtConteudo += `• Sexo: ${dados.sexo}\n`;
        txtConteudo += `• Nascimento: ${dados.nascimento}\n`;
        txtConteudo += `• Nome da Mãe: ${dados.nome_da_mae.trim()}\n\n`;
        
        txtConteudo += `💼 DADOS PROFISSIONAIS:\n`;
        txtConteudo += `• Renda Estimada: R$ ${prof.renda_estimada}\n`;
        txtConteudo += `• CBO: ${prof.cbo}\n\n`;

        txtConteudo += `📧 E-MAILS ENCONTRADOS:\n${data.emails}\n\n`;
        txtConteudo += `──────────────────────────\n`;
        txtConteudo += `🤖 Gerado por: ${NomeDoBot}`;

        const fileName = `./datab/CPF_${dados.cpf}.txt`;
        fs.writeFileSync(fileName, txtConteudo);
        await shizuku.sendMessage(from, { 
            document: fs.readFileSync(fileName), 
            fileName: `Consulta_${dados.cpf}.txt`, 
            mimetype: 'text/plain',
            caption: `Consulta realizada com sucesso para: *${dados.nome}*`
        }, { quoted: selojp });
        fs.unlinkSync(fileName);
        await reagir(from, "✅");
    } catch (e) {
        console.error("ERRO CONSULTA CPF:", e);
        reply("❌ Ocorreu um erro ao processar a consulta.");
    }
    break;
}

//BRINCADEIRAS
case 'chance': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);  
    
    if (args.length < 1) {
        return shizuku.sendMessage(from, {
            text: `⚠️ Você precisa digitar da forma correta.\n\nExemplo: ${prefix}chance do luuck ser gay`
        }, { quoted: selojp });
    }
    
    const randomChance = Math.floor(Math.random() * 100);
    const textoChance = body.slice(prefix.length + 7).trim(); // Pega o texto dinamicamente após o comando
    const hasil = `🔮 A chance ${textoChance} é de... *${randomChance}%*`;
    
    shizuku.sendMessage(from, { text: hasil, mentions: [sender] }, { quoted: selojp });
}
break;

case 'nazista': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    shizuku.sendMessage(from, {
        text: `⏳ Pesquisando a sua ficha de nazista: @${sender_ou_n.split("@")[0]} aguarde...`, 
        mentions: [sender_ou_n]
    });
    
    setTimeout(async () => {
        const randomNazi = Math.floor(Math.random() * 100);
        shizuku.sendMessage(from, {
            image: { url: imgnazista }, 
            caption: `🙋‍♂️ *O quanto você é nazista?*\n\n🎯 Alvo: @${sender_ou_n.split("@")[0]}\n📊 Resultado: *${randomNazi}%* nazista 卐`, 
            mentions: [sender_ou_n]
        }, { quoted: selojp });
    }, 4000);
}
break; 

case 'gay': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    shizuku.sendMessage(from, {
        text: `⏳ Pesquisando a sua ficha de gay: @${sender_ou_n.split("@")[0]} aguarde...`, 
        mentions: [sender_ou_n]
    });
    
    setTimeout(async () => {
        const randomGay = Math.floor(Math.random() * 100);
        let statusGay = '';
        
        // Estrutura limpa usando faixas de porcentagem
        if (randomGay < 20) {
            statusGay = 'hmm... você é hétero 🧑';
        } else if (randomGay >= 20 && randomGay <= 30) {
            statusGay = '+/- boiola 🧐';
        } else if (randomGay >= 31 && randomGay <= 40) {
            statusGay = 'tenho minhas desconfianças... 🤔';
        } else if (randomGay >= 41 && randomGay <= 50) {
            statusGay = 'você é né? 😏';
        } else {
            statusGay = 'você é TOTALMENTE gay 🏳️‍🌈🤖';
        }
        
        shizuku.sendMessage(from, {
            image: { url: imggay }, 
            caption: `🌈 *O quanto você é gay?*\n\n🎯 Alvo: @${sender_ou_n.split("@")[0]}\n📊 Resultado: *${randomGay}%* gay 🏳️‍🌈\n\n📢 *Nota:* ${statusGay}`, 
            mentions: [sender_ou_n]
        }, { quoted: selojp });
    }, 4000);
}
break;

case 'feio': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    shizuku.sendMessage(from, {
        text: `⏳ Pesquisando a sua ficha de feio: @${sender_ou_n.split("@")[0]} aguarde...`, 
        mentions: [sender_ou_n]
    });
    
    setTimeout(async () => {
        const randomFeio = Math.floor(Math.random() * 100);
        let statusFeio = '';
        
        // Redução do bloco de ifs para uma lógica muito mais limpa e legível
        if (randomFeio < 20) {
            statusFeio = 'Até que não é feio, dá pro gasto!';
        } else if (randomFeio >= 21 && randomFeio <= 30) {
            statusFeio = '+/- feio, na média.';
        } else if (randomFeio >= 31 && randomFeio <= 35) {
            statusFeio = 'Dá pra pegar umas(ns) novinhas(os) ainda.';
        } else if (randomFeio >= 36 && randomFeio <= 40) {
            statusFeio = 'Não existe gente feia, existe gente que não conhece os produtos Jequiti!';
        } else if (randomFeio >= 41 && randomFeio <= 45) {
            statusFeio = 'Nada que uma maquiagem pesada ou um saco na cabeça não resolva!';
        } else if (randomFeio >= 46 && randomFeio <= 50) {
            statusFeio = 'Você é feio, mas compensa na lábia e no carisma.';
        } else {
            statusFeio = 'Você é feio demais, cruz credo! 🪞❌';
        }
        
        shizuku.sendMessage(from, {
            image: { url: imgfeio }, 
            caption: `👹 *O quanto você é feio?*\n\n🎯 Alvo: @${sender_ou_n.split("@")[0]}\n📊 Resultado: *${randomFeio}%* feio 🙈\n\n📢 *Nota:* ${statusFeio}`, 
            mentions: [sender_ou_n]
        }, { quoted: selojp });
    }, 4000);
}
break;

case 'corno': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    shizuku.sendMessage(from, {
        text: `⏳ Pesquisando a ficha de corno: @${sender_ou_n.split("@")[0]}, aguarde...`, 
        mentions: [sender_ou_n]
    });
    
    setTimeout(async () => {
        const randomCorno = Math.floor(Math.random() * 100);
        shizuku.sendMessage(from, {
            image: { url: imgcorno }, 
            caption: `🐂 *O quanto você é corno?*\n\n🎯 Alvo: @${sender_ou_n.split("@")[0]}\n📊 Resultado: *${randomCorno}%* corno 🤘`, 
            mentions: [sender_ou_n]
        }, { quoted: selojp });
    }, 4000);
}
break;

case 'vesgo': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    shizuku.sendMessage(from, {
        text: `⏳ Pesquisando a ficha de vesgo: @${sender_ou_n.split("@")[0]}, aguarde...`, 
        mentions: [sender_ou_n]
    });
    
    setTimeout(async () => {
        const randomVesgo = Math.floor(Math.random() * 100);
        shizuku.sendMessage(from, {
            image: { url: imgvesgo }, 
            caption: `🙄 *O quanto você é vesgo?*\n\n🎯 Alvo: @${sender_ou_n.split("@")[0]}\n📊 Resultado: *${randomVesgo}%* vesgo 🤪`, 
            mentions: [sender_ou_n]
        }, { quoted: selojp });
    }, 4000);
}
break; 

case 'bebado': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    shizuku.sendMessage(from, {
        text: `⏳ Pesquisando a ficha de bêbado: @${sender_ou_n.split("@")[0]}, aguarde...`, 
        mentions: [sender_ou_n]
    });
    
    setTimeout(async () => {
        const randomBebado = Math.floor(Math.random() * 100);
        shizuku.sendMessage(from, {
            image: { url: imgbebado }, 
            caption: `🥴 *O quanto você é bêbado?*\n\n🎯 Alvo: @${sender_ou_n.split("@")[0]}\n📊 Resultado: *${randomBebado}%* bêbado 🍺`, 
            mentions: [sender_ou_n]
        }, { quoted: selojp });
    }, 4000);
}
break; 

case 'gado': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    shizuku.sendMessage(from, {
        text: `⏳ Pesquisando a ficha de gado: @${sender_ou_n.split("@")[0]}, aguarde...`, 
        mentions: [sender_ou_n]
    });
    
    setTimeout(async () => {
        const randomGado = Math.floor(Math.random() * 100);
        shizuku.sendMessage(from, {
            image: { url: imggado }, 
            caption: `🤠 *O quanto você é gado?*\n\n🎯 Alvo: @${sender_ou_n.split("@")[0]}\n📊 Resultado: *${randomGado}%* gado 🐂`, 
            mentions: [sender_ou_n]
        }, { quoted: selojp });
    }, 4000);
}
break; 

case 'gostoso': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    shizuku.sendMessage(from, {
        text: `⏳ Pesquisando a sua ficha de gostoso: @${sender_ou_n.split("@")[0]} aguarde...`, 
        mentions: [sender_ou_n]
    });
    
    setTimeout(async () => {
        const randomGostoso = Math.floor(Math.random() * 100);
        shizuku.sendMessage(from, {
            image: { url: imggostoso }, 
            caption: `🔥 *O quanto você é gostoso?*\n\n🎯 Alvo: @${sender_ou_n.split("@")[0]}\n📊 Resultado: *${randomGostoso}%* gostoso 😏`, 
            gifPlayback: true, 
            mentions: [sender_ou_n]
        }, { quoted: selojp });
    }, 4000);
}
break;

case 'gostosa': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    shizuku.sendMessage(from, {
        text: `⏳ Pesquisando a sua ficha de gostosa: @${sender_ou_n.split("@")[0]} aguarde...`, 
        mentions: [sender_ou_n]
    });
    
    setTimeout(async () => {
        const randomGostosa = Math.floor(Math.random() * 100);
        shizuku.sendMessage(from, {
            image: { url: imggostosa }, 
            caption: `✨ *O quanto você é gostosa?*\n\n🎯 Alvo: @${sender_ou_n.split("@")[0]}\n📊 Resultado: *${randomGostosa}%* gostosa 😏`, 
            mentions: [sender_ou_n]
        }, { quoted: selojp });
    }, 4000);
}
break;

case 'morte':
case 'death': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    if (args.length == 0) return await reply(`⚠️ Está faltando o nome da pessoa! Exemplo: ${prefix + command} Victor`);
    
    try {
        const predea = await axios.get(`https://api.agify.io/?name=${encodeURIComponent(args[0])}`);
        
        if (predea.data.age == null) {
            return await reply(`❌ Você inseriu um nome inválido. Certifique-se de usar um nome simples, sem acentos, números ou emojis.`);
        }
        
        const deathText = `🔮 *Previsão do Destino*\n\n👤 Nome analisado: *${predea.data.name}*\n@${sender.split('@')[0]} — Pessoas com este nome tendem a viver até os *${predea.data.age}* anos de idade.`;
        
        shizuku.sendMessage(from, {
            video: { url: deathcmd }, 
            gifPlayback: true, 
            caption: deathText, 
            mentions: [sender]
        }, { quoted: selojp });
        
    } catch (error) {
        console.error("Erro na API Agify:", error);
        await reply("❌ Ocorreu um erro ao consultar o sistema de previsão. Tente novamente mais tarde.");
    }
}
break;				
				
case 'matar':
case 'mata': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    if (!menc_os2 || menc_jid2[1]) return reply('⚠️ Marque o alvo que você quer eliminar marcando a mensagem ou usando o @.');
    
    shizuku.sendMessage(from, {
        video: { url: matarcmd }, 
        gifPlayback: true, 
        caption: `⚔️ Ocorreu um confronto! @${sender.split('@')[0]} acabou de derrotar @${menc_os2.split('@')[0]}! 💀`, 
        mentions: [menc_os2, sender]
    }, { quoted: selojp });
}
break; 

case 'beijo': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    if (!menc_os2 || menc_jid2[1]) return reply('⚠️ Marque a pessoa que você deseja beijar marcando a mensagem ou usando o @.');
    
    shizuku.sendMessage(from, {
        video: { url: beijocmd }, 
        gifPlayback: true, 
        caption: `❤️ @${sender.split('@')[0]} deu um beijo em @${menc_os2.split('@')[0]}! 🥰`, 
        mentions: [menc_os2, sender]
    }, { quoted: selojp });
}
break;

case 'abraco': 
case 'abracar': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    if (!menc_os2 || menc_jid2[1]) return reply('⚠️ Marque a pessoa que você deseja abraçar marcando a mensagem ou usando o @.');
    
    const abracoLinks = ["https://files.catbox.moe/ty52a2.mp4", "https://files.catbox.moe/rxuhxi.mp4"];
    const abracoc = abracoLinks[Math.floor(Math.random() * abracoLinks.length)];
    
    try {
        const linkVideo = await getBuffer(abracoc);
        shizuku.sendMessage(from, {
            video: linkVideo, 
            gifPlayback: true, 
            caption: `🤗 @${sender.split('@')[0]} deu um abraço apertado em @${menc_os2.split('@')[0]}! ❤️`, 
            mentions: [menc_os2, sender]
        }, { quoted: selojp });
    } catch (e) {
        console.error("Erro ao carregar vídeo do abraço:", e);
        reply("❌ Não foi possível carregar a animação do abraço.");
    }
}
break;

case 'vab': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    psycatgames().then(async (array) => {
        if (typeof reagir === 'function') {
            setTimeout(() => { reagir(from, "🤔"); }, 100);
        }
        
        const escolha = array[Math.floor(Math.random() * array.length)];
        const { questions } = escolha;
        const { pergunta1, pergunta2 } = questions[Math.floor(Math.random() * questions.length)];

        sendPoll(shizuku, from, "Você prefere...", [pergunta1, pergunta2]);
    }).catch((err) => {
        console.error("Erro no comando VAB:", err);
        reply("❌ Ocorreu um erro ao gerar o jogo 'Você Prefere'.");
    });
}
break;

case 'eununca': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    if (typeof reagir === 'function') {
        setTimeout(() => { reagir(from, "🙈"); }, 100);
    }
    
    try {
        const caminhoEuNunca = './armor/funcoes/eununca.json';
        if (!fs.existsSync(caminhoEuNunca)) {
            return await reply("❌ O arquivo de perguntas do 'Eu Nunca' não foi encontrado.");
        }
        
        const pergunta_ = JSON.parse(fs.readFileSync(caminhoEuNunca, 'utf-8'));
        if (!pergunta_ || pergunta_.length === 0) {
            return await reply("❌ Não há perguntas cadastradas no momento.");
        }
        
        const getRandomINever = pergunta_[Math.floor(Math.random() * pergunta_.length)];
        sendPoll(shizuku, from, getRandomINever, ["Eu nunca", "Eu já"]).catch(console.error);
    } catch (error) {
        console.error("Erro no comando eununca:", error);
        reply("❌ Ocorreu um erro ao carregar o jogo.");
    }
}
break;

case 'tapa': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    if (!menc_os2 || menc_jid2[1]) return reply('⚠️ Marque o alvo que você quer dar um tapa marcando a mensagem ou usando o @.');
    
    shizuku.sendMessage(from, {
        video: { url: tapacmd }, 
        gifPlayback: true, 
        caption: `💥 @${sender.split('@')[0]} deu um tapa em @${menc_os2.split('@')[0]}!`, 
        mentions: [menc_os2, sender]
    }, { quoted: selojp });
}
break;

case 'chute':
case 'chutar': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    if (!menc_os2 || menc_jid2[1]) return reply('⚠️ Marque o alvo que você quer chutar marcando a mensagem ou usando o @.');
    
    shizuku.sendMessage(from, {
        video: { url: chutecmd }, 
        gifPlayback: true, 
        caption: `👟 @${sender.split('@')[0]} acabou de dar um chute em @${menc_os2.split('@')[0]}! 😤`, 
        mentions: [menc_os2, sender]
    }, { quoted: selojp });
}
break; 

case 'dogolpe': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    if (!menc_os2 || menc_jid2[1]) return reply('⚠️ Marque o @ do usuário ou a mensagem dele.');
    
    const randomGolpe = Math.floor(Math.random() * 100);
    shizuku.sendMessage(from, {
        text: `🚨 *Radar de Golpistas* 🚨\n\n👤 Alvo localizado: *@${menc_os2.split("@")[0]}*\n📊 Porcentagem de golpe: *${randomGolpe}%*\n\n⚠️ *Aviso:* Cuidado, essa pessoa costuma iludir corações e ferir sentimentos...`, 
        mentions: [menc_os2]
    }, { quoted: selojp });
}
break;

case 'shipo': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    if (!menc_os2) return reply('⚠️ Marque uma pessoa do grupo para encontrar o par ideal dela.');
    
    const membrosFiltro = groupMembers.filter(m => m.id !== menc_os2);
    const parceiroSorteado = membrosFiltro.length > 0 
        ? membrosFiltro[Math.floor(Math.random() * membrosFiltro.length)].id 
        : groupMembers[Math.floor(Math.random() * groupMembers.length)].id;
        
    const randomShip = Math.floor(Math.random() * 100);
    
    const textoShip = `💘 *Cupida em Ação!* 💘\n\nHmm, senti uma química fortíssima no ar entre esses dois...\n\n1️⃣ • @${parceiroSorteado.split('@')[0]}\n2️⃣ • @${menc_os2.split("@")[0]}\n\n📊 Chance de dar certo: *${randomShip}%* 🥰`;
    
    if (typeof mention === 'function') {
        mention(textoShip);
    } else {
        shizuku.sendMessage(from, { text: textoShip, mentions: [parceiroSorteado, menc_os2] }, { quoted: selojp });
    }
}
break;

case 'casal': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    if (!groupMembers || groupMembers.length < 2) return reply("❌ O grupo não tem membros suficientes para formar um casal.");
    
    const membro1 = groupMembers[Math.floor(Math.random() * groupMembers.length)].phoneNumber;
    let membro2 = groupMembers[Math.floor(Math.random() * groupMembers.length)].phoneNumber;
    
    if (membro1 === membro2 && groupMembers.length > 1) {
        membro2 = groupMembers.find(m => m.phoneNumber !== membro1).phoneNumber;
    }
    
    const randomCasal = Math.floor(Math.random() * 100);
    const textoCasal = `👀 *Casal no Sigilo?* 👀\n\nEstou desconfiando que esses dois membros estão namorando escondido... Vou soltar meu palpite!\n\nAos dois indivíduos marcados, isso é verdade?\n\n1️⃣ — @${membro1.split('@')[0]}\n2️⃣ — @${membro2.split('@')[0]}\n\n📊 Minha porcentagem de certeza: *${randomCasal}%* 🫣`;
    
    if (typeof mention === 'function') {
        mention(textoCasal);
    } else {
        shizuku.sendMessage(from, { text: textoCasal, mentions: [membro1, membro2] }, { quoted: selojp });
    }
}
break;

case 'rankgay': 
case 'rankgays': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(`Este comando só pode ser utilizado com o modo brincadeira ativado. Use ${prefix}modobrincadeira 1 para ativar.`);
    
    let ABC = `*🤖 RANK DOS 5 MAIS GAYS DO GRUPO [ ${groupName} ] 🏳️‍🌈*\n\n`;
    let sorteados = [];
    
    for (let i = 0; i < 5; i++) {
        let membrosFiltrados = somembros.filter(m => !sorteados.includes(m));
        if (membrosFiltrados.length === 0) break;
        let escolhido = membrosFiltrados[Math.floor(Math.random() * membrosFiltrados.length)];
        sorteados.push(escolhido);
        
        ABC += `${i + 1}º - ${Math.floor(Math.random() * 100)}% @${escolhido.split("@")[0]}\n\n`;
    }
    
    mencionarIMG(ABC, rnkgay);
}
break;

case 'rankgado': 
case 'rankgados': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(`Este comando só pode ser utilizado com o modo brincadeira ativado. Use ${prefix}modobrincadeira 1 para ativar.`);
    
    let ABC = `*🤠 RANK DOS 5 MAIS GADOS DO GRUPO 🐂*\n\n`;
    let sorteados = [];
    
    for (let i = 0; i < 5; i++) {
        let membrosFiltrados = somembros.filter(m => !sorteados.includes(m));
        if (membrosFiltrados.length === 0) break;
        let escolhido = membrosFiltrados[Math.floor(Math.random() * membrosFiltrados.length)];
        sorteados.push(escolhido);
        
        ABC += `${i + 1}º - ${Math.floor(Math.random() * 100)}% @${escolhido.split("@")[0]}\n\n`;
    }
    
    mencionarIMG(ABC, rnkgado);
}
break;

case 'rankcorno': 
case 'rankcornos': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(`Este comando só pode ser utilizado com o modo brincadeira ativado. Use ${prefix}modobrincadeira 1 para ativar.`);
    
    let ABC = `*🤘 RANK DOS 5 MAIS CORNOS DO GRUPO 🐂*\n\n`;
    let sorteados = [];
    
    for (let i = 0; i < 5; i++) {
        let membrosFiltrados = somembros.filter(m => !sorteados.includes(m));
        if (membrosFiltrados.length === 0) break;
        let escolhido = membrosFiltrados[Math.floor(Math.random() * membrosFiltrados.length)];
        sorteados.push(escolhido);
        
        ABC += `${i + 1}º - ${Math.floor(Math.random() * 100)}% @${escolhido.split("@")[0]}\n\n`;
    }
    
    mencionarIMG(ABC, rnkcorno);
}
break;

case 'surubao': 
case 'suruba': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(`Este comando só pode ser utilizado com o modo brincadeira ativado. Use ${prefix}modobrincadeira 1 para ativar.`);
    
    const tempo = 2 * 60 * 1000;
    const agora = Date.now();
    
    if (cooldownSuruba.has(sender)) {
        const expirado = cooldownSuruba.get(sender) + tempo;
        if (agora < expirado) {
            const restante = Math.ceil((expirado - agora) / 1000);
            return reply(`⏳ Aguarde ${restante} segundos para usar este comando novamente.`);
        }
    }
    
    const quantidadeSafados = args.join(" ");
    if (!quantidadeSafados) return reply(`⚠️ Informe a quantidade de pessoas que você deseja convidar.\n\nExemplo: ${prefix + command} 30`);
    if (!/^\d+$/.test(quantidadeSafados)) return reply(`❌ Informe apenas números válidos.\nExemplo: ${prefix + command} 30`);
    
    const quantidade = Number(quantidadeSafados);
    if (quantidade > 100) return reply(`❌ O máximo permitido é 100 pessoas.`);
    if (quantidade > somembros.length) return reply(`❌ O grupo não possui tantos membros assim.`);
    
    cooldownSuruba.set(sender, agora);
    
    const emojiskk = ["🥵", "😈", "🔥", "😏"];
    const emojis = emojiskk[Math.floor(Math.random() * emojiskk.length)];  
    
    const frasekk = [
        `está organizando uma festa daquelas e chamou um total de ${quantidade} pessoas! Topam?`,
        `quer que *${quantidade}* pessoas participem de uma bagunça generalizada no quarto escuro...`,
        `está intimando ${quantidade} pessoas para uma brincadeira sem censura hoje à noite!`
    ];
    
    const context = frasekk[Math.floor(Math.random() * frasekk.length)];  
    let ABC = `${emojis} @${sender.split('@')[0]} ${context}\n\n*📋 Lista de convidados:*\n`;
    
    let convidados = [];
    for (let i = 0; i < quantidade; i++) {
        let membrosFiltrados = somembros.filter(m => !convidados.includes(m) && m !== sender);
        if (membrosFiltrados.length === 0) break;
        let escolhido = membrosFiltrados[Math.floor(Math.random() * membrosFiltrados.length)];
        convidados.push(escolhido);
        
        ABC += `• @${escolhido.split("@")[0]}\n`;
    }
    
    mencionarIMG(ABC, suruba);
}
break;

case 'rankgostosos': 
case 'rankgostoso': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(`Este comando só pode ser utilizado com o modo brincadeira ativado. Use ${prefix}modobrincadeira 1 para ativar.`);
    
    let ABC = `*😏 RANK DOS 5 MAIS GOSTOSOS DO GRUPO 🔥*\n\n`;
    let sorteados = [];
    
    for (let i = 0; i < 5; i++) {
        let membrosFiltrados = somembros.filter(m => !sorteados.includes(m));
        if (membrosFiltrados.length === 0) break;
        let escolhido = membrosFiltrados[Math.floor(Math.random() * membrosFiltrados.length)];
        sorteados.push(escolhido);
        
        ABC += `${i + 1}º - ${Math.floor(Math.random() * 100)}% @${escolhido.split("@")[0]}\n\n`;
    }
    
    mencionarIMG(ABC, rnkgostoso);
}
break;

case 'rankgostasas': 
case 'rankgostasa': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(`Este comando só pode ser utilizado com o modo brincadeira ativado. Use ${prefix}modobrincadeira 1 para ativar.`);
    
    let ABC = `*✨ RANK DAS 5 MAIS GOSTOSAS DO GRUPO 🔥*\n\n`;
    let sorteados = [];
    
    for (let i = 0; i < 5; i++) {
        let membrosFiltrados = somembros.filter(m => !sorteados.includes(m));
        if (membrosFiltrados.length === 0) break;
        let escolhido = membrosFiltrados[Math.floor(Math.random() * membrosFiltrados.length)];
        sorteados.push(escolhido);
        
        ABC += `${i + 1}º - ${Math.floor(Math.random() * 100)}% @${escolhido.split("@")[0]} 😏\n\n`;
    }
    
    mencionarIMG(ABC, rnkgostosa);
}
break;

case 'ranknazista': 
case 'ranknazistas': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(`Este comando só pode ser utilizado com o modo brincadeira ativado. Use ${prefix}modobrincadeira 1 para ativar.`);
    
    let ABC = `*🕵️‍♂️ RANK DOS 5 COM A MAIOR FICHA DE NAZISTA 卐*\n\n`;
    let sorteados = [];
    
    for (let i = 0; i < 5; i++) {
        let membrosFiltrados = somembros.filter(m => !sorteados.includes(m));
        if (membrosFiltrados.length === 0) break;
        let escolhido = membrosFiltrados[Math.floor(Math.random() * membrosFiltrados.length)];
        sorteados.push(escolhido);
        
        ABC += `${i + 1}º - ${Math.floor(Math.random() * 100)}% @${escolhido.split("@")[0]}\n\n`;
    }
    
    mencionarIMG(ABC, rnknazista);
}
break;

case 'rankotaku': 
case 'rankotakus': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(`Este comando só pode ser utilizado com o modo brincadeira ativado. Use ${prefix}modobrincadeira 1 para ativar.`);
    
    let ABC = `*🎌 RANK DOS 5 MAIS OTAKUS DO GRUPO 🏯*\n\n`;
    let sorteados = [];
    
    for (let i = 0; i < 5; i++) {
        let membrosFiltrados = somembros.filter(m => !sorteados.includes(m));
        if (membrosFiltrados.length === 0) break;
        let escolhido = membrosFiltrados[Math.floor(Math.random() * membrosFiltrados.length)];
        sorteados.push(escolhido);
        
        ABC += `${i + 1}º - ${Math.floor(Math.random() * 100)}% otaku @${escolhido.split("@")[0]}\n\n`;
    }
    mencionarIMG(ABC, rnkotaku);
}
break;

case 'rankpau': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(`Este comando só pode ser utilizado com o modo brincadeira ativado. Use ${prefix}modobrincadeira 1 para ativar.`);
    
    let ABC = `*📏 RANK DO TAMANHO DO DOCUMENTO DO GRUPO 📏*\n\n`;
    const TMPAU = [
        "Invisível a olho nu, precisa de microscópio 🔬", 
        "Pequenininho, chega a ser até fofo 🧸", 
        "Menor que o dedo mindinho, decepção pura 😑", 
        "Até que dá pro gasto, tá exatamente na média 😐", 
        "Grandinho e imponente, parabéns 😮", 
        "Grande de verdade, assusta quem olha 💥", 
        "Gigantesco, parece um braço mecânico 🦾", 
        "Enorme, ultrapassou todos os limites conhecidos 😲", 
        "Gigante demais, como você consegue andar na rua assim? 🤔", 
        "Parece uma vara de pegar manga, nasceu metade animal 🐴"
    ];
    
    let sorteados = [];
    
    for (let i = 0; i < 5; i++) {
        let membrosFiltrados = somembros.filter(m => !sorteados.includes(m));
        if (membrosFiltrados.length === 0) break;
        let escolhido = membrosFiltrados[Math.floor(Math.random() * membrosFiltrados.length)];
        sorteados.push(escolhido);
        
        let fraseAleatoria = TMPAU[Math.floor(Math.random() * TMPAU.length)];
        ABC += `${i + 1}º - ${fraseAleatoria}\n↳ Alvo: @${escolhido.split("@")[0]}\n\n`;
    }
    mencionarIMG(ABC, rnkpau);
}
break;

case 'mencionar': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    if (!q) return reply(`⚠️ Você usou o comando de forma incorreta.\nUso correto: ${prefix}mencionar [texto]`);
    
    if (!groupMembers || groupMembers.length === 0) return reply("❌ Não foi possível carregar os membros do grupo.");
    
    const indiceAleatorio = Math.floor(Math.random() * groupMembers.length);
    const membroEscolhido = groupMembers[indiceAleatorio].id;
    
    const teks = `📢 *Sorteio do Grupo* 📢\n\nEncontrei o alvo perfeito para: *${q}*!\n👉 @${membroEscolhido.split('@')[0]}`;
    
    if (typeof mentions === 'function') {
        await mentions(teks, [membroEscolhido], true);
    } else {
        await shizuku.sendMessage(from, { text: teks, mentions: [membroEscolhido] }, { quoted: selojp });
    }
}
break;

case 'rankpobre':
case 'rankpobres': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(`Este comando só pode ser utilizado com o modo brincadeira ativado. Use ${prefix}modobrincadeira 1 para ativar.`);
    
    let ABC = `*🥶 RANK DOS 5 MAIS POBRES DO GRUPO [ ${groupName} ] 🪙*\n\n`;
    let sorteados = [];
    
    for (let i = 0; i < 5; i++) {
        let membrosFiltrados = somembros.filter(m => !sorteados.includes(m));
        if (membrosFiltrados.length === 0) break;
        let escolhido = membrosFiltrados[Math.floor(Math.random() * membrosFiltrados.length)];
        sorteados.push(escolhido);
        
        ABC += `${i + 1}º - ${Math.floor(Math.random() * 10)} moedas amassadas - @${escolhido.split("@")[0]}\n\n`;
    }
    mencionarIMG(ABC, "https://files.catbox.moe/2dljwu.jpg");
}
break;

case 'ranklindo':
case 'ranklindos': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(`Este comando só pode ser utilizado com o modo brincadeira ativado. Use ${prefix}modobrincadeira 1 para ativar.`);
    
    let ABC = `*✨ RANK DOS 5 MAIS LINDOS DO GRUPO [ ${groupName} ] 💅*\n\n`;
    let sorteados = [];
    
    for (let i = 0; i < 5; i++) {
        let membrosFiltrados = somembros.filter(m => !sorteados.includes(m));
        if (membrosFiltrados.length === 0) break;
        let escolhido = membrosFiltrados[Math.floor(Math.random() * membrosFiltrados.length)];
        sorteados.push(escolhido);
        
        ABC += `${i + 1}º - ${Math.floor(Math.random() * 100)}% de beleza pura - @${escolhido.split("@")[0]}\n\n`;
    }
    mencionarIMG(ABC, "https://files.catbox.moe/vl36mr.jpg");
}
break;

case 'piadas':
case 'piada': {
    const piadasLista = [
        'O que é um pontinho brilhando no jardim? Uma formiga de aparelho!',
        'Como o Batman faz para abrir a bat-caverna? Ele bat-palma.',
        'Qual é a diferença entre a bicicleta e o vaso sanitário? A bicicleta você senta para correr, o vaso sanitário você corre para sentar!',
        'Por que o livro de matemática ficou triste? Porque ele tinha muitos problemas.',
        'O que o Sol disse para a Lua? Você é meio apagada, mas eu gosto do seu brilho!',
        'Por que os pássaros voam para o sul no inverno? Porque caminhar seria muito longe.'
    ];
    const piadaSorteada = piadasLista[Math.floor(Math.random() * piadasLista.length)];
    reply(`🤣 *Piada do Dia:* \n\n"${piadaSorteada}"`);
}
break;

case 'frasedeamor':
case 'frasesdeamor': {
    const amorLista = [
        'Me perguntaram qual era o meu lugar favorito e eu respondi: Você!',
        'Amar alguém profundamente te dá forças. Ser amado profundamente por alguém te dá coragem.',
        'Eu orei por você sem te conhecer. E agora tenho você aqui, muito mais do que eu pedi.',
        'Acordar com você no meu pensamento é a forma mais doce de começar meu dia.',
        'Não quero a ilusão de um amor perfeito, quero a felicidade de um amor verdadeiro.',
        'O verdadeiro amor nunca se desgasta. Quanto mais se dá, mais se tem.',
        'Meu bem, eu que nunca me lembro de nada não me esqueço de você.',
        'Não procure alguém que te complete. Complete a si mesmo e procure alguém que te transborde.'
    ];
    const amorSorteado = amorLista[Math.floor(Math.random() * amorLista.length)];
    reply(`❤️ *Frase de Amor:* \n\n"${amorSorteado}"`);
}
break;					

case 'cantadas':
case 'cantada': {
    const cantadasLista = [
        'Existe um vazio no meu coração que tem as suas medidas. Quer entrar?',
        'Não existe amor à primeira vista. O que existe é a pessoa certa, no momento certo. Você por acaso estava lá?',
        'O seu sorriso é o vírus de felicidade que infectou o meu coração.',
        'Se o mar fosse um sentimento... seria tão grande quanto o carinho que sinto por você.',
        'Você sabe qual é o motivo do meu sorriso todos os dias? A primeira palavra dessa frase.',
        'O Ministério da Saúde adverte: passar o dia sem falar com você me dá saudades.',
        'Amar você é uma loucura? Então aceito viver sem cura para o resto da vida.'
    ];
    const cantadaSorteada = cantadasLista[Math.floor(Math.random() * cantadasLista.length)];
    reply(`😏 *Cantada:* \n\n"${cantadaSorteada}"`);
}
break;				

case 'ansiedade':
case 'ansiedades': {
    const reflexaoLista = [
        'Um passo de cada vez. O futuro se constrói no presente, aprenda a valorizar o seu agora.',
        'Nem tudo está sob o seu controle, e tudo bem. Respire fundo e confie no processo da vida.',
        'A ansiedade tenta acelerar o tempo, mas a calmaria nos ensina que tudo acontece no momento certo.',
        'Não sofra por antecipação por coisas que podem nunca acontecer. Guarde suas energias para o que é real.',
        'A ansiedade é apenas uma nuvem passageira; por trás dela, o seu céu continua brilhando.',
        'Aprender a esperar o próprio tempo é o maior presente de paz que podemos nos dar.',
        'Respire. Quando o mundo parecer barulhento demais, encontre o silêncio e o equilíbrio dentro de você.'
    ];
    const reflexaoSorteada = reflexaoLista[Math.floor(Math.random() * reflexaoLista.length)];
    reply(`🧘‍♂️ *Momento Reflexão & Calmaria:* \n\n"${reflexaoSorteada}"`);
}
break;				

case 'indiretas':
case 'indireta': {
    const indiretasLista = [
        'Por que eu ainda fico lembrando de tudo aquilo que você já esqueceu?',
        'Não olho para o passado, pois tudo de bom que tive nele está no meu presente. O que ficou para trás não servia mais.',
        'Algumas pessoas merecem um grande aplauso pelo teatro e drama que fazem no dia a dia! 👏',
        'Não lhe compete julgar ou opinar sobre uma realidade que você não vive.',
        'Às vezes, sem querer, a gente esbarra em alguém que realmente vale a pena manter por perto.',
        'Não sei porque ainda me explico. Quem me conhece sabe quem sou; quem não conhece, apenas imagina.'
    ];
    const indiretaSorteada = indiretasLista[Math.floor(Math.random() * indiretasLista.length)];
    reply(`🤫 *Indireta:* \n\n"${indiretaSorteada}"`);
}
break;

case 'louca':  
case 'louça': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn && !SoDono) return reply(enviar.msg.modobn);
    
    if (typeof reagir === 'function') {
        reagir(from, `🧼`);
    }
    
    if (!menc_os2 || menc_jid2[1]) {
        return reply('⚠️ Está faltando alguma coisa aí, não acha amiguinho(a)? Marque o alvo ou a mensagem de quem vai lavar a louça!');
    }
    
    shizuku.sendMessage(from, {
        video: { url: `https://files.catbox.moe/0zvxb9.mp4` }, 
        gifPlayback: true, 
        caption: `🧼 *Ordem na cozinha!* 🧼\n\nO(a) *${pushname}* cansou da bagunça e mandou o(a) @${menc_os2.split('@')[0]} direto para a pia lavar a louça! 🤭`, 
        mentions: [menc_os2]
    }, { quoted: selojp });
}
break;

case 'socar':
case 'soco':
case 'bater': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    if (!menc_os2 || menc_jid2[1]) {
        return reply('⚠️ Marque o alvo que você quer dar um soco marcando a mensagem ou usando o @.');
    }
    
    const txtkk = [
        `🥊 Ei @${menc_os2.split('@')[0]}, @${sender.split('@')[0]} te deu um golpe fatal de mestre!`,
        `🥊 Atenção @${menc_os2.split('@')[0]}, @${sender.split('@')[0]} acabou de te nocautear na luta!`,
        `🥊 Olá @${menc_os2.split('@')[0]}, você foi atingido em cheio por um super golpe de @${sender.split('@')[0]}!`,
        `🥊 Ei @${menc_os2.split('@')[0]}, @${sender.split('@')[0]} te derrubou com um soco cinematográfico!`,
        `🥊 Aviso @${menc_os2.split('@')[0]}, @${sender.split('@')[0]} acabou de te acertar um belo soco!`,
        `🥊 Atenção @${menc_os2.split('@')[0]}, @${sender.split('@')[0]} te deu um golpe ultra forte!`,
        `🥊 Olá @${menc_os2.split('@')[0]}, você levou um soco de raspão do @${sender.split('@')[0]}!`,
        `🥊 Aviso @${menc_os2.split('@')[0]}, @${sender.split('@')[0]} acabou de te desafiar e te derrubar!`,
        `🥊 Olá @${menc_os2.split('@')[0]}, @${sender.split('@')[0]} te acertou com tudo no meio do round!`,
        `🥊 Oi @${menc_os2.split('@')[0]}, você levou um soco super potente de @${sender.split('@')[0]}!`,
        `🥊 Ei @${menc_os2.split('@')[0]}, @${sender.split('@')[0]} te deu um soco devastador estilo anime!`,
        `🥊 Olá @${menc_os2.split('@')[0]}, @${sender.split('@')[0]} acabou de te desestabilizar com um soco!`,
        `🥊 Ei @${menc_os2.split('@')[0]}, @${sender.split('@')[0]} te derrubou com um golpe super poderoso!`,
        `🥊 Olá @${menc_os2.split('@')[0]}, você foi atingido por um soco veloz de @${sender.split('@')[0]}!`,
        `🥊 Atenção @${menc_os2.split('@')[0]}, @${sender.split('@')[0]} te nocauteou com um soco técnico!`,
        `🥊 Aviso @${menc_os2.split('@')[0]}, @${sender.split('@')[0]} te acertou com força total!`,
        `🥊 Ei @${menc_os2.split('@')[0]}, você levou um soco fenomenal e estratégico de @${sender.split('@')[0]}!`,
        `🥊 Oi @${menc_os2.split('@')[0]}, @${sender.split('@')[0]} te acertou um soco impressionante!`
    ];
    
    const susp = txtkk[Math.floor(Math.random() * txtkk.length)];
    
    const lss = [
        "https://telegra.ph/file/f737009edab409fe7be43.mp4", 
        "https://telegra.ph/file/608f10571c79cd270684b.mp4", 
        "https://telegra.ph/file/b11cdf32f93712fcd4d78.mp4", 
        "https://telegra.ph/file/72bb4bc30d2d75e2b0b77.mp4", 
        "https://telegra.ph/file/a1f4856876d4cb47fc215.mp4", 
        "https://telegra.ph/file/866708c964801c6af880a.mp4", 
        "https://telegra.ph/file/c917c16f143f4716488ca.mp4", 
        "https://telegra.ph/file/663990556cd3b872b670e.mp4", 
        "https://telegra.ph/file/638e353bcbd343581aa5f.mp4", 
        "https://telegra.ph/file/6770b65c4b7a43840735a.mp4", 
        "https://telegra.ph/file/7172540125b1b5754f12f.mp4", 
        "https://telegra.ph/file/13468fc5ca601483a1c38.mp4", 
        "https://telegra.ph/file/3463d0e205b5d5dc7a075.mp4", 
        "https://telegra.ph/file/4b135cfda8a32f3c6d83c.mp4", 
        "https://telegra.ph/file/6577e0445dd4b3ac15465.mp4", 
        "https://telegra.ph/file/88891992448b401b6763a.mp4"
    ];
    
    const randomp = lss[Math.floor(Math.random() * lss.length)];
    
    try {
        const video = await getBuffer(randomp);
        await shizuku.sendMessage(from, { 
            video, 
            gifPlayback: true, 
            caption: susp, 
            mentions: [menc_os2, sender] 
        }, { quoted: selojp });
    } catch (err) {
        console.error("Erro ao carregar mídia do soco:", err);
        reply("❌ Não foi possível carregar o vídeo da animação.");
    }
}
break;

case 'morder': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    if (!menc_os2 || menc_jid2[1]) {
        return reply('⚠️ Marque o alvo que você quer dar uma mordida marcando a mensagem ou usando o @.');
    }
    
    shizuku.sendMessage(from, {
        video: { url: `https://telegra.ph/file/75e4c0273be625a2363ce.mp4` }, 
        gifPlayback: true, 
        caption: `🦷 👀 @${sender.split('@')[0]} acabou de dar uma mordida de surpresa no(a) *@${menc_os2.split('@')[0]}*!`, 
        mentions: [menc_os2, sender]
    }, { quoted: selojp });
}
break;


case 'sentar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que vocÃª quer dar uma sentadinha, a mensagem ou o @.')
await shizuku.sendMessage(from, {video: {url:`https://telegra.ph/file/d695e05443043ff9a254d.mp4`}, gifPlayback: true, caption: `VocÃª acabou de dar uma sentadinha no(a) *@${menc_os2.split('@')[0]}*`, mentions: [menc_os2]}, {quoted: selo})
break

case 'tirarft':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que vocÃª quer tirar a foto, a mensagem ou o @.')
await shizuku.sendMessage(from, {video: {url:`https://telegra.ph/file/7193308e3949803132bad.mp4`}, gifPlayback: true, caption: `VocÃª acabou de tirar uma foto do(a) *@${menc_os2.split('@')[0]}*`, mentions: [menc_os2]}, {quoted: selo})
break

case 'cagar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
if(!menc_os2 || menc_jid2[1]) return reply('Marque a pessoa que vocÃª quer botar pra cagar, a mensagem ou o @');
await shizuku.sendMessage(from, {video: {url: `https://files.catbox.moe/662vzj.mp4`}, gifPlayback: true, caption: `CARALHOOOOO *@${menc_os2.split('@')[0]}* FAMOSO CAGA TRONCO KAKAKAKAK??? ðŸ¤¯ðŸ˜³` , mentions: [menc_os2]}, {quoted: selo})
break

case 'cu':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
await shizuku.sendMessage(from, {text:`Pesquisando quantos cm de profundidade tem seu bozo @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await shizuku.sendMessage(from, {image: {url: `https://files.catbox.moe/x8k6en.jpg`}, caption: `Quantos cm o(a) *@${sender_ou_n.split("@")[0]}* 
tem no bozo ?\nâ€¢ A chance Ã© de *${random}cm* ðŸ˜³`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break 

case 'carinho': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    if (!menc_os2 || menc_jid2[1]) {
        return reply('⚠️ Marque o alvo que você quer dar um carinho marcando a mensagem ou usando o @.');
    }
    
    shizuku.sendMessage(from, {
        video: { url: `https://telegra.ph/file/2b6b4f4e38214bd6164ce.mp4` }, 
        gifPlayback: true, 
        caption: `🥰 @${sender.split('@')[0]} acabou de dar um carinho afetuoso no(a) *@${menc_os2.split('@')[0]}*!`, 
        mentions: [menc_os2, sender]
    }, { quoted: selojp });
}
break;

case 'lindo': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    await shizuku.sendMessage(from, {
        text: `⏳ Pesquisando a ficha de lindo: @${sender_ou_n.split("@")[0]}, aguarde...`, 
        mentions: [sender_ou_n]
    }, { quoted: selojp });
    
    setTimeout(async () => {
        const randomLindo = Math.floor(Math.random() * 100);
        await shizuku.sendMessage(from, {
            image: { url: `https://files.catbox.moe/2r420g.jpg` }, 
            caption: `✨ *Análise de Beleza* ✨\n\n🎯 Alvo: @${sender_ou_n.split("@")[0]}\n📊 Resultado: Você é *${randomLindo}%* lindo! 👑`, 
            mentions: [sender_ou_n]
        }, { quoted: selojp });
    }, 7000);
}
break; 

case 'linda': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    await shizuku.sendMessage(from, {
        text: `⏳ Pesquisando a ficha de linda: @${sender_ou_n.split("@")[0]}, aguarde...`, 
        mentions: [sender_ou_n]
    }, { quoted: selojp });
    
    setTimeout(async () => {
        const randomLinda = Math.floor(Math.random() * 100);
        await shizuku.sendMessage(from, {
            image: { url: `https://files.catbox.moe/yb6hpe.jpg` }, 
            caption: `✨ *Análise de Beleza* ✨\n\n🎯 Alvo: @${sender_ou_n.split("@")[0]}\n📊 Resultado: Você é *${randomLinda}%* linda! 🌸`, 
            mentions: [sender_ou_n]
        }, { quoted: selojp });
    }, 7000);
}
break;

case 'rankbct':
 case 'rankbuceta': 
case 'rankbucetudas':
case 'rankxrc':
if (!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
 var porcentagem = `${Math.floor(Math.random() * 105)}`;
 membr = [];
 
 const buceta1 = groupMembers;
 const buceta2 = groupMembers;
 const buceta3 = groupMembers;
 const buceta4 = groupMembers;
 const buceta5 = groupMembers;

 var porcent = porcentagem[Math.floor(Math.random() * porcentagem.length)];
 var porcent2 = porcentagem[Math.floor(Math.random() * porcentagem.length)];
 var porcent3 = porcentagem[Math.floor(Math.random() * porcentagem.length)];
 var porcent4 = porcentagem[Math.floor(Math.random() * porcentagem.length)];
 var porcent5 = porcentagem[Math.floor(Math.random() * porcentagem.length)];

 const bucetas1 = buceta1[Math.floor(Math.random() * buceta1.length)];
 const bucetas2 = buceta2[Math.floor(Math.random() * buceta2.length)];
 const bucetas3 = buceta3[Math.floor(Math.random() * buceta3.length)];
 const bucetas4 = buceta4[Math.floor(Math.random() * buceta4.length)];
 const bucetas5 = buceta5[Math.floor(Math.random() * buceta5.length)];

 const TMPBCT = [
 "Buceta rosinha, parece que menstrua danone! ??",
 "Buceta mÃ³ preta, parece o sufaco das minhas primas. ðŸ¤",
 "MÃ³ bucetÃ£o, parece da Elisa Shances. ðŸ˜ˆ",
 "Bct lisinha, parece eu sem dinheiro. ðŸ¥²",
 "Deliciosa, porÃ©m parece a mata atlÃ¢ntica. ðŸŒ¼",
 "Deliciosa e macia. ðŸ¥°",
 "Pior que o correio, sÃ³ pacote. ðŸ˜",
 "Provoca atÃ© nos sonhos. ðŸ¤¤",
 "Sonho de qualquer homem. ðŸ˜œ",
 "Quem Ã© Mia Khalifa perto de vocÃª?. ðŸ˜‰",
 "Se essa Ã© a porta do paraÃ­so, eu queria ser a chave.ðŸ˜",
 ];
 rankzinbucetaimg = "https://telegra.ph/file/ca46df2bb2695fdb305c6.jpg"
 rankzinbuceta = `*_Essas sÃ£o as mais bucetudas ðŸ¤¤ do grupo:_*
*â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€*
*â”‚* ðŸ˜ˆ @${bucetas1.phoneNumber.split('@')[0]}
*â”‚âž¥ ${TMPBCT[Math.floor(Math.random() * TMPBCT.length)]}*
*â”‚* ðŸ˜ˆ @${bucetas2.phoneNumber.split('@')[0]}
*â”‚âž¥ ${TMPBCT[Math.floor(Math.random() * TMPBCT.length)]}*
*â”‚* ðŸ˜ˆ @${bucetas3.phoneNumber.split('@')[0]}
*â”‚âž¥ ${TMPBCT[Math.floor(Math.random() * TMPBCT.length)]}*
*â”‚* ðŸ˜ˆ @${bucetas4.phoneNumber.split('@')[0]}
*â”‚âž¥ ${TMPBCT[Math.floor(Math.random() * TMPBCT.length)]}*
*â”‚* ðŸ˜ˆ @${bucetas5.phoneNumber.split('@')[0]}
*â”‚âž¥ ${TMPBCT[Math.floor(Math.random() * TMPBCT.length)]}*
*â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€*`;
 
 membr.push(bucetas1.jid);
 membr.push(bucetas2.jid);
 membr.push(bucetas3.jid);
 membr.push(bucetas4.jid);
 membr.push(bucetas5.jid);
 
 mencionarIMG(rankzinbuceta, rankzinbucetaimg);
 break
 
case 'fiel': {
    if (!isModobn) return reply(enviar.msg.modobn);
    if (!isGroup) return reply(enviar.msg.grupo);
    
    let blamention_id = sender;
    
    if (budy.includes("@") && args.length > 0) {
        blamention_id = args.join(" ").replace("@", "").trim() + "@s.whatsapp.net";
    }
    
    const fielPorcentagem = Math.floor(Math.random() * 100);
    
    reply(`⏳ @${blamention_id.split("@")[0]}, guarde um momento... Confiscando os dados de sua ficha de fidelidade...`);
    
    if (typeof delay === 'function') {
        await delay(7000);
    } else {
        await new Promise(resolve => setTimeout(resolve, 7000));
    }
    
    reply(`🔮 *Fidelidade Testada* 🔮\n\n🎯 Usuário: @${blamention_id.split("@")[0]}\n📊 Resultado: Você é *${fielPorcentagem}%* fiel.`);
}
break;

case 'rankhetero': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    if (!groupMembers || groupMembers.length < 5) {
        return reply("❌ O grupo não possui membros suficientes para preencher o rank.");
    }
    
    let membr = [];
    let sorteados = [];
    
    while (sorteados.length < 5) {
        let aleatorio = groupMembers[Math.floor(Math.random() * groupMembers.length)];
        if (!sorteados.includes(aleatorio.id)) {
            sorteados.push(aleatorio.id);
            membr.push(aleatorio.id);
        }
    }
    
    const p1 = Math.floor(Math.random() * 100);
    const p2 = Math.floor(Math.random() * 100);
    const p3 = Math.floor(Math.random() * 100);
    const p4 = Math.floor(Math.random() * 100);
    const p5 = Math.floor(Math.random() * 100);
    
    let rankzinhetero = `*💥 RANK DOS HÉTEROS DO GRUPO 💥*\n*🏡 Grupo:* ${groupName}\n\n`;
    rankzinhetero += `╭──────────────\n`;
    rankzinhetero += `│ ⚡ @${sorteados[0].split('@')[0]}\n│ ➔ *${p1}%* Hétero Comum\n│\n`;
    rankzinhetero += `│ ⚡ @${sorteados[1].split('@')[0]}\n│ ➔ *${p2}%* Hétero Mandrake\n│\n`;
    rankzinhetero += `│ ⚡ @${sorteados[2].split('@')[0]}\n│ ➔ *${p3}%* Hétero Curioso\n│\n`;
    rankzinhetero += `│ ⚡ @${sorteados[3].split('@')[0]}\n│ ➔ *${p4}%* Hétero Top\n│\n`;
    rankzinhetero += `│ ⚡ @${sorteados[4].split('@')[0]}\n│ ➔ *${p5}%* Hétero Cis\n`;
    rankzinhetero += `╰──────────────\n\n🤖 ${NomeDoBot || 'Sistema'}`;
    
    shizuku.sendMessage(from, { text: rankzinhetero, mentions: membr }, { quoted: selojp });
}
break;

case 'rank': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    if (!q) return reply('⚠️ Por favor, informe o tema do rank. Exemplo: *' + prefix + command + ' organizados*');
    
    try {
        if (!groupMembers || groupMembers.length < 5) {
            return reply("❌ O grupo não possui membros suficientes para preencher as 5 posições do rank.");
        }

        let ddr = [];
        let sorteados = [];
        let ret = `🏆 *Rank dos 5 que mais são "${q}" no grupo:* \n\n`;
        
        for (let i = 0; i < 5; i++) {
            let membrosFiltrados = groupMembers.filter(m => !sorteados.includes(m.id));
            if (membrosFiltrados.length === 0) break;
            
            let escolhido = membrosFiltrados[Math.floor(Math.random() * membrosFiltrados.length)];
            sorteados.push(escolhido.id);
            ddr.push(escolhido.id);
            
            ret += `${i + 1}º - @${escolhido.id.split('@')[0]}\n`;
        }
        
        let buttonMessage6 = {
            image: { url: "https://files.catbox.moe/3mg70b.jpg" },
            caption: ret.trim(),
            mentions: ddr
        };
        
        await shizuku.sendMessage(from, buttonMessage6, { quoted: selojp });
    } catch (e) {
        console.error("Erro no comando rank:", e);
        reply('❌ Ocorreu um erro ao gerar o rank. Tente novamente.');
    }
}
break;

case 'branca':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isModobn) return reply(enviar.msg.modobn)
reply(`@${sender_ou_n.split("@")[0]} estou Pesquisando a ficha de Macaca branca aguarde...`)
await sleep(3000)
image = await getBuffer("https://files.catbox.moe/dob7y8.jpg");
shizuku.sendMessage(from, {image, caption: ` *Resultado da Pesquisa*\n\n @${sender_ou_n.split("@")[0]} vocÃª Ã©\n\n *${Math.floor(Math.random() * 105)}%* Macaca branca! \n`, mentions: [sender_ou_n]}, {quoted: selojp})
break

case 'branco':
if (!isModobn) return reply(enviar.msg.modobn)
if (!isGroup) return reply(enviar.msg.grupo)
reply(`@${sender_ou_n.split("@")[0]} estou Pesquisando a ficha de macaco branco aguarde...`)
await sleep(3000)
image = await getBuffer("https://files.catbox.moe/1rj0dt.jpg");
shizuku.sendMessage(from, {image, caption: `*Resultado da Pesquisa*\n\n @${sender_ou_n.split("@")[0]} vocÃª Ã©: \n\n*${Math.floor(Math.random() * 105)}%* Macaco branco!\n`, mentions: [sender_ou_n]}, {quoted: selojp})
break	

case 'safada': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    await shizuku.sendMessage(from, {
        text: `⏳ Pesquisando a sua ficha de safada: @${sender_ou_n.split("@")[0]}, aguarde...`, 
        mentions: [sender_ou_n]
    }, { quoted: selojp });
    
    setTimeout(async () => {
        const randomSafada = Math.floor(Math.random() * 100);
        await shizuku.sendMessage(from, {
            image: { url: imgsafada }, 
            caption: `✨ *Análise de Perfil* ✨\n\n🎯 Alvo: @${sender_ou_n.split("@")[0]}\n📊 Resultado: Você tem *${randomSafada}%* de chance de ser uma pessoa safada! 😏`, 
            mentions: [sender_ou_n]
        }, { quoted: selojp });
    }, 2000);
}
break;

case 'safado': {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isModobn) return reply(enviar.msg.modobn);
    
    await shizuku.sendMessage(from, {
        text: `⏳ Pesquisando a sua ficha de safado: @${sender_ou_n.split("@")[0]}, aguarde...`, 
        mentions: [sender_ou_n]
    }, { quoted: selojp });
    
    setTimeout(async () => {
        const randomSafado = Math.floor(Math.random() * 100);
        await shizuku.sendMessage(from, {
            image: { url: imgsafado }, 
            caption: `✨ *Análise de Perfil* ✨\n\n🎯 Alvo: @${sender_ou_n.split("@")[0]}\n📊 Resultado: Você é *${randomSafado}%* safado! 😏`, 
            mentions: [sender_ou_n]
        }, { quoted: selojp });
    }, 2000);
}
break;

case 'pv': {
 try {
  if(!q.trim()) {
   return reply("Error: parámetro: query ou url, ou seja título ou link do vídeo.");
   }
   conn.sendMessage(from, { react: {text: "🔍", key: info.key}});
   
   const isLink = !!(q.includes('http') && q.includes('youtube') || q.includes('youtu.be'));
   
   if(isLink) {
  await conn.sendMessage(from, { video: { url: `${Shizukusite}/api/downloads/ytvideo2?url=${encodeURIComponent(q.trim())}&apikey=${SHIZUKU_KEY}`}, mimetype: 'video/mp4', caption: "✅ Download Concluido!"}, { quoted });
   conn.sendMessage(from, { react: {text: "✅", key: info.key}});
   } else {
   const { data: res } = await axios(`${Shizukusite}/api/pesquisas/yt-search`, {
    method: 'get', 
     params: { 
      query: q.trim(),
       apikey: SHIZUKU_KEY,
       }, timeout: 150000});
       
       if(!res.result) {
        return reply(res.msg || "Error: não foi possível encontrar resultados");
        }
      await conn.sendMessage(from, { video: { url: `${Shizukusite}/api/downloads/ytvideo2?url=${res.result.url.trim()}&apikey=${SHIZUKU_KEY}`}, mimetype: 'video/mp4', caption: `🎥 ${res.result.title}`}, { quoted });
      conn.sendMessage(from, { react: {text: "✅", key: info.key}});
     }
    } catch (err) {
   console.log("ERROR: ", err.message);
  reply("Erro na solicitação...");
 }
break
}

default:

const sessionId = `${sender}_${from}`;
if (playStore[sessionId] && !command) { 
    const userChoice = body.trim();
    const session = playStore[sessionId];

    if (userChoice === '1' || userChoice === '2') {
        clearTimeout(session.timeout); 
        await reagir(from, "⏳");
        
        const isAudio = userChoice === '1';
        const apiPath = isAudio ? 'ytmp3' : 'ytvideo2';
        const apiUrl = `${Shizukusite}/api/downloads/${apiPath}?url=${session.url}&apikey=${SHIZUKU_KEY}`;
        const res = await axios.get(apiUrl);

        try {
            if (isAudio) {
                const audioBuffer = await getBuffer(res.data.link);
                await sendAudio(audioBuffer)
             } else {
                 await sendVideo(apiUrl, `*${session.title}*`)
            }
            await reagir(from, "✅");
        } catch (err) {
            console.error("ERRO DOWNLOAD:", err);
            reply("❌ Erro ao baixar o arquivo. A API pode estar offline.");
        }
        delete playStore[sessionId]; 
        return; 
    }
}

if(isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(isAntiCtt || Antiloc || isAnticatalogo) {
if(type === 'contactMessage' || type === 'contactsArrayMessage' || type === 'locationMessage' || type === 'productMessage') {
if(isGroupAdmins) return shizuku.sendMessage(from, {text: mess.antisRandomMessage()}, {quoted: selojp})
if(IS_DELETE) {
setTimeout(() => {
shizuku.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
shizuku.groupParticipantsUpdate(from, [sender], 'remove')
clear = `🗑${"\n".repeat(255)}🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪᴅᴀ* ✅`
shizuku.sendMessage(from, {text: clear, contextInfo : { forwardingScore: 500, isForwarded:true}})
shizuku.sendMessage(from, {text: 'Reporte aos adminstradores do grupo sobre o ocorrido.', mentions: groupAdmins})
}}}

if(isGroup && isAntiFlood && !SoDono && !isPremium && !isnit && isBotGroupAdmins && !isGroupAdmins && !isBot) { 
if(isLimitec == null){
var limitefl = limitefll.limitefl
} else {
var limitefl = isLimitec
}
if(budy.length >= limitefl){
setTimeout( () => {
return reply(mess.charactersAnti())
console.log(colors.red('Deram spam de caracteres..'))
}, 100)
setTimeout(async () => {
if(IS_DELETE) {
setTimeout(() => {
shizuku.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
shizuku.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}
}
/////
if (budy2 === "reiniciar" || budy2 === "Reiniciar" || budy === "Reiniciar Shizuku" || budy === "reiniciar shizuku" ||budy === "Shizuku reiniciar") {
if(!SoDono) return reply(enviar.msg.donosmt)
setTimeout(async () => {
reply("Reiniciando..")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
}
///

if (budy2 === "prefixo" || budy2 === "prefix") {
  if (SoDono) {
    await reply(`*_Olá ${pushname}! Meu prefixo é: [ ${prefix} ]_*`);
  } else {
    await reply(`Olá ${pushname}! aqui esta o meu prefixo: *[ ${prefix} ]*\n\nPara ver os comandos disponíveis, use: *${prefix}menu*`)
  }
}

  //INÍCIO DE ALGUNS COMANDOS SEM PREFIXO!!
if(budy2 === "D" || budy2 === "d") {
if(!isGroup) return;
if(!isGroupAdmins && !isPremium && !SoDono && !isnit) return;
if(!isBotGroupAdmins) return;
if(!menc_prt) return reply("Marque a mensagem do usuário que deseja apagar, do bot ou de alguém..")
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
setTimeout(async() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1000)
}

//ABRE O GRUPO!!
if(budy2 === "A" || budy2 === "a" || budy === "👍" ) {
if(!isGroup) return
if(!isGroupAdmins) return
if(!isBotGroupAdmins) return
reagir(from, "🔓")
conn.groupSettingUpdate(from, 'not_announcement')
reply(`*GRUPO ABERTO COM SUCESSO* ✅`)
}

//FECHA O GRUPO!!
if(budy2 === "F" || budy2 === "f" || budy2 === "🤫") {
if(!isGroup) return
if(!isGroupAdmins) return
if(!isBotGroupAdmins) return
reagir(from, "🔒")
conn.groupSettingUpdate(from, 'announcement')
reply(`*GRUPO FECHADO COM SUCESSO* ❌`)
}

//AUTO DOWNLOADS 
if (
  isAutoDown &&
  (type === 'conversation' || type === 'extendedTextMessage') &&
  typeof body === 'string' &&
  body.trim().match(/^(https?:\/\/[^\s]+|www\.[^\s]+)$/i)
) {
  const link = body.trim();
  AutoBaixarUrl(link, from, selojp, pushname, reagir, reply);
}

if (global.ultimaRequisicaoDownload && global.ultimaRequisicaoDownload.from === from) {
  const { url } = global.ultimaRequisicaoDownload;

  if (body.toLowerCase() === "audio" || budy.toLowerCase() === "áudio") {
  	await reagir(from, "⏳");
    await AutoDownload(url, from, selojp, 'audio', conn, reply, reagir, Shizukusite, SHIZUKU_KEY);
    global.ultimaRequisicaoDownload = null;
  } else if (body.toLowerCase() === "vídeo" || body.toLowerCase() === "video") {
  	await reagir(from, "⏳");
    await AutoDownload(url, from, selojp, 'video', conn, reply, reagir, Shizukusite,SHIZUKU_KEY);
    global.ultimaRequisicaoDownload = null;
  }
}
//FINAL DE AUTO DOWNLOAD AI EM CIMA  

//ANTI LINK QUE DELETA BEM AQUI EMBAIXO KK
if (isAntiLinkDelete && isGroup && !isParceiro) {
if (budy2.includes("https://chat.whatsapp.com/") || budy2.includes("chat.whatsapp.com") || budy2.includes("https://bit.") ||budy.includes("http")){
  if (!groupMembers) return;
  if (!isBotGroupAdmins) return;
  const link_dgp = await shizuku.groupInviteCode(from);
  if (Procurar_String.match(link_dgp)) return;
  const isSenderGroupAdmin = groupAdmins.includes(sender.replace(/:.*$/, ''));
  if (!isSenderGroupAdmin) {
    shizuku.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
  }
}

};

//=========[--ANTI PALAVRÃO --]==========\\
if(isGroup && isPalavrao && isBotGroupAdmins) {
if(dataGp[0].antipalavrao.palavras.indexOf(budy2) >= 0) {
if(!isGroupAdmins) {
 shizuku.sendMessage(from, {text: `Sem palavrão ou palavras ofensivas aqui!`}, {quoted: selojp})       
setTimeout( () => {
if(!JSON.stringify(groupMembers).includes(sender)) return  
shizuku.groupParticipantsUpdate(from, [sender], 'remove')
}, 2000)
setTimeout( () => {
shizuku.sendMessage(from, {text: mess.removeUserAntiPlvr()}, {quoted : info}).catch(e => {
shizuku.sendMessage(from, {text: mess.permissionDenied_rUser()}, {quoted : info})
})       							
}, 200)
} else {
return reply(`Você tem permissão, por causa você é adm ${pushname}.`)
}
}
}

 //===============(SIMIH-1)===============\\
if (isAntiFlood2 && isGroup && !isGroupAdmins && isBotGroupAdmins && !SoDono) {
let flood = await tratarMensagemAntiFlood(dataGp[0].antiflood, sender);
if (flood) {
await shizuku.groupParticipantsUpdate(from, [sender], 'remove');
 return reply('Spam detectado!');
}
}

if (isGroup && isSimi && budy != undefined) {
    if (type == 'imageMessage') return;
    if (type == 'audioMessage') return;
    if (type == 'stickerMessage') return;
    if (info.key.fromMe) return;
    try {
        const muehe = await simih(budy);
        shizuku.sendMessage(from, { text: muehe }, { quoted: selojp });
    } catch (e) {
        reply("❌ Não entendi! Por favor, me explique!");
    }
}

if (isSimi2 && !isCmd && isGroup) {
if (type == 'conversation' || type == 'extendedTextMessage') {
if (info.key.fromMe) return
if (type == 'extendedTextMessage' && prefix.includes(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation[0])) return
insert(type, info)
const sami = await response(budy)
if (sami) shizuku.sendMessage(from, {text: sami}, {quoted: selojp})
}
}

//========================================\\
if(isCmd) {
const uptime = process.uptime();
const cmdSimilarity = listCommands(command);
const txt = cmdSimilarity.similarity > 0 ? `*『 ${prefix + cmdSimilarity.command} 』*` : `「 Nenhum 」`;

const sem = `${(cmdSimilarity.similarity || 0).toFixed(1)}%`;
let Jpzinh_Lindo = `╔═ *COMANDO INVÁLIDO* ═╗
╟
╟ 💬 *Digitado:* \`${prefix + command}\`
╟ 💡 *Sugestão:* \`${txt}\`
╟ 📊 *Similaridade:* \`${sem}\`
╟
╟ 🗓️ *Data:* \`${date}\`  ⏰ \`${time2}\`
╟
╚══════════════════╝

❗ Use \`${prefix}menu\` para ver todos os comandos.
`;
await reply(Jpzinh_Lindo?.trim())
}

//====
}
}
}
msgupsrt().catch(async(e) => {
if(JSON.stringify(e).includes(SHIZUKU_KEY)) {
return console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else if(String(e).includes("Erro: aborted")) {
file = require.resolve("./Shizuku-Connect.js")  
delete require.cache[file]
require(file)
} else {
return console.log("ERRO APRESENTADO NA SHIZUKU-BOT EM:", e)
}
})
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(colors.red(`Alterações salvas - '${__filename}'`))
delete require.cache[file]
require(file)
})

iniciarBot().catch(async(e) => {
console.log(colors.red("Erro apresentado no arquivo: './index.js' - Error: "+e))
})