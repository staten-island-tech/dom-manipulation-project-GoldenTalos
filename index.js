DOMSelectors = {
  enter: document.getElementById("enter"),
  descriptionInput: document.getElementById("description-input"),
  nameInput: document.getElementById("name-input"),
  imageInput: document.getElementById("image-input"),
  objects: document.getElementById("objects"),
};

DOMSelectors.enter.addEventListener("click", function () {
  descript = DOMSelectors.descriptionInput.value;
  title = DOMSelectors.nameInput.value;
  image = DOMSelectors.imageInput.value;
  DOMSelectors.objects.insertAdjacentHTML(
    "afterbegin",
    `<div class="object">
                <h2>${title}</h2>
                <p>${descript}</p>
                <img class="object-image" src="${image}">
                <br>
                <button class="remove-button" onclick="this.parentElement.remove()">Remove</button>
        </div>`
  );

  DOMSelectors.descriptionInput.value = "";
  DOMSelectors.nameInput.value = "";
  DOMSelectors.imageInput.value = "";
});
