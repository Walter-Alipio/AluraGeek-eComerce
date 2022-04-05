import { Validate } from "../Model/Validate.js";

class Controller {
    constructor() {
        this.inputFooter = document.querySelectorAll("[data-input]");
        this.buttonSend = document.querySelector('[data-footer="send"]');
    }

    check() {
        this.inputFooter.forEach((input) => {
            input.addEventListener("blur", (event) => {
                const validation = new Validate(event.target);
                console.log(event.target);
                validation.validate();
            });
        });
        this.buttonSend.addEventListener("click", (event) => {
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
}

// const button = document.querySelector('[data-footer="send"]');
// button.addEventListener("click", (event) => {
//     event.preventDefault();

//     const validationName = new Validate(
//         document.querySelector('[data-input="name"]')
//     );
//     const validateMessage = new Validate(
//         document.querySelector('[data-input="message"]')
//     );

//     if (validationName.validate() && validateMessage.validate()) {
//         const messageValid = document.querySelector('[data-message="send"]');
//         messageValid.classList.add("input__message__send-valid");
//         messageValid.innerHTML = "Enviado";
//         setTimeout(() => {
//             messageValid.classList.remove("input__message__send-valid");
//             messageValid.innerHTML = "";
//         }, 2000);
//     }
// });
const control = new Controller();
control.check();
