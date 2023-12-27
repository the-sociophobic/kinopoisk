import _2gis from './sites/2gis'
import instagram from './sites/instagram'
import kinopoisk, { insertRutrackerButton } from './sites/kinopoisk'
import reactDev from './sites/reactDev'
import rutracker from './sites/rutracker'
import skillbox from './sites/skillbox'
import tvtropes from './sites/tvtropes'
import vk from './sites/vk'


function fixSites() {
  if (window.location.href.includes('kinopoisk.ru')) {
    insertRutrackerButton()
    setInterval(kinopoisk, 500)
  }

  if (window.location.href.includes('rutracker.org/forum/tracker.php?')) {
    setTimeout(rutracker, 500)
  }

  if (window.location.href.includes('skillbox.ru'))
    setInterval(skillbox, 500)

  if (window.location.href.includes('react.dev'))
    setInterval(reactDev, 500)

  if (window.location.href.includes('vk.com'))
    setInterval(vk, 500)

  if (window.location.href.includes('2gis.ru'))
    setInterval(_2gis, 500)

  if (window.location.href.includes('instagram.com'))
    setInterval(instagram, 500)

  if (window.location.href.includes('tvtropes.org'))
    setInterval(tvtropes, 500)
}

// Run the function when the content script is injected into a page.
fixSites();
