document.getElementById("insertButton").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: insertButtonIntoElements,
    })
  })
})

function insertButtonIntoElements() {
  console.log('чтоо-то')
}
