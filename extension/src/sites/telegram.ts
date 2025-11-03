import createDownloadButton from '../utils/createDownloadButton'
import downloadZip, { FileToDownloadType } from '../utils/downloadZip'
import removeDownloadButton from '../utils/removeDownloadButton'


const BUTTON_ID = 'download-sticker-set'

const telegram = () => {
  const stickerSet = document.getElementsByClassName('sticker-set-stickers')[0]

  if (!stickerSet) {
    removeDownloadButton(BUTTON_ID)
    return
  }

  const onclick = () => {
    const images: FileToDownloadType[] = ([...stickerSet.getElementsByClassName('media-sticker')] as HTMLImageElement[])
      .map((img, index) => ({
        url: img.src,
        name: index + '.webp'
      }))
    console.log(images)
    downloadZip(images)
  }

  createDownloadButton({
    id: BUTTON_ID,
    textContent: 'Скачать сткеры',
    onclick
  })
}


export default telegram
