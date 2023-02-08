// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Пошук елементів
let categories = document.querySelectorAll(".item");

// Виведення кількості категорій в консоль через .length
console.log(`Number of categories: ${categories.length} `);

// Перебирання кожного елемента з .item
categories.forEach((item) => {
  // Виведення тексту із кожного заголовку
  console.log(`Category: ${item.firstElementChild.textContent}`);

  // Виведення кількості елементів
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
