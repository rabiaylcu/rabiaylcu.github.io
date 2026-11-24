// Dil: kullanıcının seçimi, yoksa İngilizce.
// <head> içindeki kısa betik dili sayfa çizilmeden ayarlar; bu dosya düğmeleri ve sekme başlığını yönetir.
(function () {
  function apply(lang) {
    document.documentElement.lang = lang;
    var t = document.body.getAttribute('data-title-' + lang);
    if (t) document.title = t;
  }
  document.querySelectorAll('[data-set-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      var lang = b.getAttribute('data-set-lang');
      try { localStorage.setItem('lang', lang); } catch (e) {}
      apply(lang);
    });
  });
  apply(document.documentElement.lang);
})();

// Telefonda sekme şeridi: açık sayfa görünür yere kayar; devamı olan kenar solar.
(function () {
  var bar = document.querySelector('.nav-links');
  if (!bar) return;
  function edge() {
    bar.classList.toggle('more', bar.scrollLeft + bar.clientWidth < bar.scrollWidth - 2);
    bar.classList.toggle('less', bar.scrollLeft > 2);
  }
  var a = bar.querySelector('a.active');
  if (a && bar.scrollWidth > bar.clientWidth) bar.scrollLeft = a.offsetLeft - (bar.clientWidth - a.offsetWidth) / 2;
  bar.addEventListener('scroll', edge, { passive: true });
  window.addEventListener('resize', edge);
  edge();
})();
