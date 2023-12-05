const copyToClipboard = (string: string) => {
  const element = document.createElement('textarea')

  element.value = string
  document.body.appendChild(element)
  element.select()
  document.execCommand('copy')
  document.body.removeChild(element)
}


export default copyToClipboard