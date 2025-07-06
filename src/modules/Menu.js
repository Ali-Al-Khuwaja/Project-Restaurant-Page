function menu_page_load() {
  const content = document.getElementsByClassName("content")[0];

  const title = document.createElement("h1");
  title.textContent = "Look at the menu from here";

  const paragraph = document.createElement("p");
  paragraph.textContent = "This is the menu information";

  content.appendChild(title);
  content.appendChild(paragraph);
}
export default menu_page_load;
