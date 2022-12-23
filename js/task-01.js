const listItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItems.length}`); 

const allCategArr = listItems.forEach(el => {
    console.log(`Category: ${el.querySelector("h2").textContent}\nElements: ${el.querySelectorAll("li").length}`);
    
});