const headerIcon = document.querySelector('.menu__icon')
const headerLinks = document.querySelector('.header__nav__list')
const headerLogo = document.querySelector('.header__logo')
console.log(headerIcon)
headerIcon.addEventListener('click', (e) => {
  let nav = document.querySelector('.fas')
  if (nav.classList.contains('fa-bars')) {
    nav.classList.remove('fa-bars')
    nav.classList.add('fa-times')
    headerLinks.classList.add('active')
    headerLogo.style.display = 'none'
  } else if (nav.classList.contains('fa-times')) {
    nav.classList.remove('fa-times')
    nav.classList.add('fa-bars')
    headerLinks.classList.remove('active')
    headerLogo.style.display = 'flex'
  }
})