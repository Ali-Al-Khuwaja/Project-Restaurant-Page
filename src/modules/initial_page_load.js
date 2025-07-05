import image_restaurant from "/src/assets/some_resturant.jpg";
function initial_page_load() {
  // OMG I forgot how to js
  // Select that container element
  const content = document.getElementsByClassName("content")[0];

  // Create wanted element
  const image = document.createElement("img");
  image.src = image_restaurant;

  const title = document.createElement("h1");
  title.textContent = "Welcome to our fake resturant";

  const paragraph = document.createElement("p");
  paragraph.textContent = "This here is some text";

  // Add the created element to the selected target container
  content.appendChild(image);
  content.appendChild(title);
  content.appendChild(paragraph);
}
export default initial_page_load;
