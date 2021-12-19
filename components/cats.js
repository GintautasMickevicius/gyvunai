import Gyvunas from "./form.js";

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
    pavadinimas.innerText = 'Iveskite informacija apie katina'
    const divas = document.createElement("div");
    const labelis = document.createElement("label");
    labelis.for = "task";
    labelis.className = "form-label";
    labelis.innerText = "vardas";
    const inputas = document.createElement("input");
    inputas.type = "text";
    inputas.className = "form-control";
    const labelisDu = document.createElement("label");
    labelisDu.for = "task";
    labelisDu.className = "form-label";
    labelisDu.innerText = "veisle";
    const inputasDu = document.createElement("input");
    inputasDu.type = "text";
    inputasDu.className = "form-control";
    const labelisTrys = document.createElement("label");
    labelisTrys.for = "task";
    labelisTrys.className = "form-label";
    labelisTrys.innerText = "spalva";
    const inputasTrys = document.createElement("input");
    inputasTrys.type = "text";
    inputasTrys.className = "form-control";
    const labelisKeturi = document.createElement("label");
    labelisKeturi.for = "task";
    labelisKeturi.className = "form-label";
    labelisKeturi.innerText = "kailis";
    const inputasKeturi = document.createElement("input");
    inputasKeturi.type = "text";
    inputasKeturi.className = "form-control";
    const submitas = document.createElement("button");
    submitas.innerText = "pateikti";
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
        const naujasKatinas = new Katinas(
          inputas.value,
          inputasDu.value,
          inputasTrys.value,
          inputasKeturi.value
        );
        console.log(naujasKatinas);
        const divulis = document.createElement("div");
        const tekstas = document.createElement("p");
        tekstas.innerText = ` Katino vardas : ${naujasKatinas.vardas}, Veisle: ${naujasKatinas.veisle}, Spalva: ${naujasKatinas.spalva}, Kailis: ${naujasKatinas.kailis}`;
        rootDu.appendChild(divulis);
        divulis.appendChild(tekstas);
      } else {
        alert("uzpildykite visus laukus!");
      }
    });
});