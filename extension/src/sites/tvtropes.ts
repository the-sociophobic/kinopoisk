const tvtropes = () => {
  const closeButton = [...document.getElementsByTagName('button')]
    .filter(button => button.classList.contains('fc-close'))

  if (closeButton[0])
    closeButton[0].click()
}


export default tvtropes
