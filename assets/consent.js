/* Lmotion - aviso de cookies (Google Analytics com Consent Mode) */
(function () {
  var KEY = 'lm_cookies';
  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function update(v) {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { analytics_storage: v === 'granted' ? 'granted' : 'denied' });
    }
  }

  var css = '#lm-cookie{position:fixed;left:20px;bottom:20px;z-index:9999;max-width:420px;background:#141414;color:#fff;' +
    'border:1px solid rgba(110,45,231,0.45);border-radius:16px;padding:20px 22px;box-shadow:0 20px 50px rgba(0,0,0,0.6);' +
    'font-family:"Segoe UI",Helvetica,Arial,sans-serif;font-size:0.9rem;line-height:1.5}' +
    '#lm-cookie p{margin:0 0 14px;color:#cfcfcf}#lm-cookie a{color:#9b6bf2;text-decoration:underline}' +
    '#lm-cookie .lm-btns{display:flex;gap:10px;flex-wrap:wrap}' +
    '#lm-cookie button{font:inherit;font-weight:600;cursor:pointer;border-radius:32px;padding:10px 22px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:#fff;transition:all .2s}' +
    '#lm-cookie button:hover{border-color:#9b6bf2;color:#9b6bf2}' +
    '#lm-cookie button.lm-ok{background:#6e2de7;border-color:#6e2de7;color:#fff}' +
    '#lm-cookie button.lm-ok:hover{background:#7f45ee;color:#fff}' +
    '#lm-cookie button:focus-visible,.lm-pref:focus-visible{outline:2px solid #9b6bf2;outline-offset:2px}' +
    '.lm-pref{background:none;border:0;padding:0;font:inherit;color:#9a9a9a;text-decoration:underline;cursor:pointer}' +
    '@media(max-width:560px){#lm-cookie{left:12px;right:12px;bottom:12px;max-width:none}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var box = null;
  function close() { if (box && box.parentNode) box.parentNode.removeChild(box); box = null; }
  function choose(v) { set(v); update(v); close(); }

  function show() {
    if (box) return;
    box = document.createElement('div');
    box.id = 'lm-cookie';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-label', 'Aviso de cookies');
    box.innerHTML = '<p>Usamos cookies de análise (Google Analytics) para entender como o site é usado e melhorá-lo. ' +
      'Você pode aceitar ou recusar. Saiba mais na <a href="/privacidade.html">Política de Privacidade</a>.</p>' +
      '<div class="lm-btns"><button type="button" class="lm-ok">Aceitar</button><button type="button" class="lm-no">Recusar</button></div>';
    document.body.appendChild(box);
    box.querySelector('.lm-ok').addEventListener('click', function () { choose('granted'); });
    box.querySelector('.lm-no').addEventListener('click', function () { choose('denied'); });
  }

  function addFooterLink() {
    var f = document.querySelector('footer');
    if (!f) return;
    var p = document.createElement('p');
    p.style.marginTop = '8px';
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'lm-pref'; b.textContent = 'Preferências de cookies';
    b.addEventListener('click', show);
    p.appendChild(b); f.appendChild(p);
  }

  function init() {
    addFooterLink();
    if (get() === null) show();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
