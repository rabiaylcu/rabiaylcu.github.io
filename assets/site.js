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
