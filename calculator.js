const armyBtn = $(".armyBtn");
function handleClick(event) {
    if (event.target.classList[1] === "clicked") {
        event.target.classList.remove("clicked");
        armyBtn.style.backgroundColor = "#E2E2E2";
        armyBtn.style.color = "black";
    } else {
        for (let i = 0; i < armyBtn.length; i++) {
            armyBtn[i].classList.remove("clicked");
        }
    }
    event.target.classList.add("clicked");
}

// army 버튼 목록 중, clicked가 달린 버튼을 찾아내어서 그 버튼의 text값을 리턴함.
function getSelected() {
    for (let item of armyBtn) // for of 구문에 관한 문서: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of
        if (item.className.includes("clicked")) return item.value;
    return "";
}

function init() {
    for (let i = 0; i < armyBtn.length; i++) {
        armyBtn[i].addEventListener("click", handleClick);
    }
}

// https://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates
function dayBetweenDate(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

    const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
    return diffDays;
}

init();