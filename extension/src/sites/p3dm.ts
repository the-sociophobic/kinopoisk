import { removeAllFoundByTagNames } from '../utils/remove'


const p3dm = () => {
  const closeAdButton = document.getElementById('dismiss-button')

  closeAdButton?.click()

  removeAllFoundByTagNames(['iframe'])
}


export default p3dm
