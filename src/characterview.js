import { createElement } from './utils';

function createCharacterElement(character) {
    // create image element for character
    const characterImage = createElement('img', { 
        src: character.imageUrl, 
        alt: character.name, 
        className: 'character-image',
    });
    // create div for character info
    const characterInfo = createElement('div', { 
        className: 'character-info',
     });

    // create character name elements
    const characterNameLabel = createElement('label', { 
        for: 'characterName', 
        textContent: 'Name:',
    });
    const characterName = createElement('h2', { 
        id: 'characterName', 
        textContent: character.name, 
    });

    // create element for films character has been in
    const filmsLabel = createElement('label', { 
        for: 'films', 
        textContent: 'Films:', 
    });
    const films = createElement('p', { 
        id: 'films', 
        textContent: character.films,
     });

     // create element for tv shows character has been in
    const tvShowsLabel = createElement('label', { 
        for: 'tvShows', 
        textContent: 'TV Shows:', 
    });
    const tvShows = createElement('p', { 
        id: 'tvShows', 
        textContent: character.tvShows, 
    }); 

    // create element for park attractions character is in
    const parkAttractionsLabel = createElement('label', { 
        for: 'parkAttractions', 
        textContent: 'Park Attractions:', 
    });
    const parkAttractions = createElement('p', { 
        id: 'parkAttractions', 
        textContent: character.parkAttractions, 
    });

    // create element for allies of the character
    const alliesLabel = createElement('label', { 
        for: 'allies', 
        textContent: 'Allies:', 
    });
    const allies = createElement('p', { 
        id: 'allies', 
        textContent: character.allies, 
    });

    // append information elements to character info div
    characterInfo.append(characterNameLabel,
        characterName,
        filmsLabel,
        films,
        tvShowsLabel,
        tvShows,
        parkAttractionsLabel,
        parkAttractions,
        alliesLabel,
        allies);

    // create a container div to hold the character image and information
    const characterContainer = createElement('div', { className: 'character-container' }, [characterImage, characterInfo]);

    return characterContainer;
}

// display the character img and info
function displayCharacterInfo(character) {
    const main = document.getElementById('main');
    let container = document.querySelector('.container');
    
    if(!container){
        container = createElement('div', {className: 'container'});
        main.appendChild(container);
    }
    else{
        container.innerHTML = '';
    }

    // create and append the character element to the main
    if(Array.isArray(character)){
        character.forEach((item, index) => {
            const characterElement = createCharacterElement(item);
            container.appendChild(characterElement);
            
            if (index < character.length - 1) {
                container.appendChild(document.createElement('hr'));
            }
        })
    } else{
        const characterElement = createCharacterElement(character);
        container.appendChild(characterElement);
    } 
}

// fetch the character info from an outside API source
export function fetchCharacterData(characterName) {
    const apiUrl = `https://api.disneyapi.dev/character?name=${characterName}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const character = data.data;
            displayCharacterInfo(character);
        })
        .catch(error => console.error('Error fetching character data:', error));
}

// listen for changes in the search input, search when click or enter
export default function addEvent() {
    return new Promise((resolve) => {
        const searchInputElement = document.getElementById('submitBtn');
        const searchInput = document.getElementById('searchInput');

        // click event for search button
        searchInputElement.addEventListener('click', () => {
            const input = searchInput.value.trim();
            if (input.length > 0) {
                fetchCharacterData(input);
            }
        });

        // enter key event for the input
        searchInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                const input = searchInput.value.trim();
                if (input.length >0) {
                    fetchCharacterData(input);
                }
            }
        });
        
        resolve();
    });
}