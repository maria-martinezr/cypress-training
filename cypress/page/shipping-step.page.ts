class ShippingStepPage {
    private termsOfServiceCheckbox: string;
    private proceedToCheckoutButton: string;

    constructor() {
        this.termsOfServiceCheckbox = "#cgv";
        this.proceedToCheckoutButton = ".cart_navigation > .button > span";
    }

    public selectTermsOfService(): void {
        cy.get(this.termsOfServiceCheckbox).click();
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutButton).click();
    }
}

export { ShippingStepPage }
