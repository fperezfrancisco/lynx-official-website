const mobileMenu = document.querySelector(".mobileMenuContainer");
const menuOpenBtn = document.querySelector(".mobileMenuOpen");
const menuCloseBtn = document.querySelector(".mobileMenuClose");
const subscribeForm = document.querySelector(".subscribeForm");
const joinBtn = document.querySelector(".subscribeBtn");
const subscribeThankYou = document.querySelector(".subscribeThankYou");

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

//make sure thank you message for subscribe is hidden
subscribeThankYou.classList.add("hidden");

const subscribeURL =
  "https://script.google.com/macros/s/AKfycbz311YLTknVQxN_FYYKxjvMyhwiiM7M4tujRue9i0EYliaan82O5RtTGF1MWFtLgXnu/exec";

subscribeForm.addEventListener("submit", (e) => {
  joinBtn.disabled = true;
  console.log("entered event listenter");
  e.preventDefault();
  let subscribeRequestBody = new FormData(subscribeForm);
  fetch(subscribeURL, { method: "POST", body: subscribeRequestBody })
    .then((response) => {
      // change the styles for the form
      //sendMessageBtn.classList.add("hidden");
      subscribeThankYou.classList.remove("hidden");
      //thankYouContainer.classList.remove("hidden");
      joinBtn.disabled = false;
    })
    .catch((error) => {
      alert(
        "Error! Something went wrong in the subscribe form.",
        error.message,
      );
      joinBtn.disabled = false;
    });
});
