import { testedLayouts } from '../testedLayouts'

describe('home', () => {
  testedLayouts.forEach((layout) => {
    describe(`on ${layout}`, () => {
      it('shows the home page with legal information', () => {
        cy.viewport(layout)

        cy.visit('/')

        cy.findByRole('heading', { name: 'my Marvel' }).should('exist')

        cy.findByRole('contentinfo').within(($footer) => {
          cy.findByRole('link', {
            name: 'Data provided by Marvel. © 2014 Marvel',
          }).should(($link) => {
            const href = $link.attr('href')
            expect(href).to.equal('https://marvel.com')
          })

          cy.findByRole('link', {
            name: /jmagrippis/,
          }).should(($link) => {
            const href = $link.attr('href')
            expect(href).to.equal('https://magrippis.com')
          })
        })
      })
    })
  })
})
