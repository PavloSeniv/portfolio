let SliderHome = new Swiper('.swiper-container', {
//  Стрілки навігації
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

// Навігація
// Буллети, дане положення, прогресбар
    pagination: {
        el: '.swiper-pagination',
        /*
        // Буллети
        type: 'bullets',
        clickable: true,
        // Динамічні булети
        dynamicBullets: true,
        // Кастомні булети
        renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>'
        },
        */

        /*
        // Фракция
        type: 'fraction',
        // Кастомний вивід фракціЇ
        renderFraction: function (currentClass, totalClass) {
        return 'Фото <span class="' + currentClass + '"></span>' +
        ' з ' +
        '<span class="' + totalClass + '"></span>';
        },
        */


// Прогрессбар
        type: 'progressbar'

    },

// Скроллбар
    scrollbar: {
        el: '.swiper-scrollbar',
// Можливість перетягування скролу
        draggable: false,
    },

// Включення / виключення
// перетягування на пк
    simulateTouch: true,
// Чутливість свайпу
    touchRatio: 5,
// Кут роботи свайпу/перетягування
    touchAngle: 45,

    /*
    // Курсор перетягування
    grabCursor: true,
    */


// Переключення при кліку на слайд
    slideToClickedSlide: false,

// Навігація по хешу
    hashNavigation: {
// Відстужувати стан
        watchState: true,
    },

// Управління клавіатурою
    keyboard: {
// Включити / виключити
        enabled: true,
// Включити / виключити
// коли слайдер в межах вьюпорта
        onlyInViewport: true,
// Включити / виключити
// управління клавішами pageUp, pageDown
        pageUpDown: true,
    },

    /*
    // Управління колесом миші
    mousewheel: {
    // Чутливість колеса миші
    sensitivity: 1,
    // Клас об'єкту на якому буде працювати прокрутка
    // eventsTarget: ".image-slider"
    },
    */

    /*
    // Автовисота
    autoHeight: true,
    */

    /*
    slidesPerView: 2, // | 'auto' | 2.5
    */

    /*
    // Відключення функціоналу, якщо слайдів менше ніж потрібно
    watchOverflow: true,
    */

    /*
    // Відступ між слайдами
    spaceBetween: 30,
    */

    /*
    // К-сть прогорнутих слайдів
    slidesPerGroup: 3,
    */

    /*
    // Активний слайд по центру
    centeredSlides: true,
    */

    /*
    // Стратовий слайд
    initialSlide: 1,
    */

    /*
    // Мультирядність
    slidesPerColumn: 2,
    */

// Бескінечність
    loop: true,


// К-сть дубльованих слайдів
    loopedSlides: 3,


    /*
    freeMode: true,
    */


// Атопрокрутка
    autoplay: {
// Пауза між прокртукою
        delay: 5000,
// Закінчити на останньому слайді
        stopOnLastSlide: false,
// Відключити після ручного управління
        disableOnInteraction: false
    },


// Скорость
    speed: 2000,

// Вертикальний слайдер
    direction: 'horizontal',

    /*
    // Ефекти перемикання слайдів
    // Перегортування
    effect: 'slide', // Ефект по дефолту
    */


// Заміна прозорості
    effect: 'fade',
// Доповнення до fade
    fadeEffect: {
// Паралельна зміна прозорості
        crossFade: true
    },

    /*
    // Переворот
    effect: 'flip',
    // Доповнення до flip
    flipEffect: {
    // Тінь
    slideShadows: true,
    // Показ тільки активного слайду
    limitRotation: true
    },
    */

    /*
    // Куб
    effect: 'cube',
    // Доповнення до cube
    cubeEffect: {
    // Настройка тіні
    slideShadows: false,
    shadow: true,
    shadowOffset: 20,
    shadowScale: 0.94
    },
    */

    /*
    // Потік
    effect: 'coverflow',
    coverflowEffect: {
    // Кут
    rotate: 30,
    // Накладання
    stretch: 50,
    //Тінь
    slideShadows: false,
    },
    */

    /*
    // Брейкпоінти (адаптив)
    // Ширина екрану
    breakpoints: {
    320: {
    slidesPerView: 1,
    },
    480: {
    slidesPerView: 2,
    },
    992: {
    slidesPerView: 3,
    }
    },
    */

    /*
    // Брейкпоінти (адаптив)
    // Відношення сторінд
    breakpoints: {
    '@0.75': {
    slidesPerView: 1,
    },
    '@1.00': {
    slidesPerView: 2,
    },
    '@1.50': {
    slidesPerView: 3,
    }
    },
    */

    /*
    // Відключення предзавантаження картинок
    preloadImages: false,
    // Lazy Loading
    lazy: {
    // Підгружати на старті наступного слайду
    loadOnTransitionStart: false,
    // Підвантажувати наступну та попередню картинки
    loadPrevNext: true,
    },

    // Стеження за видимими слайдами
    watchSlidesProgress: true,
    // Додавання класу видимим слайдам
    watchSlidesVisibility: true,
    */

    /*
    // Зум картинки
    zoom: {
    // Максимальне збільшення
    maxRatio: 5,
    // Мінімальне збільшення
    minRatio: 1,
    },
    */

    /*
    // Мініатюри
    thumbs: {
    // Свайпер з мінатюрами та його налаштування
    swiper: {
    el: '.image-mini-slider',
    slidesPerView: 5,
    }
    },
    */

// Доступність
    a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
    },

});

/*
// Слайдер в слайдері
new Swiper('.image-in-slider', {
grabCursor: true,
// Навігація
// Буллети, дане положення, прогресбар
pagination: {
el: '.swiper-pagination',
// Буллети
type: 'bullets',
clickable: true,
// Динамічні булети
dynamicBullets: true,
},
// Коректна робота для дочірього слайдера
nested: true,
});
*/


/*
let sliderPhoto = document.querySelector('.swiper-wrapper');

sliderPhoto.addEventListener("mouseenter", function (e) {
SliderHome.params.autoplay.disableOnInteraction = false;
SliderHome.params.autoplay.delay = 500;
SliderHome.autoplay.start();
});

sliderPhoto.addEventListener("mouseleave", function (e) {
sliderPhoto.autoplay.stop();
});*/

