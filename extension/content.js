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
  const getChildrenStack = e => {
    const element = e.target
    const childrenStack = []
    let current = element

    while (current.parentElement && current.parentElement.id !== 'root') {
      const currentIndex = Array.from(current.parentNode.children).indexOf(current)

      if (currentIndex === -1)
        throw new Error('child not found')

      childrenStack.unshift(currentIndex)
      current = current.parentElement
    }

    if (current.parentElement.id === 'root')
      console.log(childrenStack)

    return childrenStack
  }
  const handleGetChildrenStack = () => {
    window.addEventListener('contextmenu', getChildrenStack)
  }
  // handleGetChildrenStack()
  const removeByChildrenStack = (childrenStack) => {
    let current = document.getElementById('root')

    for (const childIndex of childrenStack) {
      console.log(childIndex, childrenStack)
      console.log(current)
      try {
        current = Array.from(current.children)[childIndex]
      } catch(err) {
        throw new Error(err)
      }
    }

    current.remove()
  }

  const downloadFile = async (_URL, filename) => {
    const toDataURL = async (_url) => {
      const blob = await fetch(_url).then(res => res.blob())
      return URL.createObjectURL(blob)
    }
    const a = document.createElement('a')
    a.href = await toDataURL(_URL)
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
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

  const removeReactDevHohly = () => {
    removeAllFoundByClassNames(['h-[40px]'])
  }

  const removeVk = () => {
    removeAllFoundByClassNames(['_ads_block_data_w'])
  }

  const remove2gis = () => {
    const ads = [
      [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2],
      [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 3],
      [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 7],
    ]

    ads.forEach(ad => removeByChildrenStack(ad))
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

  const instButtons = () => {
    const findCurrentStory = () => {
      var all_imgs = [...document.getElementsByTagName('img')]
      const currentStory = all_imgs.find(img =>
        (
          img.src.startsWith('https://scontent.cdninstagram.com/v/') &&
          img.alt.startsWith('Photo by')
        )
        || img.src.startsWith('https://scontent-prg1-1.cdninstagram.com/v/')
      )

      return currentStory
    }
    
    const currentStory = findCurrentStory()
    let downloadButton = document.getElementById('current_story-download')

    if (currentStory) {
      if (!downloadButton) {
        downloadButton = document.createElement('div')
        downloadButton.id = 'current_story-download'
        downloadButton.textContent = 'Скачать'
        downloadButton.style.cursor = 'pointer'
        downloadButton.style.height = '100%'
        downloadButton.style.paddingLeft = '15px'
        downloadButton.style.paddingRight = '15px'
        downloadButton.style.borderRadius = '15px'
        downloadButton.style.fontWeight = 'bold'
        downloadButton.style.position = 'fixed'
        downloadButton.style.zIndex = 10000
        downloadButton.style.top = '74vh'
        downloadButton.style.right = '10px'
        document.body.appendChild(downloadButton)
      }

      downloadButton.onclick = () =>
        downloadFile(
          currentStory.src,
          currentStory.src.split('/v/')[1].split('?')[0]
        )
    } else {
      if (downloadButton)
        downloadButton.remove()
    }
  }


  if (window.location.href.includes('kinopoisk.ru')) {
    insertRutrackerButton()
    setInterval(removeKinopoiskAds, 500)
  }

  if (window.location.href.includes('rutracker.org/forum/tracker.php?')) {
    setTimeout(sortRutrackerSearch, 500)
    // setTimeout(sortRutrackerSearch, 3500)
  }

  if (window.location.href.includes('skillbox'))
    setInterval(removeSkillboxAds, 500)

  if (window.location.href.includes('react.dev'))
    setInterval(removeReactDevHohly, 500)

  if (window.location.href.includes('vk.com'))
    setInterval(removeVk, 500)

  if (window.location.href.includes('2gis.ru'))
    setInterval(remove2gis, 500)

  if (window.location.href.includes('instagram.com'))
    setInterval(instButtons, 500)
}

// Run the function when the content script is injected into a page.
fixSites();
