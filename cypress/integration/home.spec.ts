import { testedLayouts } from '../testedLayouts'

describe('home', () => {
  testedLayouts.forEach((layout) => {
    describe(`on ${layout}`, () => {
      it('shows the home page with legal information', () => {
        cy.viewport(layout)

        cy.visit('/')

        cy.findByRole('heading', { name: 'my Marvel' }).should('exist')

        cy.findByRole('contentinfo').should(($footer) => {
          const text = $footer.text()

          expect(text).to.include('Data provided by Marvel. © 2014 Marvel')
        })
      })
    })
  })
})
