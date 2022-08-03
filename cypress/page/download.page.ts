class DownloadPage {
    private downloadPageURL: string;
    private downloadButton: string;

    constructor() {
        this.downloadPageURL = "https://demoqa.com/upload-download";
        this.downloadButton = "#downloadButton";
    }

    public goToDownloadPage(): void {
        cy.visit(this.downloadPageURL);
    }

    public downloadFile(): void {
        cy.get(this.downloadButton).click();
    }

}

export { DownloadPage }
