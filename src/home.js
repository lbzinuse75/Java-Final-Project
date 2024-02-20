// adding an animation to the default page for effect
export function addSwirlAnimation(mainView) {
    const swirlAnimation = document.createElement('div');
    swirlAnimation.classList.add('swirl-animation');
    swirlAnimation.style.zIndex = '0';

    mainView.appendChild(swirlAnimation);

    // add image
    const imageElement = document.createElement('img');
    imageElement.src = require('/images/disney-castle2.jpg');
    swirlAnimation.appendChild(imageElement);

    // start the animation when the page loads
    swirlAnimation.animate(
        [
            { transform: 'scale(0) rotate(0deg) translateX(0)' },
            { transform: 'scale(1) rotate(360deg) translateX(50px)' },
            { transform: 'scale(2) rotate(720deg) translateX(0)' },
        ],
        {
            duration: 5000,
            easing: 'ease-in-out',
            iterations: 1,
            fill: 'forwards',
        }
    ).onfinish = function () {
        // adjust the size of the container after the animation is complete
        imageElement.style.position = 'fixed';
        imageElement.style.top = '50%';
        imageElement.style.left = '50%';
        imageElement.style.transform = 'translate(-50%, -50%)'; // Center the image
    };
}