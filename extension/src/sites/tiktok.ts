import downloadFile from '../utils/downloadFile'
import getDownloadButton from '../utils/getDownloadButton'
import urlToFilename from '../utils/urlToFileName'


const insertDownloadStory = () => {
  const videoURL = ([...document.getElementsByTagName('video')][0].children[0] as HTMLSourceElement).src
  const downloadButton = getDownloadButton()

  if (videoURL) {
    downloadButton.onclick = () => {
      console.log(videoURL)

      downloadFile(
        videoURL,
        urlToFilename(videoURL)
      )
    }
  }
}


const tiktok = () => {
  insertDownloadStory()
}


export default tiktok
