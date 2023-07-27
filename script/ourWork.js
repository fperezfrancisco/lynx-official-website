const thumbnailContainers = document.querySelectorAll(".thumbnailContainer");

thumbnailContainers.forEach((div) => {
  const img = div.querySelector("img");
  function loaded() {
    //do something once imgs load
    div.classList.add("loaded");
    console.log("entered loaded function");
  }

  if (img.complete) {
    loaded();
  } else {
    img.addEventListener("load", loaded);
  }
});
