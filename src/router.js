import Page1 from './page1.js';
import Page2 from './page2.js';
import Page3 from './page3.js';
import { createElement } from './utils';
import addEvent from './characterview.js'
import { addSwirlAnimation } from './home';

export function initRouter(mainView, appendSwirlAnimation) {
    async function updateView(newView) {
        try {
            if (mainView) {
            mainView.innerHTML = '';
            mainView.appendChild(newView);
            } else {
                console.error('Main view element not found.');
            }
        } catch (error) {
            console.error('Error updating view:', error);
        }   
    }

    async function hashToRoute(hash) {
        switch (hash) {
            case '#/page1':
                await updateView(Page1());
                await addEvent();
                break;

            case '#/page2':
                await updateView(Page2());
                break;

            case '#/page3':
                await updateView(Page3());
                break;

            default:
                if (!hash || hash === '#') {
                    await updateView(createElement('div', {
                        id: 'image',
                        style: 'text-align: center;'
                    }, []));
                    
                    addSwirlAnimation(image);

                    // old stationary picture
                    //     createElement('img', {
                    //     src: '/images/disney-castle2.jpg',
                    //     alt: 'Disney Castle',
                    //     className: 'disney-castle-image',
                    //     style: 'display; inline-block; margin: auto;'
                    //     })
                    // ]));

                } else {
                    await updateView(createElement('h3', { textContent: '404 Page Not Found' }));
                }
                break;
        }
    }

    async function initializeRouter() {
        try {
            const defaultHash = window.location.hash;
            await hashToRoute(defaultHash);
        } catch (error) {
            console.error('Error initializing router:', error);
        }
    }
    
    initializeRouter();
    
    window.addEventListener('hashchange', (evt) => {
        const newUrl = new URL(evt.newURL);
        const hash = newUrl.hash;

        hashToRoute(hash);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const mainView = document.getElementById('main');  

    initRouter(mainView);
});