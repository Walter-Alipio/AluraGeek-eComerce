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
                valueMissing: "O campo nome deve ser preenchido.",
                customError: "Campo vazio.",
            },
            message: {
                valueMissing: "O campo de mensagem não pode estar vazio.",
                customError: "Campo vazio.",
            },
            email: {
                valueMissing: "O campo de email deve ser preenchido.",
                patternMismatch: "Email inválido. Ex: usuario@mail.com",
            },
            password: {
                valueMissing: "O campo de senha não pode estar vazio.",
            },
            productName: {
                valueMissing: "O campo de nome do produto deve ser preenchido.",
            },
            value: {
                valueMissing: "O campo preço deve ser preenchido.",
            },
            description: {
                valueMissing: "O campo descrição deve ser preenchido.",
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
