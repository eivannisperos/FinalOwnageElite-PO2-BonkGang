mobileMenuAppear = function() {
  if (nav.className === "hamburger-menu") {
    nav.className += "responsive";
  } else {
    nav.className = "hamburger-menu";
  }
}

window.onload = function() {
  var hamburgerMenu = document.getElementById("menu-mobile");
  hamburgerMenu.onclick = function() {
    if (hamburgerMenu.className)
  }
}
