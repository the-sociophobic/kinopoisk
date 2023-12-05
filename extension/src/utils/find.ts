const findByClassNames = (
  classNames: string[],
  tagNames: string[] = ['div', 'a', 'span', 'h1']
) => {
  if (!Array.isArray(classNames))
    return []

  const allElements: HTMLElement[] = findByTagNames(tagNames)
  const filteredElements = allElements.filter(element =>
    classNames
      .map(className => element.className.includes(className))
      .reduce((a, b) => a && b)
  )

  return filteredElements
}

const findByTagNames = (
  tagNames: string[]
) => {
  const allElements: HTMLElement[] = tagNames
    .map(tagName => [...document.getElementsByTagName(tagName)] as HTMLElement[])
    .reduce((a, b) => [...a, ...b])

  return allElements
}


export {
  findByClassNames,
  findByTagNames
}
