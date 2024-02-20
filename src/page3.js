import { createElement } from './utils';
import importedQuizData from './quizData.js';

function Page3() {
    // create title
    const title = createElement('h2', { 
        textContent: 'Disney Character Quiz', 
    });

    // create a container for the quiz
    const quizContainer = createElement('div', { 
        id: 'quiz-container', 
    });

    // create a container for the answers
    const answersContainer = createElement('div', { 
        id: 'answers-container',
    });

    // render the quiz questions
    renderQuizQuestions();

    function renderQuizQuestions() {
        importedQuizData.forEach((quizItem, index) => {
            const questionElement = createElement('div', { 
                className: 'question', 
            });
            const questionText = createElement('p', { 
                textContent: `${index + 1}. ${quizItem.question}`, 
            });

            // render answer options
            const optionsContainer = createElement('div', { 
                className: 'options', 
            });
            optionsContainer.style.display = 'flex';
            optionsContainer.style.flexDirection = 'column';

            // set up the radio button choices
            quizItem.options.forEach((option, optionIndex) => {
                const optionInput = createElement('input', {
                    type: 'radio',
                    name: `question-${index}`,
                    id: `option-${index}-${optionIndex}`,
                    value: option
                });
                const optionLabel = createElement('label', {
                    htmlFor: `option-${index}-${optionIndex}`,
                    textContent: option,
                    style: { marginLeft: '8px' }
                });

                // create a container for the questions
                const optionWrapper = createElement('div', { style: { 
                    display: 'flex', 
                    alignItems: 'center' }, 
                });
                optionWrapper.appendChild(optionInput);
                optionWrapper.appendChild(optionLabel);

                optionsContainer.appendChild(optionWrapper);
            });

            // append question text and options to question element
            questionElement.appendChild(questionText);
            questionElement.appendChild(optionsContainer);

            // append question element to the quiz container
            quizContainer.appendChild(questionElement);
        });

        // add a submit button
        const submitButton = createElement('button', { id: 'submit-button', textContent: 'Submit Answers' });
        submitButton.addEventListener('click', checkAnswers);

        // add a mouseover effect when mouse hovers over
        submitButton.addEventListener('mouseover', function () {
            this.style.width = '150px';
            this.style.height = '20px';
            this.style.backgroundColor = '#00f5d4';
        });
        // add a mouseout event to reset the search bar size when the mouse leaves
        submitButton.addEventListener('mouseout', function () {
            this.style.width = '120px';
            this.style.height = '20px';
            this.style.backgroundColor = '';
        });

        quizContainer.appendChild(submitButton);
    }

    // save the users in answers in localStorage then check and compare answers, then display score
    function checkAnswers(event) {
        event.preventDefault();
    
        const userAnswers = [];
    
        // collect user-selected answers
        importedQuizData.forEach((quizItem, index) => {
            const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
            userAnswers.push(selectedOption ? selectedOption.value : null);
        });
    
        // save user answers to local storage
        localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    
        // check user answers against correct answers
        const score = userAnswers.reduce((acc, userAnswer, index) => {
            return userAnswer === importedQuizData[index].correctAnswer ? acc + 1 : acc;
        }, 0);
    
        // display the score
        const resultMessage = createElement('p', {
            textContent: `You scored ${score} out of ${importedQuizData.length}!`,
            className: 'slide'
        });
    
        quizContainer.appendChild(resultMessage);
    
        // retrieve user answers from local storage
        const savedUserAnswers = JSON.parse(localStorage.getItem('userAnswers'));
    
        // display user and correct answers
        const answersDisplay = savedUserAnswers.map((userAnswer, index) => {
            const isCorrect = userAnswer === importedQuizData[index].correctAnswer;
            const answerColor = isCorrect ? 'black' : 'red'; // Set text color based on correctness
    
            return `Q${index + 1}: Your Answer - <span style="color: ${answerColor};">${userAnswer}</span>, Correct Answer - ${importedQuizData[index].correctAnswer}`;
        }).join('<br>');
    
        const answersDisplayContainer = createElement('div', {
            id: 'answers-display',
            innerHTML: answersDisplay
        });
    
        // replace the quiz container with the result message
        quizContainer.replaceWith(resultMessage);

        // animate the score
        setTimeout(() => {
            resultMessage.classList.remove('slide');
        }, 3000);
    
        // append user and correct answers display to the answers container
        answersContainer.appendChild(answersDisplayContainer);
    }

    return createElement('div', { id: 'page3' }, [title, quizContainer, answersContainer]);
}

export default Page3; 