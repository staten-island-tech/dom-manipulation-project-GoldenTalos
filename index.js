DOMSelectors = {
  enter: document.getElementById("enter"),
  description: document.getElementById("description"),
  name: document.getElementById("name"),
  image: document.getElementById("image"),
  output: document.getElementById("output"),
};

DOMSelectors.enter.addEventListener("click", function () {
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
                <button class="button" onclick="this.parentElement.remove()">Remove</button>
        </div>`
  );

  DOMSelectors.description.value = "";
  DOMSelectors.name.value = "";
  DOMSelectors.image.value = "";
});
