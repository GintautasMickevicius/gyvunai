const rootDu = document.getElementById("root2");
function createCard(gyvuno, animalType) {
  console.log(animalType);
  const div = document.createElement("div");
  div.className = "card shadow cursor-pointer bg-warning";
  const title = document.createElement("h6");
  title.textContent = `${gyvuno} vardas: ${animalType.vardas}`;
  title.className = "card-title";
  const about = document.createElement("p");
  about.textContent = `Rūšis: ${animalType.veisle}`;
  const color = document.createElement("p");
  color.textContent = `Spalva:  ${animalType.spalva}`;
  const specs = document.createElement("p");
  if (animalType.pelekai) {
    specs.textContent = `Pelekai:  ${animalType.pelekai}`;
    div.className = "card shadow cursor-pointer bg-warning";
  } else if (animalType.kailis) {
    specs.textContent = `Kailis:  ${animalType.kailis}`;
    div.className = "card shadow cursor-pointer bg-info";
  } else if (animalType.snapas) {
    specs.textContent = `Snapas:  ${animalType.snapas}`;
    div.className = "card shadow cursor-pointer bg-success";
  }
  const deleteBtn = document.createElement("button");
  deleteBtn.id = "deleteBtn";
  deleteBtn.textContent = "Ištrinti";
  rootDu.appendChild(div);
  div.append(title, about, color, specs, deleteBtn);
  deleteBtn.addEventListener("click", function (e) {
    e.preventDefault();
    deleteTask();
  });
  function deleteTask() {
    deleteBtn.parentElement.remove();
  }
}
export { createCard };
