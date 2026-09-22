const baileys = require('@whiskeysockets/baileys');

// Módulos:
const { Boom }  = require('@hapi/boom');
const axios = require('axios');
const fs = require('fs-extra');
const cheerio = require('cheerio');
const crypto = require('crypto');
const util = require('util');
const { randomBytes } = require("crypto");
const P = require('pino');
const NodeCache = require("node-cache");
const linkfy = require('linkifyjs');
const request = require('request');
const ms = require('ms');
const os = require('os');
const ffmpeg = require('fluent-ffmpeg');
const fetch = require('node-fetch');
const qrterminal = require('qrcode-terminal');
const { exec, spawn, execSync } = require('child_process');
const moment = require('moment-timezone');
const colors = require("colors");
const infoSystem = require('os')
// Hora:
const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY');


// Funções:
const webp_mp4 = require("./armor/js/webp_mp4.js");
const { sendVideoAsSticker, sendImageAsSticker } = require('./armor/sticker/rename.js');
const { sendVideoAsSticker2, sendImageAsSticker2 } = require('./armor/sticker/rename2.js');
const { arcloud } = require('./armor/js/arcc.js') 
const { addLimit, getLimit } = require('./armor/js/limit.js');
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("./armor/js/banned.js");
const { validmove, setGame } = require('./armor/tictactoe');
const { addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos } =  require('./armor/js/addcmd.js');
const { wait, getExtension, generateMessageID, getMembros, getGroupAdmins, getRandom, banner, banner2, banner3, temporizador, chyt, getBuffer, fetchJson, fetchText, createExif, getBase64, convertSticker, upload, nit, getpc, supre, recognize, JpUpload } = require('./armor/funcoes/functions.js'); // É necessário para algumas funções funcionar perfeitamente.
const { addVote, delVote } = require('./armor/js/vote');
const { infoClima } = require('./armor/funcoes/infoclima.js')
const { isFiltered, addFilter } = require('./armor/funcoes/functions.js');

const { addVIP, isVIP, getExpire, removeVIP } = require("./database/VIP/vip")

// [JSON] - Funções Abaixo >>> :
const voting = JSON.parse(fs.readFileSync('./armor/funcoes/voting.json'));
const sotoy = JSON.parse(fs.readFileSync('./armor/funcoes/sotoy.json'));
const countMessage = JSON.parse(fs.readFileSync('./shizuku-config/media/countmsg.json'));
const comandos = JSON.parse(fs.readFileSync('./shizuku-config/media/comandos.json'));
const daily = JSON.parse(fs.readFileSync('./database/usuarios/diario.json'));
const nescessario = JSON.parse(fs.readFileSync('./shizuku-config/dono/nescessario.json'));
const ban = JSON.parse(fs.readFileSync('./database/usuarios/banned.json'));
const muted = JSON.parse(fs.readFileSync('./database/usuarios/muted.json'))
const limitefll = JSON.parse(fs.readFileSync('./database/usuarios/flood.json'));
const joguinhodavelhajs = JSON.parse(fs.readFileSync('./database/usuarios/joguinhodavelha.json'));
const { insert, response } = require('./armor/funcoes/simi.js');
const { randomCantadas } = require('./armor/js/cantadas.js');
const joguinhodavelhajs2 = JSON.parse(fs.readFileSync('./database/usuarios/joguinhodavelha2.json'));
const patentes = JSON.parse(fs.readFileSync("./shizuku-config/media/patentes.json"));
const sabrpg = JSON.parse(fs.readFileSync("./shizuku-config/media/dinheiro.json"));
const antispam = JSON.parse(fs.readFileSync('./shizuku-config/media/antispam.json'));
const anotar = JSON.parse(fs.readFileSync("./database/func/tabela/anotar.json"));
const setting = JSON.parse(fs.readFileSync('./shizuku-config/dono/settings.json'));
const black_ = JSON.parse(fs.readFileSync("./database/grupos/avisos.json"));


// Arquivos - JS - Menus / Informações:
const { linguagem, mess, getInfo } = require('./shizuku-config/lib');
const { destrava, destrava2 } = require('./armor/funcoes/destrava.js');
const { tabela } = require('./armor/js/tabela.js');
const { conselhob } = require('./armor/js/conselhob.js');
const { fatos } = require('./armor/js/fatos.js');
const { palavrasc } = require('./armor/js/conselhos.js');
const { psycatgames } = require('./armor/funcoes/psycatgames.js')

const { getMinesPositions, MinesHelp } = require('./armor/js/mines.js')
// Deletar Arquivos:
function DLT_FL(file) {
try {
fs.unlinkSync(file);
} catch (error) {
}
}


//similar comandos
function fuzzySimilarity(word1, word2) {
  function generateNGrams(word, n) {
     const nGrams = [];
       for (let i = 0; i < word.length - n + 1; i++) {
          nGrams.push(word.slice(i, i + n));
          }
          return nGrams;
      }
  
      const nGrams1 = generateNGrams(word1, 2);
      const nGrams2 = generateNGrams(word2, 2);
      const commonNGrams = nGrams1.filter(nGram => nGrams2.includes(nGram));
      const similarity = Math.round((2 * commonNGrams.length) / (nGrams1.length + nGrams2.length) * 100);
      
      return similarity;
  }
const listCommands = (targetWord) => {
      const fileContent = fs.readFileSync("shizuku.js", "utf8");
      const commandsRegex = /case\s+['"](.+?)['"]/g;
      let mostSimilarCommand = "";
      let highestSimilarity = -1;
      let match;
  
      while ((match = commandsRegex.exec(fileContent)) !== null) {
          const extractedCommand = match[1];
          const similarity = fuzzySimilarity(targetWord, extractedCommand);
          if (similarity > highestSimilarity) {
              highestSimilarity = similarity;
              mostSimilarCommand = extractedCommand;
          }
      }
  
      return {
          command: mostSimilarCommand, 
          similarity: highestSimilarity
      };
  };
  
async function tratarMensagemAntiFlood(antifloodConfig, sender) {
    if (!this.userFloodData) this.userFloodData = {};
    let { maxMensagem, intervalo } = antifloodConfig;
    if (!this.userFloodData[sender]) {
        this.userFloodData[sender] = {
            count: 1,
            lastMessageTime: Date.now()
        };
    } else {
        let elapsedTime = Date.now() - this.userFloodData[sender].lastMessageTime;
        if (elapsedTime > intervalo * 1000) {
            this.userFloodData[sender].count = 1;
            this.userFloodData[sender].lastMessageTime = Date.now();
        } else {
            this.userFloodData[sender].count += 1;
        }
        if (this.userFloodData[sender].count > maxMensagem) {
            return true; 
        }
    }
    return false; 
}

async function pegarCases(nomes = []) {//Nk Petrøv - (Natan) que fez
  if (!Array.isArray(nomes)) nomes = [nomes];
  const arquivo = fs.readFileSync('./shizuku.js', 'utf8');
  const encontrados = [];
  const naoEncontrados = [];
  for (let nome of nomes) {
    if (!nome) continue; 
    nome = nome.trim();
    const regex = new RegExp(`case '${nome}'[\\s\\S]*?break`, 'm');
    const match = arquivo.match(regex);
    if (!match) {
      naoEncontrados.push(nome);
      continue;
    }
    let caseConteudo = match[0].replace(/break/, 'break; //Nk\' Petrøv');
    encontrados.push(caseConteudo);
  }
  const arquivoFinal = encontrados.length
    ? `/* \n case(s) abaixo, peço que deixe os devidos créditos.\n criador dessa getcase �? @Nk Petrøv.\n pegue as cases aí e use com moderação.\n*/\n\n${encontrados.join('\n\n')}` : null;
  return { arquivoFinal, naoEncontrados };
}

// CONVERTER BYTES EM KB / MB / GB / TB
const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
if(bytes == 0) {
return "n/a";
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
if(i == 0) {
return bytes + " " + sizes[i];
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
};

// ANTI NOME MODIFICADA / EMOJI
function ANT_LTR_MD_EMJ(str) {
for (let i = 0, n = str.length; i < n; i++) {
if(str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

// Transformar segundos em hora/minutos
function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} horas, ${pad(minutes)} minutos e ${pad(seconds)} segundos.`;
}

// FUNÇÃO DO BAILEYS PRA PUXAR MÍDIA ENVIADA, E EXECUTAR AÇÃO..
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await baileys.downloadContentFromMessage(mediakey, MediaType);
let buffer = Buffer.from([]);
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
return buffer;
};

// Tudo abaixo await sleep(1000) vai demorar 1 segundo pra funcionar, 1000 é igual 1 segundo..
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};

// ENVIAR FIGU EM URL
const enviarfiguUrl = async (jpzin, from, link, mr) => {
ranp = getRandom('.gif');
rano = getRandom('.webp');
ini_buffer = `${link}`;
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
DLT_FL(ranp);
buff = fs.readFileSync(rano);
jpzin.sendMessage(from, {sticker: buff}, {quoted: mr}).catch(() => {
return console.log("Erro..");
});
DLT_FL(rano);
});
};

const sendPoll = (jpzin, id, name = '', values = [], selectableCount = 1) => { 
return jpzin.sendMessage(id, {poll: {name, values, selectableCount}, messageContextInfo: { messageSecret: randomBytes(32)}}, {id, options: {userJid: jpzin?.user?.id}}).catch(() => {
return console.log(console.error);
});
}


let manutencaoEmAndamento = false 

const manutencaoSistema = async (shizuku, horaAtual) => {
    const horariosPermitidos = ['07:00:00', '12:00:00', '18:00:00', '00:00:00']
    if (!horariosPermitidos.includes(horaAtual)) return
    if (manutencaoEmAndamento) return console.log("⚠️ Manutenção já em andamento, pulando...")
    
    manutencaoEmAndamento = true
    console.log(`🛠️ [${horaAtual}] Iniciando manutenção programada...`);
    try {
        console.log("🔌 Desconectando socket...")
        await shizuku.end()
        await new Promise(r => setTimeout(r, 3000)) 
        const pastaSessao = path.join(__dirname, 'datab', 'Shizuku-qr')
        const arquivos = fs.readdirSync(pastaSessao)
        
        let deletados = 0
        for (const arquivo of arquivos) {
            if (/^(pre-key|sender-key|session-.*\.json$|app-state-sync-)/i.test(arquivo) && arquivo !== 'creds.json') {
                try {
                    fs.unlinkSync(path.join(pastaSessao, arquivo))
                    deletados++
                } catch (e) {
                    console.log(`Erro ao deletar ${arquivo}:`, e.message)
                }
            }
        }
        console.log(`✅ ${deletados} arquivos de sessão removidos.`)
        console.log("🔄 Reiniciando processo...")
        setTimeout(() => {
            process.exit(1) 
        }, 1500)
        
    } catch (err) {
        console.log("❌ Erro na manutenção:", err)
        process.exit(1) 
    } finally {
        manutencaoEmAndamento = false
    }
}


const comand = (jpzin, info, prefix, isGroup, Res_SoGrupo, sender, pushname, command, reply, args, from, mentions, Res_SoAdm, Res_BotADM, isGroupAdmins, isBotGroupAdmins, upsert) => {

async function comandos_que_nao_usa_muito() {

switch(command) {
}
}

comandos_que_nao_usa_muito().catch(e => {
console.log(e+" - CSFJ")
})

}

//kakakkakkaakka
const buscarNoGoogle = async (query, apikey, cx) => {
  try {
    let res = await fetch(`https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=AIzaSyC97tR4IgcPRm_C2QYhT3tJIzyxu-7iSps&cx=54eb7ab01d9064a71`);
    let data = await res.json();
    if (!data.items || data.items.length === 0) return 'Nenhum resultado encontrado.';

    let resultado = data.items[0];
    let resposta = `🔎 *Resultado da Pesquisa:*\n\n*${resultado.title}*\n${resultado.snippet}\n\n🌐 ${resultado.link}`;
    return resposta;
  } catch (e) {
    console.log(e);
    return '�? Erro ao realizar a pesquisa.';
  }
};

// Simih:
const limparInativos = () => {
    const QUINZE_DIAS_MS = 15 * 24 * 60 * 60 * 1000;
    const agora = Date.now();
    let alterou = false;
    countMessage.forEach((grupo, gIndex) => {
        const totalAntes = grupo.numbers.length;
        grupo.numbers = grupo.numbers.filter(user => {
            return (agora - user.lastSeen) < QUINZE_DIAS_MS;
        });
        if (totalAntes !== grupo.numbers.length) alterou = true;
    });
    if (alterou) {
        fs.writeFileSync('./shizuku-config/media/countmsg.json', JSON.stringify(countMessage, null, 2));
        console.log("🧹 [LIMPEZA] Membros inativos removidos do contador.");
    }
};

setInterval(limparInativos, 24 * 60 * 60 * 1000);

const simih = async (text) => {
    try {
        const res = await fetch(`https://api.nexfuture.com.br/api/outros/simsimi?query=${encodeURIComponent(text)}`);
        const data = await res.json();
        const resposta = data.resposta;
        
        const tradRes = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=pt&dt=t&q=' + encodeURIComponent(resposta));
        const tradJson = await tradRes.json();
        const traducao = tradJson[0][0][0];

        return traducao;
    } catch (e) {
        return 'Erro ao se conectar com a API do SimSimi.';
    }
};

module.exports = { P, fs, util, Boom, axios, linkfy, pegarCases, request, ms, buscarNoGoogle, ffmpeg, fetch, exec, spawn, execSync, limitefll, moment, time, hora, date, infoSystem, manutencaoSistema, comand, addVote, delVote, getBuffer, convertSticker, fetchJson, fetchText, getBase64, createExif, addLimit, getLimit, upload, JpUpload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, validmove, setGame, addComandosId, listCommands, deleteComandos, getComandoBlock, fuzzySimilarity, getComandos, addComandos, tratarMensagemAntiFlood, getpc, supre, wait, getExtension, generateMessageID, getGroupAdmins, getMembros, getRandom, banner, banner2, banner3, temporizador, chyt, webp_mp4, simih, patentes, antispam, anotar, voting, sotoy, addVote, delVote, countMessage, comandos, daily, muted, nescessario, ban, black_, joguinhodavelhajs, joguinhodavelhajs2, setting, linguagem, getInfo, mess, destrava, destrava2, tabela, conselhob, fatos, palavrasc, recognize, colors, cheerio, NodeCache, kyun, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2,sendImageAsSticker2, enviarfiguUrl, sendPoll, getFileBuffer, DLT_FL, sleep, ANT_LTR_MD_EMJ, convertBytes, arcloud, infoClima, os, insert, response, randomCantadas, addVIP, isVIP, getExpire, removeVIP, psycatgames };