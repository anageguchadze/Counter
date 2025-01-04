const decrementButton = document.querySelectorAll('button')[0]; 
const incrementButton = document.querySelectorAll('button')[1]; 
const counterDisplay = document.querySelector('.counterDisplay'); 

let counter = 0;
counterDisplay.textContent = counter; 

incrementButton.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter; 
});


decrementButton.addEventListener('click', () => {
    counter--;
    counterDisplay.textContent = counter; 
});
