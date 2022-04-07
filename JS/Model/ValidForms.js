import { Validate } from "./Validate.js";

export class ValidForm {
    constructor(inputs) {
        this.input = inputs;
    }

    check() {
        this.input.forEach((input) => {
            input.addEventListener("blur", (event) => {
                const validation = new Validate(event.target);
                console.log(event.target);
                validation.validate();
            });
        });
    }

    footerButton(buttonSend) {
        buttonSend.addEventListener("click", (event) => {
            event.preventDefault();

            const validationName = new Validate(
                document.querySelector('[data-input="name"]')
            );
            const validateMessage = new Validate(
                document.querySelector('[data-input="message"]')
            );

            if (validationName.validate() && validateMessage.validate()) {
                const messageValid = document.querySelector(
                    '[data-message="send"]'
                );
                messageValid.classList.add("input__message__send-valid");
                messageValid.innerHTML = "Enviado";
                setTimeout(() => {
                    messageValid.classList.remove("input__message__send-valid");
                    messageValid.innerHTML = "";
                }, 2000);
            }
        });
    }
    loginButton(buttonSend) {
        buttonSend.addEventListener("click", (event) => {
            event.preventDefault();

            const validationName = new Validate(
                document.querySelector('[data-input="email"]')
            );
            const validateMessage = new Validate(
                document.querySelector('[data-input="password"]')
            );

            if (validationName.validate() && validateMessage.validate()) {
                const messageValid = document.querySelector(
                    '[data-message="send"]'
                );
                messageValid.classList.add("input__message__send-valid");
                messageValid.innerHTML = "Enviado";
                setTimeout(() => {
                    messageValid.classList.remove("input__message__send-valid");
                    messageValid.innerHTML = "";
                }, 2000);
            }
        });
    }
}
