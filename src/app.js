import {createElement} from './utils';
import { initRouter } from './router';
import addEvent from './characterview.js'

// import Counter from './counter';

export function Header() {
    const appTitle = createElement('h1', { 
        textContent: 'Disney Fun!', 
        className: 'heading',
        style: 'text-align: center; margin: 0 auto; cursor: pointer;',
        onclick: () => {
            window.location.href = '';
        }
    });

    // nav items
    const page1 = createElement('a', { 
        href: '/#/page1',
        textContent: 'Characters',
        id: 'characters'
    });    
    const page2 = createElement('a', {
         href: '/#/page2', 
         textContent: 'Story',
         id: 'story'
    });
    const page3 = createElement('a', {
         href: '/#/page3', 
         textContent: 'Quiz',
         id: 'quiz'
    });

    const nav = createElement('nav', {className: 'nav'}, [page1, page2, page3]);

    return createElement('header', {className: 'header', style: 'text-align: center;'}, [appTitle, nav]);
}

function Footer() {
    const copyright = createElement('span', {
        textContent: `Copyright © | Becky Lutz | 2024`,
    });

    return createElement('footer', {className: 'footer'}, [copyright]);
}

function App() {
    const main = createElement('main', {id: 'main'}, []);

    initRouter(main);

    return createElement('div', {className: 'app'}, [Header(), main, Footer()]);
}

export default App;