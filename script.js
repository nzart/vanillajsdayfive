const panels = document.querySelectorAll('.panel');

function addOpen() {
    this.classList.add('open');
}
function removeOpen() {
    this.classList.remove('open');
}
panels.forEach(panel => panel.addEventListener('mouseenter', addOpen));
panels.forEach(panel => panel.addEventListener('mouseleave', removeOpen));

function removeGray() {
    this.classList.remove('grayscale');
}
function addGray() {
    this.classList.add('grayscale');
}
panels.forEach(panel => panel.addEventListener('mouseenter', removeGray));
panels.forEach(panel => panel.addEventListener('mouseleave', addGray));