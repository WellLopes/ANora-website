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
