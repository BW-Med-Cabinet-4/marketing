function mobileMenu() {
  let topNav = document.getElementById("navTop");
  if (topNav.className === "navBar") {
    topNav.className += " responsive";
  } else {
    topNav.className = "navBar";
  }
}