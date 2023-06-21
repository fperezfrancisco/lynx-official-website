const contactForm = document.querySelector("#contactForm");
const sendMessageBtn = document.querySelector("#sendMessageBtn");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwOv6tPZzaCZXB0EZvc6svxptVm9-9gkINuqCkwDmnRYsQnBNvFi8JKr0DF_ZfyEdFX/exec";

contactForm.addEventListener("submit", (e) => {
  sendMessageBtn.disabled = true;
  e.preventDefault();
  let requestBody = new FormData(contactForm);
  fetch(scriptURL, { method: "POST", body: requestBody })
    .then((response) => {
      alert("Success!", response);
      sendMessageBtn.disabled = false;
    })
    .catch((error) => {
      alert("Error!", error.message);
      sendMessageBtn.disabled = false;
    });
});
