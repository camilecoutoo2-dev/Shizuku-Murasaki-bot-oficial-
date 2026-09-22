const fs = require("fs-extra")
const saldo = JSON.parse(fs.readFileSync("./shizuku-config/media/dinheiro.json"));

const AdicionarUser = (sender) => {
const obj = {id: sender, saldo : 500}
saldo.push(obj)
fs.writeFileSync('./shizuku-config/media/dinheiro.json', JSON.stringify(saldo))
}

const AdicionarSaldo = (sender, amount) => {
let position = false
Object.keys(saldo).forEach((i) => {
if (saldo[i].id === sender) {
position = i
}
})
if (position !== false) {
saldo[position].saldo += amount
fs.writeFileSync('./shizuku-config/media/dinheiro.json', JSON.stringify(saldo))
}
}

const VerSaldo = (sender) => {
let position = false
Object.keys(saldo).forEach((i) => {
if (saldo[i].id === sender) {
position = i
}
})
if (position !== false) {
return saldo[position].saldo
}
} 

const ConfirmarPagamento = (sender, amount) => {
let position = false
Object.keys(saldo).forEach((i) => {
if (saldo[i].id === sender) {
position = i
}
})
if (position !== false) {
saldo[position].saldo -= amount
fs.writeFileSync('./shizuku-config/media/dinheiro.json', JSON.stringify(saldo))
}
}

module.exports = { 
   AdicionarSaldo, 
   AdicionarUser, 
   VerSaldo, 
   ConfirmarPagamento
  }
