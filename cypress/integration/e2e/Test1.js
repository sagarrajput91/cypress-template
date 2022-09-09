describe('First test suite', function(){
    it('First test case', function(){
        cy.visit('https://www.youtube.com/')
       // console.log("sagar");
       // console.log(Cypress.env('applicationUrl'));
       cy.visit(Cypress.env('applicationUrl'))
    })
    it('Second test case', function(){
        //cy.visit('https://www.youtube.com/')
       // console.log("sagar");
       // console.log(Cypress.env('applicationUrl'));
       expect(true).to.be.true
    })
})