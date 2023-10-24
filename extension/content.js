// This script will be injected into the web page.
// It is responsible for running the 'insertButtonIntoElements' function.

function insertButtonIntoElements() {
  if (!window.location.href.includes('kinopoisk'))
    return

  const findByClassNames = (classNames) => {
    if (!Array.isArray(classNames))
      return []
    
    var all_divs = document.getElementsByTagName("div")
    var divs = []
  
    for (var i = 0; i < all_divs.length; i++) {
      var div = all_divs[i]
  
      if (
        classNames
          .map((className) => div.className.includes(className))
          .reduce((a, b) => a || b)
      )
        divs.push(div)
    }
  
    return divs
  }
  const removeFirstFoundByClassNames = (classNames) => {
    const divs = findByClassNames(classNames)

    if (divs?.[0])
      divs[0].style.display = "none"
  }
  const removeAllFoundByClassNames = (classNames) => {
    const divs = findByClassNames(classNames)

    divs.forEach(div => {
      div.style.display = "none"
    })
  }

  const removeAds = () => {
    const promo0 = document.getElementById("page1")
    if (promo0)
      promo0.style.display = "none"
  
    const promo1 = document.getElementById("trailer-promo-block")
    if (promo1)
      promo1.parentElement.children[1].style.display = "none"
  
    // REMOVE HOMEPAGE UPPER BANNER
    removeFirstFoundByClassNames(['media-post-embed'])
  
    // REMOVE SIDEBAR AD
    removeFirstFoundByClassNames(['__sidebar-content'])

    // REMOVE OVERLAY
    removeFirstFoundByClassNames(['styles_overlay__'])

    // REMOVE ADBLOCK WARNING
    removeAllFoundByClassNames([
      "styles_rootRendered__",
      "styles_adBlockWarningRoot__",
    ])

    const footer = document.getElementById('partial_component__header-topline')
    
    if (footer)
      footer.style.display = 'none'

    const divs2 = findByClassNames([
      "styles_sidebar__",
    ])
    divs2.forEach(div => [...div.children]
      .filter(child => child.className.includes('styles_sticky__'))
      .forEach(child => child.style.display = "none")
    )

    // REVOVE SIDEBAR ON SEARCH PAGE
    const left_sidebar = document.getElementById('block_left_pad')

    if (left_sidebar) {
      const right_sidebar = left_sidebar?.parentElement?.children?.[1]
      const ad = right_sidebar?.children?.[0]?.children?.[0]

      if (ad)
        ad.style.display = 'none'
    }

    // REMOVE MOVIE PAGE UPPER BANNER
    removeAllFoundByClassNames(['styles_abbreviated__'])
  }

  const element = findByClassNames(['styles_buttonsContainer__'])?.[0]
  
  if (element) {
    const button = document.createElement("button")
    button.textContent = "rutracker.org"
    element.appendChild(button)
  }

  setInterval(removeAds, 500)
}

// Run the function when the content script is injected into a page.
insertButtonIntoElements();
