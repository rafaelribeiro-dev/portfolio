var swiper = new Swiper('.slide-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  centeredSlide: true,
  grabCursor: true,
  fade: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    520: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 1
    },
    1000: {
      slidesPerView: 1
    }
  }
})

setTimeout(() => {
  $('.loader_bg').fadeToggle()
}, 6000)

const animationContainer = document.querySelector('[data-js="animation"]')

const animation = bodymovin.loadAnimation({
  container: animationContainer,
  path: 'animation_hello.json',
  render: 'svg',
  autoplay: true,
  loop: false,
  name: 'hello animation',
  speed: 1
})
animation.setSpeed(1)

const buttonCopy = document.querySelector('.button-copy')
const checkmark = document.querySelector('.checkmark-svg')

const copyEmailToClipboard = () => {
  const input = document.querySelector('.copy-mail')
  const previousHTML = buttonCopy.innerHTML

  input.select()
  navigator.clipboard
    .writeText(input.value)
    .then(() => {
      buttonCopy.classList.add('copied')
      buttonCopy.innerHTML = `COPIADO!`
      setTimeout(() => {
        buttonCopy.innerHTML = previousHTML
        buttonCopy.classList.remove('copied')
      }, 2000)
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

if (getMode === 'dark') {
  avatar.classList.toggle('active')
  body.classList.add('dark')
  toggleBtn.classList.add('active')
  moonIcon.classList.replace('ph-sun', 'ph-moon')
  sun.style.display = 'none'
  moon.style.display = 'block'
  section.classList.toggle('night')
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
    console.log('modo dark ativo')
    return
  }
  avatar.classList.toggle('active')
  section.classList.remove('night')
  moon.style.display = 'none'
  sun.style.display = 'block'
  moonIcon.classList.replace('ph-moon', 'ph-sun')
  console.log('modo light ativo')
}

toggleBtn.addEventListener('click', handleSwitchMode)

toggleBtn.addEventListener('click', handleBackgroundMode)
