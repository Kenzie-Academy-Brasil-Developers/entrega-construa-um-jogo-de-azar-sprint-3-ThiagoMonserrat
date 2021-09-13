document.querySelector("#joquempo").addEventListener("click", function () {
    document.querySelector(".rockPaperScissors").style.display = "block";
    document.querySelector(".niquel").style.display = "none";
});

document.querySelector(".rockPaperScissors div").addEventListener("click", function(event) {
    if(event.target.tagName === "IMG" || event.target.tagName === "FIGCAPTION"){
        const options = document.querySelectorAll(".rockPaperScissors figure");
        let optionPlayer = event.path[1].cloneNode(true);
        let optionComputer = options[parseInt(Math.random() * (3))].cloneNode(true);
        Joquempo(optionPlayer, optionComputer);
    }
});
function Joquempo(optionPlayer, optionComputer){
    const result = document.querySelector(".rockPaperScissors .result");
    document.querySelector("main").style.overflow = "hidden";
    result.classList.add("display--flex");
    const textResult = result.querySelector("h3");
    textResult.textContent = ResultJoquempo(optionPlayer.className, optionComputer.className);
    result.querySelector("div").textContent = "";
    optionPlayer.querySelector("figcaption").textContent = "Você";
    optionComputer.querySelector("figcaption").textContent = "Eu";
    result.querySelector("section").scrollTop = 0;
    result.querySelector("div").appendChild(optionPlayer);
    result.querySelector("div").appendChild(optionComputer);
    result.querySelector("button").textContent = "Reset";
    result.querySelector("button").addEventListener("click", function () {
        result.classList.remove("display--flex");
        result.querySelector("div").textContent = "";
        document.querySelector("main").style.overflow = "auto";
    });
}
function ResultJoquempo(optionPlayer, optionComputer){
    if(optionPlayer === optionComputer){
        return "Empate, tente de novo!!";
    }
    else{
        switch(optionPlayer){
            case "pedra":
                if(optionComputer === "papel"){
                    return "Não foi dessa vez !!!";
                }
                else{
                    return "Você esta com sorte !!";
                }
            break;
            case "papel":
                if(optionComputer === "tesoura"){
                    return "Não foi dessa vez !!!";
                }
                else{
                    return "Você esta com sorte";
                }
            break;
            case "tesoura":
                if(optionComputer === "pedra"){
                    return "Não foi dessa vez !!!";
                }
                else{
                    return "Você esta com sorte"
                }
            break;
        }
    }
}
