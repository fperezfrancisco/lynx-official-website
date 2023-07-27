const trilogyThumbnail = document.getElementById("trilogyThumbnail");

trilogyThumbnail.addEventListener("mouseover", () => {
  console.log("entered event listener");
  trilogyThumbnail.src = "trilogy-vid-gif.gif";
});
