import { testedLayouts } from '../testedLayouts'

describe('navigation', () => {
  testedLayouts.forEach((layout) => {
    describe(`on ${layout}`, () => {
      before(() => {
        cy.viewport(layout)
      })

      it('can navigate to all the various sections of the site', () => {
        cy.visit('/')

        cy.findByText('Hello World!').should('exist')
      })
    })
  })
})
