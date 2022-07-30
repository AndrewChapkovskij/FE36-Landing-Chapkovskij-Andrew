'use strict'
const btnTabs = document.querySelector('.tabs__buttons')
const contentTabs = document.querySelectorAll('.tabs__content')

function changeClass(el) {
  for (let i = 0; i < btnTabs.children.length; i++) {
    btnTabs.children[i].classList.remove('active')
    btnTabs.children[i].setAttribute('data-tab', i)
  }
  el.classList.add('active')
}
btnTabs.addEventListener('click', function (event) {
  if (event.target != btnTabs) {
    changeClass(event.target)
    contentTabs.forEach((item, index) => {
      item.classList.remove('active')
      item.setAttribute('data-content', index)
      if (item.dataset.content === event.target.dataset.tab) {
        item.classList.add('active')
      }
    })
  }
})

const navBtn = document.querySelector('.navigation-mobile')
const navBar = document.querySelector('.navigation__items')
navBtn.addEventListener('click', () => {
  navBar.classList.toggle('active')
})
