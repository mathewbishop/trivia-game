// data for later
    //'The Paris Gun' had to fire successively larger shells each time it was fired due to the barrel diameter increasing with each shot. The shells fired by this gun reached the greatest height of any human-made projectile prior to first successful v-2 rocket flight test in 1942"
    //"The use of poision gas violated the agreed upon rules of war outlined in the 1899 Hague Convention"

// features
    // timer 
    // grading mechanism
        // check correct answers against user answers
            // get value of the answer user picked
            // check that value against the correct answer
    // grade page
    // restart button
//"1", "1", "4", "2", "1", "1", "1", "4", "3", "1"


//var correctAnswers = ["1", "1", "4", "2", "1", "1", "1", "4", "3", "1"];

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

var userCorrect = 0;
var userIncorrect = 0;
var userUnanswered = 0;


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


$('#start-btn').click(function() {
    $('header').hide();
    $('main').show();
})

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

    $('main').hide();
    $('#grade-div').show();
    
    $('#correct-total').html("Correct: " + userCorrect);
    $('#incorrect-total').html("Incorrect: " + userIncorrect);
    $('#unanswered-total').html("Unanswered: " + userUnanswered);

        console.log("correct " + userCorrect);
        console.log("incorrect " + userIncorrect);
        console.log("unanswered " + userUnanswered);
        

})
    
$('#reset-btn').click(resetQuiz);

