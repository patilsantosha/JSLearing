




const elementTitle = document.getElementById('title');
console.log(elementTitle.innerHTML);
console.log(`===========================DOM API getElementByTagName()============`);
const elementH2 = document.getElementsByTagName('h2');
console.log(elementH2);
console.log(elementH2[0].innerHTML);
console.log(elementH2[1].innerHTML);

console.log(`=============== DOM API getElementsByClassName() ===================`);
const elementsTechStack=document.getElementsByClassName('techStack');
console.log(elementsTechStack);
console.log(elementsTechStack[0].innerHTML);
console.log(elementsTechStack[1].innerHTML);

console.log(`=================DOM API querySelector()==================`);
const h2ElementTitle = document.querySelector('#title');
console.log(h2ElementTitle.innerHTML);

console.log(`Selecting an element by class name`);
const elementTechStack = document.querySelector('.techStack');
console.log(elementTechStack.innerHTML);

console.log(`====================DOM API querySelectorAll()==============`);
const h2ElementAll = document.querySelectorAll('h2');
console.log(h2ElementAll[0].innerHTML);
console.log(h2ElementAll[1].innerHTML);

console.log(`querySelectorAll() with class`);
const elementAll = document.querySelectorAll(`.techStack`);
console.log(elementAll[0].innerHTML);
console.log(elementAll[1].innerHTML);

console.log(`================ update or change the text of an element ================`);
const titleElement = document.querySelector('#title');
titleElement.innerHTML = 'Learning API - Document Object Model';






