/*
* Death 👑 
* canal: https://whatsapp.com/channel/0029VbC5uMd3GJP2mhrSmI2T
*/

const baileys = require('@whiskeysockets/baileys')
const { fs, Boom, axios, util, P, exec, time, hora, date, banner2, banner3, colors, getGroupAdmins } = require('./shizuku-def.js')
const { nescessario, setting, getRandom, NodeCache, insert, response } = require('./shizuku-def.js')
const readline = require("readline")
const qrcode = require('qrcode-terminal')
const { NomeDoBot, NickDono, prefix, SHIZUKU_KEY, CODIGO_PAREAR } = require("./shizuku-config/dono/settings.json")

const CreatorNumber = "wa.me/554796146896";

const sleep = async (ms) => new Promise(resolve => setTimeout(resolve, ms))

const cacheFoto = new Map();

async function pegarFotoPerfil(shizuku, participante) {
    if (cacheFoto.has(participante)) {
        const { url, tempo } = cacheFoto.get(participante);
        if (Date.now() - tempo < 600000) return url;
    }

    const url = await Promise.race([
        shizuku.profilePictureUrl(participante, 'image'),
        new Promise(r => setTimeout(() => r(null), 7000))
    ]).catch(() => null);

    const fotoFinal = url || 'https://telegra.ph/file/24fa902ead26340f3df2c.png';
    cacheFoto.set(participante, { url: fotoFinal, tempo: Date.now() });
    return fotoFinal;
}

function DLT_FL(file) {
  try { fs.unlinkSync(file) } catch (error) {}
}

const kontol_info2 = console.info
console.info = function() {
  if(!util.format(...arguments).includes("Closing session: SessionEntry")){
    return kontol_info2(...arguments)
  }
}

const kontol_info1 = console.info
console.info = function() {
  if(!util.format(...arguments).includes("Removing old closed session: SessionEntry {}")){
    return kontol_info1(...arguments)
  }
}

const msgRetryCounterCache = new NodeCache()
const rl = readline.createInterface({input: process.stdin, output: process.stdout})
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

async function forceBlock(shizuku, jid) {
  const isLid = jid.includes('@lid')
  const cleanId = jid.split(':')[0]
  const finalJid = isLid? `${cleanId}@lid` : `${cleanId}@s.whatsapp.net`
  await shizuku.sendMessage(finalJid, {
    text: "⚠️ *ANTI-CALL:* Chamadas bloqueadas. Você foi bloqueado automaticamente."
  })
  console.log(`[ANTI-CALL] Enviando comando de bloqueio para: ${finalJid}`)
  return await shizuku.query({
    tag: 'iq',
    attrs: { to: '@s.whatsapp.net', type: 'set', xmlns: 'md' },
    content: [{
      tag: 'blocklist',
      attrs: {},
      content: [{ tag: 'item', attrs: { jid: finalJid, action: 'add' } }]
    }]
  })
}

async function criarSocket(useQR = false) {
  const folderUserAuth = "./datab/shizuku-qr"
  const { state, saveCreds } = await baileys.useMultiFileAuthState(folderUserAuth)
  const { version, isLatest } = await baileys.fetchLatestBaileysVersion()

  const shizuku = baileys.makeWASocket({
    version: [2, 3000, 1044006379],
    auth: state,
    logger: P({ level: 'silent' }),
    printQRInTerminal: false, 
    browser: baileys.Browsers.macOS('Chrome'),
    msgRetryCounterCache,
    emitOwnEvents: true
  })
  return { shizuku, saveCreds }
}

async function iniciarShizuku() {
  const folderUserAuth = "./datab/shizuku-qr"
  const { state } = await baileys.useMultiFileAuthState(folderUserAuth)
  if (state?.creds?.registered) {
    console.log(colors.green("\n[✓] Sessão ativa detectada! Conectando...\n"))
    const { shizuku, saveCreds } = await criarSocket(false)
    registrarEventos(shizuku, saveCreds, false)
    return
  }
  
  console.log(colors.cyan("\n╭═════ •ೋ• ✧ •ೋ• ═════╮"))
  console.log(colors.cyan("┃    SHIZUKU BOT CONEXÃO   ┃"))
  console.log(colors.cyan("╰═════ •ೋ• ✧ •ೋ• ═════╯"))
  console.log(colors.gray("┆"))
  console.log(colors.gray("├⪼ ") + colors.yellow("1") + colors.white(" ─ Código de Pareamento"))
  console.log(colors.gray("┆"))
  console.log(colors.gray("├⪼ ") + colors.yellow("2") + colors.white(" ─ QR Code"))
  console.log(colors.gray("┆"))
  console.log(colors.gray("├⪼ ") + colors.yellow("3") + colors.white(" ─ Criador"))
  console.log(colors.gray("┆"))
  console.log(colors.gray("├➤ ") + colors.yellow("4") + colors.white(" ─ Fechar"))
  console.log(colors.gray("┆"))
  
  let opcao = await question(colors.cyan("┃ Selecione uma opção: "))
  opcao = opcao.trim()
  
  if (opcao === "1") {
    const { shizuku, saveCreds } = await criarSocket(false)
    registrarEventos(shizuku, saveCreds, false)
    try {
      let number = await question(colors.yellow("\nDigite seu número (ex: 5593999999999): "))
      number = number.replace(/\D/g, "")
      console.log(colors.gray("\nGerando código de pareamento...\n"))

      const code = await shizuku.requestPairingCode(number, CODIGO_PAREAR)
      console.log(colors.cyan(`📲 Seu código de pareamento:\n\n ${colors.white(code)}\n`))
      console.log(colors.gray("WhatsApp > Aparelhos conectados > Conectar com número"))
      rl.close()
    } catch (err) {
      console.log(colors.red("\n❌ Erro ao gerar código de pareamento:\n"), err)
    }
  } else if (opcao === "2") {
    console.log(colors.gray("\nAguardando QR Code...\n"))
    const { shizuku, saveCreds } = await criarSocket(false)
    registrarEventos(shizuku, saveCreds, true) 
    rl.close()
  } else if (opcao === "3") {
    console.log(colors.cyan("\n╭═════ •ೋ• ✧ •ೋ• ═════╮"))
    console.log(colors.cyan("┃        CRIADOR        ┃"))
    console.log(colors.cyan("╰═════ •ೋ• ✧ •ೋ• ═════╯"))
    console.log(colors.gray("┆"))
    console.log(colors.gray("┃ ") + colors.white("Nome: ") + colors.green("death"))
    console.log(colors.gray("┃ ") + colors.white("WhatsApp: ") + colors.green(CreatorNumber))
    console.log(colors.gray("┃ ") + colors.white("Projeto: ") + colors.green("Shizuku-Bot"))
    console.log(colors.gray("┃ ") + colors.white("Baileys: ") + colors.green("v7.0.0-rc13"))
    console.log(colors.gray("┆"))
    console.log(colors.cyan("╰═════ •ೋ• ✧ •ೋ• ═════╯\n"))
    process.exit()
  } else if (opcao === "4") {
    console.log(colors.yellow("\nEncerrando sistema..."))
    await new Promise(r => setTimeout(r, 800))
    process.exit()
  } else {
    console.log(colors.red("\nOpção inválida. Reinicie o bot."))
    process.exit()
  }
}

function registrarEventos(shizuku, saveCreds, modoQR = false) {
  if (nescessario.anticall) {
    shizuku.ws.on('CB:call', async (call) => {
      if (call.content[0].tag === 'offer') {
        const node = call.content[0].attrs['call-creator']
        const callId = call.content[0].attrs['call-id']
        try {
          await shizuku.rejectCall(callId, node)
          await forceBlock(shizuku, node)
          console.log(`[ANTI-CALL] Sucesso ao bloquear LID: ${node}`)
        } catch (e) {
          console.log("Erro no processo de bloqueio LID:", e.message)
        }
      }
    })
  }

shizuku.ev.on('groups.update', async (updates) => {
  for (const res of updates) {
    try {
      const idgp = res.id
      const autor = baileys.jidNormalizedUser(res.author)
      const localGp = `./database/grupos/activation_gp/${idgp}.json`

      if (!fs.existsSync(localGp)) continue
      const dataGp = JSON.parse(fs.readFileSync(localGp))
      if (!dataGp[0]?.x9) continue

      const metadata = await shizuku.groupMetadata(idgp)
      const alteracoes = []

      if (res.announce!== undefined) {
        alteracoes.push(res.announce
         ? '🔒 *Grupo fechado* — Apenas ADMs podem enviar mensagens'
          : '🔓 *Grupo aberto* — Todos podem enviar mensagens'
        )
      }
      if (res.restrict!== undefined) {
        alteracoes.push(res.restrict
         ? '🛡️ *Grupo restrito* — Apenas ADMs editam dados do grupo'
          : '🌐 *Grupo liberado* — Todos podem editar dados do grupo'
        )
      }
      if (res.subject) {
        alteracoes.push(`✏️ *Nome alterado para:* ${res.subject}`)
      }
      if (res.desc) {
        alteracoes.push(`📝 *Descrição do grupo foi alterada*`)
      }
      if (res.memberAddMode!== undefined) {
        alteracoes.push(res.memberAddMode
         ? '➕ *Adição restrita* — Apenas ADMs podem adicionar membros'
          : '➕ *Adição liberada* — Todos podem adicionar membros'
        )
      }
      if (res.joinApprovalMode!== undefined) {
        alteracoes.push(res.joinApprovalMode
         ? '✅ *Aprovação ativada* — Entrada precisa ser aprovada'
          : '🚪 *Aprovação desativada* — Entrada livre'
        )
      }

      if (alteracoes.length === 0) continue
      const msgX9 = [
        '╭━━━━━━━━━━━━━━━━━━━━╮',
        '┃ 🕵️‍♂️ *X9-ADM* ┃',
        '┣━━━━━━━━━━━━━━━━━━━━┫',
        `┃ 👤 *Responsável:* @${autor.split('@')[0]}`,
        `┃ 🛡️ *Grupo:* ${metadata.subject}`,
        '┣━━━━━━━━━━━━━━━━━━━━┫',
        '┃ ⚙️ *Alterações detectadas:*',
       ...alteracoes.map(alt => `┃ ${alt}`),
        '╰━━━━━━━━━━━━━━━━━━━━╯'
      ].join('\n')

      await shizuku.sendMessage(idgp, {
        text: msgX9,
        mentions: [autor]
      })

    } catch (e) {
      console.error(`[X9-ERRO] Falha ao processar groups.update:`, e)
    }
  }
})

shizuku.ev.process(async(events) => {
    if (events["group-participants.update"]) {
  try {
    const update = events["group-participants.update"]
    const groupId = update.id

    const pathGp = `./database/grupos/activation_gp/${groupId}.json`
    if (!fs.existsSync(pathGp)) return
    const configGp = JSON.parse(fs.readFileSync(pathGp))

    const pathAntiRoubo = './datab/grupos/antiarqv.json'
    const antiRoubo = fs.existsSync(pathAntiRoubo)? JSON.parse(fs.readFileSync(pathAntiRoubo)) : {}

    if (!update.participants ||!update.participants.length) return

    const botJid = baileys.jidNormalizedUser(shizuku.user.id)
    const partObj = update.participants[0]
    const participante = baileys.jidNormalizedUser(partObj.phoneNumber || partObj.id)

    if (participante === botJid) return

    const mdata = await shizuku.groupMetadata(groupId)
    const groupAdmins = getGroupAdmins(mdata.participants)

    const enviarX9 = async (titulo, campos) => {
      if (!configGp[0]?.x9) return

      const linhas = [
        '╭━━━━━━━━━━━━━━━━━━━━╮',
        `┃ 🕵️‍♂️ *${titulo}* ┃`,
        '┣━━━━━━━━━━━━━━━━━━━━┫',
      ...campos.map(c => `┃ ${c}`),
        '┣━━━━━━━━━━━━━━━━━━━━┫',
        '┃ ⭑ Shizuku Bot ⭑ ',
        '╰━━━━━━━━━━━━━━━━━━━━╯'
      ]

      await shizuku.sendMessage(groupId, {
        text: linhas.join('\n'),
        mentions: campos
         .filter(c => c.includes('@'))
         .map(c => c.match(/@(\d+)/)?.[1] + '@s.whatsapp.net' || c.math(/@(\d+)/)?.[1] + "@lid")
         .filter(Boolean)
      })
    }

    if (update.action === 'add') {
      const num = participante
      const autor = baileys.jidNormalizedUser(update.author)

      if (autor) {
        await enviarX9('X9 - ENTRADA', [
          `👤 *Autor:* @${autor.split('@')[0]}`,
          `📥 *Ação:* Adicionou/Aprovou membro`,
          `👤 *Novo:* @${num.split('@')[0]}`
        ])
      }

      if (nescessario.listanegraG.includes(num)) {
        await shizuku.sendMessage(groupId, {
          text: '╭─🚫 *LISTA NEGRA* ─╮\n│ Usuário bloqueado globalmente\n│ Removendo do grupo...\n╰─────────────────╯'
        })
        await shizuku.groupParticipantsUpdate(groupId, [num], 'remove')
        return
      }

      if (configGp[0].listanegra?.includes(num)) {
        await shizuku.sendMessage(groupId, {
          text: '╭─🚫 *BLOQUEADO* ─╮\n│ Usuário bloqueado neste grupo\n│ Removendo...\n╰────────────────╯'
        })
        await shizuku.groupParticipantsUpdate(groupId, [num], 'remove')
        return
      }

      if (configGp[0].antifake &&!num.startsWith('55')) {
        if (configGp[0].legenda_estrangeiro && configGp[0].legenda_estrangeiro!== '0') {
          await shizuku.sendMessage(groupId, { text: configGp[0].legenda_estrangeiro })
        }
        setTimeout(async () => {
          await shizuku.groupParticipantsUpdate(groupId, [num], 'remove')
        }, 1000)
        return
      }
    }

    if (update.action === "promote" || update.action === "demote") {
      const autor = baileys.jidNormalizedUser(update.author)
      if (!autor) return

      const isPromote = update.action === "promote"
      await enviarX9('X9 - CARGO', [
        `👤 *Autor:* @${autor.split("@")[0]}`,
        `${isPromote? "🟢" : "🔴"} *Ação:* ${isPromote? "Promoveu para ADM" : "Removeu de ADM"}`,
        `👤 *Alvo:* @${participante.split("@")[0]}`
      ])
    }

    if (update.action === "remove") {
      const autor = baileys.jidNormalizedUser(update.author)
      if (!autor) return

      await enviarX9('X9 - BANIMENTO', [
        `👤 *ADM:* @${autor.split("@")[0]}`,
        `🔨 *Ação:* Removeu membro do grupo`,
        `👤 *Ex-Membro:* @${participante.split("@")[0]}`
      ])
    }

    if (antiRoubo[groupId]?.ativo && update.action === "demote") {
      const executor = baileys.jidNormalizedUser(update.author)
      const bot = baileys.jidNormalizedUser(shizuku.user.id)
      const donos = (antiRoubo[groupId].donos || [])
       .filter(Boolean)
       .map(jid => baileys.jidNormalizedUser(jid))

      const alvoEhDono = donos.includes(participante)
      const executorEhDono = donos.includes(executor)

      if (alvoEhDono &&!executorEhDono) {
        try {
          await shizuku.groupParticipantsUpdate(groupId, [participante], 'promote')
          if (executor!== bot) {
            await shizuku.groupParticipantsUpdate(groupId, [executor], 'demote')
          }

          const msgAntiRoubo = [
            '╭━━━━━━━━━━━━━━━━━━━━╮',
            '┃ 🚨 *ANTI-ROUBO* 🚨 ┃',
            '┣━━━━━━━━━━━━━━━━━━━━┫',
            '┃ ⚠️ *GOLPE DETECTADO!*',
            '┃',
            `┃ 👤 *Executor:* @${executor.split('@')[0]}`,
            `┃ 🛡️ *Alvo:* @${participante.split('@')[0]}`,
            '┃',
            '┃ 📢 *Status:* Dono restaurado',
            '┃ Executor foi rebaixado',
            '╰━━━━━━━━━━━━━━━━━━━━╯'
          ].join('\n')

          await shizuku.sendMessage(groupId, {
            text: msgAntiRoubo,
            mentions: [executor, participante]
          })
          console.log(`[ANTI-ROUBO] Golpe bloqueado em ${groupId}`)
        } catch (e) {
          console.error('[ANTI-ROUBO] Erro:', e)
        }
      }
    }


// --- WELCOME ---
const welcome = configGp[0]?.welcome;
if (!welcome?.ativo) return;

const groupDesc = mdata.desc || '';
let ppUser = await pegarFotoPerfil(shizuku, participante);

const substituir = (txt = '') => txt
.replace(/#hora#/g, time)
.replace(/#nomedogp#/g, mdata.subject)
.replace(/#numerodele#/g, '@' + participante.split('@')[0])
.replace(/#numerobot#/g, shizuku.user.id.split(':')[0])
.replace(/#prefixo#/g, configGp[0].multiprefix? configGp[0].prefixos[0] : setting.prefix)
.replace(/#descrição#/g, groupDesc);

/*ENTRADA*/
if (update.action === 'add') {
    const legenda = substituir(welcome.entrar.texto || `Bem-vindo(a) @${participante.split('@')[0]}!`);

    const opcoes = {
        imagem: {
            image: { url: welcome.fundo_api ? `https://shizukuapis.space/api/canvas/welcome?apikey=${SHIZUKU_KEY}&fundo=${encodeURIComponent(welcome.entrar.fundo)}&perfil=${ppUser}&legenda=Seja bem-vindo(a) ao grupo.&titulo=BEM VINDO(A)!` : welcome.entrar.fundo },
            caption: legenda,
            mentions: [participante]
        },
        gif: {
            video: { url: welcome.entrar.arquivo },
            gifPlayback: true,
            caption: legenda,
            mentions: [participante]
        },
        audio: {
            audio: { url: welcome.entrar.arquivo },
            mimetype: 'audio/mpeg'
        },
        sticker: {
            sticker: { url: welcome.entrar.arquivo }
        },
        default: {
            text: legenda,
            mentions: [participante]
        }
    };

    await shizuku.sendMessage(groupId, opcoes[welcome.entrar.tipo] || opcoes.default);
}

/*SAIDA*/
if (update.action === 'remove') {
    if (!welcome.sair?.texto) return;
    const legenda = substituir(welcome.sair.texto || `Adeus @${participante.split('@')[0]}`);

    const opcoes = {
        imagem: {
            image: { url: welcome.fundo_api ? `https://shizukuapis.space/api/canvas/goodbye?apikey=${SHIZUKU_KEY}&fundo=${encodeURIComponent(welcome.sair.fundo)}&perfil=${ppUser}&legenda=Menos um membro.&titulo=ADEUS!` : welcome.sair.fundo },
            caption: legenda,
            mentions: [participante]
        },
        gif: {
            video: { url: welcome.sair.arquivo },
            gifPlayback: true,
            caption: legenda,
            mentions: [participante]
        },
        audio: {
            audio: { url: welcome.sair.arquivo },
            mimetype: 'audio/mpeg'
        },
        sticker: {
            sticker: { url: welcome.sair.arquivo }
        },
        default: {
            text: legenda,
            mentions: [participante]
        }
    };

    await shizuku.sendMessage(groupId, opcoes[welcome.sair.tipo] || opcoes.default);
}
  
    } catch (e) {
     console.error(colors.red('[ERRO group-participants.update]:'), e)
     }
    }
    
    if (events["messages.upsert"]) {
      var upsert = events["messages.upsert"]
      require("./shizuku.js")(upsert, shizuku)
    }

    if (events["connection.update"]) {
      const update = events["connection.update"]
      var { connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications } = update

      if (qr && modoQR) {
        console.log(colors.green("\nEscaneie o QR Code abaixo:\n"))
        qrcode.generate(qr, { small: true }) 
        console.log(colors.gray("\nWhatsApp > Aparelhos conectados > Conectar um aparelho\n"))
      }
      
      const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode

      switch (connection) {
        case 'close':
          if (shouldReconnect) {
            if (shouldReconnect == 428) {
              console.log(colors.yellow("[Error: 428] - Conexão caiu, irei ligar novamente..."))
            } else if (shouldReconnect == 401) {
              exec("cd datab && rm -rf shizuku-qr")
              console.log(colors.red("Sessão inválida! Delete a pasta e conecte novamente."))
            } else if (shouldReconnect == 515) {
              console.log(colors.gray("\nRestart necessário para estabilizar."))
            } else if (shouldReconnect == 440) {
              console.log(colors.gray("Conflito de sessão detectado..."))
            } else if (shouldReconnect == 503) {
              console.log(colors.grey("[Error: 503] - Erro desconhecido."))
            } else if (shouldReconnect == 502 || shouldReconnect == 408) {
              console.log(colors.grey("[Error] - Internet instável..."))
            } else {
              console.log(colors.yellow(`[CONEXÃO CLOSED] - Motivo: ${lastDisconnect?.error}`))
            }
            iniciarShizuku()
          }
          break

        case 'connecting':
          console.log(colors.yellow(`[SHIZUKU-BOT] Reconectando - ${date} ${time}`))
          break

        case 'open':
          console.log(banner3.string)
          console.log(banner2.string)
          console.log(colors.green(`〔 - _SHIZUKU-BOT_ - CONECTADA COM SUCESSO... 〕`))
          await shizuku.sendPresenceUpdate("available")
          break
      }
    }

    if (events["creds.update"]) { await saveCreds() }
  })
}

iniciarShizuku().catch(async(e) => {console.log(colors.red("• ERROR: "+e))})

