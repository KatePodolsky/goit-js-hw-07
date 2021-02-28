
const itemsRef = document.querySelectorAll('.item');
console.log(`В списке ${itemsRef.length} категории`);


const listItemsRef = Array.from(itemsRef)
listItemsRef.map(item => {

    const itemTitle = item.firstElementChild.textContent
    console.log(`Категория: ${itemTitle}`);

    const totalItem = item.lastElementChild.children.length
    console.log(`Количество элементов: ${totalItem}`);
    
})