import { ValidForm } from "../Model/ValidForms.js";

const form = new ValidForm(document.querySelectorAll("[data-input]"));
form.validateButton(
    document.querySelector('[data-send="login"]'),
    "email",
    "password"
);
