const header = document.querySelector('.header')
const headerTitle = document.querySelector('.header__title')
const glowingLetter = document.querySelectorAll('.glowing-letters__letter')
const headerText = document.querySelectorAll('.header__text')
const headerNav = document.querySelector('.header__nav')
const headerButton = document.querySelector('.header__button-home')


const addHeaderFullscreen = () => {
  header.classList.add('header_scrolled')
  headerTitle.classList.add('header__title_scrolled')
  glowingLetter.forEach(letter => letter.classList.add('glowing-letters__letter_scrolled'))
  headerText.forEach(i => i.classList.add('header__text_scrolled'))
  headerNav.classList.add('header__nav_scrolled')
  setTimeout(() => window.scrollTo(0, 0), 200)
  
}

const hideHeaderFullscreen = () => {
  header.classList.remove('header_scrolled')
  headerTitle.classList.remove('header__title_scrolled')
  glowingLetter.forEach(letter => letter.classList.remove('glowing-letters__letter_scrolled'))
  headerText.forEach(i => i.classList.remove('header__text_scrolled'))
  headerNav.classList.remove('header__nav_scrolled')
}



window.addEventListener('scroll', () => {
  const windowScroll = window.scrollY
  if (windowScroll > 0 && !header.matches('.header_scrolled')) {
    addHeaderFullscreen();
  }
})

headerButton.addEventListener('click', () => {
  header.matches('.header_scrolled') ?
  hideHeaderFullscreen() :
  addHeaderFullscreen()
})

