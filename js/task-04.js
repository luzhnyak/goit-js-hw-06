let counterValue = 0;

const counterBtns = document.querySelectorAll("#counter > button");
const valueEl = document.querySelector("#value");

counterBtns.forEach(btn => btn.addEventListener("click", onButtonClick));

function onButtonClick(event){
    if (event.currentTarget.dataset.action == "increment"){
        counterValue += 1; 
    }else{
        counterValue -= 1;
    }
    valueEl.textContent = counterValue;
}