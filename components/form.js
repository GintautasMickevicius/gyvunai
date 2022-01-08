import { createCard } from "./card.js";
import Zuvys from "./fish.js";
import Katinas from "./cats.js";
import Pauksciai from "./birds.js";


function createForm(animal, specifikacija) {
  const pavadinimas = document.createElement("h4");
  pavadinimas.innerText = `Įveskite informaciją apie ${animal}`;
  const divas = document.createElement("div");
  const labelis = document.createElement("label");
  labelis.for = "task";
  labelis.className = "form-label";
  labelis.innerText = "Vardas:";
  const inputas = document.createElement("input");
  inputas.type = "text";
  inputas.className = "form-control";
  const labelisDu = document.createElement("label");
  labelisDu.for = "task";
  labelisDu.className = "form-label";
  labelisDu.innerText = "Rūšis:";
  const inputasDu = document.createElement("input");
  inputasDu.type = "text";
  inputasDu.className = "form-control";
  const labelisTrys = document.createElement("label");
  labelisTrys.for = "task";
  labelisTrys.className = "form-label";
  labelisTrys.innerText = "Spalva:";
  const inputasTrys = document.createElement("input");
  inputasTrys.type = "text";
  inputasTrys.className = "form-control";
  const labelisKeturi = document.createElement("label");
  labelisKeturi.for = "task";
  labelisKeturi.className = "form-label";
  labelisKeturi.innerText = `${specifikacija} (apibūdinimas):`;
  const inputasKeturi = document.createElement("input");
  inputasKeturi.type = "text";
  inputasKeturi.className = "form-control";
  let submitas = document.createElement("button");
  submitas.innerText = "Pateikti";
  root.appendChild(divas);
  +divas.append(
    pavadinimas,
    labelis,
    inputas,
    labelisDu,
    inputasDu,
    labelisTrys,
    inputasTrys,
    labelisKeturi,
    inputasKeturi,
    submitas
  );

  submitas.addEventListener("click", function () {
    if (
      inputas.value !== "" &&
      inputasDu.value !== "" &&
      inputasTrys.value !== "" &&
      inputasKeturi.value !== ""
    ) {
      if (specifikacija === "Pelekai") {
        let animalType = new Zuvys(
          inputas.value,
          inputasDu.value,
          inputasTrys.value,
          inputasKeturi.value
        );
        createCard("Žuvies", animalType);
      } else if (specifikacija === "Kailis") {
        let animalType = new Katinas(
          inputas.value,
          inputasDu.value,
          inputasTrys.value,
          inputasKeturi.value
        );
        createCard("Katino", animalType);
      } else if (specifikacija === "Snapas") {
        let animalType = new Pauksciai(
          inputas.value,
          inputasDu.value,
          inputasTrys.value,
          inputasKeturi.value
        );
        createCard("Paukščio", animalType);
      }
    } else {
      alert("Užpildykite visus laukus!");
    }
  });
}

export { createForm };
