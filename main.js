/*Open and close menu when clicked on hamburguer menu*/

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

/* Logic: if this menu has oponed so when a clicked i want to hide my menu */
for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

/*Change header shadow when scrolled*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', () => {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

/* Testimonials swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/* Scroll reveal - Show elements when scrolled page */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services geader, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links

  `,
  { interval: 100 }
)
