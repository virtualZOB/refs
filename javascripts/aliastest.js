document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question-container');
    let currentQuestionIndex = 0;

    const showQuestion = (index) => {
        questions.forEach((question, i) => {
            if (i === index) {
                question.style.display = 'block';
                question.querySelector('.feedback').textContent = '';  // Clear feedback
                question.querySelector('.answer').value = '';  // Clear answer box
            } else {
                question.style.display = 'none';
            }
        });
        updateQuestionNumber(index);
    };

    const updateNavigationButtons = () => {
        document.getElementById('prev').disabled = currentQuestionIndex === 0;
        document.getElementById('next').disabled = currentQuestionIndex === questions.length - 1;
    };

    const updateQuestionNumber = (index) => {
        const questionNumberElements = document.querySelectorAll('.question-number');
        questionNumberElements.forEach(element => {
            element.textContent = `${index + 1}/${questions.length}`;
        });
    };

    const checkAnswer = (question) => {
        const correctAnswers = question.getAttribute('data-correct').split(',').map(ans => ans.trim());
        const userAnswer = question.querySelector('.answer').value.trim();
        const feedback = question.querySelector('.feedback');
        
        let correctAnswerFound = false;
        correctAnswers.forEach(correctAnswer => {
            if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
                feedback.innerHTML = `Correct! Other acceptable answers:<ul>${correctAnswers.map(ans => `<li>${ans}</li>`).join('')}</ul>`;
                feedback.style.color = 'green';
                correctAnswerFound = true;
            }
        });
    
        if (!correctAnswerFound) {
            feedback.innerHTML = `Incorrect. You could type:<ul>${correctAnswers.map(ans => `<li>${ans}</li>`).join('')}</ul>`;
            feedback.style.color = 'red';
        }
    };    

    questions.forEach((question, index) => {
        const checkButton = question.querySelector('.check-answer');
        const answerInput = question.querySelector('.answer');
        
        checkButton.addEventListener('click', () => checkAnswer(question));
        answerInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                checkAnswer(question);
            }
        });
    });

    document.getElementById('prev').addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion(currentQuestionIndex);
            updateNavigationButtons();
        }
    });

    document.getElementById('next').addEventListener('click', () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
            updateNavigationButtons();
        }
    });

    showQuestion(currentQuestionIndex);
    updateNavigationButtons();
});
