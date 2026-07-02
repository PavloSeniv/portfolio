// Кнопка "нагору": зʼявляється після прокрутки, повертає на початок сторінки
export function scrollToTop() {
    const btn = document.getElementById("scrollTop");
    if (!btn) return;

    const toggle = () => {
        btn.classList.toggle("scroll-top--visible", window.scrollY > 400);
    };

    window.addEventListener("scroll", toggle, {passive: true});
    toggle();

    btn.addEventListener("click", () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    });
}
