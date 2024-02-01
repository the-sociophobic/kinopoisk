import { remove } from '../utils/remove'


const tumblr = () => {
  const root = document.getElementById('base-container')

  remove(root?.children[1].children[1])
}


export default tumblr
