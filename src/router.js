import Page1 from './page1.js';
import Page2 from './page2.js';
import Page3 from './page3.js';
import { createElement } from './utils';
import addEvent from './characterview.js'

export function initRouter(mainView) {
    async function updateView(newView) {
        mainView.innerHTML = '';
        mainView.appendChild(newView);
    }

    async function hashToRoute(hash) {
        switch (hash) {
            case '#/page1':
                await updateView(Page1());
                await addEvent();
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
    });

}