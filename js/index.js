import { allProjects, projectLinks } from './projectsBase.js'

const body = document.querySelector('body')

/* header Elements
*/
const header = document.querySelector('.header')
const headerTitle = header.querySelector('.header__content')
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
const popupOpenButtons = document.querySelectorAll('.project__popup-open')
const popupCloseButton = document.querySelector('.popup__close-button')
/* -----------------------------------------------------------------------------
*/

/* promo
*/

const promo = document.querySelector('.promo')


const addHeaderFullscreen = () => {
  header.classList.add('header_scrolled')
  headerTitle.classList.add('header__content_scrolled')
  glowingLetter.forEach(letter => letter.classList.add('glowing-letters__letter_scrolled'))
  headerText.forEach(i => i.classList.add('header__text_scrolled'))
  headerNav.classList.add('header__nav_scrolled')
  aboutTitle.classList.add('about__title_scrolled')
  aboutTitleUnderline.classList.add('title-about__underline_scrolled')
  videoMasc.classList.add('header__background_scrolled')

  setTimeout(() => {
    test.classList.add('body_scrolled')
  }, 200)
}

const hideHeaderFullscreen = () => {
  header.classList.remove('header_scrolled')
  headerTitle.classList.remove('header__content_scrolled')
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

const handlePromoMasc = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      promo.classList.add('promo_hide-mask')
    }
  })
}

const sectionObserver = new IntersectionObserver(cb, { threshold: [0.2, 0.8] });
const projectObserver = new IntersectionObserver(handleProjectMasc, { threshold: [0.3] });
const promoObserver = new IntersectionObserver(handlePromoMasc, { threshold: 0.4 });

document.querySelectorAll('section').forEach(sectionElem => sectionObserver.observe(sectionElem));
document.querySelectorAll('.promo').forEach(promo => promoObserver.observe(promo));
document.querySelectorAll('.project__insight-mask').forEach(project => projectObserver.observe(project));

/* -----------------------------------------------------------------------------
*/

flipCard.addEventListener('click', () => {
  flipCardFront.classList.toggle('flip-card__front_pushed')
  flipCardBack.classList.toggle('flip-card__back_pushed')
})

// chevron.addEventListener('click', addHeaderFullscreen)


/* -----------------------------------------------------------------------------
*/



/* -----------------------------------------------------------------------------
*/

const menuBurger = document.querySelector('.menu-burger');
menuBurger.addEventListener('click', () => {
  menuBurger.classList.toggle('open')
  headerNav.classList.toggle('header__nav_visible')
  indicator(activeLinkGlobal)
})

/* -----------------------------------------------------------------------------
*/

var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  // loop: true,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const testBullet = document.querySelectorAll(".swiper-pagination-bullet");

// const menuArray = ["Wtats project", "Whats new", "Whats later", "Links"];

// testBullet.forEach((val, index) => {
//   const bulletTextWrap = document.createElement("div");
//   const bulletTextInner = document.createElement("p");
//   bulletTextInner.textContent = menuArray[index];
//   bulletTextInner.classList.add("text");
//   bulletTextWrap.append(bulletTextInner);
//   bulletTextWrap.classList.add("wrap");
//   val.append(bulletTextWrap);
// });


/* -----------------------------------Popup----------------------------------
*/
const slideContent = document.querySelector(".slideOneTest");

const slide1 = document.querySelector('.slide[aria-label="1 / 4"]')
const slide2 = document.querySelector('.slide[aria-label="2 / 4"]')
const slide3 = document.querySelector('.slide[aria-label="3 / 4"]')
const slide4 = document.querySelector('.slide[aria-label="4 / 4"]')


const popupLink = document.querySelector('.popup__link')




const createProject = (data, numOfSlides) => {
  let arraOfSlides = [];
  for (let i = 1; i <= numOfSlides; i++) {
    const slide = createSlide(data, `slide${i}`);
    arraOfSlides.push(slide)
  }
  return arraOfSlides;
}

const appendSlides = (arraOfSlides, numOfSlides) => {
  for (let i = 1; i <= numOfSlides; i++) {
    const parentElem = document.querySelector(`.slide[aria-label="${i} / 4"]`);
    parentElem.append(arraOfSlides[i - 1]);
  }
}


const createSlide = (data, slideName) => {
  const slideTemplate = document
    .querySelector(`.${slideName}`)
    .content.cloneNode(true);

  Object.keys(data[slideName]).forEach((val) => {

    const elem = createElem(data, val, slideName);
    const elemPosition = data[slideName][val]['position'] === 'prepend'
      ? true
      : false;

    const parentElemClassName = data[slideName][val]["parent"];
    const parentElem = slideTemplate.querySelector("." + parentElemClassName);

    elemPosition
      ? parentElem.prepend(elem)
      : parentElem.append(elem);

  });

  return slideTemplate;
};


const createElem = (data, val, slideName) => {
  const elemType = data[slideName][val]["type"];
  const elemClass = data[slideName][val]["className"];
  const elemText = data[slideName][val]["text"];
  const isImage = data[slideName][val]["isImage"];

  if (!isImage) {
    const newElem = document.createElement(elemType);

    newElem.classList.add(elemClass);
    newElem.textContent = elemText;
    return newElem;

  } else {
    const newLiElem = document.createElement('li');
    const newElem = document.createElement(elemType);


    newLiElem.classList.add('slide__skill');
    newLiElem.textContent = elemText;

    newElem.classList.add(elemClass);
    newElem.src = data[slideName][val]["src"];
    newElem.alt = data[slideName][val]["alt"];

    newLiElem.append(newElem)

    return newLiElem
  }
};

const openPopup = (currentProject, currentProjectName) => {
  const numOfSlides = Object.keys(currentProject).length;

  const arraOfSlides = createProject(currentProject, numOfSlides)

  popup.classList.add("popup_opened");

  popupLink.href = projectLinks[currentProjectName]
  
  body.classList.toggle('body_popup');

  appendSlides(arraOfSlides, numOfSlides)

};


// const fillPopupLink = () => {

// }




const resetSwiper = () => {
  slide1.innerHTML = "";
  slide2.innerHTML = "";
  slide3.innerHTML = "";
  slide4.innerHTML = "";
}


const closePopup = () => {
  popup.classList.remove("popup_opened");

  body.classList.toggle('body_popup')

  resetSwiper()

};



// popupOpenButton.addEventListener('click', openPopup)
popupOpenButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const currentProjectName = e.target.id;
    const currentProjectData = allProjects[currentProjectName];
    openPopup(currentProjectData, currentProjectName)
  });
})
popupCloseButton.addEventListener('click', closePopup)

document.addEventListener('mousedown', (e) => {
  if (e.target.matches('.popup')) {
    closePopup()
  }
})

/* -----------------------------------PopupEnd----------------------------------
*/


