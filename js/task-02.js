const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingrEl = document.querySelector('#ingredients');

const createEl = ingredients.map(el => {
  const ingrItemsEl = document.createElement('li');
  ingrItemsEl.classList.add('item');
  ingrItemsEl.textContent = el;
  
  return ingrItemsEl;
});

ingrEl.append(...createEl);