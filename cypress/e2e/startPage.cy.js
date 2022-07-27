describe ('start page', () => {
  it ('should be able to load page', () => {
      cy.visit('http://localhost:3000/start')
  })
  it("should have a title",()=>{
    cy.title().should('eq','GOV.UK - The best place to find government services and information')
  })

  it("should take you to /template", () => {
    cy.get('.govuk-button').click()
    cy.url().should('include', '/template')
  })
})
