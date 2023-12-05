import {
  removeByChildrenStack,
  removeByCoordinates
} from '../utils/coordinates'


const _2gis = () => {
  const ads = [
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 3],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 7],
  ]

  ads.forEach(ad => removeByChildrenStack(ad))
  // ads.forEach(ad => removeByCoordinates(ad))
}


export default _2gis
