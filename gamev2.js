
//START SECTION: ACTIVATE POINT COUNTER BUTTON
let clicks = 0;
const button1 = document.getElementById("pressButton");
function displayCounter() {
    clicks++;
    document.querySelector("#displayCount").innerHTML = clicks;
}  
button1.disabled = true
button1.onclick = displayCounter;
//END SECTION: ACTIVATE POINT COUNTER BUTTON

//START SECTION: START TIMER
let count = 5;
let timer = 1000;
let timeArray = [];
const startTimer = document.getElementById("startTimeButton");
document.querySelector("#timer").innerHTML = count + " Seconds";

function timeStart() {
    button1.disabled = false;
    const myTimeout = setTimeout(countDown,timer);
    if(count<=0) {
        button1.disabled = true
    }
    timeArray.push(myTimeout);
    if (timeArray.length>1) {
        clearTimeout(myTimeout)
    }


    function countDown() {
    count--
    document.querySelector("#timer").innerHTML = count + " Seconds"
    if(count > 0) {
        setTimeout(countDown,timer)
    }
    if(count<=0) {
        button1.disabled = true
    }
    }
    return true // *NOTE A1 -return true: for reset button if reset in middle of countdown 
}
startTimer.onclick = timeStart
//END SECTION: START TIMER

//START SECTION: RESET GAME BUTTON
const resetButton = document.getElementById("resetButton");
function resetGame() {
    if(timeStart) { //Note A1 - for reset button if reset in middle of countdown 
        clearTimeout(myTimeout)
    }

    count = 5
    clicks = 0
    document.getElementById("timer").innerHTML = `${count} Seconds`
    document.getElementById("displayCount").innerHTML = `${clicks}`
    button1.disabled = true
}

function reloadPage() {
    window.location.reload()
}

resetButton.onclick = reloadPage;
//END SECTION: RESET GAME BUTTON

