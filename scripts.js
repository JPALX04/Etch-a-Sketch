const btnSize = document.querySelector(".btnSize");
const mainContainer = document.querySelector("#mainContainer");
let gridContainer = document.createElement("div");
gridContainer.className = "gridContainer";
mainContainer.appendChild(gridContainer);
let clickHandler;

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
  if (clickHandler) {
    btnSize.removeEventListener("click", clickEvent);
  }

  let clickEvent = (e) => {
    if (e.target.matches("button")) {
      gridContainer.remove();
      squareNumber = window.prompt("set a value from 2 to 100", "");
      
      gridContainer = document.createElement("div");
      gridContainer.className = "gridContainer";
      mainContainer.appendChild(gridContainer);
      loadPage(squareNumber);
    }
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
