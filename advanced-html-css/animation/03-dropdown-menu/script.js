const dropdownContainer = document.querySelector(".dropdown-container");
const menuTitle = document.querySelector(".menu-title");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuTitle.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) { /* why need this? i guess don't want event bubbling on anything on top of the menuTitle div to inadvertedly trigger the dropdown. */
    dropdownMenu.classList.toggle("visible");
  }  
})

window.addEventListener("click", (e) => {
  if (!dropdownContainer.contains(e.target)) {
    dropdownMenu.classList.remove("visible")
  }
})