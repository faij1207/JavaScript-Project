const lists = document.getElementsByClassName("list");
const left = document.getElementById("left");
const right = document.getElementById("right");

for (let list of lists) {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;

    right.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    right.addEventListener("drop", function (e) {
      right.appendChild(selected);
      selected = null;
    });
    left.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    left.addEventListener("drop", function (e) {
      left.appendChild(selected);
      selected = null;
    });
  });
}