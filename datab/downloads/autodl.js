const fetch = require("node-fetch");
const axios = require("axios");

 const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options).then(response => response.json())
 .then(json => {
resolve(json)
}).catch((err) => {
reject(err)
})
})

async function AutoBaixarUrl(url, from, selojp, pushname, reagir, reply) {
  let plataforma = "";

  if (url.includes("instagram.com")) plataforma = "Instagram";
  else if (url.includes("tiktok.com")) plataforma = "TikTok";
  else if (url.includes("youtube.com") || url.includes("youtu.be")) plataforma = "YouTube";
  else if (url.includes("kwai")) plataforma = "Kwai";
  else if (url.includes("pinterest.com") || url.includes("pin") || url.includes("pin.it")) plataforma = "Pinterest";
  else if (url.includes("facebook.com") || url.includes("fb.watch")) plataforma = "Facebook";
  else if (url.includes("twitter.com") || url.includes("x.com")) plataforma = "Twitter";
  else if (url.includes("likee")) plataforma = "Likee";
  else return;

  global.ultimaRequisicaoDownload = { url, from };

  const Texto = `
*✨ Shizuku-Bot ativou o Auto Download! ✨*

🔗 Detectei um link enviado por *${pushname}*!

🌍 *Plataforma:* ${plataforma}

Me diga se quer baixar como *Áudio* ou *Vídeo*, que eu cuido do resto! 😉
`.trim();

  await reply(Texto);
}

async function AutoDownload(url, from, selojp, tipo, conn, reply, reagir, Shizukusite, SHIZUKU_KEY) {
  try {
    let mediaUrl;

    if (url.includes("instagram.com")) {
      mediaUrl = tipo === "video"
        ? Shizukusite + "/api/downloads/insta-mp4?url="+url + "&apikey=" + SHIZUKU_KEY : Shizukusite + "/api/downloads/insta-mp3?url=" + url + "&apikey=" + SHIZUKU_KEY;
    }

    else if (url.includes("tiktok.com")) {
      mediaUrl = tipo === "video" ? Shizukusite + "/api/downloads/tiktok-mp4?url=" + url + "&apikey=" + SHIZUKU_KEY : Shizukusite + "/api/downloads/tiktok-mp3?url="+url + "&apikey=" + SHIZUKU_KEY ;
    }

    else if (url.includes("youtube.com") || url.includes("youtu.be")) {
      mediaUrl = tipo === "video" ? Shizukusite + "/api/downloads/ytvideo2?url=" + url + "&apikey=" + SHIZUKU_KEY : Shizukusite + "/api/downloads/ytaudio2?url=" + url +  "&apikey=" + SHIZUKU_KEY;
    }

    else if (url.includes("kwai")) {
      mediaUrl = tipo === "video"
        ? Shizukusite + "/api/downloads/kwai-mp4?url=" + url + "&apikey=" + SHIZUKU_KEY  : Shizukusite + "/api/downloads/kwai-mp3?url=" + url + "&apikey=" + SHIZUKU_KEY;
    }

    else if (url.includes("pinterest.com") || url.includes("pin") || url.includes("pin.it")) {
      mediaUrl = tipo === "video"
        ? Shizukusite + "/api/downloads/pinterest-mp4?url=" + url + "&apikey=" + SHIZUKU_KEY : Shizukusite + "/api/downloads/pinterest-mp3?url=" + url + "&apikey=" + SHIZUKU_KEY;
    }

    else if (url.includes("facebook.com") || url.includes("fb.watch")) {
     mediaUrl = tipo === "video" ? Shizukusite + "/api/downloads/face-mp4?url=" + url + "&apikey=" + SHIZUKU_KEY : Shizukusite + "/api/downloads/face-mp3?url=" + url + "&apikey=" + SHIZUKU_KEY;
    }

    else return reply("❌ Plataforma não suportada!");

    if (!mediaUrl) return reply("❌ Mídia não encontrada!");

    if (tipo === "video") {
      await conn.sendMessage(from, { video: { url: mediaUrl }, mimetype: "video/mp4" }, { quoted: selojp });
    } else {
      await conn.sendMessage(from, { audio: { url: mediaUrl }, mimetype: "audio/mpeg", ptt: false }, { quoted: selojp });
    }

    await reagir(from, "✅");
  } catch (err) {
    console.error(`Erro ao baixar ${tipo}:`, err);
    await reagir(from, "❌");
    reply(`❌ Erro ao baixar o ${tipo}.`);
  }
}


module.exports = {
  AutoBaixarUrl,
  AutoDownload 
};