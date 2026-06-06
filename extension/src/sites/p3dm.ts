import { removeAllFoundByTagNames } from '../utils/remove'


const p3dm = () => {
  const closeAdButton = document.getElementById('dismiss-button')

  closeAdButton?.click()

  removeAllFoundByTagNames(['iframe', 'ins'])
}


export default p3dm
