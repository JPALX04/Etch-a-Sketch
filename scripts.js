const mainContainer = document.querySelector("#mainContainer");
const template = document.querySelector(".template");
const blackBoard = document.querySelector(".blackBoard");
const buttons = document.querySelector(".buttons");
const rangeField = document.querySelector(".rangeField");
const rangeTxt = document.querySelector(".rangeTxt");

let gridContainer = document.createElement("div");

gridContainer.className = "gridContainer";
template.appendChild(blackBoard);
blackBoard.appendChild(gridContainer);

let squareNumber = 16;
rangeTxt.textContent = `${rangeField.value} x ${rangeField.value} `;

function loadPage() {
  let gridSquareNumber = squareNumber * squareNumber;
  for (let i = 0; i < gridSquareNumber; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.className = `gridDiv`;
    gridContainer.appendChild(gridDiv);
    gridDiv.style.width = `calc(100% /${squareNumber})`;
  }
  setRangeValue();
}

let inputEvent;
function setRangeValue() {
  if (inputEvent) {
    rangeField.removeEventListener("input", inputEvent);
  }
  inputEvent = (e) => {
    squareNumber = rangeField.value;
    rangeTxt.textContent = `${rangeField.value} x ${rangeField.value} `;
    gridContainer.innerHTML = "";
    loadPage();
  };
  rangeField.addEventListener("input", inputEvent);
}

let gridColor;

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

gridContainer.addEventListener("mouseover", (e) => {
  if (e.target.matches(".gridDiv")) {
    if (gridColor === "rainbow") {
      e.target.style.backgroundColor = getRandomColor();
    }
    e.target.style.backgroundColor = gridColor;
  }
});

btnClick = (e) => {
  if (e.target.matches(".colors")) {
    gridColor = "rgb(0,0,0)";
  }
  if (e.target.matches(".rainbow")) {
    gridColor = "rainbow";
  }
  if (e.target.matches(".rubber")) {
    gridContainer.innerHTML = "";
    loadPage();
  }
};

buttons.addEventListener("click", btnClick);

loadPage();
