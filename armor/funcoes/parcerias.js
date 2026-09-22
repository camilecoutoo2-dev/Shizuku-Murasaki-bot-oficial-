const fs = require('fs-extra')

const path = './armor/funcoes/parcerias.json'

const getParceiros = () => {
return JSON.parse(fs.readFileSync(path))
}

const isParceiro = (groupId, numero) => {
let parceiros = getParceiros()
return parceiros[groupId]?.includes(numero)
}

const addParceiro = (groupId, numero) => {
let parceiros = getParceiros()

if(!parceiros[groupId]){
parceiros[groupId] = []
}

if(!parceiros[groupId].includes(numero)){
parceiros[groupId].push(numero)
fs.writeFileSync(path, JSON.stringify(parceiros, null, 2))
return true
}

return false
}

const delParceiro = (groupId, numero) => {
let parceiros = getParceiros()

if(!parceiros[groupId]) return

parceiros[groupId] = parceiros[groupId].filter(n => n !== numero)

fs.writeFileSync(path, JSON.stringify(parceiros, null, 2))
}

const listParceiros = (groupId) => {
let parceiros = getParceiros()
return parceiros[groupId] || []
}

module.exports = {
getParceiros,
isParceiro,
addParceiro,
delParceiro,
listParceiros
}