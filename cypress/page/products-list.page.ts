class ProductsListPage {
    private addToCartButton: string;
    private proceedToCheckoutButton: string;
    private products: string;

    constructor() {
       this.addToCartButton = "a[title='Add to cart']";
       this.proceedToCheckoutButton = "a[title='Proceed to checkout']";
       this.products = ".product-container";
    }

    private findProductByName (name: string) {
        return cy.get(this.products).filter(`:contains("${name}")`);
    }

    public addTShirtToCart(name: string): void {
        this.findProductByName(name).find(this.addToCartButton).click();
    
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutButton).click();
    }
}

export { ProductsListPage }
