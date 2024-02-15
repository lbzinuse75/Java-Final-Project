import { createElement } from './utils';

function Page3() {
    const title = createElement('h2', {textContent: 'Quiz'});

    // Create a container for the quiz
    const quizContainer = createElement('div', { id: 'quiz-container' });

    // Render the quiz questions
    renderQuizQuestions();

    function renderQuizQuestions() {
        quizData.forEach((quizItem, index) => {
        const questionElement = createElement('div', { className: 'question' });
        const questionText = createElement('p', { textContent: `${index + 1}. ${quizItem.question}` });

        // Render answer options
        const optionsContainer = createElement('div', { className: 'options' });
        quizItem.options.forEach((option, optionIndex) => {
            const optionInput = createElement('input', {
            type: 'radio',
            name: `question-${index}`,
            id: `option-${index}-${optionIndex}`,
            value: option
            });
            const optionLabel = createElement('label', {
            htmlFor: `option-${index}-${optionIndex}`,
            textContent: option
            });

            optionsContainer.appendChild(optionInput);
            optionsContainer.appendChild(optionLabel);
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

        quizContainer.appendChild(submitButton);
    }

    function checkAnswers() {
        const userAnswers = [];

        // Collect user-selected answers
        quizData.forEach((quizItem, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        userAnswers.push(selectedOption ? selectedOption.value : null);
        });

        // Check user answers against correct answers
        const score = userAnswers.reduce((acc, userAnswer, index) => {
        return userAnswer === quizData[index].correctAnswer ? acc + 1 : acc;
        }, 0);

        // Display the score
        const resultMessage = createElement('p', {
        textContent: `You scored ${score} out of ${quizData.length}!`
        });

        // Replace the quiz container with the result message
        document.getElementById('quiz-container').replaceWith(resultMessage);
    }

    return createElement('div', {}, [title]);
}

export default Page3; 