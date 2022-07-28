class ShoppingCartPage {
    private proceedToCheckoutButton: string;

    constructor() {
        this.proceedToCheckoutButton = ".cart_navigation span";
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutButton).click();
    }
}

export { ShoppingCartPage }
