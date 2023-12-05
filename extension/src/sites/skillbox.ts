import { removeAllFoundByClassNames, removeAllFoundByTagNames } from '../utils/remove'


const skillbox = () => {
  removeAllFoundByClassNames(['sellout-v2'])
  removeAllFoundByClassNames(['universal-notice'])
  removeAllFoundByClassNames(['subscribe-popup'])
  removeAllFoundByClassNames(['subscribe-success-popup'])
  removeAllFoundByClassNames(['cookies'])
  removeAllFoundByClassNames(['bg-modal-overlay'])
  removeAllFoundByClassNames(['article-banner'])

  removeAllFoundByTagNames(['fstrk-widget'])
}


export default skillbox
