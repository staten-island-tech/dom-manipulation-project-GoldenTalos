DOMSelectors = {
  enter: document.getElementById("enter"),
  descriptionInput: document.getElementById("description-input"),
  nameInput: document.getElementById("name-input"),
  imageInput: document.getElementById("image-input"),
  output: document.getElementById("output"),
};

DOMSelectors.enter.addEventListener("click", function () {
  descript = DOMSelectors.descriptionInput.value;
  title = DOMSelectors.nameInput.value;
  image = DOMSelectors.imageInput.value;
  DOMSelectors.output.insertAdjacentHTML(
    "afterbegin",
    `<div class="output">
                <h2>${title}</h2>
                <p>${descript}</p>
                <img class="ouput-image" src="${image}">
                <br>
                <button class="button" onclick="this.parentElement.remove()">Remove</button>
        </div>`
  );

  DOMSelectors.descriptionInput.value = "";
  DOMSelectors.nameInput.value = "";
  DOMSelectors.imageInput.value = "";
});
