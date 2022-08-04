class IFramePage {
    private iFramePageURL: string;
    private iFrame: string;
    private iFrameTitle: string;
    private cssTitle: string;
    private urlToCssPage: string;

    constructor() {
        this.iFramePageURL = "https://www.w3schools.com/html/html_iframe.asp";
        this.iFrameTitle = "#main h1";
        this.cssTitle = "#topnav a[title='CSS Tutorial']";
        this.iFrame = "[title='W3Schools HTML Tutorial']";
        this.urlToCssPage = "/css/default.asp";
    }

    public visit(){
       cy.visit(this.iFramePageURL);
      }
      
    public  getFrameTitle(){
        return cy.iframe(this.iFrame).find(this.iFrameTitle);
      }
      
    public goToCssPageInFrame(){
        cy.iframe(this.iFrame).find(this.cssTitle).click({force: true});
        cy.frameLoaded(this.iFrame, {url: this.urlToCssPage});
      }
}

export {IFramePage}
