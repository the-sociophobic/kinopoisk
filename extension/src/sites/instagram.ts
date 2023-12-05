import downloadFile from '../utils/downloadFile'


const insertDownloadStory = () => {
  const findCurrentStory = () => {
    var all_imgs = [...document.getElementsByTagName('img')]
    const currentStory = all_imgs.find(img =>
      (
        img.src.startsWith('https://scontent.cdninstagram.com/v/') &&
        img.alt.startsWith('Photo by')
      )
      || img.src.startsWith('https://scontent-prg1-1.cdninstagram.com/v/')
    )

    return currentStory
  }
  
  const currentStory = findCurrentStory()
  let downloadButton = document.getElementById('current_story-download')

  if (currentStory) {
    if (!downloadButton) {
      downloadButton = document.createElement('div')
      downloadButton.id = 'current_story-download'
      downloadButton.textContent = 'Скачать'
      downloadButton.style.cursor = 'pointer'
      downloadButton.style.height = '100%'
      downloadButton.style.paddingLeft = '15px'
      downloadButton.style.paddingRight = '15px'
      downloadButton.style.borderRadius = '15px'
      downloadButton.style.fontWeight = 'bold'
      downloadButton.style.position = 'fixed'
      downloadButton.style.zIndex = '10000'
      downloadButton.style.top = '74vh'
      downloadButton.style.right = '10px'
      document.body.appendChild(downloadButton)
    }

    downloadButton.onclick = () =>
      downloadFile(
        currentStory.src,
        currentStory.src.split('/v/')[1].split('?')[0]
      )
  } else {
    if (downloadButton)
      downloadButton.remove()
  }
}

const instagram = () => {
  insertDownloadStory()
}


export default instagram
