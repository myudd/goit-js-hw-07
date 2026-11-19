const allCategoriesBox = document.querySelector('#categories'),
    allCategories = document.querySelectorAll('.item');

console.log('Number of categories: ', allCategories.length);
allCategories.forEach((elem, i) => {
    console.log('Category: ', elem.querySelector('h2').textContent);
    console.log('Elements: ', elem.querySelectorAll('li').length);

})