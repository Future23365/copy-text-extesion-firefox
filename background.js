function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}
browser.contextMenus.create({
  id: "copyText",
  title: '复制文字',
  contexts: ["all"]
}, onCreated);


browser.contextMenus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
    case "copyText":
      browser.tabs.sendMessage(tab.id, { greeting: 'copy' })
      break;
  }
})