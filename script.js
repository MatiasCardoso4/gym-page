const hamburguer = document.querySelector('.menu-toggle')
const navLinks = document.querySelector('.nav-links')

hamburguer.addEventListener('click', ()=> {
  navLinks.classList.toggle('active')
})