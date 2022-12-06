var startBtn = document.getElementById("start")
var questionTitle = document.getElementById("question-title")
var choices = document.getElementById("choices")

startBtn.onclick = function() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("questions").style.display = "block";
    var timer = document.getElementById("time")
    timeleft = 3
    timer.innerHTML=timeleft

    var timerInterval = setInterval(function() {
        timer.innerHTML=timeleft
        if (timeleft === 0) {
            clearInterval(timerInterval)
            // questions.style.display = "none";
            document.getElementById("questions").style.display = "none";
            var endScreen = document.getElementById("end-screen")
            endScreen.style.display = "block"}

        timeleft -= 1;
    },1000);

    for (var element of questionList)
        questionTitle.innerText = element.question
        choices.innerHTML = 
        `
        <ul>
            <li><input type="button">${element.choice[0]}</li>
            <li><input type="button">${element.choice[1]}</li>
            <li><input type="button">${element.choice[2]}</li>
            <li><input type="button">${element.choice[3]}</li>
        </ul>`



}


// start-screen disappear
// questions appears
// start a for loop and counter
// initiate score 
// if cant complete before counter -> score = zero

// question list
// each q with 4 selections and 1 answer 
// makes the btn cover whole block
// if input btn != element.answer -> 'Wrong answer, try again, quick!'
// Time - 10