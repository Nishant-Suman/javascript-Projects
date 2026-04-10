
    const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Text Machine Language", correct: false },
            { text: "Hyper Tool Multi Language", correct: false },
            { text: "None", correct: false }
        ]
    },
    {
        question: "Which language is used for styling?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
            { text: "Python", correct: false },
            { text: "C++", correct: false }
        ]
    },
    {
        question: "Which is a JavaScript framework?",
        answers: [
            { text: "React", correct: true },
            { text: "Django", correct: false },
            { text: "Flask", correct: false },
            { text: "Laravel", correct: false }
        ]
    },
    {
        question: "Which company developed JavaScript?",
        answers: [
            { text: "Microsoft", correct: false },
            { text: "Netscape", correct: true },
            { text: "Google", correct: false },
            { text: "Apple", correct: false }
        ]
    },
    {
        question: "Which tag is used for JavaScript in HTML?",
        answers: [
            { text: "<js>", correct: false },
            { text: "<javascript>", correct: false },
            { text: "<script>", correct: true },
            { text: "<code>", correct: false }
        ]
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        answers: [
            { text: "//", correct: true },
            { text: "##", correct: false },
            { text: "<!-- -->", correct: false },
            { text: "**", correct: false }
        ]
    },
    {
        question: "Which method is used to print in console?",
        answers: [
            { text: "console.print()", correct: false },
            { text: "print()", correct: false },
            { text: "console.log()", correct: true },
            { text: "log.console()", correct: false }
        ]
    },
    {
        question: "Which keyword is used to declare a variable?",
        answers: [
            { text: "var", correct: false },
            { text: "let", correct: false },
            { text: "const", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which HTML tag is used for headings?",
        answers: [
            { text: "<head>", correct: false },
            { text: "<h1>", correct: true },
            { text: "<p>", correct: false },
            { text: "<title>", correct: false }
        ]
    },
    {
        question: "Which CSS property controls text size?",
        answers: [
            { text: "font-style", correct: false },
            { text: "text-size", correct: false },
            { text: "font-size", correct: true },
            { text: "text-style", correct: false }
        ]
    },

    {
        question: "Which HTML tag is used to create a hyperlink?",
        answers: [
            { text: "<a>", correct: true },
            { text: "<link>", correct: false },
            { text: "<href>", correct: false },
            { text: "<url>", correct: false }
        ]
    },
    {
        question: "Which attribute is used to provide an image source?",
        answers: [
            { text: "src", correct: true },
            { text: "href", correct: false },
            { text: "alt", correct: false },
            { text: "link", correct: false }
        ]
    },
    {
        question: "Which CSS property is used for background color?",
        answers: [
            { text: "color", correct: false },
            { text: "bgcolor", correct: false },
            { text: "background-color", correct: true },
            { text: "background-style", correct: false }
        ]
    },
    {
        question: "Which symbol is used for ID selector in CSS?",
        answers: [
            { text: ".", correct: false },
            { text: "#", correct: true },
            { text: "*", correct: false },
            { text: "&", correct: false }
        ]
    },
    {
        question: "Which method is used to select an element by ID in JavaScript?",
        answers: [
            { text: "getElementById()", correct: true },
            { text: "querySelectorAll()", correct: false },
            { text: "getElementsByClass()", correct: false },
            { text: "selectById()", correct: false }
        ]
    },
    {
        question: "Which keyword is used for conditional statements?",
        answers: [
            { text: "loop", correct: false },
            { text: "if", correct: true },
            { text: "check", correct: false },
            { text: "switcher", correct: false }
        ]
    },
    {
        question: "Which loop is used when number of iterations is known?",
        answers: [
            { text: "while", correct: false },
            { text: "for", correct: true },
            { text: "do-while", correct: false },
            { text: "foreach", correct: false }
        ]
    },
    {
        question: "Which operator is used for strict equality?",
        answers: [
            { text: "==", correct: false },
            { text: "=", correct: false },
            { text: "===", correct: true },
            { text: "!=", correct: false }
        ]
    },
    {
        question: "Which event occurs when a user clicks an element?",
        answers: [
            { text: "onhover", correct: false },
            { text: "onchange", correct: false },
            { text: "onclick", correct: true },
            { text: "onpress", correct: false }
        ]
    },
    {
        question: "Which data type is used to store true/false values?",
        answers: [
            { text: "String", correct: false },
            { text: "Boolean", correct: true },
            { text: "Number", correct: false },
            { text: "Array", correct: false }
        ]
    }
];
  

const questionEl = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.style.display = "none";
    restartBtn.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");

        if (answer.correct) {
            button.dataset.correct = true;
        }

        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    answerButtons.innerHTML = "";
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const correct = selectedBtn.dataset.correct === "true";

    if (correct) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("wrong");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    resetState();
    questionEl.innerText = `You scored ${score} out of ${questions.length}`;
    nextBtn.style.display = "none";
    restartBtn.style.display = "block";
}

restartBtn.addEventListener("click", startQuiz);

startQuiz();
