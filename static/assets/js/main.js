window.onload = function (e) {
  console.log('window.onload', e, Date.now(), window.tdiff);
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
};
