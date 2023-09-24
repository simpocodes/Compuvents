const html = document.querySelector('html');
const body = document.querySelector('body');
const header = document.querySelector('header');
const navLink = document.querySelectorAll('nav ul li a');
const login = document.querySelector('#login');
const closeForm = document.querySelector('.closeform');
const form = document.querySelectorAll('form');
const a = document.querySelectorAll('a');
const menu = document.querySelector('.menu span ');
const colorMode = document.querySelector('.color-scheme span');
const nav = document.querySelector('#navigation nav');
const navClose = document.querySelector('#navigation nav .nav-close');
const formContainer = document.querySelector('.form-container');
const opacityEmpty = document.querySelector('.opacity-empty');

//*=========================== color-scheme============
colorMode.addEventListener('click', c => {
    colorMode.classList.toggle('change');
    colorMode.parentElement.classList.toggle('changeParent');
    html.classList.toggle('dark-scheme')
    body.style.backgroundColor = "unset"

    form.forEach(e => {
        e.classList.toggle('dark-form')
    })
    a.forEach(e => {
        e.classList.toggle('dark-a')
    })
})



//? ============== hiding and showing border-bottom for nav links

navLink.forEach(e => {
    e.addEventListener('mouseover', mi => {
        mi.target.classList.remove('hide-border-bottom')
        mi.target.classList.toggle('show-border-bottom')

    })
    e.addEventListener('mouseout', mo => {
        mo.target.classList.remove('show-border-bottom')
        mo.target.classList.toggle('hide-border-bottom')

    })
})

// console.log(closeForm)

//? ================== getstarted button click================

login.addEventListener('click', c => {
    c.preventDefault()
    formContainer.classList.add('top-0')
    opacityEmpty.style.display = "block"
    nav.classList.remove('right-0')
    nav.classList.remove('top-0')

})


//? ================== closing links============================

//? ---------- close form
closeForm.addEventListener('click', c => {
    c.preventDefault()
    formContainer.classList.remove('top-0')
    opacityEmpty.style.display = "none"
    menu.classList.remove('d-none')

})

formContainer.addEventListener('click', c => {
    if (c.target.tagName == "DIV") {
        formContainer.classList.remove('top-0')
        opacityEmpty.style.display = "none"
        menu.classList.remove('d-none')

    }
})

//? --------- close nav on smal and medium devices


navClose.addEventListener('click', c => {
    nav.classList.remove('right-0')
    nav.classList.remove('top-0')
    menu.classList.remove('d-none')


})


//? ================== menu click on small and medium devices================

menu.addEventListener('click', c => {
    nav.classList.add('right-0')
    nav.classList.add('top-0')
    menu.classList.add('d-none')
    navClose.classList.remove('d-none')


})



gsap.from('#navigation', { duration: 1, y: '-100%', ease: 'rough' })