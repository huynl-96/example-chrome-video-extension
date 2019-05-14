const loadVid = function() {
  const form = document.querySelector('#form')
  const inputUrl = document.querySelector('#url_input')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    popupVid(inputUrl.value)
  })
}

const popupVid = function(inputUrl) {
  const width = 800
  const height = 600
  chrome.storage.sync.set({ 'videoUrl': inputUrl })

  chrome.windows.create({
    'url': 'html/video.html',
    'focused': true,
    'type': 'popup',
    'left': window.screen.width / 2 - width,
    'width': width,
    'top': window.screen.height / 2 - height,
    'height': height
  }, window => {})
}

loadVid()
