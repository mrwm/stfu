browser.menus.create({
    id: "x2",
    title: "SPEED IT UP! (x2)",
    contexts: ["all"],
  icons: {
    "16": "icons/menu-16.png",
    "32": "icons/menu-32.png"
    }
});
browser.menus.create({
    id: "x4",
    title: "SPEED IT UP MORE! (x4)",
    contexts: ["all"],
  icons: {
    "16": "icons/menu-16.png",
    "32": "icons/menu-32.png"
    }
});
browser.menus.create({
    id: "reset",
    title: "RESET",
    contexts: ["all"],
  icons: {
    "16": "icons/menu-16.png",
    "32": "icons/menu-32.png"
    }
});
browser.menus.create({
    id: "speed",
    title: "WHAT'S MY SPEED?",
    contexts: ["all"],
  icons: {
    "16": "icons/menu-16.png",
    "32": "icons/menu-32.png"
    }
});


browser.menus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "x2") {
    browser.tabs.executeScript({
      code: `var elem = browser.menus.getTargetElement(${info.targetElementId}); elem.playbackRate = elem.playbackRate * 2`
    });
  }
  if (info.menuItemId === "x4") {
    browser.tabs.executeScript({
      code: `var elem = browser.menus.getTargetElement(${info.targetElementId}); elem.playbackRate = elem.playbackRate * 4`
    });
  }
  if (info.menuItemId === "reset") {
    browser.tabs.executeScript({
      code: `var elem = browser.menus.getTargetElement(${info.targetElementId}); elem.playbackRate = 1`
    });
  }
  if (info.menuItemId === "speed") {
    browser.tabs.executeScript({
      code: `var elem = browser.menus.getTargetElement(${info.targetElementId}); alert(elem.playbackRate)`
    });
  }
});
