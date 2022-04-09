import { Validate } from "./Validate.js";

export class ValidForm {
    constructor(inputs) {
        this.input = inputs;
    }

    check() {
        this.input.forEach((input) => {
            if (input.dataset.input === "value") {
                console.log("entrei no if");
                SimpleMaskMoney.setMask(input, {
                    prefix: "R$ ",
                    fixed: true,
                    fractionDigits: 2,
                    decimalSeparator: ",",
                    thousandsSeparator: ".",
                    cursor: "end",
                });
            }

            input.addEventListener("blur", (event) => {
                const validation = new Validate(event.target);
                console.log(event.target);
                validation.validate();
            });
        });
    }

    validateButton(buttonSend, name, message) {
        buttonSend.addEventListener("click", (event) => {
            event.preventDefault();

            const validationName = new Validate(
                document.querySelector(`[data-input="${name}"]`)
            );
            const validateMessage = new Validate(
                document.querySelector(`[data-input="${message}"]`)
            );

            if (buttonSend.dataset.send === "footer") {
                if (validationName.validate() && validateMessage.validate()) {
                    const messageValid = document.querySelector(
                        '[data-message="send"]'
                    );
                    messageValid.classList.add("input__message__send-valid");
                    messageValid.innerHTML = "Enviado";
                    setTimeout(() => {
                        messageValid.classList.remove(
                            "input__message__send-valid"
                        );
                        messageValid.innerHTML = "";
                    }, 2000);
                }
            }
            if (buttonSend.dataset.send === "login") {
                if (validationName.validate() && validateMessage.validate()) {
                    const messageValid = document.querySelector(
                        '[data-message="send"]'
                    );
                    messageValid.classList.add("input__message__send-valid");
                    messageValid.innerHTML = "Enviado";
                    setTimeout(() => {
                        messageValid.classList.remove(
                            "input__message__send-valid"
                        );
                        messageValid.innerHTML = "";
                    }, 2000);
                }
            }
        });
    }
}
