import { createElement } from './utils';

function Page1() {
    const title = createElement('h2', { textContent: 'Welcome to Disney Characters', className: 'Page1Title' });

    const searchLabel = createElement('label', { for: 'searchInput', textContent: 'Search:' });
    const searchInput = createElement('input', { type: 'text', id: 'searchInput' });
    const searchBtn = createElement('button', { textContent:'Search', id : 'submitBtn'})
   
    const characterTitle = createElement('h3', { textContent: 'Character Overview' });
    
    return createElement('div', {}, [title, searchLabel, searchInput, searchBtn, characterTitle]);
}

export default Page1 