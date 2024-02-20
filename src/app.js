import {createElement} from './utils';
import { initRouter } from './router';

// create header to appear on all pages
export function Header() {
    const appTitle = createElement('h1', { 
        textContent: 'Disney Fun!', 
        className: 'heading',
        style: {
            textAlign: 'center', 
            margin: '0 auto',
            cursor: 'pointer',
        },
        // 'Disney Fun!' to act like a home button
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

    // create nav element
    const nav = createElement('nav', { className: 'nav' }, [page1, page2, page3]);

    // create header element
    return createElement('header', { className: 'header', style: 'text-align: center;' }, [appTitle, nav]);
}

// create footer to appear on all pages
function Footer() {
    const copyright = createElement('span', {
        textContent: `Copyright © | Becky Lutz | 2024`,
    });

    // create footer element
    return createElement('footer', { className: 'footer' }, [copyright]);
}

// create main container for pages
function App() {
    const main = createElement('main', { id: 'main' }, []);

    initRouter(main);

    // create the page structure
    return createElement('div', { className: 'app' }, [Header(), main, Footer()]);
}

export default App;