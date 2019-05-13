chrome.browserAction.onClicked.addListener(tab => {
  console.log(tab)
  console.log(chrome.i18n.getMessage('extTitle'))
  console.log(chrome.i18n.getMessage('@@ui_locale'))
})
