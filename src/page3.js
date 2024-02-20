import { createElement } from './utils';
import importedQuizData from './quizData.js';

function Page3() {
    const title = createElement('h2', {textContent: 'Disney Character Quiz'});

    // Create a container for the quiz
    const quizContainer = createElement('div', { id: 'quiz-container' });

    const answersContainer = createElement('div', { id: 'answers-container' });

    // Render the quiz questions
    renderQuizQuestions();

    function renderQuizQuestions() {
        importedQuizData.forEach((quizItem, index) => {
            const questionElement = createElement('div', { className: 'question' });
            const questionText = createElement('p', { textContent: `${index + 1}. ${quizItem.question}` });

            // Render answer options
            const optionsContainer = createElement('div', { className: 'options' });
            optionsContainer.style.display = 'flex';
            optionsContainer.style.flexDirection = 'column';

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

                const optionWrapper = createElement('div', { style: { display: 'flex', alignItems: 'center' } });
                optionWrapper.appendChild(optionInput);
                optionWrapper.appendChild(optionLabel);

                optionsContainer.appendChild(optionWrapper);
            });

            // Append question text and options to question element
            questionElement.appendChild(questionText);
            questionElement.appendChild(optionsContainer);

            // Append question element to the quiz container
            quizContainer.appendChild(questionElement);
        });

        // Add a submit button
        const submitButton = createElement('button', { id: 'submit-button', textContent: 'Submit Answers' });
        submitButton.addEventListener('click', checkAnswers);

        submitButton.addEventListener('mouseover', function () {
            this.style.width = '150px';
            this.style.height = '20px';
            this.style.backgroundColor = '#00f5d4';
        });
        // Add a mouseout event to reset the search bar size when the mouse leaves
        submitButton.addEventListener('mouseout', function () {
            this.style.width = '120px';
            this.style.height = '20px';
            this.style.backgroundColor = '';
        });

        quizContainer.appendChild(submitButton);
    }

    function checkAnswers() {
        event.preventDefault();
        const userAnswers = [];

        // Collect user-selected answers
        importedQuizData.forEach((quizItem, index) => {
            const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
            userAnswers.push(selectedOption ? selectedOption.value : null);
        });

        //Save user answers to local storage
        localStorage.setItem('userAnswers', JSON.stringify(userAnswers));

        // Check user answers against correct answers
        const score = userAnswers.reduce((acc, userAnswer, index) => {
            return userAnswer === importedQuizData[index].correctAnswer ? acc + 1 : acc;
        }, 0);

        // Display the score
        const resultMessage = createElement('p', {
        textContent: `You scored ${score} out of ${importedQuizData.length}!`
        });

        // Retrieve user answers from local storage
        const savedUserAnswers = JSON.parse(localStorage.getItem('userAnswers'));

        // Display user and correct answers
        const answersText = savedUserAnswers.map((userAnswer, index) => {
            return `Q${index + 1}: Your Answer - ${userAnswer}, Correct Answer - ${importedQuizData[index].correctAnswer}`;
        }).join('<br>');

        const answersDisplay = createElement('div', { id: 'answers-display', innerHTML: answersText });

        // Replace the quiz container with the result message
        quizContainer.replaceWith(resultMessage);

        // Append user and correct answers display to the answers container
        answersContainer.appendChild(answersDisplay);
    }

    return createElement('div', { id: 'page3' }, [title, quizContainer, answersContainer]);
}

export default Page3; 