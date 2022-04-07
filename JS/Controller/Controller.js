import { footer } from "../View/Footer.js";
import { ValidForm } from "../Model/ValidForms.js";

footer();
const form = new ValidForm(document.querySelectorAll("[data-input]"));

form.check();
form.footerButton(document.querySelector('[data-footer="send"]'));
form.loginButton(document.querySelector('[data-login="send"]'));
