"use strict"
const modal = document.querySelector('.modal');
const visibleClassName = 'modal--visible';
function openModal() {
    modal.classList.add(visibleClassName);
}
modal.addEventListener('click', ({ target }) => {
    if (target.dataset.action === 'close') {
        modal.classList.remove(visibleClassName);
    }
});
addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        modal.classList.remove(visibleClassName);
    }
});
const outer = document.querySelector('.outer');
const inner = document.querySelector('.inner');
outer.addEventListener('mousemove', (event) => {
    const { x, y } = event;
    inner.style.translate = `${x - 10}px ${y - 10}px`;
});
openModal();