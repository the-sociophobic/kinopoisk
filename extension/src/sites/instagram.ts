import downloadFile from '../utils/downloadFile'


const getDownloadButton = () => {
  let downloadButton = document.getElementById('current_story-download')

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

  return downloadButton
}

const urlToFilename = (_url: string) =>
  _url.split('.com/')[1].split('?')[0].replace('/', '')

const findCurrentStory = () => {
  const storyHeader = [...document.getElementsByTagName('header')]
    .filter(header => header.children.length == 2)[0]
  const currentStoryPhoto = storyHeader?.parentElement?.children[1]?.children[0]?.children[0]?.children[0]
  
  if (currentStoryPhoto?.tagName.toLocaleLowerCase() === 'img')
    return currentStoryPhoto as HTMLImageElement
  
  const currentStoryVideo = storyHeader?.parentElement?.children[1]?.children[0]?.children[0]?.children[0]?.children[0]?.children[0]?.children[0]?.children[0]

  if (currentStoryVideo?.tagName.toLocaleLowerCase() === 'video')
    return currentStoryVideo as HTMLVideoElement
}

const insertDownloadStory = () => {
  const currentStory = findCurrentStory()
  const downloadButton = getDownloadButton()

  if (currentStory) {
    downloadButton.onclick = () => {
      console.log(currentStory)

      downloadFile(
        currentStory.src,
        urlToFilename(currentStory.src)
      )
    }
  }
}

const findCurrentPost = () => {
  var all_imgs = [...document.getElementsByTagName('img')]
  // From profile page
  const currentPost = all_imgs.find(img =>
    img.srcset.startsWith('https://scontent-prg1-1.cdninstagram.com/v/')
    && img.alt.startsWith('Photo by')
  )

  return currentPost
}

const insertDownloadPost = () => {
  if (!window.location.href.includes('instagram.com/p/'))
    return

  const currentPost = findCurrentPost()
  const downloadButton = getDownloadButton()

  if (currentPost) {
    downloadButton.onclick = () => {
      console.log(currentPost)
      downloadFile(
        currentPost.src,
        urlToFilename(currentPost.src)
      )
    }
  }
}

const instagram = () => {
  insertDownloadStory()
  insertDownloadPost()
}


export default instagram
