function sommeIterative(n){
    let somme = 0
    for(let i = 1; i<= n; i++){
        somme += i
    }
    return somme;
}

function sommeRecursive(n){
    if(n == 0){
        return 0;
    }else{
        return (n + sommeRecursive(n-1));
    }
}

let num = Number(prompt("Entrer un nombre pour calculer le sommes des entiers de 1 a ce nombre: "));
console.log("Somme Iterative: ");
console.log(sommeIterative(num));
console.log("Somme Recursive: ");
console.log(sommeRecursive(num));