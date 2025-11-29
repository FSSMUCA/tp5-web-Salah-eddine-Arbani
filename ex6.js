let somme_pair = 0
let somme_inpair = 0

for (let i=1; i<=50; i++){
    if (i%2 == 0){
        somme_pair += i;
    }else{
        somme_inpair += i;
    }
}

console.log("somme pair: " + somme_pair)
console.log("somme inpair: " + somme_inpair)