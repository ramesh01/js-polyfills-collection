// function - Throttle polyfill

function myThrottle (fn, wait) {
    let inThrottle = false;

    return function() {
        if (!inThrottle) {
            fn.apply(this, arguments);
            inThrottle = true;

            setTimeout(() => {
                inThrottle = false;
            }, wait);
        }
    };
}


const handleClick = () => {
    console.log('clicked');
}

const throttledClickHandler = myThrottle(handleClick, 1000);

document.querySelector('button').addEventListener('click', throttledClickHandler);
