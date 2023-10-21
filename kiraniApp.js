const menuIcon = document.querySelector('.menuIcon');
const subMenu = document.querySelector('.subMenuWrap');

menuIcon.addEventListener('click', () => {
    if (subMenu.style.display === 'block') {
        subMenu.style.display = 'none';
    } else {
        subMenu.style.display = 'block';
        subMenu.style.top = '50%';
        subMenu.style.left = '50%';
        subMenu.style.transform = 'translate(-50%, -50%)';
    }
});
