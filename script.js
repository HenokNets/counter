const button = document.querySelector ('#count');
const reset = document.querySelector ('#reset');
const decrease = document.querySelector ('#decrease');

button.addEventListener('click', () => {
    button.textContent++;
});

reset.addEventListener('click', () => {
    button.textContent = 0;
});

decrease.addEventListener ('click', () => {
    if (parseInt (button.textContent) > 0) {
        button.textContent--;
    }

});

