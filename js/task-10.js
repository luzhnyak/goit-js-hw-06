function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");


btnCreateEl.addEventListener("click", onBtnCreate);
btnDestroyEl.addEventListener("click", onBtnDestroy);

function onBtnCreate(event) {    
  createBoxes(Number(inputEl.value));
}

function onBtnDestroy(event) {  
  destroyBoxes();
}

function createBoxes(amount){
  console.log("Create", amount);
  const listElements = [] ;
  let size = 30;

  for (let i = 0; i < amount; i += 1) {    
    const element = document.createElement("div");
    element.style.backgroundColor = getRandomHexColor();    
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;  
    
    listElements.push(element);    

    size += 10;
  }  
  
  boxesEl.append(...listElements);
}

function destroyBoxes(){
  console.log("Destroy");
  boxesEl.innerHTML = "";
}