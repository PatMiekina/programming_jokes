## Run app
```
npm install govuk-frontend --save
npm run dev
```

in separate terminal run 
`npm run cypress:open` to open the cypress launchpad
or 
`npx cypress run` to run tests in the console

## Cypress tutorial
1. Install cypress
`npm install cypress --save-dev`

2. Open cypress
`npx cypress open`

3. Or add scripts in package.json
```
{
  "scripts": {
    "cypress:open": "cypress open"
  }
}
```

and then run

`npm run cypress:open`

Alternatively run `npx cypress run` to run the tests in the console.

4. In the launchpad choose the testing method - we are interested in end-to-end testing (E2E)
![Choose Testing Method](https://docs.cypress.io/_nuxt/img/choose-testing-type.a397de3.png)
    - Cypress will generate some configuration files for you
    ![Configuration Files](https://docs.cypress.io/_nuxt/img/scaffolded-files.a797120.png)

5. In the launchpad choose the browser that you want to use
![Choose The Browser](https://docs.cypress.io/_nuxt/img/select-browser.b7ecf05.png)


## E2E testing
[Tutorial from cypress website here](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test#What-you-ll-learn)

1. In the launchpad add a new test file
![Add a new test file](https://docs.cypress.io/_nuxt/img/create-new-empty-spec.08c8dab.png)

![Set the path](https://docs.cypress.io/_nuxt/img/enter-path-for-new-spec.474c3f4.png)

A default test will be added to the file

![Confirmation](https://docs.cypress.io/_nuxt/img/new-spec-added-confirmation.bb3adda.png)

Your cypress interface should display your new test file
![cypress interface new test file](https://docs.cypress.io/_nuxt/img/spec-list-with-new-spec.61d015d.png)

## The Syntax
```javascript
describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})
```

***Important***
You need to run your server to be able to run E2E tests with cypress!

## Useful syntax

See all the commands on the left:
[Cypress documentation on commands](https://docs.cypress.io/api/commands/should)

Useful examples:

```javascript
cy.visit('url') // check if visits url
cy.contains('type') // check if page includes word type
cy.get('.govuk') // get the first element that has class of 'govuk'
cy.url().should('include', '/start') // the url of current page should do something ex. include '/start'
cy.get('.action-email') // test if you can get element
      .type('fake@email.com') // test if can type in the form
      .should('have.value', 'fake@email.com') // test if the value after typing is correct
```
