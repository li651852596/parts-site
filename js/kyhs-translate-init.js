(function () {
  // World's top 20 languages by native speakers -> translate.js language codes
  var top20 = [
    'chinese_simplified', 'english', 'hindi', 'arabic', 'portuguese',
    'bengali', 'russian', 'japanese', 'punjabi', 'german',
    'korean', 'french', 'spanish', 'italian', 'turkish',
    'vietnamese', 'thai', 'marathi', 'tamil', 'indonesian'
  ];

  // Keep the language switcher pinned top-right, above page content.
  var css = document.createElement('style');
  css.textContent =
    '#translate{position:fixed;top:14px;right:14px;z-index:99999;}' +
    '#translate select{font-size:13px;padding:5px 8px;border:1px solid #ccc;' +
    'border-radius:6px;background:#fff;color:#333;max-width:180px;' +
    'box-shadow:0 2px 8px rgba(0,0,0,.12);cursor:pointer;}';
  document.head.appendChild(css);

  if (typeof translate === 'undefined') {
    return;
  }

  // This site's original language is English.
  translate.language.setLocal('english');

  // Only show the 20 most spoken languages in the switcher.
  translate.selectLanguageTag.languages = top20.join(',');

  // Free community translation channel - no API key required.
  translate.service.use('client.edge');

  // Translate text injected by JavaScript after page load.
  translate.listener.start();

  // Never translate brand names and model numbers.
  translate.ignore.text.push('KYHS', 'KEYUE HONGSHENG', 'Haolian');

  translate.execute();
})();
