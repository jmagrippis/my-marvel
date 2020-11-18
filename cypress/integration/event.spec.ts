import { testedViewports } from '../testedViewports'

describe('event page', () => {
  testedViewports.forEach((viewport) => {
    describe(`on ${viewport}`, () => {
      it('shows the info for the Infinity Gauntlet event', () => {
        cy.viewport(viewport)

        // 253 is the "Infinity Gauntlet" event
        cy.visit('event/253')

        cy.root()
          .findByRole('heading', { name: 'Infinity Gauntlet', level: 1 })
          .should('exist')

        cy.root().findByRole('img').should('exist')
      })

      it('shows a 404 page for an event that does not exist', () => {
        cy.viewport(viewport)

        // This event does not exist
        cy.visit('event/4242424242', { failOnStatusCode: false })

        cy.root()
          .findByRole('heading', {
            name: '404 - Zoinks!',
            level: 1,
          })
          .should('exist')

        cy.root()
          .findByRole('heading', {
            name: 'We couldn’t find what you were looking for',
            level: 2,
          })
          .should('exist')

        cy.root()
          .findByRole('link', { name: /try again/ })
          .click()

        cy.location().should((loc) => {
          expect(loc.pathname).to.eq('/')
        })
      })
    })
  })
})
