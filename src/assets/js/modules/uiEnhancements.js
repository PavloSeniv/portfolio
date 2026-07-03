// Дрібні UI-покращення: «розумний» sticky-хедер + поява акценту під заголовками секцій.
export function uiEnhancements() {
    // Хедер трохи стискається й отримує тінь після прокрутки
    const header = document.querySelector(".header");
    if (header) {
        const onScroll = () =>
            header.classList.toggle("header--scrolled", window.scrollY > 40);
        window.addEventListener("scroll", onScroll, {passive: true});
        onScroll();
    }

    // Червона рисочка під заголовком секції «виїжджає» при появі секції у вьюпорті
    const accents = document.querySelectorAll(".heading-sec__main");
    if (accents.length && "IntersectionObserver" in window) {
        document.documentElement.classList.add("has-js");
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-revealed");
                        io.unobserve(entry.target);
                    }
                });
            },
            {threshold: 0.4}
        );
        accents.forEach((el) => io.observe(el));
    }
}
