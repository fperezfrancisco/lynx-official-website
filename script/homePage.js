const heroArtContainer = document.querySelector(".heroArtContainer ");

const logosBox = document.querySelector(".logosBox");
const logoIcons = document.querySelectorAll(".clientLogoContainer");
logoIcons.forEach((logo) => {
  logo.classList.remove("reveal");
});

document.addEventListener("scroll", () => {
  console.log(scrollY);
  //animate the logos based on y-
  if (window.scrollY > 500) {
    logoIcons.forEach((logo) => {
      logo.classList.add("reveal");
    });
  }
});
