const ADDRESS_ENDINGS = [
  '.com/',
  '.net/',
  '.ua/',
  '.org/',
]
var incrementFileName = 0

export const urlToFilename = (url: string) => {
  for (const addressEnding of ADDRESS_ENDINGS) {
    if (url.includes(addressEnding))
      return url.split(addressEnding)[1].split('?')[0].replace('/', '')
  }

  console.log(`urlToFilename cant determine filename from URL`, url)
  const filename = incrementFileName + '.jpg'
  incrementFileName++
  return filename
}
