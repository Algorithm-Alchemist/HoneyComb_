const td = require('../../../../TestData')

class ExistingUser_PO{
     selectExistingUserPage(){
        cy.get('a[href="/users/list?nav"]').click();
        cy.wait(2000);
        cy.get('input[placeholder="Search users by email,first & last name"]').type("khubaib")
        cy.wait(10000);
        cy.get('.ant-table-cell').each(($el,index,$list)=>{

            if($el.text().includes(td.TestEmail))
            {
                cy.log($el);
                cy.wrap($el).click();
            }
        });
        cy.wait(2000);
   }

}
export default ExistingUser_PO;