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

    for (var element of questionList)
        questionTitle.innerText = element.question
        choices.innerHTML = 
        `
        <ul>
            <li><input id="btn1" type="button">${element.choice[0]}</li>
            <li><input id="btn2" type="button">${element.choice[1]}</li>
            <li><input id="btn3" type="button">${element.choice[2]}</li>
            <li><input id="btn4" type="button">${element.choice[3]}</li>
        </ul>`

        for (i=1; i<5; i++) {
            btn = `btn${i}`
            console.log(btn)
            var selection = document.getElementById(btn)
            selection.onclick = function(){
                console.log(selection.innerText)
            }

        }


        // var selections = document.getElementsByTagName("input")
        // console.log(selections)




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