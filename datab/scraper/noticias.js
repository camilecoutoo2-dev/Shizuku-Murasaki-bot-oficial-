
const axios = require('axios');

let usados = [];

async function g1(Shizukusite, apikey) {
  try {
    const { data } = await axios.get(Shizukusite + "/api/noticias/g1?apikey=" + apikey);
    const lista = data?.noticias;

    if (!lista || lista.length === 0) return null;

    if (usados.length >= lista.length) {
      usados = [];
    }

    let index;
    do {
      index = Math.floor(Math.random() * lista.length);
    } while (usados.includes(index));

    usados.push(index);

    const i = lista[index];

    return {
      titulo: i.titulo,
      desc: i.descricao,
      link: i.link,
      data: i.data,
      img: i.imagem
    };

  } catch (e) {
    console.log("Erro nos resultados da API", e);
    return null;
  }
}

async function Noticias(categoria, Shizukusite, apikey) {
    if (!categoria) return null;

    try {
        const url = `${Shizukusite}/api/noticias/${encodeURIComponent(categoria.trim())}?apikey=${apikey}`;
       
        const { data } = await axios.get(url, { timeout: 10000 });

        if (!data?.status || !Array.isArray(data?.result) || data.result.length === 0) {
            console.error("⚠️ Resposta inválida ou vazia da API:", data);
            return null;
        }

        const { result } = data;
        const noticiaAleatoria = result[Math.floor(Math.random() * result.length)];

        return {
            categoria: categoria.trim(),
            fonte: data.fonte || "Fonte desconhecida",
            titulo: noticiaAleatoria.title || "Sem título",
            desc: noticiaAleatoria.description || "Sem descrição disponível",
            content: noticiaAleatoria.content || "Conteúdo indisponível",
            link: noticiaAleatoria.url || "#",
            image: noticiaAleatoria.image || null,
            publicado: noticiaAleatoria.publishedAt || "Data não informada",
        };

    } catch (error) {
        console.error(`❌ Erro ao buscar notícias (${categoria}):`, error.message);
        return null;
    }
}


async function Noticias2(categoria, Shizukusite, apikey) {
	try {
		if(!categoria) return null;
		const { data } = await axios.get(
		  Shizukusite+`/api/noticias/${encodeURIComponent(categoria?.trim())}?apikey=${apikey}`, { timeout: 10000});
		
		if(!data?.status) return null;
		
		const { result } = data;
		
		const jpzinh = result[Math.floor(Math.random() * result.length)];
		
		
		return {
			categoria: categoria?.trim(),
			titulo: jpzinh?.title,
			desc: jpzinh?.description,
		    publicado: jpzinh?.published,
		    link: jpzinh?.link
		};
	} catch (e) {
		console.log(`Erro ao buscar notícias `);
		return null;
	}
}

module.exports = { g1, Noticias, Noticias2 };