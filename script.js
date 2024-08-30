const firstOperator = document.getElementById('firstOperator')
const secondOperator = document.getElementById('secondOperator')
const userInput = document.getElementById('userAnswer')
const submitButton = document.getElementById('submitAnswer')

firstOperator.textContent = Math.floor(Math.random() * 100)
secondOperator.textContent = Math.floor(Math.random() * 100)

submitButton.addEventListener('click', () => {
    const firstValue = parseInt(firstOperator.textContent)
    const secondValue = parseInt(secondOperator.textContent)
    const userValue = parseInt(userInput.value)
    const correctAnswer = firstValue + secondValue
    if (userValue === correctAnswer) {
        alert('Correct! 🎉')
    } else {
        alert(`Incorrect! The correct answer was ${correctAnswer}! 🤯`)
    }
    firstOperator.textContent = Math.floor(Math.random() * 100)
    secondOperator.textContent = Math.floor(Math.random() * 100)
    userInput.value = ''
    })