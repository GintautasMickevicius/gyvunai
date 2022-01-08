import Gyvunas from "./animal.js";
import { createForm } from "./form.js";
const katinai = document.getElementById("katinai");
const root = document.getElementById("root");

class Katinas extends Gyvunas {
  constructor(vardas, veisle, spalva, kailis) {
    super(vardas, veisle, spalva);
    this.kailis = kailis;
  }
}
katinai.addEventListener("click", function () {
  root.innerText = "";
  createForm("Katiną", "Kailis");
});

export default Katinas;
