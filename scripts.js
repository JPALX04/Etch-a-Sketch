let mainContainer = document.querySelector("#mainContainer");
let gridContainer = document.createElement("div");
gridContainer.className = "gridContainer";
mainContainer.appendChild(gridContainer);

for (let i = 0; i < 256; i++) {
  let gridDiv = document.createElement("div");
  gridDiv.className = `gridDiv div${i}`;
  gridContainer.appendChild(gridDiv);
}

gridContainer.addEventListener("mouseover", (e) => {
  if (e.target.matches(".gridDiv")) {
    e.target.style.backgroundColor = "red";
    console.log(e.target, e.currentTarget);
  }
});

// gridContainer.addEventListener("mouseout", (e) => {
//   let gridDiv = document.querySelector(".gridDiv");
//   e.target.textContent = " ";
//   console.log("out");
// });
