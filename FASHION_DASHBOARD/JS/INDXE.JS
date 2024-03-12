const hoverImages = document.querySelectorAll(".indxe");
const displayImages = document.querySelector(".display-images");

hoverImages.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    let images = img.src;
    displayImages.innerHTML = `<a href="#"> <img src="${images}" class="card-img-top" alt="img" /></a>`;
  });
  img.addEventListener("mouseleave", () => {
    displayImages.innerHTML = `
      <a href="#"> <img src="../IMAGES/p-2_result-transformed.png" class="card-img-top" alt="img"  /></a>
    
    `;
  });
});
//////////CART ONE///////////
const hoverImagesOne = document.querySelectorAll(".indxe-one");
const displayImagesOne = document.querySelector(".display-imageOne");
hoverImagesOne.forEach((imgOne) => {
  imgOne.addEventListener("mouseenter", () => {
    let imgesOne = imgOne.src;
    displayImagesOne.innerHTML = `<a href="#"> <img src="${imgesOne}" class="card-img-top" alt="img" /></a>`;
  });
  imgOne.addEventListener("mouseleave", () => {
    displayImagesOne.innerHTML = `
 <a href="#"> <img src="../IMAGES/3.jpeg" class="card-img-top" alt="..." /></a>
    
    `;
  });
});
////////////////////CART TWO////////////////

const hoverImagesTwo = document.querySelectorAll(".indxe-two");
const displayImagesTwo = document.querySelector(".display-imageTwo");
hoverImagesTwo.forEach((imgTwo) => {
  imgTwo.addEventListener("mouseenter", () => {
    let imgesTwo = imgTwo.src;
    displayImagesTwo.innerHTML = `<a href="#"> <img src="${imgesTwo}" class="card-img-top" alt="img" /></a>`;
  });
  imgTwo.addEventListener("mouseleave", () => {
    displayImagesTwo.innerHTML = `
    <a href="#"> <img src="../IMAGES/4.jpeg" class="card-img-top" alt="..." /></a>
    
    `;
  });
});

////////////////////CART THREE////////////////

const hoverImagesThree = document.querySelectorAll(".indxe-three");
const displayImagesThree = document.querySelector(".display-imageThree");
hoverImagesThree.forEach((imgThree) => {
  imgThree.addEventListener("mouseenter", () => {
    let imgesThree = imgThree.src;
    displayImagesThree.innerHTML = `<a href="#"> <img src="${imgesThree}" class="card-img-top" alt="img" /></a>`;
  });
  imgThree.addEventListener("mouseleave", () => {
    displayImagesThree.innerHTML = `
     <a href="#"> <img src="../IMAGES/5.jpeg" class="card-img-top" alt="..." /></a>
    
    `;
  });
});

/////////////////////////////////CARD FOUR////////////////////

const hoverImagesFour = document.querySelectorAll(".indxe-four");
const displayImagesFour = document.querySelector(".display-imageFour");
hoverImagesFour.forEach((imgFour) => {
  imgFour.addEventListener("mouseenter", () => {
    let imgesFour = imgFour.src;
    displayImagesFour.innerHTML = `<a href="#"> <img src="${imgesFour}" class="card-img-top" alt="img" /></a>`;
  });
  imgFour.addEventListener("mouseleave", () => {
    displayImagesFour.innerHTML = `
    <a href="#"> <img src="../IMAGES/6.jpeg" class="card-img-top" alt="..." /></a>
    
    `;
  });
});

/////////////////////////////////CARD FIVE////////////////////

const hoverImagesFive = document.querySelectorAll(".indxe-five");
const displayImagesFive = document.querySelector(".display-imageFive");
hoverImagesFive.forEach((imgFive) => {
  imgFive.addEventListener("mouseenter", () => {
    let imgesFive = imgFive.src;
    displayImagesFive.innerHTML = `<a href="#"> <img src="${imgesFive}" class="card-img-top" alt="img" /></a>`;
  });
  imgFive.addEventListener("mouseleave", () => {
    displayImagesFive.innerHTML = `
    <a href="#"> <img src="../IMAGES/7.jpeg" class="card-img-top" alt="..." /></a>
    
    `;
  });
});

/////////////////////////////////CARD SIX////////////////////

const hoverImagesSix = document.querySelectorAll(".indxe-six");
const displayImagesSix = document.querySelector(".display-imageSix");
hoverImagesSix.forEach((imgSix) => {
  imgSix.addEventListener("mouseenter", () => {
    let imgesSix = imgSix.src;
    displayImagesSix.innerHTML = `<a href="#"> <img src="${imgesSix}" class="card-img-top" alt="img" /></a>`;
  });
  imgSix.addEventListener("mouseleave", () => {
    displayImagesSix.innerHTML = `    <a href="#">   <img src="../IMAGES/8.jpeg" class="card-img-top" alt="..." /></a>
    `;
  });
});

/////////////////////////////////CARD SEVEN////////////////////

const hoverImagesSeven = document.querySelectorAll(".indxe-seven");
const displayImagesSeven = document.querySelector(".display-imageSeven");
hoverImagesSeven.forEach((imgSeven) => {
  imgSeven.addEventListener("mouseenter", () => {
    let imgesSeven = imgSeven.src;
    displayImagesSeven.innerHTML = `<a href="#"> <img src="${imgesSeven}" class="card-img-top" alt="img" /></a>`;
  });
  imgSeven.addEventListener("mouseleave", () => {
    displayImagesSeven.innerHTML = `
       <a href="#">   <img src="../IMAGES/9.jpeg" class="card-img-top" alt="..." /></a>
    
    `;
  });
});

/////////////////////////////////CARD EIGHT////////////////////

const hoverImagesEight = document.querySelectorAll(".indxe-eight");
const displayImagesEight = document.querySelector(".display-imageEight");
hoverImagesEight.forEach((imgEight) => {
  imgEight.addEventListener("mouseenter", () => {
    let imgesEight = imgEight.src;
    displayImagesEight.innerHTML = `<a href="#"> <img src="${imgesEight}" class="card-img-top" alt="img" /></a>`;
  });
  imgEight.addEventListener("mouseleave", () => {
    displayImagesEight.innerHTML = `
    <a href="#">   <img src="../IMAGES/10.jpeg" class="card-img-top" alt="..." /></a>
    
    `;
  });
});
