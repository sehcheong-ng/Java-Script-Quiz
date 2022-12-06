//Get the DOM objects needed
var startBtn = document.getElementById("start")
var questionTitle = document.getElementById("question-title")
var choices = document.getElementById("choices")


//The code block for clicking the start button
//It hides the Start screen and show the questions
//It also create a timer
startBtn.onclick = function() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("questions").style.display = "block";
    var timer = document.getElementById("time")

    timeleft = 60
    timer.innerHTML=timeleft

    //Add countdown timer, once it reach zero it will hide the question and show the end-screen
    var timerInterval = setInterval(function() {
        timer.innerHTML=timeleft
        if (timeleft === 0) {
            clearInterval(timerInterval)
            document.getElementById("questions").style.display = "none";
            var endScreen = document.getElementById("end-screen")
            endScreen.style.display = "block"}

        timeleft -= 1;
    },1000);
}
