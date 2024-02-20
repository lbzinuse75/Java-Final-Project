import { createElement } from './utils';

function Page2() {
    // create a title
    const title = createElement('h2', {
        textContent: 'Disney Mad Lib',
    });

    // create form elements
    const form = createElement('form');
    form.id = 'form';

    // function to update input styles based on whether they are filled
    function updateInputStyles(input) {
        if (input.value.trim() !== '') {
            input.style.backgroundColor = '#00f5d4'; // Change to a filled color blue/green
        } else {
            input.style.backgroundColor = '#f15bb5'; // Change to the pink color
        }
    }
    
    // create elements
    const nounInput1 = createElement('div', {}, [
        createElement('input', { 
            type: 'text', 
            name: 'noun1', 
            id: 'noun1', 
            placeholder: 'Enter a noun',
            oninput: (event) => updateInputStyles(event.target),
        }),
    ]);
    const nounInput2 = createElement('div', {}, [
        createElement('input', { 
            type: 'text', 
            name: 'noun2', 
            id: 'noun2', 
            placeholder: 'Enter a noun',         
            oninput: (event) => updateInputStyles(event.target),
        }),
    ]);
    const personInput = createElement('div', {}, [
        createElement('input', { 
            type: 'text', 
            name: 'person', 
            id: 'person',
            placeholder: 'Enter a person',
            oninput: (event) => updateInputStyles(event.target),
            })
        ]);
    const submitButton = createElement('button', { 
        type: 'button', 
        name: 'submitButton', 
        id: 'submitButton', 
        textContent: 'Generate Story' });

    // append form elements to form
    form.append(nounInput1, nounInput2, personInput, submitButton);

    // initialize formData outside of the generateStory function
    let formData;

    // handle form submission
    submitButton.addEventListener('click', generateStory);

    // add a mouseover event to enlarge the search bar on hover
    submitButton.addEventListener('mouseover', function () {
        this.style.width = '150px';
        this.style.height = '20px';
        this.style.backgroundColor = '#f15bb5';
    });
    // add a mouseout event to reset the search bar size when the mouse leaves
    submitButton.addEventListener('mouseout', function () {
        this.style.width = '110px';
        this.style.height = '20px';
        this.style.backgroundColor = '';
    });

    // function to generate the story
    function generateStory() {
        const form = document.getElementById('form');
        formData = new FormData(form);

        const noun1 = formData.get('noun1');
        const noun2 = formData.get('noun2');
        const person = formData.get('person');

        const storyTitleAriel = createElement('h3', {textContent: 'Ariels New Song'}, [])

        // create the story using the collected input
        const story = `
            Look at this ${noun1}, isn't it neat?<br>
            Wouldn't you think my ${noun2}'s complete?<br>
            Wouldn't you think I'm the ${person}<br>
            The ${person} who has everything?<br>
        `;
        
        // display the generated story
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