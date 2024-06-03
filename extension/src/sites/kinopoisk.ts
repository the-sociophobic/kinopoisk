import { findByClassNames } from '../utils/find'
import {
  hide,
  remove,
  removeAllFoundByClassNames,
  hideFirstFoundByClassNames,
  removeAllFoundByIds
} from '../utils/remove'


const kinopoisk = () => {
  const promo0 = document.getElementById('page1')
  hide(promo0)

  const promo1 = document.getElementById('trailer-promo-block')
  hide(promo1?.parentElement?.children?.[1])

  // REMOVE HOMEPAGE UPPER BANNER
  hideFirstFoundByClassNames(['media-post-embed'])

  // REMOVE SIDEBAR AD
  hideFirstFoundByClassNames(['__sidebar-content'])

  // REMOVE OVERLAY
  hideFirstFoundByClassNames(['styles_overlay__'])

  // REMOVE ADBLOCK WARNING
  removeAllFoundByClassNames(['styles_rootRendered__'])
  removeAllFoundByClassNames(['styles_adBlockWarningRoot__'])

  const footer = document.getElementById('partial_component__header-topline')
  hide(footer)

  removeAllFoundByClassNames(['styles_sidebar__', 'styles_sticky__'])

  // REMOVE SIDEBAR ON SEARCH PAGE
  const left_sidebar = document.getElementById('block_left_pad')

  if (left_sidebar) {
    const right_sidebar = left_sidebar?.parentElement?.children?.[1]
    const ad = right_sidebar?.children?.[0]?.children?.[0]

    hide(ad)
  }

  // REMOVE MOVIE PAGE UPPER BANNER
  removeAllFoundByClassNames(['styles_abbreviated__'])

  // REMOVE HEADER ADDS
  removeAllFoundByClassNames(['styles_featureMenuContainer__'])
  removeAllFoundByClassNames(['styles_plusBadgeCounter__'])

  // REMOVE FOOTER ADDS
  if (window.location.href.includes('/film/')) {
    const footerTag = document.getElementsByTagName('footer')
    const footerFirstChild = footerTag[0]?.children?.[0]

    if (footerFirstChild?.children[0].classList.contains?.('image'))
      remove(footerFirstChild)
  }

  // REMOVE STARTER POPUP
  removeAllFoundByClassNames(['ReactModalPortal'])
  removeAllFoundByIds([
    'popover-root',
    'modal-root',
  ])

  const body = document.getElementsByTagName('body')[0]

  if (body) {
    const scrollDisabler = [...body.classList].find(className => className.startsWith('styles_body__'))

    if (scrollDisabler)
      body.classList.remove(scrollDisabler)
  }

  // REMOVE UNDERHEADER BANNER
  removeAllFoundByClassNames(['underheader-superbanner-wrapper'])
}

const insertRutrackerButton = () => {
  const element = findByClassNames(['styles_buttonsContainer__'])?.[0]
  
  if (element) {
    const button = document.createElement('button')
    button.textContent = 'Скачать'
    button.style.cursor = 'pointer'
    button.style.height = '100%'
    button.style.paddingLeft = '15px'
    button.style.paddingRight = '15px'
    button.style.borderRadius = '15px'
    button.style.fontWeight = 'bold'

    const title = (
      findByClassNames(['styles_originalTitle__'])?.[0] ||
      findByClassNames(['styles_title__'])[0]
    ).textContent
    const year = findByClassNames(['styles_title__'])[0]?.textContent?.split('(')?.pop()?.split(')')[0]

    const linkToRutracker = document.createElement('a')
    linkToRutracker.appendChild(button)
    linkToRutracker.style.display = 'inline-block'
    linkToRutracker.target = '_blank'
    linkToRutracker.href = encodeURI(`https://rutracker.org/forum/tracker.php?nm=${title} ${year}`)

    element.appendChild(linkToRutracker)
  }
}


export default kinopoisk

export { insertRutrackerButton }
