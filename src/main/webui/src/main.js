import { setupCounter } from './counter.js';

const counterEl = document.querySelector('#counter');
if (counterEl) {
    setupCounter(counterEl);
}

const helloEl = document.querySelector('#hello');
if (helloEl) {
    let clicked = false;
    helloEl.addEventListener('click', async () => {
        if (clicked) {
            helloEl.textContent = 'Call "/hello" Endpoint';
            clicked = false;
        } else {
            try {
                const response = await fetch('/hello');
                const text = await response.text();
                helloEl.textContent = text;
            } catch (err) {
                console.error('Error fetching /hello:', err);
                helloEl.textContent = 'Error';
            }
            clicked = true;
        }
    });
}