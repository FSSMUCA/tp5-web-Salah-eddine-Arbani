function verifierMotDePasse(mdp){
    if (mdp.length >= 8 && mdp.includes("@")) {
        return true;
    } else {
        return false;
    }
}

let motDePasee = String(prompt("Entrer votre mot de pass: "));
if (verifierMotDePasse(motDePasee)){
    console.log("Mot de passe valide")
}else{
    console.log("Mot de passe non valide")
}

// fonction .includes("X") pour verifier l'existance d'un character