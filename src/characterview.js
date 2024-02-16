import { createElement } from './utils';

function createCharacterElement(character) {
    const characterImage = createElement('img', { src: character.imageUrl, alt: character.name, className: 'character-image' });
    const characterInfo = createElement('div', { className: 'character-info' });

    // Create information elements
    const characterNameLabel = createElement('label', { for: 'characterName', textContent: 'Name:' });
    const characterName = createElement('h2', { id: 'characterName', textContent: character.name });

    const filmsLabel = createElement('label', { for: 'films', textContent: 'Films:' });
    const films = createElement('p', { id: 'films', textContent: character.films });

    const tvShowsLabel = createElement('label', { for: 'tvShows', textContent: 'TV Shows:' });
    const tvShows = createElement('p', { id: 'tvShows', textContent: character.tvShows }); 

    const parkAttractionsLabel = createElement('label', { for: 'parkAttractions', textContent: 'Park Attractions:' });
    const parkAttractions = createElement('p', { id: 'parkAttractions', textContent: character.parkAttractions });

    const alliesLabel = createElement('label', { for: 'allies', textContent: 'Allies:' });
    const allies = createElement('p', { id: 'allies', textContent: character.allies });

    // Append information elements to characterInfo div
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

    // Create a container div to hold the character image and information side by side
    const characterContainer = createElement('div', { className: 'character-container' }, [characterImage, characterInfo]);

    return characterContainer;
}

function displayCharacterInfo(character) {
    const main = document.getElementById('main');
    // main.innerHTML = ''; // Clear previous content

    // Create and append the character element to the main
    if(Array.isArray(character)){
        character.forEach((item, index) => {
            const characterElement = createCharacterElement(item);
            main.appendChild(characterElement);
            
            if (index < character.length - 1) {
                main.appendChild(document.createElement('hr'));
            }
        })
    } else{
        const characterElement = createCharacterElement(character);
        main.appendChild(characterElement);
    } 
}

function fetchCharacterData(characterName) {
    const apiUrl = `https://api.disneyapi.dev/character?name=${characterName}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const character = data.data;
            displayCharacterInfo(character);
        })
        .catch(error => console.error('Error fetching character data:', error));
}

export default function addEvent() {
    return new Promise((resolve) => {
        // Assuming you have a search bar with an ID 'searchInput'
        const searchInputElement = document.getElementById('submitBtn');
        // Listen for changes in the search input
        searchInputElement.addEventListener('click', (event) => {
            
            const input = document.getElementById('searchInput').value.trim();
            // const searchTerm = event.target.value.trim();
            if (input.length > 0) {
                fetchCharacterData(input);
            }
        });
        resolve();
    });
}