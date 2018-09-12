// need timer


// object storing correct answers
var correctAnswers = {
    answer0: "1",
    answer1: "1",
    answer2: "4",
    answer3: "2",
    answer4: "1",
    answer5: "1",
    answer6: "1",
    answer7: "4",
    answer8: "3",
    answer9: "1"
}

// global var list
var userCorrect = 0;
var userIncorrect = 0;
var userUnanswered = 0;

// timer vars
var timeNumber = 90;
var intervalID;

function timerRun() {
    clearInterval(intervalID);
}

// decrement function
function decrement() {
    timeNumber--;
    $('#timer-display').html(timeNumber);
}

// function resets quiz at end
function resetQuiz() {
    userCorrect = 0;
    userIncorrect = 0;
    userUnanswered = 0;
    $(":checked").each(function() {
        $('input[type="radio"]').prop('checked', false);
    })
    $('#grade-div').hide();
    $('main').show();
}

// starts quiz 
$('#start-btn').click(function() {
    $('header').hide();
    $('main').show();
})


// runs grading logic on submit button click
$('#submit-btn').click(function() {
    
    if ($('input[name="question0"]').is(":checked")) {

        if ($('input[name="question0"]:checked').val() === (correctAnswers.answer0)) {
            userCorrect++;
        } 
        if ($('input[name="question0"]:checked').val() != (correctAnswers.answer0)) { 
            userIncorrect++;
        }
    }
    else {
        userUnanswered++;
    }


    if ($('input[name="question1"]').is(":checked")) {

        if ($('input[name="question1"]:checked').val() === (correctAnswers.answer1)) {
            userCorrect++;
        } 
        if ($('input[name="question1"]:checked').val() != (correctAnswers.answer1)) { 
            userIncorrect++;
        }
    }
    else {
        userUnanswered++;
    }


    if ($('input[name="question2"]').is(":checked")) {

        if ($('input[name="question2"]:checked').val() === (correctAnswers.answer2)) {
            userCorrect++;
        } 
        if ($('input[name="question2"]:checked').val() != (correctAnswers.answer2)) { 
            userIncorrect++;
        }
    }
    else {
        userUnanswered++;
    }


    if ($('input[name="question3"]').is(":checked")) {

        if ($('input[name="question3"]:checked').val() === (correctAnswers.answer3)) {
            userCorrect++;
        } 
        if ($('input[name="question3"]:checked').val() != (correctAnswers.answer3)) { 
            userIncorrect++;
        }
    }
    else {
        userUnanswered++;
    }



    if ($('input[name="question4"]').is(":checked")) {

        if ($('input[name="question4"]:checked').val() === (correctAnswers.answer4)) {
            userCorrect++;
        } 
        if ($('input[name="question4"]:checked').val() != (correctAnswers.answer4)) { 
            userIncorrect++;
        }
    }
    else {
        userUnanswered++;
    }



    if ($('input[name="question5"]').is(":checked")) {

        if ($('input[name="question5"]:checked').val() === (correctAnswers.answer5)) {
            userCorrect++;
        } 
        if ($('input[name="question5"]:checked').val() != (correctAnswers.answer5)) { 
            userIncorrect++;
        }
    }
    else {
        userUnanswered++;
    }



    if ($('input[name="question6"]').is(":checked")) {

        if ($('input[name="question6"]:checked').val() === (correctAnswers.answer6)) {
            userCorrect++;
        } 
        if ($('input[name="question6"]:checked').val() != (correctAnswers.answer6)) { 
            userIncorrect++;
        }
    }
    else {
        userUnanswered++;
    }



    if ($('input[name="question7"]').is(":checked")) {

        if ($('input[name="question7"]:checked').val() === (correctAnswers.answer7)) {
            userCorrect++;
        } 
        if ($('input[name="question7"]:checked').val() != (correctAnswers.answer7)) { 
            userIncorrect++;
        }
    }
    else {
        userUnanswered++;
    }



    if ($('input[name="question8"]').is(":checked")) {

        if ($('input[name="question8"]:checked').val() === (correctAnswers.answer8)) {
            userCorrect++;
        } 
        if ($('input[name="question8"]:checked').val() != (correctAnswers.answer8)) { 
            userIncorrect++;
        }
    }
    else {
        userUnanswered++;
    }



    if ($('input[name="question9"]').is(":checked")) {

        if ($('input[name="question9"]:checked').val() === (correctAnswers.answer9)) {
            userCorrect++;
        } 
        if ($('input[name="question9"]:checked').val() != (correctAnswers.answer9)) { 
            userIncorrect++;
        }
    }
    else {
        userUnanswered++;
    }

    // switches page to grading data on submit
    $('main').hide();
    $('#grade-div').show();
    
    // displays grade data
    $('#correct-total').html("Correct: " + userCorrect);
    $('#incorrect-total').html("Incorrect: " + userIncorrect);
    $('#unanswered-total').html("Unanswered: " + userUnanswered);

        console.log("correct " + userCorrect);
        console.log("incorrect " + userIncorrect);
        console.log("unanswered " + userUnanswered);
        

})

// resets quiz on click
$('#reset-btn').click(resetQuiz);

function timeLimitReached() {
    if ($('input[name="question0"]').is(":checked")) {

        if ($('input[name="question0"]:checked').val() === (correctAnswers.answer0)) {
            userCorrect++;
        } 
        if ($('input[name="question0"]:checked').val() != (correctAnswers.answer0)) { 
            userIncorrect++;
        }
    }
    else {
        userUnanswered++;
    }


    if ($('input[name="question1"]').is(":checked")) {

        if ($('input[name="question1"]:checked').val() === (correctAnswers.answer1)) {
            userCorrect++;
        } 
        if ($('input[name="question1"]:checked').val() != (correctAnswers.answer1)) { 
            userIncorrect++;
        }
    }
    else {
        userUnanswered++;
    }


    if ($('input[name="question2"]').is(":checked")) {

        if ($('input[name="question2"]:checked').val() === (correctAnswers.answer2)) {
            userCorrect++;
        } 
        if ($('input[name="question2"]:checked').val() != (correctAnswers.answer2)) { 
            userIncorrect++;
        }
    }
    else {
        userUnanswered++;
    }


    if ($('input[name="question3"]').is(":checked")) {

        if ($('input[name="question3"]:checked').val() === (correctAnswers.answer3)) {
            userCorrect++;
        } 
        if ($('input[name="question3"]:checked').val() != (correctAnswers.answer3)) { 
            userIncorrect++;
        }
    }
    else {
        userUnanswered++;
    }



    if ($('input[name="question4"]').is(":checked")) {

        if ($('input[name="question4"]:checked').val() === (correctAnswers.answer4)) {
            userCorrect++;
        } 
        if ($('input[name="question4"]:checked').val() != (correctAnswers.answer4)) { 
            userIncorrect++;
        }
    }
    else {
        userUnanswered++;
    }



    if ($('input[name="question5"]').is(":checked")) {

        if ($('input[name="question5"]:checked').val() === (correctAnswers.answer5)) {
            userCorrect++;
        } 
        if ($('input[name="question5"]:checked').val() != (correctAnswers.answer5)) { 
            userIncorrect++;
        }
    }
    else {
        userUnanswered++;
    }



    if ($('input[name="question6"]').is(":checked")) {

        if ($('input[name="question6"]:checked').val() === (correctAnswers.answer6)) {
            userCorrect++;
        } 
        if ($('input[name="question6"]:checked').val() != (correctAnswers.answer6)) { 
            userIncorrect++;
        }
    }
    else {
        userUnanswered++;
    }



    if ($('input[name="question7"]').is(":checked")) {

        if ($('input[name="question7"]:checked').val() === (correctAnswers.answer7)) {
            userCorrect++;
        } 
        if ($('input[name="question7"]:checked').val() != (correctAnswers.answer7)) { 
            userIncorrect++;
        }
    }
    else {
        userUnanswered++;
    }



    if ($('input[name="question8"]').is(":checked")) {

        if ($('input[name="question8"]:checked').val() === (correctAnswers.answer8)) {
            userCorrect++;
        } 
        if ($('input[name="question8"]:checked').val() != (correctAnswers.answer8)) { 
            userIncorrect++;
        }
    }
    else {
        userUnanswered++;
    }



    if ($('input[name="question9"]').is(":checked")) {

        if ($('input[name="question9"]:checked').val() === (correctAnswers.answer9)) {
            userCorrect++;
        } 
        if ($('input[name="question9"]:checked').val() != (correctAnswers.answer9)) { 
            userIncorrect++;
        }
    }
    else {
        userUnanswered++;
    }

    // switches page to grading data on submit
    $('main').hide();
    $('#grade-div').show();
    
    // displays grade data
    $('#correct-total').html("Correct: " + userCorrect);
    $('#incorrect-total').html("Incorrect: " + userIncorrect);
    $('#unanswered-total').html("Unanswered: " + userUnanswered);

        console.log("correct " + userCorrect);
        console.log("incorrect " + userIncorrect);
        console.log("unanswered " + userUnanswered);
}