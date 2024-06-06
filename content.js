const paramsToRemove = [
    "icid", "mkt_tok", "gclid", "fbclid", "igshid",
    "_hsenc", "_hsmi", "mc_cid", "mc_eid", "utm_id",
    "utm_source", "utm_medium", "utm_term", "utm_campaign",
    "utm_content", "utm_cid", "utm_reader", "utm_referrer",
    "utm_name", "utm_social", "utm_social-type", "rb_clickid",
    "yclid", "_openstat", "wickedid", "otc", "oly_anon_id",
    "oly_enc_id", "soc_src", "soc_trk", "cvid", "oicd", "targetUrl"
  ];
  
  let isCleaning = false;
  
  function cleanURL() {
    if (isCleaning) return;
  
    isCleaning = true;
    let url = new URL(window.location);
    let params = url.searchParams;
  
    paramsToRemove.forEach(param => params.delete(param));
  
    history.replaceState(null, '', url.pathname + (url.search ? '?' + params.toString() : '') + url.hash);
    isCleaning = false;
  }
  
  // Observe for SPA navigation changes
  const observer = new MutationObserver(() => {
    cleanURL();
  });
  
  observer.observe(document, {
    subtree: true,
    childList: true
  });
  
//   window.addEventListener('popstate', cleanURL);

  