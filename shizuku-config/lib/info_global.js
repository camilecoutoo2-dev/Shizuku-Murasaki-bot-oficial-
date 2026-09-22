exports.listLanguages = (prefix) => {
return `╭━─━─━─≪✠≫─━─━─━╮
┆➥ 🌍 *Idiomas disponíveis para:
┆➥ ${prefix}gtts e ${prefix}tradutor:*
╰━─━─━─≪✠≫─━─━─━╯
╭━─━─━─≪✠≫─━─━─━╮
┆
┆➥ af • Afrikaans
┆➥ sq • Albanian 
┆➥ ar • Arabic
┆➥ hy • Armenian
┆➥ bn • Bengali
┆➥ bs • Bosnian
┆➥ ca • Catalan
┆➥ zh • Chinese
┆➥ hr • Croatian
┆➥ cs • Czech
┆➥ da • Danish
┆➥ nl • Dutch
┆➥ en • English
┆➥ eo • Esperanto
┆➥ et • Estonian
┆➥ tl • Filipino
┆➥ fi • Finnish
┆➥ fr • French
┆➥ de • German
┆➥ el • Greek
┆➥ gu • Gujarati
┆➥ hi • Hindi
┆➥ hu • Hungarian
┆➥ is • Icelandic
┆➥ id • Indonesian
┆➥ it • Italian
┆➥ ja • Japanese
┆➥ jw • Javanese
┆➥ kn • Kannada
┆➥ km • Khmer
┆➥ ko • Korean
┆➥ la • Latin
┆➥ lv • Latvian
┆➥ lt • Lithuanian
┆➥ mk • Macedonian
┆➥ ml • Malayalam
┆➥ mr • Marathi
┆➥ my • Myanmar
┆➥ ne • Nepali
┆➥ no • Norwegian
┆➥ pl • Polish
┆➥ pt • Portuguese
┆➥ pa • Punjabi
┆➥ ro • Romanian
┆➥ ru • Russian
┆➥ sr • Serbian
┆➥ si • Sinhala
┆➥ sk • Slovak
┆➥ sl • Slovenian
┆➥ es • Spanish
┆➥ su • Sundanese
┆➥ sw • Swahili
┆➥ sv • Swedish
┆➥ ta • Tamil
┆➥ te • Telugu
┆➥ th • Thai
┆➥ tr • Turkish
┆➥ uk • Ukrainian
┆➥ ur • Urdu
┆➥ vi • Vietnamese
┆➥ cy • Welsh
┆➥ xh • Xhosa
┆➥ yi • Yiddish
┆➥ zu • Zulu
╰━─━─━─≪✠≫─━─━─━╯
> 🔍 *Fonte:* https://cloud.google.com/translate/docs/languages
`
};

exports.bemvindo = (prefix) => {
return `Este comando é para informar, como você deve ativar o bem vindo, e lembrando, esse bemvindo, contém uma legenda diferente, a cada grupo que for colocado, o bemvindo2 tem essa função também.
–
• As diferenças entre os bem vindos é que o bemvindo tem foto e o bemvindo2 não contém foto em si somente a mensagem.
–
• Para desativar ou ativar o *bemvindo ou bemvindo2*, use os números 0 ou 1. 
    • Exemplo de como ativar e desativar o recurso em seu grupo: 
        • *Ativando o recurso:* ${prefix}bemvindo 1 ou ${prefix}bemvindo2 1, ative somente um dos dois para evitar flood em seu grupo.
        • *Desativando o recurso:* ${prefix}bemvindo 0 ou ${prefix}bemvindo2 0, caso um dos 2 esteja ativado.
–
• Para realizar a troca do fundo da imagem do bem vindo, é só mandar uma foto no WhatsApp, retangular e marcar ela com o comando *${prefix}fundobemvindo* ou se quer trocar a do saiu, use *${prefix}fundosaiu*
       • *Observação:* Os comandos para mudar o fundo é somente disponibilizado o uso ao proprietário(s) do bot.
–
• *Parâmetros usados que podem ser usados para personalizar sua mensagem:*
*#hora#* => Com essa definição inserida em seu argumento, irá mostrar a hora no momento exato que foi realizada a entrada ou saída do integrante do grupo.
*#nomedogp#* => Usada para mostrar o nome do grupo em seu texto de bem-vindo.
*#numerodele#* => Tem a função de mostrar o número do integrante que entrou ou saiu do grupo.
*#prefixo#* => Vai aparecer qual o símbolo que você está utilizando no bot, para fazer ele funcionar.
*#descrição#* => Com essa definição irá mostrar a descrição do grupo ou regras como você preferir chamar.
–
Para definir uma legenda de quando um integrante sair ou entrar em seu grupo, veja os exemplos baixo:
• Adicionar a legenda ou mensagem para dar as saudações ao novo integrante de forma personalizada: 
    • Caso esteja usando o *bem-vindo* (com foto), use: *${prefix}legendabv sua mensagem..*
    • Usando o *bem-vindo2* (sem foto)? Use *${prefix}legendabv2 sua mensagem..*
• Definir uma legenda ou mensagem para a saída de um integrante do grupo:
    • Caso esteja usando o *bem-vindo* (com foto), use: *${prefix}legendasaiu sua mensagem..*
    • Usando o *bem-vindo2* (sem foto)? Use *${prefix}legendasaiu2 sua mensagem..*`
}

exports.infoOwner = (prefix, NickDono, numerodn, NomeDoBot, sender) => {
return `╭─❍「 𝘿𝙤𝙣𝙤 𝙊𝙛𝙞𝙘𝙞𝙖𝙡 」
│
│ 𝙎𝙖𝙪𝙙𝙖çõ𝙚𝙨, @${sender.split("@")[0]}...
│
│ 𝘼𝙦𝙪𝙞 𝙚𝙨𝙩ã𝙤 𝙖𝙨 𝙞𝙣𝙛𝙤𝙧𝙢𝙖çõ𝙚𝙨
│ 𝙙𝙚 𝙦𝙪𝙚𝙢 𝙢𝙖𝙣𝙩é𝙢 𝙤
│ ${NomeDoBot} 𝙨𝙤𝙗 𝙘𝙤𝙣𝙩𝙧𝙤𝙡𝙚.
│
│ ⤷ 𝙉𝙤𝙢𝙚: ${NickDono}
│ ⤷ 𝙉ú𝙢𝙚𝙧𝙤: wa.me/${numerodn.split("@")[0]}
│
╰─❍ 𝙊 𝙧𝙚𝙨𝙩𝙤 é 𝙖𝙥𝙚𝙣𝙖𝙨 𝙗𝙖𝙨𝙩𝙞𝙙𝙤𝙧.`;
}

exports.configbot = (prefix) => {
return `*C​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​OMO CONFIGURAR O BOT, PRA SER DONO:*
–
Primeiro ligue o bot no termux, e vá para o WhatsApp do bot em algum privado, utilize os seguintes comandos.
*Obs:* Pode por letras modificadas também se você quiser!
–
• *1)* Para alterar o nome do bot, use o seguinte comando:
     • ${prefix}Nome-bot Nome que deseja colocar em seu bot
–
• *2)* Para alterar o nick do dono do bot, use o seguinte comando:
     • ${prefix}Nick-dono Seu nick aqui
–
• *3)* Configure o número do dono, com o seguinte comando:
     • ${prefix}numero-dono 559391103822
*Obs:* O número tem que ser junto, e não pode conter o símbolo de + nem - e não pode ter o 9 da operadora, tem que ser o número idêntico ao seu do whatsapp.
–
• *4)* Configure o prefixo que você deseja no bot, usando o seguinte comando:
     • ${prefix}prefixo-bot #
*Obs:* Pode por qualquer símbolo, se o seu símbolo for ${prefix} ele vai passar a ser # de acordo com o que você mudou.
–
Boa sorte! Dúvidas? Entre em contato com o criador, usando: ${prefix}criador`
}
