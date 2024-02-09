import { createElement } from './utils';

function Page3() {
    const title = createElement('h2', {textContent: 'Page 3'});

    return createElement('div', {}, [title]);
}

export default Page3; 