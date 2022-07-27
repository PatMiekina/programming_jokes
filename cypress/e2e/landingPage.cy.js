describe ('verification landing page', () => {
  it ('should be able to load page', () => {
      cy.visit('http://localhost:3000')
  })
  it("should have a title",()=>{
    cy.title().should('eq','Index')
  })

  it("should contain the word 'red'", () => {
    cy.contains('red')
  })

  it("should take you to a start page", () => {
    cy.get('.govuk-button').click()
    cy.url().should('include', '/start')
  })
})
