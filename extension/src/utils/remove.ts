import { findByClassNames, findByTagNames } from './find'


const hide = (element: HTMLElement | any) => {
  if (element) {
    element.setAttribute('style', 'display: none !important')
    element.style.display = 'none'
  }
}

const remove = (element: HTMLElement | any) => {
  // element.setAttribute('style', 'display: none !important')
  // element.style.display = 'none'
  if (element && element.remove)
    element.remove()
}

const hideFirstFoundByClassNames = (classNames: string[]) => {
  const divs = findByClassNames(classNames)

  if (divs?.[0])
    hide(divs[0])
}

const removeAllFoundByClassNames = (classNames: string[]) => {
  const divs = findByClassNames(classNames)

  divs.forEach(div => {
    remove(div)
  })
}

const removeAllFoundByTagNames = (tagNames: string[]) => {
  const elements = findByTagNames(tagNames)

  elements.forEach(element => {
    remove(element)
  })
}

const removeAllFoundByIds = (ids: string[]) => {
  ids.forEach(id => {
    const element = document.getElementById(id)

    if (element)
      remove(element)
  })
}


export {
  hide,
  remove,
  hideFirstFoundByClassNames,
  removeAllFoundByClassNames,
  removeAllFoundByTagNames,
  removeAllFoundByIds
}
