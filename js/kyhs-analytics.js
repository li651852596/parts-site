(function () {
  // Cloudflare Web Analytics token for parts.kyhsexport.com
  var CF_TOKEN = '13159866f1e04afe8edfc805a9be5c8e';

  if (!CF_TOKEN) {
    return;
  }
  var s = document.createElement('script');
  s.defer = true;
  s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  s.setAttribute('data-cf-beacon', JSON.stringify({ token: CF_TOKEN }));
  document.head.appendChild(s);
})();
