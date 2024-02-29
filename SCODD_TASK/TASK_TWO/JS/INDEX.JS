const addButtons = document.querySelectorAll(".btn");
const price_Increase = document.querySelector(".rupees");

let shopping = 1;

addButtons.forEach((addBtn) => {
  addBtn.addEventListener("click", () => {
    price_Increase.innerHTML = shopping++;
  });
});
