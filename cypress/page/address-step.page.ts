class AddressStepPage {
    private proceedToCheckoutButton: string;

    constructor() {
        this.proceedToCheckoutButton = "button[name='processAddress']";
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutButton).click();
    }
}

export { AddressStepPage }
