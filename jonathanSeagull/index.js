const questions = [
    {
        question: "A group of seagulls mock your unconventional flying techniques.",
        choice1: "Continue to pursue your passion for flight, even though it means going against the norms of your community and potentially being ostracized",
        choice2: "Give up on your dreams of becoming a great flyer and try to fit in with the other seagulls",
        ans: 0
    },
    {
        question: "You are approached by a group of seagulls who are also dedicated to the pursuit of perfection in flight.",
        choice1: "Try to fit in with the other seagulls and give up on your dreams of becoming a great flyer",
        choice2: "Join the group and continue to explore the limits of what is possible in flight, even though it means going against the expectations of your community.",
        ans: 1
    },
    {
        question: "You have the opportunity to demonstrate your exceptional flying abilities to a group of seagulls.",
        choice1: "Seize the opportunity and show off your skills, even though it means standing out and potentially being ostracized.",
        choice2: "Hold back and try to blend in with the other seagulls to avoid drawing attention to yourself.",
        ans: 0
    },
    {
        question: "You have the chance to participate in a flying competition.",
        choice1: "Avoid the competition and try to blend in with the other seagulls to avoid standing out.",
        choice2: "Enter the competition and try to win, even though it means going up against other skilled flyers and potentially being judged.",
        ans: 1
    },
    {
        question: "You have the opportunity to teach other seagulls about your flying techniques and help them improve their skills.",
        choice1: "Take the opportunity to share your knowledge and help others, even though it means standing out and potentially being ostracized.",
        choice2: "Avoid the opportunity and try to blend in with the other seagulls to avoid drawing attention to yourself.",
        ans: 0
    }
]

var i = 0;
$( document ).ready(function() {
    $("#question").html(questions[0].question);
    $("#label-choice1").text(questions[0].choice1);
    $("#label-choice2").text(questions[0].choice2);
});

// $("#choice1, #choice2").click(function() {
//     i += 1;
//     if (i < questions.length){
//         $("#choice1").replaceWith(`<input type="radio" name="flexRadioDefault" id="choice1"/>`)
//         $("#choice2").replaceWith(`<input type="radio" name="flexRadioDefault" id="choice2"/>`)
//         $("#question").html(questions[i].question);
//         $("#label-choice1").text(questions[i].choice1);
//         $("#label-choice2").text(questions[i].choice2);
//     } else {
//         alert("Finish");
//         // window.location.replace("index.html");
//     }
// });

$('#choices').click(function() {
    i += 1
    if($('#choice1, #choice2').is(':checked')) { 
        if (i < questions.length) {
            $("#choice1").replaceWith(`<input type="radio" name="flexRadioDefault" id="choice1"/>`)
            $("#label-choice1").text(questions[i].choice1);
    
            $("#choice2").replaceWith(`<input type="radio" name="flexRadioDefault" id="choice2"/>`)
            $("#label-choice2").text(questions[i].choice2);
    
            $("#question").html(questions[i].question);
        }
    }
});