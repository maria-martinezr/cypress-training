import {
  AddressStepPage,
  LoginPage,
  MenuContentPage,
  PaymentStepPage,
  ProductsListPage,
  ShippingStepPage,
  ShoppingCartPage,
} from "../page/index";

describe("Buy a t-shirt", () => {
  let menuContentPage: MenuContentPage;
  let productsListPage: ProductsListPage;
  let shoppingCartPage: ShoppingCartPage;
  let loginPage: LoginPage;
  let addressStepPage: AddressStepPage;
  let shippingStepPage: ShippingStepPage;
  let paymentStepPage: PaymentStepPage;

  before(() => {
    menuContentPage = new MenuContentPage();
    productsListPage = new ProductsListPage();
    shoppingCartPage = new ShoppingCartPage();
    loginPage = new LoginPage();
    addressStepPage = new AddressStepPage();
    shippingStepPage = new ShippingStepPage();
    paymentStepPage = new PaymentStepPage();
  });

  it("then the t-shirt should be bought", () => {
    const email: string = "aperdomobo@gmail.com";
    const password: string = "WorkshopProtractor";
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    productsListPage.addTShirtToCart();
    productsListPage.proceedToCheckout();
    shoppingCartPage.proceedToCheckout();
    loginPage.signIn(email, password);
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
