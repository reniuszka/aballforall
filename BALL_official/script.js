//gallery
const panels = document.querySelectorAll('.documentary-kenya-panel')

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('documentary-kenya-active')
  })
}

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('documentary-kenya-active')
  })
})
