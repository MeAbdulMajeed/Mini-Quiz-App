const quizData = [
    {
        question: "What is the capital of Turkey ?",
        a: "Istanbul",
        b: "Ankara",
        c: "Sougot",
        d: "Abc",
        correct: "b"
    },

    {
        question: "What is the most used programming language ?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "c"
    },

    {
        question: "What is the captial of Pakistan ?",
        a: "Karachi",
        b: "Lahore",
        c: "Multan",
        d: "Islamabad",
        correct: "d"
    },

    {
        question: "HTML stands for ?",
        a: "Hyper text markup language",
        b: "Cascading style sheet",
        c: "Hyper text makeup language",
        d: "None of them",
        correct: "a"
    },
    
    {
        question: "CSS Stands for ?",
        a: "Hyper text markup language",
        b: "Cascading styles sheet",
        c: "Hyper text makeup language",
        d: "None of them",
        correct: "b"
    }
]

const quiz = document.getElementById('quiz');
const answerElem = document.querySelectorAll('.answer');
const questionElem = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitbtn = document.getElementById('submit');
 
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deSelected();
    const currentQuizData = quizData[currentQuiz];

    questionElem.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getselected(){

    let answer;

    answerElem.forEach((answerElem)=>{
       if(answerElem.checked){
            answer = answerElem.id;
       }
    });  

        return answer;
}

function deSelected(){
    answerElem.forEach((answerElem)=>{
        answerElem.checked = false;
     });  
 }

submitbtn.addEventListener("click", () => {
    
    const answer = getselected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score ++;
        }
        currentQuiz ++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onClick = "location.reload()">Reload</button>`
        }

    }

})