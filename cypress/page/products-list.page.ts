class ProductsListPage {
    private addToCartButton: string;
    private proceedToCheckoutButton: string;

    constructor() {
        this.addToCartButton = "a[title='Add to cart']";
        this.proceedToCheckoutButton = "a[title='Proceed to checkout']";
    }

    public addTShirtToCart(): void {
        cy.get(this.addToCartButton).click();
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutButton).click();
    }
}

export { ProductsListPage }
