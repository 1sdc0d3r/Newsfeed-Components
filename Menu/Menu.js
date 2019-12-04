const menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

const menuButton = document.querySelector(".menu-button");
const header = document.querySelector(".header");

header.append(menuCreator(menuItems));

function menuCreator(data) {
  const menu = document.createElement("div");
  const list = document.createElement("ul");
  menu.classList.add("menu");

  menu.append(list);

  data.forEach(item => {
    let listItem = document.createElement("li");
    listItem.textContent = item;
    list.append(listItem);
  });

  menuButton.addEventListener("click", function() {
    menu.classList.toggle("menu--open");
  });

  return menu;
}
