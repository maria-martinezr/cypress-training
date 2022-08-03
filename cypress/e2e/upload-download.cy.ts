import {UploadFilePage} from "../page/index";

describe("the user navigates to upload file page should", () => {
  let uploadFilePage: UploadFilePage;

  before(() => {
    uploadFilePage = new UploadFilePage();
  });

  it("upload a JSON file", () => {
    const fileName = "example.json";
    uploadFilePage.goToUploadPage();

    uploadFilePage.uploadFile(fileName);

    uploadFilePage.getFileName().should(
        "have.text",
        fileName,
    );
  });
});
