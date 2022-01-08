import Gyvunas from "./animal.js";
import { createForm } from "./form.js";
const zuvys = document.getElementById("zuvys");
const root = document.getElementById("root");
class Fish extends Gyvunas {
  constructor(vardas, veisle, spalva, pelekai) {
    super(vardas, veisle, spalva);
    this.pelekai = pelekai;
  }
}
zuvys.addEventListener("click", function () {
  root.innerText = "";
  createForm("žuvį", "Pelekai");
});

export default Fish;
