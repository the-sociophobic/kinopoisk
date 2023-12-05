import copyToClipboard from './copyToClipboard'
import { remove } from './remove'


export type Coordinate = {
  tagName: string
  indexInParentChildren: number
  props?: { [key: string]: any }
}


const getCoordinates = (e: Event) => {
  const element: HTMLElement = e.target as HTMLElement
  const coordinates: Coordinate[] = []
  let current = element

  while (current.parentElement && current.parentElement.id !== 'root') {
    const currentIndex = Array.from(current.parentNode?.children || []).indexOf(current)

    if (currentIndex === -1)
      throw new Error('child not found')

    coordinates.unshift({
      tagName: current.tagName,
      indexInParentChildren: currentIndex
    })
    current = current.parentElement
  }

  if (current.parentElement?.id === 'root') {
    console.log(coordinates)
    copyToClipboard(JSON.stringify(coordinates))
  }

  return coordinates
}

const enableGetCoordinates = () => {
  window.addEventListener('contextmenu', getCoordinates)
}

const removeByCoordinates = (coordinates: Coordinate[]) => {
  let current: HTMLElement = document.getElementById('root') as HTMLElement

  for (let i = 0; i < coordinates.length; i++) {
    const currentCoordinate = coordinates[i]

    try {
      current = Array.from(current?.children || [])[currentCoordinate.indexInParentChildren] as HTMLElement
      
      if (current.tagName !== currentCoordinate.tagName)
        throw new Error(`${i}nth coord children array doesn't have <${currentCoordinate.tagName}/> ${currentCoordinate.indexInParentChildren}nth child`)
    } catch(err: any) {
      console.log(err)
    }
  }

  current.remove()
}

const removeByChildrenStack = (childrenStack: number[]) => {
  let current = document.getElementById('root')

  for (let i = 0; i < childrenStack.length; i++) {
    const currentIndex = childrenStack[i]
    console.log(currentIndex, childrenStack)
    console.log(current)

    try {
      current = Array.from(current?.children || [])[currentIndex] as HTMLElement
    } catch(err: any) {
      throw new Error(err)
    }
  }

  remove(current)
}


export {
  getCoordinates,
  removeByCoordinates,
  enableGetCoordinates,
  removeByChildrenStack
}
