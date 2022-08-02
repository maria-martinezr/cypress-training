import {StudentRegistrationPage} from "../page/index";
import {StudentInformation} from "../utils/studet-information";

describe("the user navigates to the registration student form page should", () => {
  let studentRegistrationPage: StudentRegistrationPage;

  before(() => {
    studentRegistrationPage = new StudentRegistrationPage();
  });

  it("fill form in", () => {
    const personalInformation: StudentInformation = {
      name: "Holmes",
      lastName: "Salazar",
      email: "test@email.com",
      gender: "Male",
      dateOfBirth: "27 Jul 2016",
      mobileNumber: "3656589156",
      hobbies: ["Music", "Reading"],
      currentAddress: "Av siempreViva # 123",
      state: "NCR",
      city: "Noida",
    };
    studentRegistrationPage.goToStudentRegistrationForm();

    studentRegistrationPage.fillInForm(personalInformation);

    studentRegistrationPage.validateModalTitle("Thanks for submitting the form");
    studentRegistrationPage.validatePersonalInformation(personalInformation);
  });
});

