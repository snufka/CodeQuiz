var initialsEL = document.querySelector("#initials");
var finalScoreEL = document.querySelector("#final-score");
var highscoresFormEL = document.querySelector("#highscoresForm");

function renderHighScore() {
    initialsEL.innerHTML = "";
    initialsList = [];

    for (var n = 0; n < initialsList.length; n++) {
        var initials = initialsList;

        var li = document.createElement("li");
        li.textContent = initials;
        initialsList.appendChild(li);
        console.log(initials);

    }
}
function storeHighScore() {
    localStorage.setItem("initialsList", JSON.stringify(initials));
}


highscoresFormEL.addEventListener("submit", function (event) {
    event.preventDefault();
    //location.replace("./Highscores.html")
    console.log(initialsText);


    var initialsText = initials.value.trim();

    if (initialsText === "") {
        return;
    }

    initialsList.push(initialsText);


    storeHighScore();
    renderHighScore();
});

















