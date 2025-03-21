import downloadFile from '../utils/downloadFile'
import getDownloadButton from '../utils/getDownloadButton'
import urlToFilename from '../utils/urlToFileName'


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
  const currentPictures = all_imgs
  .filter(img =>
    // img.srcset.startsWith('https://scontent')
    // &&
    // img.alt.startsWith('Photo by')
    img.getBoundingClientRect().left > 0
  )
  .sort((imgA, imgB) => {
    const imgA_W = imgA.getBoundingClientRect().right - imgA.getBoundingClientRect().left
    const imgB_W = imgB.getBoundingClientRect().right - imgB.getBoundingClientRect().left

    return imgB_W - imgA_W
  })

  return currentPictures[0]
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
