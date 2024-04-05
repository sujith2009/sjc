const load = () => {
  loadContent();
};
const loadContent = () => {
  const removeBUtton = document.querySelector("#delete-btn");
  const sideContent = document.querySelector("#side-content");
  removeBUtton.addEventListener("click", () => {
    sideContent.remove();
  });
};
const addItems = () => {
  let addButton = document.querySelector("#add");
  let number = document.querySelector("#number");
  let removeNumber = document.querySelector("#remove");
  num = 1;
  addButton.addEventListener("click", () => {
    num++;
    number.innerHTML = num;
  });
  removeNumber.addEventListener("click", () => {
    if (num > 0) {
      num--;
      number.innerHTML = num;
    }
  });
};
// addItems();

document.addEventListener("DOMContentLoaded", loaded());

function loaded() {
  const addToCart = document.querySelectorAll("#add-to");
  const sideContent = document.querySelector("#side-content");
  const img = document.querySelectorAll("img");
  let images = [];
  img.forEach((i) => {
    images.push(i.src);
  });
  //  let imges = img.src;
  addToCart.forEach((addB) => {
    addB.addEventListener("click", () => {
      sideContent.innerHTML = `
     <img src="${images[1]}" alt="" width="100px" height="100px"><br>
              <button type="button" class="btn mt-3 fs-3 btn-warning" style="padding: 0px 4px;"
              id="add">+</button>
           <span style="font-size: 20px;margin-bottom: -20px !important;" id="number">0</span>
              <button type="button" class="btn mt-3 fs-3 btn-warning" style="padding: 0px 4px;"
              id="remove">-</button>
              <div class="delete">
              <button type="button" class="btn btn-danger mt-2" id="delete-btn"><i class="bi bi-trash3-fill"></i></button>
              </div>

    `;
      load();
      addItems();
    });
  });
  //IMAGES TWO
  const addToCart_Two = document.querySelectorAll("#add-to-two");
  addToCart_Two.forEach((addB) => {
    addB.addEventListener("click", () => {
      sideContent.innerHTML = `
     <img src="${images[2]}" alt="" width="100px" height="100px"><br>
              <button type="button" class="btn mt-3 fs-3 btn-warning" style="padding: 0px 4px;"
              id="add">+</button>
           <span style="font-size: 20px;margin-bottom: -20px !important;" id="number">0</span>
              <button type="button" class="btn mt-3 fs-3 btn-warning" style="padding: 0px 4px;"
              id="remove">-</button>
              <div class="delete">
              <button type="button" class="btn btn-danger mt-2" id="delete-btn"><i class="bi bi-trash3-fill"></i></button>
              </div>

    `;
      load();
      addItems();
    });
  });
  //IMAGES THREE
  const addToCart_Three = document.querySelectorAll("#add-to-three");
  addToCart_Three.forEach((addB) => {
    addB.addEventListener("click", () => {
      sideContent.innerHTML = `
     <img src="${images[3]}" alt="" width="100px" height="100px"><br>
              <button type="button" class="btn mt-3 fs-3 btn-warning" style="padding: 0px 4px;"
              id="add">+</button>
           <span style="font-size: 20px;margin-bottom: -20px !important;" id="number">0</span>
              <button type="button" class="btn mt-3 fs-3 btn-warning" style="padding: 0px 4px;"
              id="remove">-</button>
              <div class="delete">
              <button type="button" class="btn btn-danger mt-2" id="delete-btn"><i class="bi bi-trash3-fill"></i></button>
              </div>

    `;
      load();
      addItems();
    });
  });
  //IMAGES FOUR
  const addToCart_Four = document.querySelectorAll("#add-to-four");
  addToCart_Four.forEach((addB) => {
    addB.addEventListener("click", () => {
      sideContent.innerHTML = `
     <img src="${images[4]}" alt="" width="100px" height="100px"><br>
              <button type="button" class="btn mt-3 fs-3 btn-warning" style="padding: 0px 4px;"
              id="add">+</button>
           <span style="font-size: 20px;margin-bottom: -20px !important;" id="number">0</span>
              <button type="button" class="btn mt-3 fs-3 btn-warning" style="padding: 0px 4px;"
              id="remove">-</button>
              <div class="delete">
              <button type="button" class="btn btn-danger mt-2" id="delete-btn"><i class="bi bi-trash3-fill"></i></button>
              </div>

    `;
      load();
      addItems();
    });
  });
  //IMAGES FIVE
   const addToCart_Five = document.querySelectorAll("#add-to-five");
   addToCart_Five.forEach((addB) => {
     addB.addEventListener("click", () => {
       sideContent.innerHTML = `
     <img src="${images[5]}" alt="" width="100px" height="100px"><br>
              <button type="button" class="btn mt-3 fs-3 btn-warning" style="padding: 0px 4px;"
              id="add">+</button>
           <span style="font-size: 20px;margin-bottom: -20px !important;" id="number">0</span>
              <button type="button" class="btn mt-3 fs-3 btn-warning" style="padding: 0px 4px;"
              id="remove">-</button>
              <div class="delete">
              <button type="button" class="btn btn-danger mt-2" id="delete-btn"><i class="bi bi-trash3-fill"></i></button>
              </div>

    `;
       load();
       addItems();
     });
   });
   //IMAGES SIX
    const addToCart_Six = document.querySelectorAll("#add-to-six");
    addToCart_Six.forEach((addB) => {
      addB.addEventListener("click", () => {
        sideContent.innerHTML = `
     <img src="${images[6]}" alt="" width="100px" height="100px"><br>
              <button type="button" class="btn mt-3 fs-3 btn-warning" style="padding: 0px 4px;"
              id="add">+</button>
           <span style="font-size: 20px;margin-bottom: -20px !important;" id="number">0</span>
              <button type="button" class="btn mt-3 fs-3 btn-warning" style="padding: 0px 4px;"
              id="remove">-</button>
              <div class="delete">
              <button type="button" class="btn btn-danger mt-2" id="delete-btn"><i class="bi bi-trash3-fill"></i></button>
              </div>

    `;
        load();
        addItems();
      });
    });
    //IMAGES SEVEN
     const addToCart_Seven = document.querySelectorAll("#add-to-seven");
     addToCart_Seven.forEach((addB) => {
       addB.addEventListener("click", () => {
         sideContent.innerHTML = `
     <img src="${images[7]}" alt="" width="100px" height="100px"><br>
              <button type="button" class="btn mt-3 fs-3 btn-warning" style="padding: 0px 4px;"
              id="add">+</button>
           <span style="font-size: 20px;margin-bottom: -20px !important;" id="number">0</span>
              <button type="button" class="btn mt-3 fs-3 btn-warning" style="padding: 0px 4px;"
              id="remove">-</button>
              <div class="delete">
              <button type="button" class="btn btn-danger mt-2" id="delete-btn"><i class="bi bi-trash3-fill"></i></button>
              </div>

    `;
         load();
         addItems();
       });
     });
     //IMAGES EIGHT
      const addToCart_Eight = document.querySelectorAll("#add-to-eight");
      addToCart_Eight.forEach((addB) => {
        addB.addEventListener("click", () => {
          sideContent.innerHTML = `
     <img src="${images[8]}" alt="" width="100px" height="100px"><br>
              <button type="button" class="btn mt-3 fs-3 btn-warning" style="padding: 0px 4px;"
              id="add">+</button>
           <span style="font-size: 20px;margin-bottom: -20px !important;" id="number">0</span>
              <button type="button" class="btn mt-3 fs-3 btn-warning" style="padding: 0px 4px;"
              id="remove">-</button>
              <div class="delete">
              <button type="button" class="btn btn-danger mt-2" id="delete-btn"><i class="bi bi-trash3-fill"></i></button>
              </div>

    `;
          load();
          addItems();
        });
      });
      //IMAGES NINE
       const addToCart_Nine = document.querySelectorAll("#add-to-nine");
       addToCart_Nine.forEach((addB) => {
         addB.addEventListener("click", () => {
           sideContent.innerHTML = `
     <img src="${images[9]}" alt="" width="100px" height="100px"><br>
              <button type="button" class="btn mt-3 fs-3 btn-warning" style="padding: 0px 4px;"
              id="add">+</button>
           <span style="font-size: 20px;margin-bottom: -20px !important;" id="number">0</span>
              <button type="button" class="btn mt-3 fs-3 btn-warning" style="padding: 0px 4px;"
              id="remove">-</button>
              <div class="delete">
              <button type="button" class="btn btn-danger mt-2" id="delete-btn"><i class="bi bi-trash3-fill"></i></button>
              </div>

    `;
           load();
           addItems();
         });
       });
}
