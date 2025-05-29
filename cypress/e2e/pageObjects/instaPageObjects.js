
const selectInsta = '#root > div.platforms-component > div > div > div:nth-child(1) > button';
const search = '[class="input-main input-search"]';
const searchButton = '#root > div.container-fluid > div:nth-child(2) > div > div > div > button';
const checkBot = '[class="w-12 h-12 animate-pulse"]';
const keywordStatus = '[class="font-medium text-lg text-slate-600"]';

class InstaPage {

 getselectInsta() {
    return cy.get(selectInsta);
 }

 getsearchField() {
    return cy.get(search);
 }

 getsearchButton() {
    return cy.get(searchButton);
 }

 getcheckBot() {
    return cy.get(checkBot);
 }

 getkeywordStatus() {
    return cy.get(keywordStatus);
 }

}
export {InstaPage};