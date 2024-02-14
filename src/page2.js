import { createElement } from './utils';

function Page2() {
    const title = createElement('h2', {textContent: 'Disney Mad Lib'});

    // Create form elements
    const form = createElement('form');
    form.id = 'form';
    const nounInput1 = createElement('div', {}, [
        createElement('input', { type: 'text', name: 'noun1', id: 'noun1', placeholder: 'Enter a noun' })]
    );
    const nounInput2 = createElement('div', {}, [
        createElement('input', { type: 'text', name: 'noun2', id: 'noun2', placeholder: 'Enter a noun' })]
    );
    const personInput = createElement('div', {}, [
        createElement('input', { type: 'text', name: 'person', id: 'person', placeholder: 'Enter a person' })]
    );

    const submitButton = createElement('button', { type: 'submit', name: 'submitButton', id: 'submitButton', textContent: 'Generate Story' });

    // Append form elements to form
    form.append(nounInput1, nounInput2, personInput, submitButton);

    // Initialize formData outside of the gerateSotry function
    let formData;

    // Handle form submission
    submitButton.addEventListener('click', generateStory);

    function generateStory() {
        const form = document.getElementById('form');
        formData = new FormData(form);

        const noun1 = formData.get('noun1');
        const noun2 = formData.get('noun2');
        const person = formData.get('person');

        const storyTitleAriel = createElement('h3', {textContent: 'Ariels New Song'}, [])

        // Create the story using the collected input
        const story = `
            Look at this ${noun1}, isn't it neat?<br>
            Wouldn't you think my ${noun2}'s complete?<br>
            Wouldn't you think I'm the ${person}<br>
            The ${person} who has everything?<br>
        `;
        
        // Display the generated story
        const result = document.getElementById('result');
        result.appendChild(storyTitleAriel);
        result.innerHTML += `<div>${story}</div>`;
    }
        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });

    return createElement('div', {}, [title, form, createElement('div', { id: 'result' })]);
}

export default Page2;