import { testedViewports } from '../testedViewports'

describe('home', () => {
  testedViewports.forEach((viewport) => {
    describe(`on ${viewport}`, () => {
      it('shows the home page with legal information', () => {
        cy.viewport(viewport)

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

      it('shows the latest events', () => {
        cy.viewport(viewport)

        cy.visit('/')

        cy.findByRole('list').within(($main) => {
          cy.findAllByRole('listitem').should('have.lengthOf', 10)
          cy.findAllByRole('article').should('have.lengthOf', 10)
          cy.findAllByRole('heading').should('have.lengthOf', 10)
          cy.findAllByRole('img').should('have.lengthOf', 10)
        })
      })
    })
  })

  describe('only on iphone-x', () => {
    it('has a short heading', () => {
      cy.viewport('iphone-x')

      cy.visit('/')

      cy.findByRole('heading', { name: 'Latest events' }).should('exist')
    })
  })

  describe('only on macbook-13 and wider', () => {
    it('has a long heading', () => {
      cy.viewport('macbook-13')

      cy.visit('/')

      cy.findByRole('heading', { name: 'Explore our latest events' }).should(
        'exist'
      )
    })
  })
})
