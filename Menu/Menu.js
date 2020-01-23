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

const createMenu = (item1, item2, item3, item4, item5, item6) => {

  const sideMenu = document.createElement('div');
  const list = document.createElement('ul');
  const listItem1 = document.createElement('li');
  const listItem2 = document.createElement('li');
  const listItem3 = document.createElement('li');
  const listItem4 = document.createElement('li');
  const listItem5 = document.createElement('li');
  const listItem6 = document.createElement('li');

  listItem1.textContent = item1;
  listItem2.textContent = item2;
  listItem3.textContent = item3;
  listItem4.textContent = item4;
  listItem5.textContent = item5;
  listItem6.textContent = item6;

  sideMenu.appendChild(list);
  list.appendChild(listItem1);
  list.appendChild(listItem2);
  list.appendChild(listItem3);
  list.appendChild(listItem4);
  list.appendChild(listItem5);
  list.appendChild(listItem6);

  sideMenu.classList.add('menu');

  sideMenu.addEventListener('click', () => {
    list.classList.toggle('menu--open');
  });

  return sideMenu;
};

// const menuParent = document.querySelector('div');

// menuItems.forEach(items => {
//   const lists = createMenu(items.item1, items.item2, items.item3, items.item4, items.item5, items.item6);

//   menuParent.appendChild(lists);
// });