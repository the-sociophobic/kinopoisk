// This script will be injected into the web page.
// It is responsible for running the 'fixSites' function.

function fixSites() {
  const findByClassNames = (classNames) => {
    if (!Array.isArray(classNames))
      return []
    
    var all_divs = [
      ...document.getElementsByTagName('div'),
      ...document.getElementsByTagName('a'),
      ...document.getElementsByTagName('span'),
      ...document.getElementsByTagName('h1'),
    ]
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
      divs[0].style.display = 'none'
  }
  const removeAllFoundByClassNames = (classNames) => {
    const divs = findByClassNames(classNames)

    divs.forEach(div => {
      // div.setAttribute('style', 'display: none !important')
      // div.style.display = 'none'
      div.remove()
    })
  }

  const removeKinopoiskAds = () => {
    const promo0 = document.getElementById('page1')
    if (promo0)
      promo0.style.display = 'none'
  
    const promo1 = document.getElementById('trailer-promo-block')
    if (promo1)
      promo1.parentElement.children[1].style.display = 'none'
  
    // REMOVE HOMEPAGE UPPER BANNER
    removeFirstFoundByClassNames(['media-post-embed'])
  
    // REMOVE SIDEBAR AD
    removeFirstFoundByClassNames(['__sidebar-content'])

    // REMOVE OVERLAY
    removeFirstFoundByClassNames(['styles_overlay__'])

    // REMOVE ADBLOCK WARNING
    removeAllFoundByClassNames([
      'styles_rootRendered__',
      'styles_adBlockWarningRoot__',
    ])

    const footer = document.getElementById('partial_component__header-topline')
    
    if (footer)
      footer.style.display = 'none'

    const divs2 = findByClassNames([
      'styles_sidebar__',
    ])
    divs2.forEach(div => [...div.children]
      .filter(child => child.className.includes('styles_sticky__'))
      .forEach(child => child.style.display = 'none')
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

    // REMOVE HEADER ADDS
    removeAllFoundByClassNames([
      'styles_featureMenuContainer__',
      'styles_plusBadgeCounter__'
    ])

    // REMOVE FOOTER ADDS
    if (window.location.href.includes('/film/')) {
      const footerTag = document.getElementsByTagName('footer')
      const footerFirstChild = footerTag[0]?.children?.[0]

      if (footerFirstChild?.children[0].classList.contains?.('image'))
        footerFirstChild.remove()
    }
  }

  const removeSkillboxAds = () => {
    removeAllFoundByClassNames([
      'universal-notice',
      'subscribe-popup',
      'subscribe-success-popup',
      'cookies',
      'bg-modal-overlay',
      'article-banner',
    ])

    const widgets = [...document.getElementsByTagName('fstrk-widget')]

    widgets.forEach(widget => widget.remove())
  }

  const insertRutrackerButton = () => {
    const element = findByClassNames(['styles_buttonsContainer__'])?.[0]
    
    if (element) {
      const button = document.createElement('button')
      button.textContent = 'Скачать'
      button.style.cursor = 'pointer'
      button.style.height = '100%'
      button.style.paddingLeft = '15px'
      button.style.paddingRight = '15px'
      button.style.borderRadius = '15px'
      button.style.fontWeight = 'bold'
  
      const title = findByClassNames(['styles_originalTitle__'])?.[0]?.textContent
      const year = findByClassNames(['styles_title__'])?.[0]?.textContent.split('(').pop().split(')')[0]

      const linkToRutracker = document.createElement('a')
      linkToRutracker.appendChild(button)
      linkToRutracker.style.display = 'inline-block'
      linkToRutracker.target = '_blank'
      linkToRutracker.href = encodeURI(`https://rutracker.org/forum/tracker.php?nm=${title} ${year}`)
  
      element.appendChild(linkToRutracker)
    }
  }

  const sortRutrackerSearch = () => {
    const resultsTable = [...document.getElementsByTagName('table')]
      .filter(table => table.classList.contains('forumline'))[0]

    if (!resultsTable)
      return
    
    resultsTable.scrollIntoView?.()

    const seedsTh = resultsTable.children[0].children[0].children[6]
    console.log(seedsTh)

    if (!seedsTh)
      return

    // doesn't work. Investigate
    seedsTh.click()
  }


  if (window.location.href.includes('kinopoisk')) {
    insertRutrackerButton()
    setInterval(removeKinopoiskAds, 500)
  }

  if (window.location.href.includes('rutracker.org/forum/tracker.php?')) {
    setTimeout(sortRutrackerSearch, 500)
    // setTimeout(sortRutrackerSearch, 3500)
  }

  if (window.location.href.includes('skillbox'))
    setInterval(removeSkillboxAds, 500)
}

// Run the function when the content script is injected into a page.
fixSites();
