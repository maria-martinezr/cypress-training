class ShoppingCartPage {
    private proceedToCheckoutButton: string;

    constructor() {
        this.proceedToCheckoutButton = ".cart_navigation > a[title='Proceed to checkout']";
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutButton).click();
    }
}

export { ShoppingCartPage }
