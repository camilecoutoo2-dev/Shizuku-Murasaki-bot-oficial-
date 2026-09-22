const axios = require("axios");

async function baixarTikTok(tipo, campo, q) {
    try {
        if (!q) throw new Error("Link do TikTok não fornecido");

        const res = await axios.post('https://www.tikwm.com/api/', {}, {
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Accept-Language': 'pt-BR,pt;q=0.9',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Origin': 'https://www.tikwm.com',
                'Referer': 'https://www.tikwm.com/',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
                'X-Requested-With': 'XMLHttpRequest'
            },
            params: { url: q, count: 12, cursor: 0, web: 1, hd: 0 }
        });

        const data = res.data.data;
        if (!data || !data[campo]) throw new Error("Erro ao obter dados do TikTok");

        return {
            tipo, 
            url: `https://www.tikwm.com${data[campo]}`
        };

    } catch (e) {
        throw new Error(e.message || "Erro desconhecido");
    }
}

async function buscarTtk(query, tipo) {
    if (!query) throw new Error('Título ou palavra-chave é necessário');

    try {
        const res = await axios.post('https://tikwm.com/api/feed/search', {
            keywords: query,
            count: 12,
            cursor: 0,
            web: 1,
            hd: 1
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'X-Requested-With': 'XMLHttpRequest',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36',
                'Referer': 'https://www.tikwm.com/'
            }
        });

        const videos = res.data.data.videos;
        if (!videos || !videos.length) throw new Error('Nenhum vídeo encontrado');

        const randomIndex = Math.floor(Math.random() * videos.length);
        const data = videos[randomIndex];

        return tipo === 'video'
            ? `https://tikwm.com${data.play}`
            : `https://tikwm.com${data.music}`;

    } catch (err) {
        throw new Error(err.message || 'Erro ao buscar vídeo');
    }
}

module.exports = { baixarTikTok, buscarTtk };
