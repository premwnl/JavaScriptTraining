/*            *
                                            Name of the challenge      : QUIZ                       *
                                            Challenge No               : 35                                                          *
                                            Developed for              : VHITECH Training Program         *
                                                Maintenance History                                                    *
                                            Developer                  : Premkumar T                                                      *
                                            Creation date              : 02/11/2023     Ticket No:               *
**/
//DOM declaration
const main = document.getElementById('main')
const reset = document.getElementById('reset')
const next = document.getElementById('next')
const correct = document.getElementById('correct')
const total = document.getElementById('total')
const question = document.getElementById('question')
const option_1 = document.getElementById('option_1')
const option_2 = document.getElementById('option_2')
const option_3 = document.getElementById('option_3')
const option_4 = document.getElementById('option_4')
const answer = document.getElementById('answer')
const inputs = document.querySelectorAll('input')
//Constant declaration
let data = '';
let mark = 0;
let answered = 1;
//Main functions
let fetchData = (async () => {
    try {
        let questionResponse = await fetch('questions.js')
        data = await questionResponse.json()
        createQuestion()
    } catch (error) {
        console.log(error);
    }
})()
const createQuestion = () => {
    const random = Math.floor(Math.random() * data.length)
    const quiz = data[random];
    question.textContent = quiz.question
    option_1.value = option_1.nextElementSibling.textContent = quiz.options[0]
    option_2.value = option_2.nextElementSibling.textContent = quiz.options[1]
    option_3.value = option_3.nextElementSibling.textContent = quiz.options[2]
    option_4.value = option_4.nextElementSibling.textContent = quiz.options[3]
    answer.textContent = quiz.answer
    inputs.forEach(input => { input.addEventListener('change', checkAnswer); })
}
const checkAnswer = () => {
    main.style.pointerEvents = 'none'
    let choosed = document.querySelector("input[name='option']:checked")
    if (choosed.value == answer.textContent) {
        mark++
        correct.textContent = mark
        choosed.nextElementSibling.style.color = 'green'
    } else {
        choosed.nextElementSibling.style.color = 'red'
        inputs.forEach(input => { input.value == answer.textContent ? input.nextElementSibling.style.color = 'green' : null })
    }
}
next.addEventListener('click', () => {
    main.style.pointerEvents = 'all'
    inputs.forEach(input => {
        input.checked = false
        input.nextElementSibling.style.color = 'antiquewhite'
    })
    createQuestion()
    answered++
    total.textContent = answered
})
reset.addEventListener('click', () => {
    mark = 0;
    answered = 1;
    correct.textContent = 0
    total.textContent = 1
    createQuestion()
    main.style.pointerEvents = 'all'
    inputs.forEach(input => {
        input.checked = false
        input.nextElementSibling.style.color = 'antiquewhite'
    })
})