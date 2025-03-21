const getDownloadButton = () => {
  let downloadButton = document.getElementById('current_story-download')

  if (!downloadButton) {    
    downloadButton = document.createElement('div')
    downloadButton.id = 'current_story-download'
    downloadButton.textContent = 'Скачать'
    downloadButton.style.cursor = 'pointer'
    // downloadButton.style.height = '100px'
    downloadButton.style.padding = '15px'
    // downloadButton.style.paddingRight = '15px'
    downloadButton.style.borderRadius = '15px'
    downloadButton.style.border = '5px solid white'
    downloadButton.style.fontWeight = 'bold'
    downloadButton.style.backgroundColor = 'black'
    downloadButton.style.position = 'fixed'
    downloadButton.style.zIndex = '10000'
    downloadButton.style.top = '74vh'
    downloadButton.style.right = '10px'
    document.body.appendChild(downloadButton)
  }

  return downloadButton
}


export default getDownloadButton
