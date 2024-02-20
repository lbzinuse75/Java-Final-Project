import { createElement } from './utils';
import { fetchCharacterData } from './characterview';

function Page1() {
    const title = createElement('h2', { textContent: 'Welcome to Disney Characters', className: 'Page1Title' });
    const instruction = createElement('p', {textContent: "Type in any Disney Character's name and click Search"});

    const searchLabel = createElement('label', { for: 'searchInput', textContent: 'Search:' });
    const searchInput = createElement('input', { type: 'text', id: 'searchInput', style: 'width: 150px; height: 16px' });
    const searchBtn = createElement('button', { textContent:'Search', id : 'submitBtn', style: 'width: 70px; height: 22px'})
   
    const characterTitle = createElement('h3', { textContent: 'Character Overview' });

    // Add a mouseover event to enlarge the search bar on hover
    searchInput.addEventListener('mouseover', function () {
        this.style.width = '200px';
        this.style.height = '40px';
        this.style.backgroundColor = '#f15bb5';
    });
    // Add a mouseout event to reset the search bar size when the mouse leaves
    searchInput.addEventListener('mouseout', function () {
        this.style.width = '150px';
        this.style.height = '16px';
        this.style.backgroundColor = '';
    });

    searchBtn.addEventListener('mouseover', function () {
        this.style.width = '150px';
        this.style.height = '40px';
        this.style.backgroundColor = '#9b5de5';
    });
    searchBtn.addEventListener('mouseout', function () {
        this.style.width = '70px';
        this.style.height = '22px';
        this.style.backgroundColor = '';
    });

    // Enter key event for the input
    searchInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });

    function handleSearch() {
        const input = searchInput.value.trim();
        if (input.length > 0) {
            // Call your search function or perform the desired action
            fetchCharacterData(input);
        }
    }
    
    return createElement('div', { id: 'page1' }, [title, instruction, searchLabel, searchInput, searchBtn, characterTitle]);
}

export default Page1 