const imageArray = [
    { src: "./images/carp1.jpg", alt: "Image of first carp" },
    { src: "./images/carp2.jpg", alt: "Image of second carp" },
    { src: "./images/carp3.jpg", alt: "Image of third carp" },
    { src: "./images/carp4.jpg", alt: "Image of fourth carp" },
    { src: "./images/carp5.jpg", alt: "Image of fifth carp" },
    { src: "./images/peg3 view.jpg", alt: "View of lake from peg 3" },
    { src: "./images/image1.jpg", alt: "Set up in snow" },
    { src: "./images/image2.jpg", alt: "Set up in snow" },
    { src: "./images/image3.jpg", alt: "Set up in snow" },
    { src: "./images/image4.jpg", alt: "Set up in snow" },
    { src: "./images/coldViewPeg1.jpg", alt: "A view in the snow" },
    { src: "./images/lakeView.jpg", alt: "Lake view from peg one" },
    { src: "./images/path.jpg", alt: "Path leading to peg two and three" },
    { src: "./images/peg1HouseNight.jpg", alt: "peg one summerhouse" },
    { src: "./images/peg1View.jpg", alt: "view from peg one" },
    { src: "./images/peg1House.jpg", alt: "peg one summerhouse" },
    { src: "./images/peg2construction.jpg", alt: "peg two being constructed" },
    { src: "./images/peg3House.jpg", alt: "peg three summerhouse" },
    { src: "./images/carp6.jpeg", alt: "night time mirror carp" },
    { src: "./images/carp7.jpeg", alt: "scaley mirror carp" },
    { src: "./images/carp1810.jpeg", alt: "18lb 10oz carp" },
    { src: "./images/carp1904.jpeg", alt: "19lb 04oz carp" },
    { src: "./images/kim23.jpeg", alt: "lake record kim at 23lb" },
    { src: "./images/peg2 bivvy.png", alt: "peg two with bivvies" },
    {
      src: "./images/scaley mirror peg2.png",
      alt: "scaley mirror caught from peg two",
    },
  ],
  gallery = document.getElementById("gallery"),
  fullscreenOverlay = document.getElementById("fullscreenOverlay"),
  fullscreenImage = document.getElementById("fullscreenImage"),
  closeBtn = document.getElementById("closeBtn"),
  prevBtn = document.getElementById("prevBtn"),
  nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;
function createGallery() {
  imageArray.forEach((imageObj, index) => {
    const img = document.createElement("img");
    (img.src = imageObj.src),
      (img.alt = imageObj.alt),
      (img.dataset.index = index),
      (img.tabIndex = 0),
      gallery.appendChild(img);
  });
}
function openFullscreen(index) {
  (currentIndex = index),
    (fullscreenImage.src = imageArray[currentIndex].src),
    (fullscreenImage.alt = imageArray[currentIndex].alt),
    (fullscreenOverlay.style.display = "flex"),
    document.addEventListener("keydown", handleKeyPress);
}
function closeFullscreen() {
  (fullscreenOverlay.style.display = "none"),
    document.removeEventListener("keydown", handleKeyPress);
}
function nextImage() {
  (currentIndex = (currentIndex + 1) % imageArray.length),
    (fullscreenImage.src = imageArray[currentIndex].src),
    (fullscreenImage.alt = imageArray[currentIndex].alt);
}
function prevImage() {
  (currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length),
    (fullscreenImage.src = imageArray[currentIndex].src),
    (fullscreenImage.alt = imageArray[currentIndex].alt);
}
function handleKeyPress(event) {
  switch (event.key) {
    case "Escape":
      closeFullscreen();
      break;
    case "ArrowRight":
      nextImage();
      break;
    case "ArrowLeft":
      prevImage();
  }
}
gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG")
    openFullscreen(parseInt(e.target.dataset.index));
}),
  gallery.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.tagName === "IMG")
      openFullscreen(parseInt(e.target.dataset.index));
  }),
  closeBtn.addEventListener("click", closeFullscreen),
  nextBtn.addEventListener("click", nextImage),
  prevBtn.addEventListener("click", prevImage),
  createGallery();
