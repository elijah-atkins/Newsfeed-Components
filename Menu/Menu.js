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
*/
//Pulling relivent DOM items
const menuButton = document.querySelector(".menu-button");
const menuOpen = document.querySelector(".header");

//creating function to make menu
const createMenu = (items) =>{
  let open = false;
  //creating menu html components
  const menu = document.createElement("div");
  const menuList = document.createElement("ul");
  //add relivent classes for styling
  menu.classList.add('menu')
  //going through items array and placing each item into a new list item and adds to <ul> menuList
  items.forEach(item => {
    const menuItem = document.createElement("li")
  
    menuItem.textContent = item

    menuList.appendChild(menuItem)
  });
  //add generated menuList to menu div
  menu.append(menuList)
  //listen for click on menu to open and close navigation
  menuButton.addEventListener('click', ()=>{
    if (!open){
      gsap.to(menu, {duration: 0.3, x:350});
      open = true;
    }
    else if (open) {
      gsap.to(menu, {duration: 0.3, x:-350});
      open = false;
    }
  })
  return menu;
}
//add menu to active DOM
menuOpen.append(createMenu(menuItems));
/*
  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> 
  element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class 
    of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should 
  toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/


