import 'dotenv/config'
import RutrackerApi from 'rutracker-api'


(async function init() {
  const { username, password } = process.env
  const rutracker = new RutrackerApi()
  rutracker.login({ username, password })
    .then(() => {
      console.log('Authorized')
    })
    .catch(err => console.error(err))
})()
