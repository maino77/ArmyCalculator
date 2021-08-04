var armyBtn = document.getElementsByClassName("armyBtn");
var selectDateBtn = document.getElementsByClassName("selectDateBtn");


function handleClick(event) {


    if (event.target.classList[1] === "clicked") {
        event.target.classList.remove("clicked");
    } else {
        for (let i = 0; i < armyBtn.length; i++) {
            armyBtn[i].classList.remove("clicked");
        }
    }
    event.target.classList.add("clicked");
}

function init() {
    for (let i = 0; i < armyBtn.length; i++) {
        armyBtn[i].addEventListener("click", handleClick);
    }
}

init();