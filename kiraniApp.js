const menuIcon = document.querySelector('.menuIcon');
const subMenu = document.querySelector('.subMenuWrap');
const body = document.body;

menuIcon.addEventListener('click', () => {
    if (subMenu.style.display === 'block' || subMenu.style.display === '') {
        subMenu.style.display = 'none';
    } else {
        subMenu.style.display = 'block';
    }
});

document.addEventListener('click', (event) => {
    if (subMenu.style.display === 'block' && event.target !== menuIcon && !subMenu.contains(event.target)) {
        subMenu.style.display = 'none';
    }
});

body.addEventListener('click', (event) => {
    if (subMenu.style.display === 'block' && event.target !== menuIcon) {
        subMenu.style.display = 'none';
    }
});
