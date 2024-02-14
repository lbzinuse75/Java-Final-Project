import { createElement } from './utils';

function Page2() {
    const title = createElement('h2', {textContent: 'Disney Mad Lib'});

    // Create form elements
    const form = createElement('form');
    form.id = 'form';
    const nounInput1 = createElement('input', { type: 'text', name: 'noun1', id: 'noun1', placeholder: 'Enter a noun' });
    const nounInput2 = createElement('input', { type: 'text', name: 'noun2', id: 'noun2', placeholder: 'Enter a noun' });
    const personInput = createElement('input', { type: 'text', name: 'person', id: 'person', placeholder: 'Enter a person' });

    const submitButton = createElement('button', { type: 'submit', name: 'submitButton', id: 'submitButton', textContent: 'Generate Story' });

    // Append form elements to form
    form.append(nounInput1, nounInput2, personInput, submitButton);

    // const div = createElement('div', {type: 'text', name: 'result'});

    // Handle form submission
    submitButton.addEventListener('click', generateStory);

    function generateStory() {
        const form = document.getElementById('form');
        const formData = new FormData(form);
    }

        const noun1 = formData.get('noun1');
        const noun2 = formData.get('noun2');
        const person = formData.get('person');

        // Create the story using the collected input
        const story = `
            Look at this ${noun1}, isn't it neat?
            Wouldn't you think my ${noun2}'s complete?
            Wouldn't you think I'm the ${person}
            The ${person} who has everything?
        `;

        // Display the generated story
        const result = document.getElementById('result');
        result.innerHTML = story;

        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });
    

    return createElement('div', {}, [title, form, createElement('div', { id: 'result' })]);
}

export default Page2;