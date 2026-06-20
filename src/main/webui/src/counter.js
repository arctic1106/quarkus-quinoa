export function setupCounter(element) {
    const el = element;
    if (!el) return;

    el.textContent = 'count is 0';
    let count = 0;
    const increment = () => {
        el.textContent = `count is ${++count}`;
    };
    el.addEventListener('click', increment);
}