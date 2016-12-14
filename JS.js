/**
 * Created by Midori on 12/13/2016.
 */
// function to calculate the result of the survey

// initialize variables for each choice's score
// If you add more choices and outcomes, you must add another variable here.
function tabulateAnswers()
var c1score = 0;
var c2score = 0;
var c3score = 0;
var c4score = 0;


// get a list of the radio inputs on the page
var choices = document.getElementsByTagName('input');
// loop through all the radio inputs
for (var i=0; i<choices.length; i++) {
    // if the radio is checked..
    if (choices[i].checked) {
        // add 1 to that choice's score
        if (choices[i].value == 'c1') {
            c1score = c1score + 1;
        }
        if (choices[i].value == 'c2') {
            c2score = c2score + 1;
        }
        if (choices[i].value == 'c3') {
            c3score = c3score + 1;
        }
        if (choices[i].value == 'c4') {
            c4score = c4score + 1;
        }
        // If you add more choices and outcomes, you must add another if statement below.
    }
}

// Find out which choice got the highest score.
// If you add more choices and outcomes, you must add the variable here.
var maxScore = Math.max(c1score,c2score,c3score,c4score);

// Display answer corresponding to that choice
var answerBox = document.getElementById('answer');{
    if (c1score == maxScore) { // If user chooses the first choice the most, this outcome will be displayed.
        answerBox.innerHTML = 'Magic Kingdom';
    }
    if (c2score == maxScore) { // If user chooses the second choice the most, this outcome will be displayed.
        answerBox.innerHTML = 'Epcot';
    }
    if (c3score == maxScore) { // If user chooses the third choice the most, this outcome will be displayed.
        answerBox.innerHTML = 'Holliwood Studios';
    }
    if (c4score == maxScore) { // If user chooses the fourth choice the most, this outcome will be displayed.
        answerBox.innerHTML = 'Animal Kingdom';
    }
    // If you add more choices, you must add another response below.
}

// program the reset button
function resetAnswer() {
    var answerbox = document.getElementById('answer');
    answerbox.innerHTML = 'Your result will show up here!';
}
