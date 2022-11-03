DOMSelectors = {
  enter: document.getElementById("enter"),
  name: document.getElementById("name"),
  description: document.getElementById("description"),
  image: document.getElementById("image"),
  objects: document.getElementById("objects"),
};
DOMSelectors.submit.addEventListener("click", function () {
  p = DOMSelectors.description.value;
  h2 = DOMSelectors.name.value;
  image = DOMSelectors.image.value;
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

  DOMSelectors.name.value = "";
  DOMSelectors.description.value = "";
  DOMSelectors.image.value = "";
});
