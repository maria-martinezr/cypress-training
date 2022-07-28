import {
  AddressStepPage,
  LoginPage,
  MenuContentPage,
  PaymentStepPage,
  ProductsListPage,
  ShippingStepPage,
  ShoppingCartPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const productsListPage = new ProductsListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();


describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    productsListPage.addTShirtToCart();
    productsListPage.proceedToCheckout();

    shoppingCartPage.proceedToCheckout();

    loginPage.signIn("aperdomobo@gmail.com", "WorkshopProtractor");

    addressStepPage.proceedToCheckout();

    shippingStepPage.selectTermsOfService();
    shippingStepPage.proceedToCheckout();

    paymentStepPage.clickPayByBankWire();
    paymentStepPage.confirmMyOrder();

    paymentStepPage.getSuccessfulMessage()
        .should(
            "have.text",
            "Your order on My Store is complete.",
        );
  });
});
