import { remove } from './remove'


const removeDownloadButton = (id: string) => {
  let downloadButton = document.getElementById(id)

  if (downloadButton) {
    remove(downloadButton)
  }
}


export default removeDownloadButton
