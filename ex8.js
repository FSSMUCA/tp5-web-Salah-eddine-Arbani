function totalAvecRemise(total, remise){
    return (total - (total * remise / 100));
}

let total = Number(prompt("Saisir un total HT: "));
let remise = Number(prompt("Saisir une remise en %: "));

console.log("Total final: " + totalAvecRemise(total, remise))