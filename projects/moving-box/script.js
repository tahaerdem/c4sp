let square = document.querySelector(".square");

function moveRight() {
  square.classList.add("run-animation");
}

square.addEventListener("click", moveRight);

