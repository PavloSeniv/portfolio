let SliderOtherPage = new Swiper('.swiper-container', {
//  Стрілки навігації
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

// Навігація
// Буллети, дане положення, прогресбар
    pagination: {
        el: '.swiper-pagination',

        // Фракция
        type: 'fraction',
        // Кастомний вивід фракціЇ
        // Кастомний вивід фракціЇ
        renderFraction: function (currentClass, totalClass) {
            return 'Фото <span class="' + currentClass + '"></span>' +
                ' з ' +
                '<span class="' + totalClass + '"></span>';
        },
    },

// Навігація по хешу
    hashNavigation: {
// Відстужувати стан
        watchState: true,
    },

// Бескінечність
    loop: true,

// К-сть дубльованих слайдів
    loopedSlides: 4,

    freeMode: true,

    grabCursor: true,

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

    /*
    // Заміна прозорості
        effect: 'fade',
    // Доповнення до fade
        fadeEffect: {
    // Паралельна зміна прозорості
            crossFade: true
        },
    */
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