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



var 육군 = "18개월"
var 해군 = "20개월"
var 공군 = "22개월"
var 해병대 = "18개월"
var 사회복무요원 = "21개월"
var 의경해경 = "18개월"
var 소방원 = "20개월"