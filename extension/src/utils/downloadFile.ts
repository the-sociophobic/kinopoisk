const toDataURL = async (_url: string) => {
  const blob = await fetch(_url).then(res => res.blob())
  return URL.createObjectURL(blob)
}

const downloadFile = async (_URL: string, filename: string) => {
  const a = document.createElement('a')

  a.href = await toDataURL(_URL)
  a.download = filename
  
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}


export default downloadFile
