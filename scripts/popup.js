const loadVid = function() {
  const contentIframe = document.querySelector('#content')
  const urlWrapper = document.querySelector('#url_wrapper')
  const form = document.querySelector('#form')
  const inputUrl = document.querySelector('#url_input')

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    urlWrapper.style.display = 'none'
    contentIframe.src = inputUrl.value
    contentIframe.style.display = 'block'
  })
}

loadVid()
