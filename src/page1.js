import { createElement } from './utils';

function Page1() {
    const title = createElement('h2', { textContent: 'Welcome to Disney Characters', className: 'Page1Title' });

    const searchLabel = createElement('label', { for: 'searchInput', textContent: 'Search:' });
    const searchInput = createElement('input', { type: 'text', id: 'searchInput' });
    console.log(searchInput);
    const characterTitle = createElement('h3', { textContent: 'Character Overview' });
    
    function createCharacterElement(character) {
        const characterImage = createElement('img', { src: character.imageUrl, alt: character.name, className: 'character-image' });
        const characterInfo = createElement('div', { className: 'character-info' });

        // Create information elements
        const characterNameLabel = createElement('label', { for: 'characterName', textContent: 'Name:' });
        const characterName = createElement('h2', { id: 'characterName', textContent: character.name });

        const filmsLabel = createElement('label', { for: 'films', textContent: 'Films:' });
        const films = createElement('p', { id: 'films', textContent: character.films.join(', ') });

        const tvShowsLabel = createElement('label', { for: 'tvShows', textContent: 'TV Shows:' });
        const tvShows = createElement('p', { id: 'tvShows', textContent: character.tvShows.join(', ') });

        const parkAttractionsLabel = createElement('label', { for: 'parkAttractions', textContent: 'Park Attractions:' });
        const parkAttractions = createElement('p', { id: 'parkAttractions', textContent: character.parkAttractions.join(', ') });

        const alliesLabel = createElement('label', { for: 'allies', textContent: 'Allies:' });
        const allies = createElement('p', { id: 'allies', textContent: character.allies.join(', ') });

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
        const characterContainer = createElement('div', { className: 'character-container' }, [characterImage, characterInfo] );

        return characterContainer;
    }

    function displayCharacterInfo(character) {
        const main = document.getElementById('main');
        main.innerHTML = ''; // Clear previous content

        // Create and append the character element to the main
        const characterElement = createCharacterElement(character);
        main.appendChild(characterElement);
    }

    function fetchCharacterData(characterName) {
        const apiUrl = `https://api.disneyapi.dev/characters?name=${characterName}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const character = data.data;
                displayCharacterInfo(character);
            })
            .catch(error => console.error('Error fetching character data:', error));
    }
    
    function addEvent() {

        // Assuming you have a search bar with an ID 'searchInput'
    const searchInputElement = document.getElementById('searchInput');
    console.log(searchInputElement);
    // Listen for changes in the search input
    searchInputElement.addEventListener('input', (event) => {
        const searchTerm = event.target.value.trim();
        if (searchTerm.length > 0) {
            fetchCharacterData(searchTerm);
        }
    });
    }



    return createElement('div', {}, [title, searchLabel, searchInput, characterTitle]);
}

export default Page1 