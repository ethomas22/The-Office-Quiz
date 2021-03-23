// var with questions and answers
var questions = [
  {
    question: "Who started the fire?",
    answers: {
      a: "Ryan",
      b: "Phyllis",
      c: "Michael",
      d: "Pam",
    },
    correctAnswer: "a",
  },

  {
    question: "Who did Kevin get for secret santa?",
    answers: {
      a: "Kelly",
      b: "Toby",
      c: "Himself",
      d: "Dwight",
    },
    correctAnswer: "c",
  },

  {
    question: "What does Stanley do during meetings?",
    answers: {
      a: "Sleep",
      b: "Crossword Puzzles",
      c: "Listen",
      d: "Sleep",
    },
    correctAnswer: "b",
  },

  {
    question: "What is dwights favorite TV show?",
    answers: {
      a: "Battlestar Galactica",
      b: "The Apprentice",
      c: "Wife Swap",
      d: "American Idol",
    },
    correctAnswer: "a",
  },

  {
    question: "What did Michael burn his foot on?",
    answers: {
      a: "Fire Pit",
      b: "Iron",
      c: "BBQ",
      d: "George Foreman Grill",
    },
    correctAnswer: "d",
  },
];

var timeLeft = 60;
var currentQuestion = -1;

document.getElementById("startTimer").addEventListener("click", function () {
  document.getElementById("timerText").innerText = timeLeft;

  //   document.getElementById("main").style.display = "block";

  //   document.getElementById("start").style.display = "none";

  //   document.getElementById("start2").style.display = "block";
  clockTimer();
  nextQuestion();

  function nextQuestion() {
    currentQuestion++;
    document.querySelector("#quizQuestions").innerText =
      questions[currentQuestion].question;
    document.querySelector("#answerA").innerText =
      questions[currentQuestion].answers.a;
    document.querySelector("#answerB").innerText =
      questions[currentQuestion].answers.b;
    document.querySelector("#answerC").innerText =
      questions[currentQuestion].answers.c;
    document.querySelector("#answerD").innerText =
      questions[currentQuestion].answers.d;
    document
      .querySelector(".quizAnswer")
      .addEventListener("click", function (event) {
        nextQuestion()
      });
  }

  function clockTimer() {
    var countdown = setInterval(function () {
      timeLeft--;
      document.getElementById("timerText").innerText = timeLeft;
      if (timeLeft <= 0 || currentQuestion == questions.length) {
        // Quiz is done
        clearInterval(countdown);
        removeAnswers();
        endingCard();
      }
    }, 1000);
  }
});
