window.onload = function() {
  var mobileLinks = document.getElementById('main-nav-bar-links');
  var mobileIcon = document.getElementById('menu-mobile');
  var mobileLinksA = document.getElementsByClassName('mobile-link')

  function mobileMenuCloseOpen(e) {
    if (e.target != mobileLinks ) {
      mobileLinks.style.display = 'none';
    }

    if (e.target == mobileIcon) {
      mobileLinks.style.display = 'flex';
    }
  }

  window.onclick = function(event) {
    mobileMenuCloseOpen(event);
  }
}
