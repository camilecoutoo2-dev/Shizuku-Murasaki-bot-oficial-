const axios = require('axios');

//INSTADL
async function igDl(url, site, apikey) {
try {
const { data } = await axios.get(site + "/api/downloads/instagram-video", {
	  params: { url, apikey }});

if(data?.result[0]?.video) {
return {
	video: data?.result[0]?.video,
	thumb: data?.result[0]?.thumbnail
	}
 }
} catch (e) {
console.log(e)
return 
  }
 }
module.exports = { igDl };