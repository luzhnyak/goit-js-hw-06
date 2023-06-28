const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const itemsEl = ingredients.map((ingredient) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.classList.add("item");
  ingredientEl.textContent = ingredient;
  return ingredientEl;
});

listEl.append(...itemsEl);
