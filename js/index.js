const body = document.querySelector('body')

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
const popupOpenButtons = document.querySelectorAll('.project__popup-open')
const popupCloseButton = document.querySelector('.popup__close-button')
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



const projectRussianTravel = {
  slide1: {
    title: {
      type: "h2",
      text: "Проект Russian-travel!",
      className: "slide__title",
      parent: "slide__wrapper",
      position: 'prepend',
    },
    subTitleAbout: {
      type: "p",
      text: "О чем",
      className: "slide__subtitle",
      parent: "slide1__left-col",
      position: 'append',
    },
    paragraph1: {
      type: "p",
      text:
        "Russian-travel - одностраничный лендинг и моя первая серьезная работа в разработке Веб интерфейсов. В качестве исходных данных был предоставлен макет в Figma для разрешений 320, 768, 1024 и 1280 пикселей.",
      className: "slide__text",
      parent: "slide1__left-col",
      position: 'append',

    },
    subTitleTarget: {
      type: "p",
      text: "Зачем",
      className: "slide__subtitle",
      parent: "slide1__right-col",
      position: 'append',

    },
    paragraph2: {
      type: "p",
      text:
        "Целью задачи было разработать адаптивный сайт который бы одинакого хорошо смотрелся на устройствах размером от большого монитора до маленького телефона.",
      className: "slide__text",
      parent: "slide1__right-col",
      position: 'append',
    }
  },
  slide2: {
    title: {
      type: "h2",
      text: "What i learned",
      className: "slide__title",
      parent: "slide__wrapper",
      position: 'prepend',
    },
    item1: {
      type: "li",
      text: "Элемент списка",
      className: "enumerated-list__item",
      parent: "enumerated-list",
      position: 'append',
    },
    item2: {
      type: "li",
      text: "Элемент списка",
      className: "enumerated-list__item",
      parent: "enumerated-list",
      position: 'append',
    },
    item3: {
      type: "li",
      text: "Элемент списка",
      className: "enumerated-list__item",
      parent: "enumerated-list",
      position: 'append',
    },
    item4: {
      type: "li",
      text: "Элемент списка",
      className: "enumerated-list__item",
      parent: "enumerated-list",
      position: 'append',
    },
    item5: {
      type: "li",
      text: "Элемент списка",
      className: "enumerated-list__item",
      parent: "enumerated-list",
      position: 'append',
    },
  },
  slide3: {
    subTitle: {
      type: "p",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore blanditiis quisquam iusto dolores corrupti veniam eos dolorum ut! Earum.",
      className: "slide__subtitle",
      parent: "slide__wrapper",
      position: 'prepend',
    },
    title: {
      type: "h2",
      text: "What to improve",
      className: "slide__title",
      parent: "slide__wrapper",
      position: 'prepend',
    },
    item1: {
      type: "li",
      text: "Элемент списка",
      className: "enumerated-list__item",
      parent: "enumerated-list",
      position: 'append',
    },
    item2: {
      type: "li",
      text: "Элемент списка",
      className: "enumerated-list__item",
      parent: "enumerated-list",
      position: 'append',
    },
    item3: {
      type: "li",
      text: "Элемент списка",
      className: "enumerated-list__item",
      parent: "enumerated-list",
      position: 'append',
    },
  },
  slide4: {

    subTitle: {
      type: "p",
      text: "Lorem ipsum dolor sit amet.",
      className: "slide__subtitle",
      parent: "slide__wrapper",
      position: 'prepend',
    },

    title: {
      type: "h2",
      text: "Skills & Tools",
      className: "slide__title",
      parent: "slide__wrapper",
      position: 'prepend',
    },
    
    html5: {
      type: "img",
      text: "HTML5",
      className: "skill__img",
      parent: "slide__skills",
      position: 'append',
      isImage: 'true',
      src: './img/svg/html5.svg',
      alt: 'HTML5 logo',
    },
    css3: {
      type: "img",
      text: "CSS3",
      className: "skill__img",
      parent: "slide__skills",
      position: 'append',
      isImage: 'true',
      src: './img/svg/css3.svg',
      alt: 'CSS3 logo',
    },
    Responsive: {
      type: "img",
      text: "Responsive",
      className: "skill__img",
      parent: "slide__skills",
      position: 'append',
      isImage: 'true',
      src: './img/svg/responsive.svg',
      alt: 'Responsive logo',
    },
    github: {
      type: "img",
      text: "GitHub",
      className: "skill__img",
      parent: "slide__skills",
      position: 'append',
      isImage: 'true',
      src: './img/svg/github.svg',
      alt: 'HTML5 icon',
    },
    vscode: {
      type: "img",
      text: "VSCode",
      className: "skill__img",
      parent: "slide__skills",
      position: 'append',
      isImage: 'true',
      src: './img/svg/vscode.svg',
      alt: 'HTML5 icon',
    },

  }
};


const allProjects = {
  projectRussianTravel: projectRussianTravel,
  projectMesto: projectMesto,
  projectTuoTown: projectTuoTown,
}

const createProject = (data) => {
  const numOfSlides = Object.keys(data)

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

const openPopup = (currentProject) => {
  
  createProject(currentProject)

  const slideOne = createSlide(allProjects[currentProject], 'slide1');
  const slideTwo = createSlide(allProjects[currentProject], 'slide2');
  const slideThree = createSlide(allProjects[currentProject], 'slide3');
  const slideFour = createSlide(allProjects[currentProject], 'slide4');

  popup.classList.add("popup_opened");

  body.classList.toggle('body_popup');


  slide1.append(slideOne);
  slide2.append(slideTwo);
  slide3.append(slideThree);
  slide4.append(slideFour);
};

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
    const currentProject = e.target.id;
    const currentProjectData = allProjects[currentProject];
    openPopup(currentProjectData)
  });
})
popupCloseButton.addEventListener('click', closePopup)
/* -----------------------------------PopupEnd----------------------------------
*/
