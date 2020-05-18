window.onload = function (e) {
  // Mobile menu
  var menuToggle = document.querySelectorAll('.menu-toggle');

  for (var i = 0; i < menuToggle.length; i++) {
    menuToggle[i].addEventListener(
      'click',
      function (e) {
        document.body.classList.toggle('menu--opened');
        e.preventDefault();
      },
      false
    );
  }

  // Sticky header
  var offsetY = 0;
  var ticking = false;

  window.addEventListener('scroll', function (e) {
    offsetY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function () {
        handleHeader(offsetY);
        ticking = false;
      });
      ticking = true;
    }
  });

  function handleHeader(scrollPos) {
    if (scrollPos > 0) document.body.classList.add('has--scrolled');
    else document.body.classList.remove('has--scrolled');
  }
};
