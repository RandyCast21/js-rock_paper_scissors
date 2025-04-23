console.log("Hello World!")

function getComputerChoice () {
    let opcionCompu = Math.floor(Math.random() * 3);
    if (opcionCompu == 0) {
        return "Rock";
    } else if (opcionCompu == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice (){
    let opcionHuman = prompt("Bienvenido al juego Piedra, Papel, Tijeras. Ingresa 0 para Piedra, 1 para Papel o 2 para Tijeras");
    if (opcionHuman == 0) {
        return "Rock";
    } else if (opcionHuman == 1) {
        return "Paper";
    } else if (opcionHuman == 2) {
        return "Scissors";
    } else {
        window.alert("Muy gracioso, juegas papel")
        return "Paper";
    }
}


function playRound (humano,computadora) {
    if (humano == computadora) {
        return "Empate. Nadie gana"
    } else if (humano == "Rock" && computadora == "Scissors") {
        humanScore = humanScore + 1;
        return "Humano gana, 1 punto"
    } else if (humano == "Rock" && computadora == "Paper") {
        computerScore = computerScore + 1;
        return "Computadora gana, 1 punto"
    } else if (humano == "Paper" && computadora == "Rock") {
        humanScore = humanScore + 1;
        return "Humano gana, 1 punto"
    } else if (humano == "Paper" && computadora == "Scissors") {
        computerScore = computerScore + 1;
        return "Computadora gana, 1 punto"
    } else if (humano == "Scissors" && computadora == "Paper") {
        humanScore = humanScore + 1;
        return "Humano gana, 1 punto"
    } else if (humano == "Scissors" && computadora == "Rock") {
        computerScore = computerScore + 1;
        return "Computadora gana, 1 punto"
    }
}

humanScore = 0;
computerScore = 0;

function playGame () {
    let x = 0;
    while (x < 5){
        x = x + 1;
        let humano = getHumanChoice();
        let computadora = getComputerChoice();
        console.log(humano)
        console.log(computadora)
        console.log(playRound (humano, computadora));
    }
}

playGame ();
console.log("Puntuación final: ", humanScore, " humano vs ", computerScore, " computadora");