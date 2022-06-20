const projectRussianTravel = {
  slide1: {
    title: {
      type: "h2",
      text: "Проект Russian-travel",
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
        "Russian-travel - одностраничный лендинг о путешествиях по стране и моя первая серьезная работа в школе разработке Веб интерфейсов. В качестве исходных данных был предоставлен макет в Figma для разрешений 320, 768, 1024 и 1280 пикселей.",
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
      text: "Чему новому я научился в данном проекте",
      className: "slide__title",
      parent: "slide__wrapper",
      position: 'prepend',
    },
    item1: {
      type: "li",
      text: "Применение технологии Flexbox",
      className: "enumerated-list__item",
      parent: "enumerated-list",
      position: 'append',
    },
    item2: {
      type: "li",
      text: "Применение технологии Grid Layout",
      className: "enumerated-list__item",
      parent: "enumerated-list",
      position: 'append',
    },
    item3: {
      type: "li",
      text: "Адаптивная верстка с использованием медиазапросов",
      className: "enumerated-list__item",
      parent: "enumerated-list",
      position: 'append',
    },
    item4: {
      type: "li",
      text: "Методология БЭМ, nested",
      className: "enumerated-list__item",
      parent: "enumerated-list",
      position: 'append',
    },
    item5: {
      type: "li",
      text: "Использование семантических тегов",
      className: "enumerated-list__item",
      parent: "enumerated-list",
      position: 'append',
    },
    item6: {
      type: "li",
      text: "Ветвление и слияние веток Git",
      className: "enumerated-list__item",
      parent: "enumerated-list",
      position: 'append',
    },
    item6: {
      type: "li",
      text: "Работа с терминалом",
      className: "enumerated-list__item",
      parent: "enumerated-list",
      position: 'append',
    },
  },
  slide3: {
    subTitle: {
      type: "p",
      text: "Проект Russian-travel - учебный и не нуждается в дополнении",
      className: "slide__subtitle",
      parent: "slide__wrapper",
      position: 'prepend',
    },
    title: {
      type: "h2",
      text: "Что улучшить",
      className: "slide__title",
      parent: "slide__wrapper",
      position: 'prepend',
    },
    item1: {
      type: "li",
      text: "Разработка окончена",
      className: "enumerated-list__item",
      parent: "enumerated-list",
      position: 'append',
    },
  },
  slide4: {

    subTitle: {
      type: "p",
      text: "Технологии использованные в проекте",
      className: "slide__subtitle",
      parent: "slide__wrapper",
      position: 'prepend',
    },

    title: {
      type: "h2",
      text: "Умения & инструменты",
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

const projectTuoTown = {
  slide1: {
    title: {
      type: "h2",
      text: "TuoTown",
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

const projectMesto = {
  slide1: {
    title: {
      type: "h2",
      text: "Mesto",
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

const projectPortfolio = {
  slide1: {
    title: {
      type: "h2",
      text: "Portfolio",
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

const projectLinks = {
  projectTuoTown: 'https://script696.github.io/russian-travel/',
}

const allProjects = {
  projectRussianTravel,
  projectMesto,
  projectTuoTown,
  projectPortfolio,
}

export {allProjects}; 