// trivia questions (forms?) with multiple choice or true/false
// limited amount of time for each question
// if time runs out, correct answer is displayed for that question
    // without user input, after a few seconds, next question starts
// cannot pick more than one answer per question
// countdown timer displayed
// one question displayed at a time
// after last question display grade and option to start over


// we need
    // question data (list of questions and answers)    √
        // object literals for questions (an array of them?)    √
    // user input to choose answers for quiz
    // a 'start' button that begins the game
    // a 'start over' button at the end of the game that restarts game
    // a timer for each question
    // a right/wrong display for each question
    // a grade display at end of game
    // a method to cycle through questions (on click or timeout)

var parisGun = {
    question: "True or False: 'The Paris Gun' was a German artillery piece that was able to hit Paris from its position behind the Western Front's German line (about 75 miles distance).",
    answers: {
        a: "True",
        b: "False"
    },
    correctAnswer: "True",
    moreInfo: "'The Paris Gun' had to fire successively larger shells each time it was fired due to the barrel diameter increasing with each shot. The shells fired by this gun reached the greatest height of any human-made projectile prior to first successful v-2 rocket flight test in 1942"
};

var poisonGas = {
    question: "True or False: The use of poison gas was technically a war crime during World War I.",
    answers: {
        a: "True",
        b: "False"
    },
    correctAnswer: "Answer: True",
    moreInfo: "The use of poision gas violated the agreed upon rules of war outlined in the 1899 Hague Convention"
};


function displayQuestion(questionObject) {
    $('#question').html(questionObject.question);
    $('#true-btn').html(questionObject.answers.a);
    $('#false-btn').html(questionObject.answers.b);
}

function displayAnswer(questionObject) {
    $('#correct-answer').html(questionObject.correctAnswer);
    $('#more-info').html(questionObject.moreInfo);
}


$('#start-button').click(function() {
    $('header').css("display", "none");
    displayQuestion(parisGun);
    $('#question-div').show();
})

