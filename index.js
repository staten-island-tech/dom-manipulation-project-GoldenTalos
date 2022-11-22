DOMSelectors = {
  form: document.getElementById("form"),
  description: document.getElementById("description"),
  name: document.getElementById("name"),
  image: document.getElementById("image"),
  output: document.getElementById("output"),
};

DOMSelectors.form.addEventListener("submit", function () {
  event.preventDefault();
  addNewElement();
  setRemoveButtons();
  resetInputs();
});

function enterFunction() {
  descript = DOMSelectors.description.value;
  title = DOMSelectors.name.value;
  image = DOMSelectors.image.value;
  DOMSelectors.output.insertAdjacentHTML(
    "afterbegin",
    `<div class="output">
                <h2>${title}</h2>
                <p>${descript}</p>
                <img class="ouput-image" src="${image}">
                <br>
                <button class="button">Remove</button>
        </div>`
  );
}

function removebutton() {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      this.parentElement.remove();
    });
  });
}

function resetInputs() {
  DOMSelectors.description.value = "";
  DOMSelectors.name.value = "";
  DOMSelectors.image.value = "";
}
