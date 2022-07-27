describe ('template page', () => {
  it ('should be able to load page', () => {
      cy.visit('http://localhost:3000/template')
  })
  it("should have a title",()=>{
    cy.title().should('eq','GOV.UK - The best place to find government services and information')
  })

  it("should allow to type email", () => {
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})
