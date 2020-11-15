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

      it('shows the latest events and can navigate to them', () => {
        cy.viewport(viewport)

        cy.visit('/')

        cy.findByRole('list').within(($main) => {
          cy.findAllByRole('listitem').should('have.lengthOf', 10)
          cy.findAllByRole('article').should('have.lengthOf', 10)
          cy.findAllByRole('heading').should('have.lengthOf', 10)
          cy.findAllByRole('img').should('have.lengthOf', 10)
          cy.findAllByRole('link', { name: /read more/i }).should(
            'have.lengthOf',
            10
          )

          cy.findAllByRole('listitem').last().scrollIntoView()
        })

        cy.findByRole('list').within(($main) => {
          cy.findAllByRole('listitem').should('have.lengthOf', 20)

          let title: string
          cy.findAllByRole('listitem')
            .first()
            .within(() => {
              cy.findByRole('heading')
                .scrollIntoView()
                .should(($title) => {
                  title = $title.text()
                  expect(title).to.contain('')
                })
              cy.findByRole('link', { name: /read more/i }).click({
                force: true,
              })
            })
            .then(() => {
              cy.url().should('include', '/event')

              cy.title().should('include', title)
            })
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
