import _2gis from './sites/2gis'
import dzen from './sites/dzen'
import instagram from './sites/instagram'
import kinopoisk, { insertRutrackerButton } from './sites/kinopoisk'
import reactDev from './sites/reactDev'
import rutracker from './sites/rutracker'
import skillbox from './sites/skillbox'
import tumblr from './sites/tumblr'
import tvtropes from './sites/tvtropes'
import vk from './sites/vk'
import refactoringGuru from './sites/refactoringGuru'
import tiktok from './sites/tiktok'
import p3dm from './sites/p3dm'


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

  if (window.location.href.includes('tumblr.com'))
    setInterval(tumblr, 500)

  if (window.location.href.includes('dzen.ru'))
    setInterval(dzen, 500)

  if (window.location.href.includes('refactoring.guru'))
    setInterval(refactoringGuru, 500)

  if (window.location.href.includes('tiktok.com'))
    setInterval(tiktok, 500)

  if (window.location.href.includes('p3dm.ru'))
    setInterval(p3dm, 100)
}

// Run the function when the content script is injected into a page.
fixSites();
