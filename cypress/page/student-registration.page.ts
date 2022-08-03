import * as dayjs from 'dayjs'
import { StudentInformation } from "./index"

class StudentRegistrationPage {
    private studentRegistrationPageURL: string;
    private firstNameInput: string;
    private lastNameInput: string;
    private emailInput: string;
    private genderComponent: string;
    private mobileInput: string;
    private dateOfBirthInput: string;
    private hobbiesComponent: string;
    private currentAddressInput: string;
    private stateInput: string;
    private cityInput: string;
    private submitButton: string;
    private Modaltitle: string;
    private valuesAfterSave: string;

    constructor() {
        this.studentRegistrationPageURL = "https://demoqa.com/automation-practice-form";
        this.firstNameInput = "#firstName";
        this.lastNameInput = "#lastName";
        this.emailInput = "#userEmail";
        this.genderComponent = "#genterWrapper";
        this.mobileInput = "#userNumber";
        this.dateOfBirthInput = "#dateOfBirthInput";
        this.hobbiesComponent = "#hobbiesWrapper input+label";
        this.currentAddressInput = "#currentAddress";
        this.stateInput = "#state .css-1wy0on6";
        this.cityInput = "#city .css-1wy0on6";
        this.submitButton = "#submit";
        this.Modaltitle = "#example-modal-sizes-title-lg";
        this.valuesAfterSave = ".modal-content";
    }

    public goToStudentRegistrationForm(): void {
        cy.visit(this.studentRegistrationPageURL);
    }

    public fillInForm(personalInformation: StudentInformation): void {
        cy.get(this.firstNameInput).type(personalInformation.name);
        cy.get(this.lastNameInput).type(personalInformation.lastName);
        cy.get(this.emailInput).type(personalInformation.email);
        this.selectGender(personalInformation.gender);    
        cy.get(this.dateOfBirthInput).type(`{selectall}'${personalInformation.dateOfBirth}`);
        cy.get(this.mobileInput).type(personalInformation.mobileNumber);
        this.selectHobbies(personalInformation.hobbies);
        cy.get(this.currentAddressInput).type(personalInformation.currentAddress);
        this.selectState(personalInformation.state);
        this.selectCity(personalInformation.city);
        cy.get(this.submitButton).click({force: true});
    }

    private selectGender(gender: string) {
         cy.get(this.genderComponent).find(`input[value="${gender}"]`).click({force: true});
    }

    private selectHobbies(hobbies: string[]) {
        hobbies.forEach((item) => {
            cy.get(this.hobbiesComponent).contains(item).click();
        });
    }

    private selectState(state: string){
        cy.get(this.stateInput).click({force: true}).type(`${state}{enter}`);
    }

    private selectCity(city: string){
        cy.get(this.cityInput).click({force: true}).type(`${city}{enter}`);
    }

    private transformDate(date: string): string {
        return dayjs(date).format('D MMMM,YYYY');
    }

    public validateModalTitle(message: string) {
        cy.get(this.Modaltitle).should(
            "have.text",
            message,
        );
    }

    public validatePersonalInformation(personalInformation: StudentInformation): void{
        cy.get(this.valuesAfterSave).should("contain", `${personalInformation.name} ${personalInformation.lastName}`);
        cy.get(this.valuesAfterSave).should("contain", personalInformation.email);
        cy.get(this.valuesAfterSave).should("contain", personalInformation.gender);
        cy.get(this.valuesAfterSave).should("contain", personalInformation.mobileNumber);
        cy.get(this.valuesAfterSave).should("contain", this.transformDate(personalInformation.dateOfBirth));
        cy.get(this.valuesAfterSave).should("contain", personalInformation.hobbies.join(", "));
        cy.get(this.valuesAfterSave).should("contain", personalInformation.currentAddress);
        cy.get(this.valuesAfterSave).should("contain",  `${personalInformation.state} ${personalInformation.city}`);
    }
}

export {StudentRegistrationPage}
