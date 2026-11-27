var chips = document.querySelectorAll('.chip');
var items = document.querySelectorAll('.menu li');

chips.forEach(function (chip) {
  chip.addEventListener('click', function () {
    chips.forEach(function (c) { c.classList.remove('active'); });
    chip.classList.add('active');
    var cat = chip.dataset.cat;
    items.forEach(function (item) {
      var show = cat === 'all' || item.dataset.cat === cat;
      item.classList.toggle('hidden', !show);
    });
  });
});

// حط رقم الواتساب الحقيقي هنا بالصيغة الدولية من غير + (مثال: 20 + الرقم من غير الصفر)
var WHATSAPP_NUMBER = "";

(function () {
  var a = document.getElementById('wa');
  if (!a) return;
  if (!WHATSAPP_NUMBER) {
    a.classList.add('off');
    a.textContent = 'رقم الواتساب هيتحط هنا';
    a.addEventListener('click', function (e) { e.preventDefault(); });
    return;
  }
  a.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(a.dataset.text);
})();
