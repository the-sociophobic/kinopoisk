// This script will be injected into the web page.
// It is responsible for running the 'insertButtonIntoElements' function.

function insertButtonIntoElements() {
  const findByClassNames = (classNames) => {
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
  const removeAds = () => {
    const promo0 = document.getElementById("page1")
    if (promo0) promo0.style.display = "none"
  
    const promo1 = document.getElementById("trailer-promo-block")
    if (promo1) promo1.parentElement.children[1].style.display = "none"
  
    const promo2 = document.getElementsByClassName("yandex_music")?.[0]
    if (promo2)
      promo2.parentElement.parentElement.parentElement.parentElement.style.display =
        "none"
  
    const divs = findByClassNames([
      "styles_rootRendered__",
      "styles_adBlockWarningRoot__",
    ])
    divs.forEach((div) => (div.style.display = "none"))

    const divs2 = findByClassNames([
      "styles_sidebar__",
    ])
    divs2.forEach((div) => [...div.children]
      .filter(child => child.className.includes('styles_sticky__'))
      .forEach(child => child.style.display = "none")
    )
  }
  // You can customize this function to insert a button into elements with a specific ID.
  // For example, you can use document.getElementById("your-id") to find the element and insert a button.
  // Here's a simple example:
  // const element = document.getElementById("your-id")
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
