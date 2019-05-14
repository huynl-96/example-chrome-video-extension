chrome.storage.sync.get('videoUrl', result => {
  const iframeContent = document.querySelector('#content')
  iframeContent.src = result.videoUrl
})
