const btnSize = document.querySelector(".btnSize");
const mainContainer = document.querySelector("#mainContainer");
let gridContainer = document.createElement("div");
gridContainer.className = "gridContainer";
mainContainer.appendChild(gridContainer);

let squareNumber = 16;

function loadPage() {
  let gridSquareNumber = squareNumber * squareNumber;
  for (let i = 0; i < gridSquareNumber; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.className = `gridDiv`;
    gridContainer.appendChild(gridDiv);
    gridDiv.style.width = `calc(100% /${squareNumber})`;
  }
  setValues();
}
function setValues() {
  let clickEvent;

  if (clickEvent) {
    btnSize.removeEventListener("click", clickEvent);
  }

  clickEvent = (e) => {
    if (!e.target.matches("button")) return;

    squareNumber = window.prompt("set a value from 2 to 100");

    // check if the users cancel or submit an empty value
    if (squareNumber === null || squareNumber.trim() === "") {
      return;
    }
    // transform the input to a typeof = number
    let number = parseFloat(squareNumber);

    if (isNaN(number)) {
      alert("This is not a number!");
      console.log(squareNumber);
      return;
    }
    if (number < 2 || number > 100) {
      alert("set a valid number!");
      return;
    }

    gridContainer.innerHTML = "";
    loadPage();
  };
  btnSize.addEventListener("click", clickEvent);
}

gridContainer.addEventListener("mouseover", (e) => {
  if (e.target.matches(".gridDiv")) {
    e.target.style.backgroundColor = "red";
    // console.log(e.target, e.currentTarget);
  }
});

loadPage();
