const fs = require('fs-extra');

let horarios = {};
const horariosPath = './datab/grupos/horarios.json';

if (fs.existsSync(horariosPath)) {
    try {
        horarios = JSON.parse(fs.readFileSync(horariosPath));
    } catch (e) {
        console.error("Erro ao carregar horários:", e);
        horarios = {};
    }
}

const salvarHorarios = () => {
    fs.writeFileSync(horariosPath, JSON.stringify(horarios, null, 2));
};

const definirFechamento = (from, horario) => {//shizukuh!!???
    horarios[from] = horarios[from] || {};
    horarios[from].fechamento = horario;
    salvarHorarios();
};
//shizukuh mano!!
const definirAbertura = (from, horario) => {
    horarios[from] = horarios[from] || {};
    horarios[from].abertura = horario;
    salvarHorarios();
};

const removerHorarios = (from) => {
    if (horarios[from]) {
        delete horarios[from];
        salvarHorarios();
    }
};

module.exports = { removerHorarios, definirAbertura, definirFechamento, salvarHorarios, horarios };
