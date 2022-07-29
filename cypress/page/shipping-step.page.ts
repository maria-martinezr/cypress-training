class ShippingStepPage {
    private termsOfServiceCheckbox: string;
    private proceedToCheckoutButton: string;

    constructor() {
        this.termsOfServiceCheckbox = "#cgv";
        this.proceedToCheckoutButton = "button[name='processCarrier']";
    }

    public selectTermsOfService(): void {
        cy.get(this.termsOfServiceCheckbox).click();
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutButton).click();
    }
}

export { ShippingStepPage }
