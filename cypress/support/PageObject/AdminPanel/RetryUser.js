import {dwollaRetryUser} from '../../../../AdminData'
const td = require('../../../../TestData');

class Retry_User{

 async RetryUser(){ 
      
 //cy.getByAriaLabel("user");
 cy.getByClass('ant-menu-title-content').each(($el)=> {
  if($el.text().includes('Users')){
    cy.wrap($el).click();
  }
 })
 cy.getByHref("/users/create").click();
 cy.wait(2000);
 cy.getByPlaceholder("First Name").type(dwollaRetryUser.name);
 cy.getByPlaceholder("Last Name").type(td.lname);
 cy.getByPlaceholder("Password").type(td.password);
 cy.getByPlaceholder("Email").type(dwollaRetryUser.email);
 cy.getByPlaceholder("PhoneNumber").type(td.Phoneno);
 cy.getByPlaceholder("000000000").type(td.SSNAdmin);
 cy.getByPlaceholder("Select date (MM-DD-YYYY)").click();

  async function getMonth () {
   return new Cypress.Promise((resolve, reject) => {
     cy.getByClass("ant-picker-month-btn")
       .invoke("text")
       .then((currentmonth) => {
         resolve(currentmonth);
       });
   });
 }
 
 for (let i = 0; i < 12; i++) {
   let month = await getMonth();
   if (month === "Feb"){
     break;
   } else {
     cy.getByClass("ant-picker-header-prev-btn").click();
   }
 }
 async function getYear(){
   return new Cypress.Promise((resolve,reject)=> {
     cy.getByClass('ant-picker-year-btn')
     .invoke('text')
     .then((currentYear)=> {
       resolve(currentYear);
     })
   });
 }
   for(let i=0; i < 50 ; i++){
     let myyear = await getYear();
     if(myyear == 1975){
       break;
     }else{
       cy.getByClass('ant-picker-header-super-prev-btn').click();
     }
   }
   cy.get('td[title="1975-02-28"]').click();
   cy.getByPlaceholder("Address").type(td.StreetAddress);
   cy.getByID('state').click();
   cy.getByID('state').type('georgia');
   cy.getByTitle('Georgia').click();
   cy.getByPlaceholder("City").type(td.City);
   cy.getByPlaceholder("ZipCode").type(td.ZIP);
   cy.getByPlaceholder('Owner Name').type(dwollaRetryUser.OwnerName);
   cy.get('input[id="primaryOwner"]').click();
   cy.get('input[id="beneficialOwner"]').click();
   cy.getByID("description").type(dwollaRetryUser.description);
   cy.getByID("subTitle").type(dwollaRetryUser.jobtitle);
   cy.get('button[type="Submit"]').click();
}
}
export default Retry_User;