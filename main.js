let buttonCopy = document.querySelector('.button-copy')
let checkmark = document.querySelector('.checkmark-svg')

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
          buttonCopy.textContent = 'Copiar Email'
          buttonCopy.style.background = ''
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

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active')

  const isActiveClass = toggleBtn.classList.contains('active')

  if (isActiveClass) {
    avatar.classList.toggle('active')
    section.classList.toggle('mode')
    sun.style.display = 'none'
    moon.style.display = 'block'
    moonIcon.classList.replace('ph-sun', 'ph-moon')
    return
  }
  avatar.classList.toggle('active')
  section.classList.remove('mode')
  moon.style.display = 'none'
  sun.style.display = 'block'
  moonIcon.classList.replace('ph-moon', 'ph-sun')
})
