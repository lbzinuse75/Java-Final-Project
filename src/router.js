import Page1 from './page1.js';
import Page2 from './page2.js';
import Page3 from './page3.js';
import { createElement } from './utils';
import addEvent from './characterview.js'
import { addSwirlAnimation } from './home';

function reload(){
    location.reload()
}

// router initialization function, handles navigation and updates the main view based on the URL hash
export function initRouter(mainView) {
    // update the mainView element to display a new view for each page
    // clears the existing content and appends the provided 'newView'
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

    // handle navigation by interpreting the hash and displaying the corresponding page
    async function hashToRoute(hash) {
        switch (hash) {
            case '#/page1':
                await updateView(Page1());
                await addEvent();
                // add event listener to reload the page, give a refreshed view, when the 'Characters' link is clicked
                // document.getElementById('characters').addEventListener('click', () => location.reload());
                document.getElementById('story').removeEventListener('click', reload);
                document.getElementById('quiz').removeEventListener('click', reload);
                document.getElementById('characters').addEventListener('click', reload);
                break;

            case '#/page2':
                await updateView(Page2());
                // add event listener to reload the page, give a refreshed view, when the 'Story' link is clicked
                document.getElementById('characters').removeEventListener('click', reload);
                document.getElementById('quiz').removeEventListener('click', reload);
                document.getElementById('story').addEventListener('click', reload);
                break;

            case '#/page3':
                await updateView(Page3());
                // add event listener to reload the page, give a refreshed view, when the 'Characters' link is clicked
                document.getElementById('story').removeEventListener('click', reload);
                document.getElementById('characters').removeEventListener('click', reload);
                document.getElementById('quiz').addEventListener('click', reload);
                break;

            default:
                // send error message if hash not found
                if (!hash || hash === '#') {
                    await updateView(createElement('div', {
                        id: 'image',
                        style: 'text-align: center;'
                    }, []));
                    //call animation to image for default page
                    addSwirlAnimation(image);

                } else {
                    await updateView(createElement('h3', { textContent: '404 Page Not Found' }));
                }
                break;
        }
    }

    // initialize the router by handling the default has on page load
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

// set up event listeners and initialize the router when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const mainView = document.getElementById('main');  

    initRouter(mainView);
});