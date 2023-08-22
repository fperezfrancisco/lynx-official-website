const contactForm = document.querySelector("#contactForm");
const sendMessageBtn = document.querySelector("#sendMessageBtn");
const formItems = document.querySelectorAll(".formItem");
const thankYouContainer = document.querySelector(".thankYouContainer");
const messageSending = document.querySelector(".messageSending");

formItems.forEach((formItem) => {
  formItem.classList.remove("hidden");
});
sendMessageBtn.classList.remove("hidden");

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwOv6tPZzaCZXB0EZvc6svxptVm9-9gkINuqCkwDmnRYsQnBNvFi8JKr0DF_ZfyEdFX/exec";

contactForm.addEventListener("submit", (e) => {
  sendMessageBtn.disabled = true;
  e.preventDefault();
  //use this space to set loading animation
  // change the styles for the form
  formItems.forEach((formItem) => {
    formItem.classList.add("hidden");
  });
  sendMessageBtn.classList.add("hidden");
  messageSending.classList.remove("hidden");

  let requestBody = new FormData(contactForm);
  fetch(scriptURL, { method: "POST", body: requestBody })
    .then((response) => {
      messageSending.classList.add("hidden");
      //alert("Success!", response);
      thankYouContainer.classList.remove("hidden");
      sendMessageBtn.disabled = false;
    })
    .catch((error) => {
      messageSending.classList.add("hidden");
      alert("Error!", error.message);
      sendMessageBtn.disabled = false;
    });
});
