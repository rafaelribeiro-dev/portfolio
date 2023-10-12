// SWIPER JS CARDS DE APRESENTAÇÃO DOS PROJETOS
var swiper = new Swiper('.slide-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  // autoplay: true,
  // delay: 3000,
  // speed: 3000,
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

const preload = gsap.timeline({
  paused: true
})
preload
  .to('.loader_bg', {
    delay: 0.5,
    duration: 0.5,
    opacity: 0,
    zIndex: -100
  })
  .from('.main', {
    duration: 0.5,
    opacity: 0
  })

var id,
  width = 0

function loading() {
  id = setInterval(frame, 50)
}

function frame() {
  if (width >= 100) {
    clearInterval(id)
    preload.play()
    setTimeout(() => {
      initialization()
    }, 1000)
  } else {
    width++
    const bar = document.getElementById('progress')
    bar.style.width = width + '%'
  }
}

// TIMELINE GSAP QUE ANIMA OS CARDS NA ABERTURA DO SITE
function initialization() {
  gsap.from('.apple-grid', {
    scale: 1.5,
    // delay: 7,
    opacity: 0,
    duration: 1,
    ease: 'expo.out'
  })

  gsap.from('.profile', {
    x: -200,
    opacity: 0,
    // delay: 7,
    duration: 3,
    ease: 'expo.out'
  })

  gsap.from('.stacks', {
    x: 200,
    opacity: 0,
    delay: 0.2,
    duration: 3,
    ease: 'expo.out'
  })

  gsap.from('.resume', {
    y: 200,
    opacity: 0,
    // delay: 7,
    duration: 3,
    ease: 'expo.out'
  })

  gsap.from('.contact', {
    x: 200,
    opacity: 0,
    // delay: 7,
    duration: 3.5,
    ease: 'expo.out'
  })

  gsap.from('.projects', {
    scale: 1.2,
    opacity: 0,
    // delay: 7,
    duration: 3,
    ease: 'expo.out'
  })

  gsap.from('.select-mode', {
    y: 200,
    opacity: 0,
    // delay: 7,
    duration: 2.5,
    ease: 'expo.out'
  })

  gsap.from('.hello', {
    y: -200,
    opacity: 0,
    delay: 0.2,
    duration: 3,
    ease: 'expo.out'
  })

  gsap.from('.mail', {
    x: 200,
    opacity: 0,
    delay: 0.3,
    duration: 4,
    ease: 'expo.out'
  })

  gsap.from('.brand', {
    y: -200,
    opacity: 0,
    delay: 0.6,
    duration: 3,
    ease: 'expo.out'
  })

  gsap.from('.welcome', {
    y: -200,
    opacity: 0,
    duration: 3,
    delay: 0.4,
    ease: 'expo.out'
  })

  // TIMELINE GSAP ANIMAÇÃO LISTA DE REDES SOCIAIS E CONTATOS
  gsap.from('.clock', {
    y: -50,
    duration: 2,
    opacity: 0,
    ease: 'expo.out',
    delay: 3
  })
  const linkList = document.querySelectorAll('.contact-list li')
  linkList.forEach((list, i) => {
    gsap.from(
      list,
      1,
      {
        y: 50,
        opacity: 0,
        ease: 'circ.out',
        delay: i * 0.06
      },
      '-=.9'
    )
  })

  // TIMELINE GSAP ANIMAÇÃO APRESENTAÇÃO DAS STACKS
  const stackIcons = document.querySelectorAll('.stacks-icons .ico')
  stackIcons.forEach((item, i) => {
    gsap.from(
      item,
      1,
      {
        y: 50,
        opacity: 0,
        ease: 'circ.out'
      },
      '-=.8'
    )
  })

  // ANIMA O BOTÃO DE DESCRIÇÃO NA SESSÃO DE STACKS
  gsap.from('.studing', {
    y: 50,
    opacity: 0,
    duration: 1.5,
    delay: 7.5,
    ease: 'expo.out'
  })
  gsap.from('.interested', {
    y: 50,
    opacity: 0,
    duration: 1.5,
    delay: 8,
    ease: 'expo.out'
  })
}

window.onload = function () {
  loading()
}
// ANIMA SWIPPER JS
gsap.from('.card-slide', {
  scale: 0.5,
  duration: 3,
  ease: 'expo.out',
  delay: 8,
  opacity: 0
})

gsap.from('.swiper-button-prev', {
  x: 50,
  duration: 2,
  ease: 'expo.out',
  delay: 10,
  opacity: 0,
  zIndex: -50
})

gsap.from('.swiper-button-next', {
  x: -50,
  duration: 2,
  ease: 'expo.out',
  delay: 10,
  opacity: 0,
  zIndex: -50
})

const buttonCopy = document.querySelector('.button-copy')
const checkmark = document.querySelector('.checkmark-svg')

// FUNÇÃO QUE COPIA O EMAIL PARA A AREA DE TRANSFERENCIA DO USUARIO
const copyEmailToClipboard = () => {
  const input = document.querySelector('.copy-mail')
  const previousHTML = buttonCopy.innerHTML

  input.select()
  navigator.clipboard
    .writeText(input.value)
    .then(() => {
      buttonCopy.classList.add('copied')
      buttonCopy.textContent = `COPIADO!`
      setTimeout(() => {
        buttonCopy.innerHTML = previousHTML
        buttonCopy.classList.remove('copied')
      }, 2000)
    })
    .catch(err => {
      console.error(err)
    })
}

// EVENTO DE CLIQUE NO BOTAO PARA COPIAR O EMAIL
buttonCopy.addEventListener('click', copyEmailToClipboard)

const toggleBtn = document.querySelector('.toggle-btn')
const moonIcon = document.querySelector('.icon i')
const section = document.querySelector('.select-mode')
const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')
const avatar = document.querySelector('.avatar')

const body = document.querySelector('body')

const loaderBackground = document.querySelector('.loader_bg')

let getMode = localStorage.getItem('mode')

// VERIFICA SE O MODO DARK ESTÁ ATIVO E APLICA O TEMA ESCURO
if (getMode === 'dark') {
  avatar.classList.toggle('active')

  body.classList.add('dark')
  toggleBtn.classList.add('active')
  moonIcon.classList.replace('ph-sun', 'ph-moon')
  sun.style.display = 'none'
  moon.style.display = 'block'
  section.classList.toggle('night')
}
// FUNÇÃO QUE ALTERNA ENTRE OS MODOS LIGHT E DARK
const handleBackgroundMode = () => {
  body.classList.toggle('dark')
  if (!body.classList.contains('dark')) {
    return localStorage.setItem('mode', 'light')
  }
  localStorage.setItem('mode', 'dark')
}

//FUNÇÃO CONTROLADORA SELECT-MODE ALTERNA ENTRE OS MEMOJIS LIGHT E DARK
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

// EVENTO DE CLIQUE ALTERA A APARENCIA DO MEMOJI NO CARD SELECT-MODE
toggleBtn.addEventListener('click', handleSwitchMode)

// FUNÇÃO DE CLIQUE QUE ALTERNA ENTRE OS MODOS LIGHT E DARK
toggleBtn.addEventListener('click', handleBackgroundMode)

//RELOGIO MOSTRADOR SESSAO CONTATOS

const watch = setInterval(() => {
  const watchTime = document.querySelector('[data-js="time"]')

  const date = new Date()

  let hour = date.getHours()
  let minutes = date.getMinutes()

  let formatedHour = hour < 10 ? `0${hour}` : hour
  let formatedMinutes = minutes < 10 ? `0${minutes}` : minutes

  watchTime.textContent = `${formatedHour}:${formatedMinutes}`
})
