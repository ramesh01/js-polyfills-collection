// function - Debounce polyfill

function myDebounce (fn, wait) {
    let timer;

    return function(...args) {
        const context = this;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, wait);
    };
}


// Example
const input = document.querySelector('input');

const debouncedInputHandler = myDebounce(() => {
    
}, 250);

input.addEventListener('input', debouncedInputHandler);
