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
    })
  })
})
