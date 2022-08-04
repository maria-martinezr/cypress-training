class UploadFilePage {
    private uploadPageURL: string;
    private fileUploadInput: string;
    private fileName: string;

    constructor() {
        this.uploadPageURL = "https://the-internet.herokuapp.com/upload";
        this.fileUploadInput = "#drag-drop-upload";
        this.fileName = "#drag-drop-upload .dz-filename"
    }

    public goToUploadPage(): void {
        cy.visit(this.uploadPageURL);
    }

    public uploadFile(fileName: string): void {
        cy.get(this.fileUploadInput).attachFile(fileName, { subjectType: 'drag-n-drop' });
    }

    public getFileName() {
        return cy.get(this.fileName);
    }
}

export { UploadFilePage }
