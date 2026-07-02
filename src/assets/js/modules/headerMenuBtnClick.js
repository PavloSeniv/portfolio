'use strict'

export function headerMenuBtnClick() {
    const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
    const smallMenu = document.querySelector('.header__sm-menu')
    const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
    const headerHamMenuCloseBtn = document.querySelector(
        '.header__main-ham-menu-close'
    )
    const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

    if (!hamMenuBtn || !smallMenu) return

    const setExpanded = (open) => hamMenuBtn.setAttribute('aria-expanded', open ? 'true' : 'false')

    hamMenuBtn.addEventListener('click', () => {
        if (smallMenu.classList.contains('header__sm-menu--active')) {
            smallMenu.classList.remove('header__sm-menu--active')
            setExpanded(false)
        } else {
            smallMenu.classList.add('header__sm-menu--active')
            setExpanded(true)
        }
        if (headerHamMenuBtn.classList.contains('d-none')) {
            headerHamMenuBtn.classList.remove('d-none')
            headerHamMenuCloseBtn.classList.add('d-none')
        } else {
            headerHamMenuBtn.classList.add('d-none')
            headerHamMenuCloseBtn.classList.remove('d-none')
        }
    })

    for (let i = 0; i < headerSmallMenuLinks.length; i++) {
        headerSmallMenuLinks[i].addEventListener('click', () => {
            smallMenu.classList.remove('header__sm-menu--active')
            headerHamMenuBtn.classList.remove('d-none')
            headerHamMenuCloseBtn.classList.add('d-none')
            setExpanded(false)
        })
    }
}
