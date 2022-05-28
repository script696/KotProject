/* header Elements
*/
const header = document.querySelector('.header')
const headerTitle = header.querySelector('.header__title')
const headerText = header.querySelectorAll('.header__text')
const headerNav = header.querySelector('.header__nav')
const headerButton = header.querySelector('.header__button-home')

/* navigation Elements
*/
const navigationLinks = document.querySelectorAll('.navigation__link');
const navigationMarker = document.querySelector('.navigation__marker');

/* about Elements
*/
const about = document.querySelector('.about')
const aboutTitle = about.querySelector('.about__title')
const aboutTitleUnderline = about.querySelector('.title-about__underline')

/* glowing-letters
*/
const glowingLetter = document.querySelectorAll('.glowing-letters__letter')


/* -----------------------------------------------------------------------------
*/
const addHeaderFullscreen = () => {
  header.classList.add('header_scrolled')
  headerTitle.classList.add('header__title_scrolled')
  glowingLetter.forEach(letter => letter.classList.add('glowing-letters__letter_scrolled'))
  headerText.forEach(i => i.classList.add('header__text_scrolled'))
  headerNav.classList.add('header__nav_scrolled')
  setTimeout(() => {
    about.scrollIntoView({ block: "start", inline: "nearest" });
  }, 250)

  about.scrollIntoView({ block: "start", inline: "nearest" });
  aboutTitle.classList.add('about__title_scrolled')
  aboutTitleUnderline.classList.add('title-about__underline_scrolled')

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

/* -----------------------------------------------------------------------------
*/



const indicator = (elem) => {
  navigationMarker.style.left = `${elem.offsetLeft - 10}px`;
  navigationMarker.style.width = `${elem.offsetWidth + 20}px`;
}


const cb = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
      console.log(entry.target, entry.isIntersecting, entry.intersectionRatio)


      let sectionInVisionId = entry.target.id;
      console.log(entry.target.id)

      let activeLink = document.querySelector(
        `.navigation__link[href="#${sectionInVisionId}"]`
      );
      indicator(activeLink);
    }
  });
};

const sectionObserver = new IntersectionObserver(cb, { threshold: [0.2, 0.8] });

document.querySelectorAll('section').forEach(sectionElem => sectionObserver.observe(sectionElem));



