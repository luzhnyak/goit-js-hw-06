let counterValue = 0;

const spanEl = document.querySelector("#name-output");
const inputEl = document.querySelector("#name-input");

inputEl.addEventListener("input", event => {
    spanEl.textContent = inputEl.value;
});
