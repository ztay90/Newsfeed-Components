/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function burgerComponent(menuItems) {
  const menuPanel = document.createElement('div')
  menuPanel.classList.add('menu');

  const menuUl = document.createElement('ul')
  menuPanel.appendChild(menuUl);


  // Li's ///////////////////////////////////////
  const liOne = document.createElement('li')
  liOne.textContent = 'Students';

  menuUl.appendChild(liOne);

  const liTwo = document.createElement('li')
  liTwo.textContent = 'Faculty';

  menuUl.appendChild(liTwo);

  const liThree = document.createElement('li')
  liThree.textContent = "What's New";

  menuUl.appendChild(liThree);

  const liFour = document.createElement('li')
  liFour.textContent = 'Tech Trends';

  menuUl.appendChild(liFour);

  const liFive = document.createElement('li')
  liFive.textContent = 'Music';

  menuUl.appendChild(liFive);

  const liSix = document.createElement('li')
  liSix.textContent = 'Log Out';

  menuUl.appendChild(liSix);
  ////////////////////////////////////////////////

  const menuBtn = document.querySelector('.menu-button');
  menuBtn.addEventListener('click', () => {
    menuPanel.classList.toggle('menu--open');
  })
  
  return menuPanel;
}

const menuImg = document.querySelector('.header');
  const burgerMenu = burgerComponent(menuItems)

  menuImg.appendChild(burgerMenu)




