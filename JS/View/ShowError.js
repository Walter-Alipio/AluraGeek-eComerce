export class ShowError {
    constructor() {
        /** Array com os tipos de erros aos quais fazemos a verificação */
        this.errorType = [
            "valueMissing",
            "typeMismatch",
            "patternMismatch",
            "customError",
        ];
        this.errorMessage = {
            name: {
                valueMissing: "O campo nome não pode estar vazio.",
                customError: "Campo vazio.",
            },
            message: {
                valueMissing: "O campo de mensagem não pode estar vazio.",
                customError: "Campo vazio.",
            },
        };
    }

    showErrorMessage(inputType, input) {
        let message = "";
        this.errorType.forEach((error) => {
            if (input.validity[error]) {
                message = this.errorMessage[inputType][error];
            }
        });

        return message;
    }
}
