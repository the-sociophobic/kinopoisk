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
  // seedsTh.click()
}

const rutracker = () => {
  sortRutrackerSearch()
}


export default rutracker
