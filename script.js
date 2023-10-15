const arrow = document.querySelector(".arrow img");
const dateEle = document.querySelector("#date");
const monthEle = document.querySelector("#month");
const yearEle = document.querySelector("#year");
const wapperEle = document.querySelector(".wapper");
const pop = document.querySelector(".pop");
const yearResultEle = document.querySelector(".year_show");
const monthResultEle = document.querySelector(".month_show");
const dayResultEle = document.querySelector(".day_show");

dateEle.value = 12;
monthEle.value = 06;
yearEle.value = 1994;

function checkInput() {
    if (dateEle.value.length >= 1 && monthEle.value.length >= 1 && yearEle.value.length >= 4) {
        let date = new Date().getFullYear();
        if (dateEle.value <= 31 && monthEle.value <= 12 && yearEle.value < date) {
            return "currect";
        } else {
            return "incurrect";
        }
    } else {
        return "incurrect";
    }
}

function showError() {
    pop.style.right = "20px";
    dateEle.style.borderColor = "red";
    monthEle.style.borderColor = "red";
    yearEle.style.borderColor = "red";
    wapperEle.classList.remove("border_cut");

    setInterval(function () {
        pop.style.right = "-350px";
        dateEle.style.borderColor = "black";
        monthEle.style.borderColor = "black";
        yearEle.style.borderColor = "black";
    }, 5000);
}

// function updateAge() {
//     let userDate = dateEle.value, userMonth= monthEle.value, userYear = yearEle.value;
//     let d = new Date();
//     let currYear = d.getFullYear();
//     let currMonth = d.getMonth();
//     let currDate = d.getDate();

//     console.log("age is: "+ userDate + ":" + userMonth +":" + userYear);
//     console.log("age is: "+ userDate + ":" + (currMonth) +":" + (currYear));

//     // if (currDate > userDate) currDate - userDate;
//     // if (currMonth > userMonth) currMonth - userMonth;

//     // console.log("age is: "+ userDate + ":" + (currMonth) +":" + (currYear - userYear));
//     // console.log("age is: "+ Math.abs(currDate - userDate) + ":" + Math.abs(currMonth - userMonth) +":" + Math.abs(currYear - userYear));

// } 

function updateAge(){
    var d1 = dateEle.value;
    var m1 = monthEle.value;
    var y1 = yearEle.value;

    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if(d1 > d2){
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if(m1 > m2){
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;
    yearResultEle.innerHTML = y + " year";  
    monthResultEle.innerHTML = m + " months";
    dayResultEle.innerHTML = d + " day";
}

arrow.addEventListener("click", () => {
    let ft = checkInput();
    if (ft == "incurrect") {
        showError()
        return;
    }

    wapperEle.classList.add("border_cut");
    updateAge();
})