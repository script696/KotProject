const header = document.querySelector('.header')
const headerTitle = document.querySelector('.header__title')
const glowingLetter = document.querySelectorAll('.glowing-letters__letter')

window.addEventListener('scroll', () => {
  const windowScroll = window.scrollY
  if(windowScroll) {
    header.classList.add('header_scrolled')
    headerTitle.classList.add('header__title_scrolled')
    glowingLetter.forEach(letter => letter.classList.add('glowing-letters__letter_scrolled'))
  } else {
    header.classList.remove('header_scrolled')
    headerTitle.classList.remove('header__title_scrolled')
    glowingLetter.forEach(letter => letter.classList.remove('glowing-letters__letter_scrolled'))

  }
})

