class PaymentStepPage {
    private payByBankWireOption: string;
    private confirmButton: string;
    private successfulMessage: string;

    constructor () {
        this.payByBankWireOption = ".bankwire";
        this.confirmButton = "#cart_navigation > button";
        this.successfulMessage = ".box .cheque-indent > strong.dark";
    }

    public clickPayByBankWire(): void {
        cy.get(this.payByBankWireOption).click();
    }

    public confirmMyOrder(): void {
        cy.get(this.confirmButton).click();
    }

    public getSuccessfulMessage() {
        return cy.get(this.successfulMessage);
    }
}

export { PaymentStepPage }
