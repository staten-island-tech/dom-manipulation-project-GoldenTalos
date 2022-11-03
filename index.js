DOMSelectors = {
  enter: document.getElementById("enter"),
  descriptionInput: document.getElementById("description"),
  nameInput: document.getElementById("name"),
  imageInput: document.getElementById("image"),
  objects: document.getElementById("objects"),
};
DOMSelectors.enter.addEventListener("click", function () {
  p = DOMSelectors.description.value;
  h2 = DOMSelectors.name.value;
  image = DOMSelectors.imageInput.value;
  DOMSelectors.objects.insertAdjacentHTML(
    "afterbegin",
    `<div class="object">
                <h2>${h2}</h2>
                <p>${p}</p>
                <img class="object-image" src="${image}">
                <br>
                <button class="remove-button" onclick="this.parentElement.remove()">Remove</button>
        </div>`
  );

  DOMSelectors.description.value = "";
  DOMSelectors.name.value = "";
  DOMSelectors.image.value = "";
});
