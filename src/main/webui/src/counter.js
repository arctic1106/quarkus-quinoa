export function setupCounter(element) {
    element.innerHTML = `count is 0`

    let counter = 0
    element.addEventListener('click', () => {
        counter++
        element.innerHTML = `count is ${counter}`
    })
}