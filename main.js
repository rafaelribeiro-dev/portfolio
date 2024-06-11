const toggleButton = document.querySelector('.toggle-btn')
const avatar = document.querySelector('.avatar')
const mode = document.querySelector('.select-mode')

const plusIcon = document.querySelector('.plus-icon')
const closeIcon = document.querySelector('.close-icon')

const flipContainer = document.querySelector('.profile')

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active')
  avatar.classList.toggle('active')

  const isActiveClass = toggleButton.classList.contains('active')

  if (isActiveClass) {
    setTimeout(() => {
      mode.classList.toggle('night')
    }, 800)

    return
  }

  setTimeout(() => {
    mode.classList.remove('night')
  }, 800)
})

plusIcon.addEventListener('click', () => {
  flipContainer.classList.add('active')
})

closeIcon.addEventListener('click', () => {
  flipContainer.classList.remove('active')
})
