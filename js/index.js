/* header Elements
*/
const header = document.querySelector('.header')
const headerTitle = header.querySelector('.header__title')
const headerText = header.querySelectorAll('.header__text')
const headerNav = header.querySelector('.header__nav')
const headerButton = header.querySelector('.header__button-home')
const videoMasc = header.querySelector('.header__background')

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

/* flip-card
*/
const flipCard = document.querySelector('.flip-card')
const flipCardFront = document.querySelector('.flip-card__front')
const flipCardBack = document.querySelector('.flip-card__back')

const test = document.querySelector('body')
/* chevron
*/
const chevron = document.querySelector('.chevron')

/* popup
*/

const popup = document.querySelector('.popup')
const popupOpenButton = document.querySelector('.project__popup-open')
/* -----------------------------------------------------------------------------
*/
const addHeaderFullscreen = () => {
  header.classList.add('header_scrolled')
  headerTitle.classList.add('header__title_scrolled')
  glowingLetter.forEach(letter => letter.classList.add('glowing-letters__letter_scrolled'))
  headerText.forEach(i => i.classList.add('header__text_scrolled'))
  headerNav.classList.add('header__nav_scrolled')
  // about.scrollIntoView({ block: "start", inline: "nearest" });
  aboutTitle.classList.add('about__title_scrolled')
  aboutTitleUnderline.classList.add('title-about__underline_scrolled')
  videoMasc.classList.add('header__background_scrolled')

  setTimeout(() => {
    test.classList.add('body_scrolled')
  }, 200)
}

const hideHeaderFullscreen = () => {
  header.classList.remove('header_scrolled')
  headerTitle.classList.remove('header__title_scrolled')
  glowingLetter.forEach(letter => letter.classList.remove('glowing-letters__letter_scrolled'))
  headerText.forEach(i => i.classList.remove('header__text_scrolled'))
  headerNav.classList.remove('header__nav_scrolled')
  test.classList.remove('body_scrolled')
  videoMasc.classList.remove('header__background_scrolled')

}


window.addEventListener('wheel', (e) => {
  if (e.deltaY > 0 && !header.matches('.header_scrolled')) {
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

  let permition = headerNav.classList.contains('header__nav_visible');

  if (!permition) {
    navigationMarker.style.top = '10px'
    navigationMarker.style.left = `${elem.offsetLeft - 10}px`;
    navigationMarker.style.width = `${elem.offsetWidth + 20}px`;
  } else {
    navigationMarker.style.width = '100%'
    navigationMarker.style.left = '0'
    navigationMarker.style.top = `${elem.offsetTop + 10}px`;
  }
}

let activeLinkGlobal;

const cb = (entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      let sectionInVisionId = entry.target.id;

      let activeLink = document.querySelector(
        `.navigation__link[href="#${sectionInVisionId}"]`
      );

      activeLinkGlobal = activeLink;

      if (activeLink !== null) {
        indicator(activeLink);
      }
    }
  });
};

const handleProjectMasc = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('project__insight-mask_deactivate')
    }
  });
}

const sectionObserver = new IntersectionObserver(cb, { threshold: [0.2, 0.8] });
const projectObserver = new IntersectionObserver(handleProjectMasc, { threshold: [0.3] });

document.querySelectorAll('section').forEach(sectionElem => sectionObserver.observe(sectionElem));
document.querySelectorAll('.project__insight-mask').forEach(project => projectObserver.observe(project));

/* -----------------------------------------------------------------------------
*/

flipCard.addEventListener('click', () => {
  flipCardFront.classList.toggle('flip-card__front_pushed')
  flipCardBack.classList.toggle('flip-card__back_pushed')
})

chevron.addEventListener('click', addHeaderFullscreen)


/* -----------------------------------------------------------------------------
*/

const handlePopup = () => {
  popup.classList.toggle('popup_opened')
}

popupOpenButton.addEventListener('click', handlePopup)

/* -----------------------------------------------------------------------------
*/

const menuBurger = document.querySelector('.menu-burger');
menuBurger.addEventListener('click', () => {
  menuBurger.classList.toggle('open')
  headerNav.classList.toggle('header__nav_visible')
  indicator(activeLinkGlobal)
})