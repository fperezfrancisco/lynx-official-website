const mobileMenu = document.querySelector(".mobileMenuContainer");
const menuOpenBtn = document.querySelector(".mobileMenuOpen");
const menuCloseBtn = document.querySelector(".mobileMenuClose");

function toggleMenu() {
  mobileMenu.classList.toggle("active");
  menuOpenBtn.classList.toggle("hidden");
}

menuOpenBtn.addEventListener("click", toggleMenu);
menuCloseBtn.addEventListener("click", toggleMenu);
