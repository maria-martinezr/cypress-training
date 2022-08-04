import {IFramePage} from "../page/index";

describe("the user navigates to iframe page", () => {
  let iFramePage: IFramePage;

  before(() => {
    iFramePage = new IFramePage();
  });

  it("an Iframe is displayed with the title 'HTML Tutorial'", () => {
    const title = "HTML Tutorial";

    iFramePage.visit();

    iFramePage.getFrameTitle().should(
        "have.text",
        title,
    );
  });

  it("and navigates into the iframe, the title 'CSS Tutorial' is displayed", () => {
    const title = "CSS Tutorial";
    iFramePage.visit();

    iFramePage.goToCssPageInFrame();

    iFramePage.getFrameTitle().should(
        "have.text",
        title,
    );
  });
});
