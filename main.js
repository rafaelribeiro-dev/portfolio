let button = document.querySelector('.copy')
let input = document.querySelector('.copy-mail')

button.addEventListener('click', () => {
  input.select()
  navigator.clipboard
    .writeText(input.value)
    .then(() => {
      console.log('Texto copiado com sucesso!')
    })
    .catch(err => {
      console.error('Falha ao copiar o texto:', err)
    })
})

const toggleBtn = document.querySelector('.toggle-btn')
const moonIcon = document.querySelector('.icon i')
// const memoji = document.querySelector('.avatar img')
const avatar = document.querySelector('.avatar')

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active')

  const containsActiveClass = toggleBtn.classList.contains('active')
  if (containsActiveClass) {
    avatar.classList.toggle('active')
    moonIcon.classList.replace('ph-sun', 'ph-moon')
    // memoji.setAttribute('src', './assets/memoji-without-glasses.svg')
    return
  }
  avatar.classList.toggle('active')
  moonIcon.classList.replace('ph-moon', 'ph-sun')
  // memoji.setAttribute('src', './assets/memoji-glasses.svg')
})
