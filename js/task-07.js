const spanEl = document.querySelector("#text");
const inputEl = document.querySelector("#font-size-control");

inputEl.addEventListener("input", event => {
    spanEl.style.fontSize = inputEl.value + "px";    
});
