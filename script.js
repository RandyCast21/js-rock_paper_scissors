console.log("Hello World!")

function getComputerChoice () {
    let opcionCompu = Math.floor(Math.random() * 3);
    if (opcionCompu == 0) {
        return "Piedra";
    } else if (opcionCompu == 1) {
        return "Papel";
    } else {
        return "Tijeras";
    }
}

function playRound (humano,computadora) {
    if (humano == computadora) {
        return "Empate. Nadie gana"
    } else if (humano == "Piedra" && computadora == "Tijeras") {
        humanScore = humanScore + 1;
        return "Humano gana, 1 punto"
    } else if (humano == "Piedra" && computadora == "Papel") {
        computerScore = computerScore + 1;
        return "Computadora gana, 1 punto"
    } else if (humano == "Papel" && computadora == "Piedra") {
        humanScore = humanScore + 1;
        return "Humano gana, 1 punto"
    } else if (humano == "Papel" && computadora == "Tijeras") {
        computerScore = computerScore + 1;
        return "Computadora gana, 1 punto"
    } else if (humano == "Tijeras" && computadora == "Papel") {
        humanScore = humanScore + 1;
        return "Humano gana, 1 punto"
    } else if (humano == "Tijeras" && computadora == "Piedra") {
        computerScore = computerScore + 1;
        return "Computadora gana, 1 punto"
    }
}

humanScore = 0;
computerScore = 0;
contadorRondas = 0;

let eleccionDiv = document.querySelector("#eleccionDiv");
let resultadoDiv = document.querySelector("#resultado");
let ganadorDiv = document.querySelector("#ganador");

eleccionDiv.addEventListener("click", (e) => {
    let target = e.target;

    switch(target.id){
        case "Piedra":
            resultadoDiv.textContent = playRound("Piedra",getComputerChoice());
            console.log("Puntuación ronda: ", humanScore, " humano vs ", computerScore, " computadora");
            contadorRondas += 1;
            break;

        case "Papel":
            resultadoDiv.textContent = playRound("Papel", getComputerChoice());
            console.log("Puntuación ronda: ", humanScore, " humano vs ", computerScore, " computadora");
            contadorRondas += 1;
            break;

        case "Tijeras":
            resultadoDiv.textContent = playRound("Tijeras", getComputerChoice());
            console.log("Puntuación ronda: ", humanScore, " humano vs ", computerScore, " computadora");
            contadorRondas += 1;
            break;
    }

    if (contadorRondas >= 5){
        let ganadorMatch = "";
        let mayorPuntaje = "";
        if (humanScore > computerScore){
            ganadorMatch = "Humano";
            mayorPuntaje = humanScore;
        } else if (humanScore < computerScore) {
            ganadorMatch = "Computadora";
            mayorPuntaje = computerScore;
        } else {
            ganadorMatch = "Empate"
            mayorPuntaje = humanScore
        }

        ganadorDiv.textContent = ganadorMatch + " con " + mayorPuntaje + " puntos";

        contadorRondas = 0
        humanScore = 0
        computerScore = 0
    }

});


