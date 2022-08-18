const td = require('../../../../TestData')
import {CBdetails} from '../../../../AdminData'

class ExistingBusiness_PO{
     selectExistingBusinessPage(param){
        cy.get('a[href="/issuers/list?nav"]').click();
        cy.wait(2000);
        cy.get('input[placeholder="Filter issuer by email"]').type(param)
        cy.wait(3000);
        cy.get('.ant-table-cell-fix-left-last').children('a').click()
//.each(($el,index,$list)=>{
            
//             if($el.text().includes(param))
//             {
//                 cy.log($el);
//                 cy.wrap($el).click({multiple:true});
//             }
//         });
//         cy.wait(2000);
    }

}
export default ExistingBusiness_PO;