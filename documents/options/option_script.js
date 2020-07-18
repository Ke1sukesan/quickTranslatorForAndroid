
/* Initialize */
browser.storage.local.get()
  .then( (obj) => {

    if (obj.translationService != null) {
      document.querySelector('option[value="'+obj.translationService+'"]').selected = true;
    }

    if (obj.languageCode != null) {
      document.querySelector('option[value="'+obj.languageCode+'"]').selected = true;
    }
  });

/* Update processing */
document.getElementById('formTranslationService').addEventListener('input', () => {
  const valueTranslationService = document.getElementById('selectTranslationService').value;
  browser.storage.local.set({ translationService: valueTranslationService });
}, false);

document.getElementById('formLanguageCode').addEventListener('input', () => {
  const valueLanguageCode = document.getElementById('selectLanguageCode').value;
  browser.storage.local.set({ languageCode: valueLanguageCode });
}, false);

/* For multilingual */
document.getElementById('divServiceUsedFor').textContent             = browser.i18n.getMessage('optionPageServiceUsedFor');
document.getElementById('spanSpecifyTranslationService').textContent = browser.i18n.getMessage('optionPageSpecifyTranslationService');
document.getElementById('pWhenBingIsSelected').textContent           = browser.i18n.getMessage('optionPageWhenBingIsSelected');

document.getElementById('divTranslatedLanguage').textContent   = browser.i18n.getMessage('optionPageTranslatedLanguage');
document.getElementById('spanSpecifyLanguageCode').textContent = browser.i18n.getMessage('optionPageSpecifyLanguageCode');
document.getElementById('pIfSetToEn').textContent              = browser.i18n.getMessage('optionPageIfSetEn');