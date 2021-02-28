
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('#ingredients')

const list = ingredients.map(item => {
    
  const liRef = document.createElement('li');
  liRef.textContent = item;
    return liRef
})

listRef.append(...list)

