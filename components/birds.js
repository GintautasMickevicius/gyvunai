import Gyvunas from "./animal.js";
import { createForm } from "./form.js";
const pauksciai = document.getElementById("pauksciai");
const root = document.getElementById("root");
class Pauksciai extends Gyvunas {
  constructor(vardas, veisle, spalva, snapas) {
    super(vardas, veisle, spalva);
    this.snapas = snapas;
  }
}
pauksciai.addEventListener("click", function () {
  root.innerText = "";
  createForm("Paukštį", "Snapas");
});

export default Pauksciai;
