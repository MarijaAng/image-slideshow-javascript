const images = [
  "img/image1.jpg",
  "img/image2.jpg",
  "img/image3.jpg",
  "img/image4.jpg",
];

const imageDisplay = document.querySelector("#imageDisplay");
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

nextButton.addEventListener("click", () => {
  nextImage(images, imageDisplay, previousButton, nextButton);
});

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowRight") {
    nextImage(images, imageDisplay, previousButton, nextButton);
  }
});

previousButton.addEventListener("click", () => {
  previousImage(images, imageDisplay, previousButton, nextButton);
});

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowLeft") {
    previousImage(images, imageDisplay, previousButton, nextButton);
  }
});

let currentIndex = 0;
imageDisplay.src = images[currentIndex];
previousButton.setAttribute("disabled", "");

function nextImage(imageArray, imgTag, prevBtn, nextBtn) {
  if (currentIndex < imageArray.length - 1) {
    currentIndex++;
    imgTag.src = imageArray[currentIndex];
  }
  if (currentIndex === imageArray.length - 1) {
    nextBtn.setAttribute("disabled", "");
  }
  if (currentIndex > 0) {
    prevBtn.removeAttribute("disabled");
  }
}

function previousImage(imageArray, imgTag, prevBtn, nextBtn) {
  if (currentIndex > 0 && currentIndex <= imageArray.length - 1) {
    currentIndex--;
    imgTag.src = imageArray[currentIndex];
  }
  if (currentIndex === 0) {
    prevBtn.setAttribute("disabled", "");
  }
  if (currentIndex < imageArray.length - 1) {
    nextBtn.removeAttribute("disabled");
  }
}
