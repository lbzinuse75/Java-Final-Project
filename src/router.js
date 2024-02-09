import Page1 from './page1.js';
import Counter from './counter.js';
import Page3 from './page3.js';
import { createElement } from './utils';


export function initRouter(mainView) {
    function updateView(newView) {
        mainView.innerHTML = '';
        mainView.appendChild(newView);
    }


function hashToRoute(hash) {
    switch(hash) {
        case'#/page1':
            updateView(Page1());
            break;

        case'#/page2':
            updateView(Counter());
            break;

        case'#/page3':
            updateView(Page3());
            break;

        default:
            updateView(createElement('h3', {textContent: '404 Page Not Found'}));
            break;
    }
}

const defaultHash = window.location.hash;
hashToRoute(defaultHash);

window.addEventListener('hashchange', (evt) => {
    const newUrl = new URL(evt.newURL);
    const hash = newUrl.hash;

hashToRoute(hash);

});
}