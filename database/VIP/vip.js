
const fs = require("fs-extra");
const local = "./database/VIP/vips.json";

function loadVIP() {
    if (!fs.existsSync(local)) fs.writeFileSync(local, JSON.stringify({}));
    return JSON.parse(fs.readFileSync(local));
}

function saveVIP(data) {
    fs.writeFileSync(local, JSON.stringify(data, null, 2));
}

function parseTime(time) {
    let regex = /^(\d+)(d|h|min)$/;
    let match = time.match(regex);
    if (!match) return null;

    let num = parseInt(match[1]);
    let type = match[2];

    let ms = {
        d: 86400000,
        h: 3600000,
        min: 60000
    };

    return Date.now() + (num * ms[type]);
}

function addVIP(user, tempo) {
    let data = loadVIP();
    let expire = parseTime(tempo);
    if (!expire) return false;

    data[user] = {
        expire,
        added: Date.now()
    };

saveVIP(data);
return expire;
}

function isVIP(user) {
let data = loadVIP();
if (!data[user]) return false;
if(Date.now() > data[user].expire) {
delete data[user];
saveVIP(data);
return false;
}
return true;
}

function getExpire(user) {
    let data = loadVIP();
    if (!data[user]) return null;
    return data[user].expire;
}

function removeVIP(user) {
    let data = loadVIP();
    delete data[user];
    saveVIP(data);
}

module.exports = {
    addVIP,
    isVIP,
    getExpire,
    removeVIP
};