const attackDataset = require('../json/Iliad_Deaths.json');

const attacks = attackDataset.Attacks;

export const getCount = (parameter, value) => {
    let count = 0;
    for (let element in attacks) {
        if (attacks[element][parameter] === value) {
            count ++;
        }
    }
    return count;
}

export const getWounds = () => {
    for (let el in attacks) {
        if (attacks[el].Outcome === "Wound") {
            console.log(attacks[el]);
        }
    }
}
