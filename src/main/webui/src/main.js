import { setupCounter } from './counter.js'

setupCounter(document.querySelector('#counter'))

let clicked = false
const elem = document.querySelector('#hello');
elem.addEventListener('click', async () => {
	if (clicked) {
		elem.textContent = 'Call "/hello" Endpoint'
		clicked = false
	}
	else {
		const response = await fetch("/hello");
		elem.textContent = await response.text();
		clicked = true
	}
});