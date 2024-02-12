import Page1 from './page1.js';
import Page2 from './page2.js';
import Page3 from './page3.js';
import { createElement } from './utils';


export function initRouter(mainView) {
    async function updateView(newView) {
        mainView.innerHTML = '';
        mainView.appendChild(newView);
    }


    async function hashToRoute(hash) {
        switch (hash) {
            case '#/page1':
                await updateView(Page1());
                console.log(Page1());
                console.log(mainView);
                // console.log( document.getElementById('searchInput'));
                addEvent();
                
                break;

            case '#/page2':
                updateView(Page2());
                break;

            case '#/page3':
                updateView(Page3());
                break;

            default:
                updateView(createElement('h3', { textContent: '404 Page Not Found' }));
                break;
        }
    }

    const defaultHash = window.location.hash;
    hashToRoute(defaultHash);

    window.addEventListener('hashchange', (evt) => {
        const newUrl = new URL(evt.newURL);
        const hash = newUrl.hash;

        hashToRoute(hash);
        console.log(document.getElementById('searchInput'));
    });

}



function createCharacterElement(character) {
    console.log(character);
    const characterImage = createElement('img', { src: character.imageUrl, alt: character.name, className: 'character-image' });
    const characterInfo = createElement('div', { className: 'character-info' });

    // Create information elements
    const characterNameLabel = createElement('label', { for: 'characterName', textContent: 'Name:' });
    const characterName = createElement('h2', { id: 'characterName', textContent: character.name });

    const filmsLabel = createElement('label', { for: 'films', textContent: 'Films:' });
    const films = createElement('p', { id: 'films', textContent: character.films });

    const tvShowsLabel = createElement('label', { for: 'tvShows', textContent: 'TV Shows:' });
    const tvShows = createElement('p', { id: 'tvShows', textContent: character.tvShows }); // .join(', ')

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
    const main = document.getElementById('root');
    main.innerHTML = ''; // Clear previous content

    // Create and append the character element to the main
    if(Array.isArray(character)){
        character.forEach(item=>{
            const characterElement = createCharacterElement(item);
            main.appendChild(characterElement);    
        })
    }
    else{
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
            console.log(character);
            displayCharacterInfo(character);
        })
        .catch(error => console.error('Error fetching character data:', error));
}




function addEvent() {

    // Assuming you have a search bar with an ID 'searchInput'
    const searchInputElement = document.getElementById('submitBtn');
    console.log(searchInputElement);
    // Listen for changes in the search input
    searchInputElement.addEventListener('click', (event) => {
        
        const input = document.getElementById('searchInput').value.trim();
        console.log(input);
        // const searchTerm = event.target.value.trim();
        if (input.length > 0) {
            fetchCharacterData(input);
        }
    });
}
// https://api.disneyapi.dev/characters?name=Mickey%20Mouse
// https://api.disneyapi.dev/character?name=Mickey%20Mouse