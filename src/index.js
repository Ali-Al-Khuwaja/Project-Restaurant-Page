import home_page_load from "./modules/home";
import "../node_modules/@picocss/pico/css/pico.blue.min.css";
import contact_page_load from "./modules/contact";
import menu_page_load from "./modules/Menu";

const home_button = document.querySelector(".home");
const menu_button = document.querySelector(".menu");
const contact_button = document.querySelector(".contact");
const content = document.getElementsByClassName("content")[0];

home_button.addEventListener("click", () => {
  content.innerHTML = "";
  home_page_load();
});
menu_button.addEventListener("click", () => {
  content.innerHTML = "";
  menu_page_load();
});
contact_button.addEventListener("click", () => {
  content.innerHTML = "";
  contact_page_load();
});
