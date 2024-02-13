import {createElement} from './utils';
import { initRouter } from './router';

// import Counter from './counter';

export function Header() {
    const appTitle = createElement('h1', { 
        textContent: 'Disney Fun!', 
        className: 'heading',
    });

    // nav items
    const page1 = createElement('a', { 
        href: '/#/page1',
        textContent: 'Characters'
    });    
    const page2 = createElement('a', {
         href: '/#/page2', 
         textContent: 'Story'
    });
    const page3 = createElement('a', {
         href: '/#/page3', 
         textContent: 'Quiz'
    });


    const nav = createElement('nav', {className: 'nav'}, [page1, page2, page3]);

    return createElement('header', {className: 'header'}, [appTitle, nav]);
}

function Footer() {
    const copyright = createElement('span', {
        textContent: `Copyright ©; ${new Date().getFullYear()}`,
    });

    return createElement('footer', {className: 'footer'}, [copyright]);
}

function App() {
    const main = createElement('main', {}, []);

    initRouter(main);

    return createElement('div', {}, [Header(), main, Footer()]);
}

export default App;