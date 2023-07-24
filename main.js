let button = document.querySelector('.button-copy')
let input = document.querySelector('.copy-mail')

button.addEventListener('click', () => {
  input.select()
  navigator.clipboard
    .writeText(input.value)
    .then(() => {
      button.textContent = 'Texto copiado com sucesso!'
      setTimeout(() => {
        button.textContent = 'Copiar E-mail'
      }, 2000)
      console.log('Texto copiado com sucesso!')
    })
    .catch(err => {
      console.error('Falha ao copiar o texto:', err)
    })
})

const toggleBtn = document.querySelector('.toggle-btn')
const moonIcon = document.querySelector('.icon i')
const section = document.querySelector('.select-mode')
const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')
const avatar = document.querySelector('.avatar')

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active')

  const containsActiveClass = toggleBtn.classList.contains('active')

  if (containsActiveClass) {
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
