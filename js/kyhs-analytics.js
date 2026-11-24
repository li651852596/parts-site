(function () {
  // ===== Cloudflare Web Analytics =====
  var CF_TOKEN = '13159866f1e04afe8edfc805a9be5c8e';
  if (CF_TOKEN) {
    var s = document.createElement('script');
    s.defer = true;
    s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    s.setAttribute('data-cf-beacon', JSON.stringify({ token: CF_TOKEN }));
    document.head.appendChild(s);
  }

  // ===== Google Tag Manager (parts.kyhsexport.com) =====
  // Container ID supplied by the user. Real tracking tags live inside the
  // GTM container and must be published there for data to be collected.
  var GTM_ID = 'GTM-TKKRVJPV';
  if (GTM_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    var g = document.createElement('script');
    g.async = true;
    g.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
    document.head.appendChild(g);
  }
})();
