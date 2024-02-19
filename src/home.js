export function addSwirlAnimation(mainView) {
    const swirlAnimation = document.createElement('div');
    swirlAnimation.classList.add('swirl-animation');
    swirlAnimation.style.backgroundColor = 'transparent';
    swirlAnimation.style.border = 'none';

    mainView.appendChild(swirlAnimation);

    const imageElement = document.createElement('img');
    imageElement.src = require('/images/disney-castle2.jpg');
    swirlAnimation.appendChild(imageElement);

    const finalContainerSize = 500;

    // Start the animation when the page loads
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
        // Adjust the size of the container after the animation is complete
        swirlAnimation.style.width = finalContainerSize + 'px';
        swirlAnimation.style.height = finalContainerSize + 'px';
        imageElement.style.position = 'fixed';
        imageElement.style.top = '45%';
        imageElement.style.left = '88%';
        imageElement.style.transform = 'translate(-50%, -50%)'; // Center the image
    };
}