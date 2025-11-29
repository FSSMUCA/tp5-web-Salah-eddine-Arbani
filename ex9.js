function factorielle(n){
    if (n == 0){
        return 1;
    }else{
        return (n * factorielle(n-1));
    }
}

let num = Number(prompt("Entrer une valeur: "));
console.log(factorielle(num) + " est le factorielle de " + num);