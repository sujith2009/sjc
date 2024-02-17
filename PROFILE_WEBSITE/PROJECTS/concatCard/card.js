const input = document.querySelector("#text");
const button = document.querySelector("#btn");
const toDoList = document.querySelector("#todolist");

button.addEventListener("click", () => {
  const para = document.createElement("p");
  para.append(input.value);
  toDoList.append(para);
  input.value = "";
  para.addEventListener("click", () => {
    para.style.textDecoration = "line-through";
  });
  para.addEventListener("dblclick", () => {
    toDoList.removeChild(para);
  });
});
