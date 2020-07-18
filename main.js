
/* Functions */
function autoSelectLanguageCode() {
  let tempLanguageCode = browser.i18n.getUILanguage();

  /* Fix for German */
  if (tempLanguageCode.indexOf('de') != -1) {
    tempLanguageCode = 'de';
    return tempLanguageCode
  }

  /* Fix for English */
  if (tempLanguageCode.indexOf('en') != -1) {
    tempLanguageCode = 'en';
    return tempLanguageCode
  }

  /* Fix for Spnish */
  if (tempLanguageCode.indexOf('es') != -1) {
    tempLanguageCode = 'es';
    return tempLanguageCode
  }

  /* Fix for Portuguese */
  if (tempLanguageCode.indexOf('pt') != -1) {
    tempLanguageCode = 'pt';
    return tempLanguageCode
  }

  return tempLanguageCode
}

browser.browserAction.onClicked.addListener( (tab) => {
  browser.storage.local.get()
    .then( (obj) => {
      if (obj.translationService == undefined) {
        obj.translationService = "Google";
      }
      if (obj.openMethodWebsite == undefined) {
        obj.openMethodWebsite = 'tab';
      }
      if ( (obj.languageCode == undefined) || (obj.languageCode == 'auto') ) {
        obj.languageCode = autoSelectLanguageCode();
      }
      let barUrl = tab.url;
      switch (obj.translationService) {
        case "Google":
          barUrl = 'https://translate.google.com/translate?hl='+obj.languageCode+'&sl=auto&tl='+obj.languageCode+'&u='+barUrl;
          break;
        case "Bing":
          barUrl = 'https://www.translatetheweb.com/?from=&to='+obj.languageCode+'&a='+barUrl;
          break;
      } /* End: switch (obj.translationService) */
      browser.tabs.create({ url: barUrl });
    }); /* End: browser.storage.local.get().then */
}); /* End: browser.pageAction.onClicked.addListener */
