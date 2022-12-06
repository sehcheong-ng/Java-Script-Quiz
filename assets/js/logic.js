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
}
