const burger = document.querySelector('i')
const navLinks = document.querySelector('ul.nav-links')

function toggleNav() {
    burger.classList.toggle('fa-bars')
    burger.classList.toggle('fa-times')
    navLinks.classList.toggle('nav-active')
}

burger.addEventListener('click', () => {
    toggleNav()
})