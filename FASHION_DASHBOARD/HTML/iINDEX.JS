//
// JavaScript
const images = document.querySelectorAll(".hover-images");
const displayImages = document.querySelector(".display-images");

images.forEach((img) => {
  img.addEventListener("click", () => {
    // Get the source of the clicked image
    const src = img.getAttribute("src");

    // Replace the innerHTML of displayImages with the clicked image
    displayImages.innerHTML = `
      <img src="${src}" alt="Displayed Image" />
    `;
    console.log(img);
  });
});
console.log(img);
