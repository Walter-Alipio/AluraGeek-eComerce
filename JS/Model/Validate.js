import { ShowError } from "../View/ShowError.js";
export class Validate {
    constructor(input) {
        this._input = input;
    }
    validate() {
        const errorMessage = new ShowError();
        const inputType = this._input.dataset.input;
        const error = document.querySelector(`[data-error="${inputType}"]`);
        console.log(error);
        if (this._input.value === "R$ 0,00") {
            error.classList.add("input-invalide");
            error.innerHTML = "Preço deve ser maior que zero!";
            return false;
        }

        if (!this._input.validity.valid) {
            console.log(errorMessage.showErrorMessage(inputType, this._input));
            error.classList.add("input-invalide");
            error.innerHTML = errorMessage.showErrorMessage(
                inputType,
                this._input
            );
            return false;
        }
        /* verifica se o campo é valido, e caso seja invalido
        adiciona a classe invalido */
        error.classList.remove("input-invalide");
        error.innerHTML = "";
        return true;
    }
}
