function contact_page_load() {
  const content = document.getElementsByClassName("content")[0];

  const title = document.createElement("h1");
  title.textContent = "contact us here";

  const paragraph = document.createElement("p");
  paragraph.textContent = "This is the contact information";

  content.appendChild(title);
  content.appendChild(paragraph);
}
export default contact_page_load;
