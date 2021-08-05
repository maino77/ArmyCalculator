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
    for(let i=0; i< armyBtn.length; i++){
        if(armyBtn[i] === armyBtn[i]){
            
        }
    }
}

init();



// var 육군 = "18개월 = 1 year 6 month"
// var 해군 = "20개월 = 1 year 8 month"
// var 공군 = "22개월 = 1 year 10 month"
// var 해병대 = "18개월 = 1 year 6 month"
// var 사회복무요원 = "21개월 = 1 year 9 month"
// var 의경해경 = "18개월 = 1 year 6 month"
// var 소방원 = "20개월 = 1 year 8 month"