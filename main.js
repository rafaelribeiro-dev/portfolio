const buttonCopy = document.querySelector('.button-copy')
const checkmark = document.querySelector('.checkmark-svg')

const copyEmailToClipboard = () => {
  const input = document.querySelector('.copy-mail')
  input.select()
  navigator.clipboard
    .writeText(input.value)
    .then(() => {
      // buttonCopy.textContent = 'Texto copiado com sucesso!'
      setTimeout(() => {
        checkmark.style.display = 'flex'
        buttonCopy.textContent = ''
        buttonCopy.style.background = '#6cd86b'
        setTimeout(() => {
          checkmark.style.display = 'none'
          buttonCopy.textContent = `Copiar Email`
          buttonCopy.style.background = 'var(--neutral-100)'
        }, 3000)
      }, 100)
      console.log('Texto copiado com sucesso!')
    })
    .catch(err => {
      console.error('Falha ao copiar o texto:', err)
    })
}

buttonCopy.addEventListener('click', copyEmailToClipboard)

const toggleBtn = document.querySelector('.toggle-btn')
const moonIcon = document.querySelector('.icon i')
const section = document.querySelector('.select-mode')
const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')
const avatar = document.querySelector('.avatar')

const body = document.querySelector('body')

let getMode = localStorage.getItem('mode')

if (getMode && getMode === 'dark') {
  body.classList.add('dark')
  toggleBtn.classList.add('active')
}

const handleBackgroundMode = () => {
  body.classList.toggle('dark')
  if (!body.classList.contains('dark')) {
    return localStorage.setItem('mode', 'light')
  }
  localStorage.setItem('mode', 'dark')
}

const handleSwitchMode = () => {
  toggleBtn.classList.toggle('active')

  const isActiveClass = toggleBtn.classList.contains('active')

  if (isActiveClass) {
    avatar.classList.toggle('active')
    section.classList.toggle('night')
    sun.style.display = 'none'
    moon.style.display = 'block'
    moonIcon.classList.replace('ph-sun', 'ph-moon')
    return
  }
  avatar.classList.toggle('active')
  section.classList.remove('night')
  moon.style.display = 'none'
  sun.style.display = 'block'
  moonIcon.classList.replace('ph-moon', 'ph-sun')
}

toggleBtn.addEventListener('click', handleSwitchMode)

toggleBtn.addEventListener('click', handleBackgroundMode)
