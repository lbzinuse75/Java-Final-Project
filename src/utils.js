export function createElement(type, props = {}, children = []) {
    const element = document.createElement(type);

    // props: 'textContent: 'Hello World!', 'id': 'header1', 'data-productId': 123, ...}
    for (const [key, value] of Object.entries(props)) {    
        if(key.startsWith('data-')) {
            element.setAttribute(key, value); // data attributes
        }   else {
            element[key] = value;
        }
    }

    children.flat().forEach((child) => {
        element.appendChild(child);
    });

    return element;
}