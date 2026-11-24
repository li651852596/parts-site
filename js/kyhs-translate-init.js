(function () {
  // ===== Site original language: English (parts.kyhsexport.com) =====
  var LOCAL_LANG = 'english';

  // Quick-access languages, pinned at the top of the picker.
  var COMMON_LANGS = [
    { id: 'english', label: 'English', hint: '英语' },
    { id: 'chinese_simplified', label: '简体中文', hint: 'Chinese' },
    { id: 'japanese', label: '日本語', hint: '日语' },
    { id: 'korean', label: '한국어', hint: '韩语' },
    { id: 'spanish', label: 'Español', hint: '西班牙语' },
    { id: 'french', label: 'Français', hint: '法语' },
    { id: 'german', label: 'Deutsch', hint: '德语' },
    { id: 'portuguese', label: 'Português', hint: '葡萄牙语' },
    { id: 'russian', label: 'Русский', hint: '俄语' },
    { id: 'arabic', label: 'العربية', hint: '阿拉伯语' }
  ];

  // ---------- styles for the custom language picker ----------
  var css = document.createElement('style');
  css.textContent = [
    '#kyhs-lang{position:fixed;top:14px;right:14px;z-index:99999;font:13px/1.4 -apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;}',
    '#kyhs-lang *{box-sizing:border-box;}',
    '#kyhs-lang .kyhs-lang-btn{display:flex;align-items:center;gap:6px;padding:7px 10px;border:1px solid #d5dee9;border-radius:8px;background:#fff;color:#123f73;cursor:pointer;box-shadow:0 2px 10px rgba(10,40,80,.14);white-space:nowrap;}',
    '#kyhs-lang .kyhs-lang-btn:hover{background:#f2f7fd;}',
    '#kyhs-lang .kyhs-lang-ico{font-size:15px;line-height:1;}',
    '#kyhs-lang .kyhs-lang-caret{font-size:10px;opacity:.6;}',
    '#kyhs-lang .kyhs-lang-panel{position:absolute;top:42px;right:0;width:300px;max-height:420px;display:flex;flex-direction:column;background:#fff;border:1px solid #d5dee9;border-radius:10px;box-shadow:0 10px 30px rgba(10,40,80,.18);overflow:hidden;}',
    '#kyhs-lang .kyhs-lang-panel[hidden]{display:none;}',
    '#kyhs-lang .kyhs-lang-search{flex:none;margin:10px 10px 6px;padding:8px 10px;border:1px solid #d5dee9;border-radius:6px;font-size:13px;outline:none;}',
    '#kyhs-lang .kyhs-lang-search:focus{border-color:#2f6fb5;box-shadow:0 0 0 2px rgba(47,111,181,.15);}',
    '#kyhs-lang .kyhs-lang-sec{padding:2px 10px 5px;font-size:11px;color:#7b8ca1;letter-spacing:.04em;}',
    '#kyhs-lang .kyhs-lang-quick{display:flex;flex-wrap:wrap;gap:4px;padding:0 10px 8px;border-bottom:1px solid #edf1f6;}',
    '#kyhs-lang .kyhs-lang-chip{padding:4px 8px;border:1px solid #d5dee9;border-radius:14px;background:#f7faff;color:#123f73;cursor:pointer;font-size:12px;}',
    '#kyhs-lang .kyhs-lang-chip:hover{background:#e8f1fc;}',
    '#kyhs-lang .kyhs-lang-chip.is-on{background:#123f73;color:#fff;border-color:#123f73;}',
    '#kyhs-lang .kyhs-lang-list{flex:1;overflow-y:auto;padding:4px 6px 8px;}',
    '#kyhs-lang .kyhs-lang-item{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:6px 8px;border-radius:6px;cursor:pointer;color:#22354a;}',
    '#kyhs-lang .kyhs-lang-item:hover{background:#f2f7fd;}',
    '#kyhs-lang .kyhs-lang-item.is-on{background:#e8f1fc;color:#123f73;font-weight:600;}',
    '#kyhs-lang .kyhs-lang-item small{color:#93a2b5;font-size:11px;}',
    '@media(max-width:600px){#kyhs-lang{top:10px;right:10px;}#kyhs-lang .kyhs-lang-panel{width:min(300px,calc(100vw - 20px));}}'
  ].join('');
  document.head.appendChild(css);

  if (typeof translate === 'undefined') {
    return;
  }

  // Use our own container instead of translate.js's plain <select>.
  translate.selectLanguageTag.documentId = 'kyhs-lang';

  // This site's original language is English.
  translate.language.setLocal(LOCAL_LANG);

  // Leave translateLanguagesRange unset so every supported language is listed.
  translate.service.use('client.edge');
  translate.listener.start();

  // Never translate brand names and model numbers.
  translate.ignore.text.push('KYHS', 'KEYUE HONGSHENG');

  var built = false;

  function buildPicker(list) {
    if (built) return;
    var container = document.getElementById('kyhs-lang');
    if (!container) return;
    built = true;
    container.innerHTML = '';

    var byId = {};
    (list || []).forEach(function (l) {
      if (l && l.id) byId[l.id] = l.name || l.id;
    });

    var current = translate.language.getCurrent() || LOCAL_LANG;

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'kyhs-lang-btn';
    btn.innerHTML = '<span class="kyhs-lang-ico">🌐</span><span class="kyhs-lang-cur"></span><span class="kyhs-lang-caret">▾</span>';
    container.appendChild(btn);

    var curLabel = btn.querySelector('.kyhs-lang-cur');
    function paintCurrent() {
      curLabel.textContent = byId[current] || current;
    }
    paintCurrent();

    var panel = document.createElement('div');
    panel.className = 'kyhs-lang-panel';
    panel.hidden = true;
    container.appendChild(panel);

    var search = document.createElement('input');
    search.type = 'search';
    search.className = 'kyhs-lang-search';
    search.placeholder = '搜索语言 / Search language...';
    search.setAttribute('aria-label', 'Search language');
    panel.appendChild(search);

    var quickTitle = document.createElement('div');
    quickTitle.className = 'kyhs-lang-sec';
    quickTitle.textContent = '常用语言 / Popular';
    panel.appendChild(quickTitle);

    var quick = document.createElement('div');
    quick.className = 'kyhs-lang-quick';
    panel.appendChild(quick);

    var allTitle = document.createElement('div');
    allTitle.className = 'kyhs-lang-sec';
    allTitle.textContent = '全部语言 / All languages';
    panel.appendChild(allTitle);

    var listBox = document.createElement('div');
    listBox.className = 'kyhs-lang-list';
    panel.appendChild(listBox);

    function choose(id, name) {
      current = id;
      translate.changeLanguage(id);
      paintCurrent();
      panel.hidden = true;
      search.value = '';
      Array.prototype.forEach.call(listBox.children, function (item) { item.hidden = false; });
      quick.hidden = false;
      quickTitle.hidden = false;
      allTitle.textContent = '全部语言 / All languages';
      Array.prototype.forEach.call(quick.children, function (c) {
        c.classList.toggle('is-on', c.getAttribute('data-id') === id);
      });
      Array.prototype.forEach.call(listBox.children, function (c) {
        c.classList.toggle('is-on', c.getAttribute('data-id') === id);
      });
    }

    COMMON_LANGS.forEach(function (c) {
      if (!byId[c.id]) return;
      var chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'kyhs-lang-chip';
      chip.setAttribute('data-id', c.id);
      chip.textContent = c.label;
      chip.title = c.hint;
      if (c.id === current) chip.classList.add('is-on');
      chip.addEventListener('click', function () { choose(c.id, c.label); });
      quick.appendChild(chip);
    });

    var sorted = (list || []).filter(function (l) { return l && l.id && l.name; });
    sorted.sort(function (a, b) {
      return String(a.name).localeCompare(String(b.name), 'zh-CN');
    });
    sorted.forEach(function (l) {
      var item = document.createElement('div');
      item.className = 'kyhs-lang-item';
      item.setAttribute('data-id', l.id);
      item.setAttribute('data-text', (l.name + ' ' + l.id).toLowerCase());
      if (l.id === current) item.classList.add('is-on');
      var name = document.createElement('span');
      name.textContent = l.name;
      var code = document.createElement('small');
      code.textContent = l.id;
      item.appendChild(name);
      item.appendChild(code);
      item.addEventListener('click', function () { choose(l.id, l.name); });
      listBox.appendChild(item);
    });

    search.addEventListener('input', function () {
      var q = search.value.trim().toLowerCase();
      Array.prototype.forEach.call(listBox.children, function (item) {
        item.hidden = !!q && item.getAttribute('data-text').indexOf(q) < 0;
      });
      quick.hidden = !!q;
      quickTitle.hidden = !!q;
      allTitle.textContent = q ? '搜索结果 / Results' : '全部语言 / All languages';
    });

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      panel.hidden = !panel.hidden;
      if (!panel.hidden) search.focus();
    });
    panel.addEventListener('click', function (e) { e.stopPropagation(); });
    document.addEventListener('click', function () { panel.hidden = true; });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') panel.hidden = true;
    });
  }

  // translate.js calls customUI() with the full language list from its API.
  translate.selectLanguageTag.customUI = function (list) {
    buildPicker(list);
  };

  // Fallback: if the language API is slow/unavailable, still offer popular languages.
  translate.execute();
  setTimeout(function () {
    if (built) return;
    buildPicker(COMMON_LANGS.map(function (c) {
      return { id: c.id, name: c.label };
    }));
  }, 6000);
})();
