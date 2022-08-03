import {UploadFilePage, DownloadPage} from "../page/index";

describe("the user navigates to upload file page should", () => {
  let uploadFilePage: UploadFilePage;
  let downloadPage: DownloadPage;

  before(() => {
    uploadFilePage = new UploadFilePage();
    downloadPage = new DownloadPage();
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

  it("download file", () => {
    const fileName = "sampleFile.jpeg";
    downloadPage.goToDownloadPage();

    downloadPage.downloadFile();

    cy.verifyDownload(fileName);
  });
});
