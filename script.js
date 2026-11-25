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
