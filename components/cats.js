import Gyvunas from "./animal.js";

const katinai = document.getElementById("katinai");
const root = document.getElementById("root");
const rootDu = document.getElementById("root2");

katinai.addEventListener("click", function () {
    root.innerText = "";
    class Katinas extends Gyvunas {
      constructor(vardas, veisle, spalva, kailis) {
        super(vardas, veisle, spalva);
        this.kailis = kailis;
      }
    }
    const pavadinimas = document.createElement('h4');
    pavadinimas.innerText = 'Įveskite informaciją apie katiną'
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
    labelisDu.innerText = "Veislė:";
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
    labelisKeturi.innerText = "Kailis (apibūdinimas):";
    const inputasKeturi = document.createElement("input");
    inputasKeturi.type = "text";
    inputasKeturi.className = "form-control";
    const submitas = document.createElement("button");
    submitas.innerText = "Pateikti";
    root.appendChild(divas);
    divas.append(
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
        let newCat = new Katinas(
          inputas.value,
          inputasDu.value,
          inputasTrys.value,
          inputasKeturi.value
        );
        console.log(newCat);
        const div = document.createElement("div");
        div.className = "card shadow cursor-pointer bg-primary";
        const title = document.createElement("h6");
        title.textContent = ` Katino ${labelis.innerText} ${newCat.vardas}`;
        title.className = "card-title";
        const about = document.createElement('p');
        about.textContent = `${labelisDu.innerText} ${newCat.veisle}`;
        const color = document.createElement('p');
        color.textContent = `${labelisTrys.innerText} ${newCat.spalva}`;
        const specs = document.createElement('p');
        specs.textContent = `${labelisKeturi.innerText} ${newCat.kailis}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.id="deleteBtn";
        deleteBtn.textContent = 'Ištrinti';
        rootDu.appendChild(div);
        div.append(title, about, color, specs, deleteBtn);
        deleteBtn.addEventListener("click", function (e) {
          e.preventDefault();
          deleteTask();
        });
        function deleteTask() {
          deleteBtn.parentElement.remove()
        }
      } else {
        alert("uzpildykite visus laukus!");
      }
    });
});