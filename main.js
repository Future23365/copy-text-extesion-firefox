let text = ''
document.addEventListener('mousedown', function(e) {
  if(e.button === 2) {
    text = e.target.innerText
  }
})
browser.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting === "copy") {
      const div = document.createElement('div')
      div.innerText = `${text}`
      div.style.position = 'fixed'
      div.style.top = '0'
      div.style.left = '50%'
      div.style.transform = 'translateX(-50%)'
      div.style.padding = '10px'
      div.style.borderRadius = '5px'
      div.style.backgroundColor = 'rgba(239, 250, 244, 1)'
      div.style.border = '1px solid rgb(112, 201, 149)'
      div.style.transition = 'all 0.5s'
      div.style.zIndex = 999
      document.body.appendChild(div)
      setTimeout(() => {
        div.style.top = '10%'
      }, 10)
      setTimeout(() => {
        div.style.top = '-10%'
      }, 3000)
      setTimeout(() => {
        div.style.display = 'none'
        document.body.removeChild(div)
      }, 3500)
      text = text.replace(/[\u200b-\u200f\uFEFF\u202a-\u202e]/g, '')
      navigator.clipboard.writeText(text)
      text = ''
      sendResponse('复制成功')
    }
  }
);