DOMSelectors = {
  enter: document.getElementById("enter"),
  description: document.getElementById("description"),
  name: document.getElementById("name"),
  image: document.getElementById("image"),
  output: document.getElementById("output"),
};

function resetInput(Input)
DOMSelectors.enter.addEventListener("submit", function () {
  descript = DOMSelectors.description.value;
  title = DOMSelectors.name.value;
  image = DOMSelectors.image.value;
  //make object from values
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

  const buttons = Array.from(document.getElementsByClassName("remove-button"));
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      this.parentElement.remove();
    });
  });

  DOMSelectors.description.value = "";
  DOMSelectors.name.value = "";
  DOMSelectors.image.value = "";
  //queryall remove buttons
  //addevent listeners to remove buttons with forEAch
});
