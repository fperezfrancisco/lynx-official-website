const mobileMenu = document.querySelector(".mobileMenuContainer");
const menuOpenBtn = document.querySelector(".mobileMenuOpen");
const menuCloseBtn = document.querySelector(".mobileMenuClose");
const subscribeForm = document.querySelector(".subscribeForm");
const joinBtn = document.querySelector(".subscribeBtn");

function toggleMenu() {
  mobileMenu.classList.toggle("active");
  menuOpenBtn.classList.toggle("hidden");
}

menuOpenBtn.addEventListener("click", toggleMenu);
menuCloseBtn.addEventListener("click", toggleMenu);

const mainHeader = document.querySelector(".mainHeader");

document.addEventListener("scroll", () => {
  if (window.scrollY > 36) {
    mainHeader.classList.add("scrolling");
  } else {
    mainHeader.classList.remove("scrolling");
  }
});

const subscribeURL =
  "https://script.google.com/macros/s/AKfycbzDn9C4ewnDUupstp7uNdrmaODpzqKvYN6dGvQVXAc-i6DXkQuAi06H7_EJVei_VlGE/exec";

subscribeForm.addEventListener("submit", (e) => {
  joinBtn.disabled = true;
  console.log("entered event listenter");
  e.preventDefault();
  let requestBody = new FormData(subscribeForm);
  fetch(subscribeURL, { method: "POST", body: requestBody })
    .then((response) => {
      // change the styles for the form
      //sendMessageBtn.classList.add("hidden");
      alert("Success!", response);
      //thankYouContainer.classList.remove("hidden");
      joinBtn.disabled = false;
    })
    .catch((error) => {
      alert("Error!", error.message);
      joinBtn.disabled = false;
    });
});
