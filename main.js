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
