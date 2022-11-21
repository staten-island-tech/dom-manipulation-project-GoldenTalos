DOMSelectors = {
  enter: document.getElementById("enter"),
  form: document.getElementById("form"),
  description: document.getElementById("description"),
  name: document.getElementById("name"),
  image: document.getElementById("image"),
  output: document.getElementById("output"),
};

DOMSelectors.form.addEventListener("submit", (event) => {
  enterFunction();
  event.preventDefault();
  console.log("hello");
});

function enterFunction(event) {
  descript = DOMSelectors.description.value;
  title = DOMSelectors.name.value;
  image = DOMSelectors.image.value;
  DOMSelectors.output.insertAdjacentHTML(
    "afterbegin",
    `<div class="output">
                <h2>${event.title}</h2>
                <p>${event.descript}</p>
                <img class="ouput-image" src="${event.image}">
                <br>
                <button class="button" id="remove" onclick="this.parentElement.remove()">Remove</button>
        </div>`
  );

  DOMSelectors.description.value = "";
  DOMSelectors.name.value = "";
  DOMSelectors.image.value = "";
}
