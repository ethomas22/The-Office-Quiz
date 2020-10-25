// var with questions and answers
var questions = [
    {
        question: "Who started the fire?",
        answers: {
            a: "Ryan",
            b: "Phyllis",
            c: "Michael",
            d: "Pam"
                },
        correctAnswer: "a"
     },

     {
        question: "Who did Kevin get for secret santa?",
        answers: {
            a: "Kelly",
            b: "Toby",
            c: "Himself",
            d: "Dwight"
                },
        correctAnswer: "c"
     },

     {
        question: "What does Stanley do during meetings?",
        answers: {
            a: "Sleep",
            b: "Crossword Puzzles",
            c: "Listen",
            d: "Sleep"
                },
        correctAnswer: "b"
     },

     {
        question: "What is dwights favorite TV show?",
        answers: {
            a: "Battlestar Galactica",
            b: "The Apprentice",
            c: "Wife Swap",
            d: "American Idol"
                },
        correctAnswer: "a"
     },

     {
        question: "What did Michael burn is foot on?",
        answers: {
            a: "Fire Pit",
            b: "Iron",
            c: "BBQ",
            d: "George Foreman Grill"
                },
        correctAnswer: "d"
     },
    
];

document.querySelector("#quizQuestions").innerText=questions[0].question;

document.querySelector("#answerA").innerText=questions[0].answers.a;
document.querySelector("#answerB").innerText=questions[0].answers.b;
document.querySelector("#answerC").innerText=questions[0].answers.c;
document.querySelector("#answerD").innerText=questions[0].answers.d;

document.getElementById("answerA").addEventListener("click", function(){
    console.log("hello");
});