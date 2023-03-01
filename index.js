let plusButton = document.querySelector('#plus-btn');
let minusButton = document.querySelector('#minus-btn');
let resetButton = document.querySelector('#reset-btn');
let counterEl = document.querySelector('#counter');

plusButton.addEventListener('click', () => {
    let currentNum = Number(counterEl.textContent);

    currentNum++;

    counterEl.textContent = currentNum;
});

minusButton.addEventListener('click', () => {
    let currentNum = Number(counterEl.textContent);

    currentNum--;

    counterEl.textContent = currentNum;
});

resetButton.addEventListener('click', () => {
    counterEl.textContent = 0;
});