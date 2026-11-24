(function () {
  // Cloudflare Web Analytics token for parts.kyhsexport.com
  // Replace the empty string below with the token from
  // Cloudflare dashboard -> Web Analytics -> add site -> parts.kyhsexport.com
  var CF_TOKEN = '';

  if (!CF_TOKEN) {
    return;
  }
  var s = document.createElement('script');
  s.defer = true;
  s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  s.setAttribute('data-cf-beacon', JSON.stringify({ token: CF_TOKEN }));
  document.head.appendChild(s);
})();
