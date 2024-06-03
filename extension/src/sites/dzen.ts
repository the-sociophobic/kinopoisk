import { findByClassNames, findByTagNames } from '../utils/find'
import { remove, removeAllFoundByClassNames } from '../utils/remove'


const dzen = () => {
  removeAllFoundByClassNames(['article-header-top'])
  
  const rightSide = findByTagNames(['aside'])

  rightSide
    .filter(side => side.id.startsWith('article__'))
    .forEach(side => side.children[0] && remove(side.children[0]))

  // document.body.style.backgroundColor = '1e1e1e'

  return 
  
  const themeWhiteElems = findByClassNames(['_theme_white'], ['div', 'html', 'body'])

  themeWhiteElems.forEach(elem => {
    const classes = [...elem.classList]

    classes.forEach(className => {
      if (className.includes('_theme_white')) {
        elem.classList.replace(className, className.replace('_theme_white', '_theme_black'))
      }
    })
  })

  const themeWhiteClass = [...document.styleSheets]
    .forEach(styleSheet => [...styleSheet.cssRules]
      .forEach(cssRule => cssRule.cssText.includes('_theme_white') && (cssRule.cssText = '')))
    // .find(css_class => css_class.cssText.includes('_theme_white'))

  // console.log(themeWhiteClass)

  // const textProps = [
  //   '--zenColorTextStaticBlackPrimary',
  //   '--zenColorTextStaticBlackPrimaryHovered',
  //   '--zenColorTextStaticBlackSecondary',
  //   '--zenColorTextStaticBlackSecondaryHovered',
  //   '--zenColorTextStaticBlackTertiary',
  //   '--zenColorTextStaticBlackTertiaryHovered',
  // ]

  // textProps.forEach(prop =>
  //   document.documentElement.style.setProperty(prop, 'white')
  // )
}


export default dzen
