import { createElement } from './utils';

function Page2() {
    const title = createElement('h2', {textContent: 'Disney Mad Lib'});

    // // Create form elements
    // const form = createElement('form');
    // const nounInput = createElement('input', { type: 'text', name: 'noun', placeholder: 'Enter a noun' });
    // const adjectiveInput = createElement('input', { type: 'text', name: 'adjective', placeholder: 'Enter an adjective' });
    // const verbInput = createElement('input', { type: 'text', name: 'verb', placeholder: 'Enter a verb' });

    // const submitButton = createElement('button', { type: 'button', textContent: 'Generate Story' });

    // // Append form elements to form
    // form.append(nounInput, adjectiveInput, verbInput, submitButton);

    // // Handle form submission
    // submitButton.addEventListener('click', generateStory);

    // function generateStory() {
    //     // Collect user input
    //     const noun = nounInput.value;
    //     const adjective = adjectiveInput.value;
    //     const verb = verbInput.value;

    //     // Create the story using the collected input
    //     const story = `Once upon a time, there was a ${adjective} ${noun} who loved to ${verb}.`;

    //     // Display the generated story
    //     const resultContainer = document.getElementById('result');
    //     resultContainer.textContent = story;
    // }

    return createElement('div', {}, [title, createElement('div', { id: 'result' })]);
}

export default Page2;