///<reference types="Cypress" />

const usernamePlaceholder = '[name="name"]';
const settingsTab = ".chakra-stack.css-1ixxfni";
const uploadBtn = '[aria-label="upload Image"]';
const deleteBtn = '[aria-label="Delete Image"]';
const skipBtn = `button[title='SKIP']`;
const saveButton = '[class="chakra-button css-c36l0t"]';
const successBanner = '[data-status="success"]';
const failurebanner = '[data-status="error"]';
const teamMembersBtn = '[data-index="2"]';
const addEmailPlaceholder = 'input[placeholder="Enter Email"]';
const addMemberBtn = '[class="chakra-button css-l83ncf"]';
const membersTable = '[class="chakra-table css-5605sr"]';
const rolesOptions = '[class="chakra-select css-1ws4rxn"]';
const saveRoleBtn = 'button[class="chakra-button css-gump8p"]';
const deleteMemberBtn = `td[class='css-xumdn4'] button[aria-label='Delete Image']`;

class Settings {
  getUrl() {
    return cy.url();
  }

  usernamePlaceholder() {
    return cy.get(usernamePlaceholder);
  }

  getSettingsTab() {
    return cy.get(settingsTab);
  }

  getUploadBtn() {
    return cy.get(uploadBtn);
  }

  getDeleteBtn() {
    return cy.get(deleteBtn);
  }

  getSkipBtn() {
    return cy.get(skipBtn);
  }

  getSaveBtn() {
    return cy.get(saveButton);
  }

  getSuccessBanner() {
    return cy.get(successBanner);
  }

  getTeamBtn() {
    return cy.get(teamMembersBtn);
  }

  addMemberBtn() {
    return cy.get(addMemberBtn);
  }

  addEmailPlaceholder() {
    return cy.get(addEmailPlaceholder);
  }

  getFailureBanner() {
    return cy.get(failurebanner);
  }

  membersTable() {
    return cy.get(membersTable);
  }

  rolesDropDownMenu() {
    return cy.get(rolesOptions);
  }

  getSaveRoleBtn() {
    return cy.get(saveRoleBtn);
  }

  deleteMemberBtn() {
    return cy.get(deleteMemberBtn);
  }
}
export { Settings };
