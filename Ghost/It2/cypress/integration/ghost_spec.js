/* */

describe('Ghost EP1', () => {
  context('Empty Home', () => {
    beforeEach(() => {
      cy.visit('http://localhost:2368/')
    })

    it('El título del blog es el correcto', () => {
      const title = 'Pruebas Automáticas'
      cy.title().should('eq', title)
      cy.get('.site-title > img').then(el => el.prop('alt')).then(alt => { cy.wrap(alt).should('eq', title)})
      cy.get('.copyright > a').should('contain', title)
    })

    it('La descripción es la correcta', () => {
      const description = 'La descripción del blog'
      cy.get('.site-description').contains(description)
    })
  })

  context('Admin', () => {
    const title = 'Título de prueba'
    const text = 'Esta es una historia de prueba'
    const text2 = ' más texto'

    it('Login correcto', () => {
      cy.visit('http://localhost:2368/ghost/')
      cy.title().should('contain', 'Sign In')
      cy.get('input[name="identification"]').type('diegorbaquero@gmail.com')
      cy.get('input[name="password"]').type('hola1234')
      cy.contains('Sign in').click()
      cy.title().should('contain', 'Content')
    })

    it('El título en el admin es el correcto', () => {
      const title = 'Pruebas Automáticas'
      cy.title().should('eq', 'Content - ' + title)
      cy.get('.gh-nav-menu-details-blog').should('contain', title)
    })

    it('Escribe una historia y la publica', () => {
      cy.contains('New story').click()
      cy.get('textarea.gh-editor-title').click().type(title)
      cy.wait(1000)
      cy.get('.CodeMirror-line').click({force: true})
      cy.wait(100)
      cy.get('.CodeMirror-line').click('left', {force: true})
      cy.wait(1000)
      cy.focused().type(text, {force: true})
      cy.get('.CodeMirror-code > pre > span').should('contain', text)
      cy.contains('Publish').click()
      cy.get('button.gh-publishmenu-button').click().should('contain', 'Published')
    })

    it('Actualiza la historia', () => {
      cy.title().should('contain', 'Editor')
      cy.get('.CodeMirror-line').click('left', {force: true})
      cy.wait(100)
      cy.get('.CodeMirror-line').click({force: true})
      cy.wait(1000)
      cy.focused().type(text2, {force: true})
      cy.get('.CodeMirror-code > pre > span').should('contain', text + text2)
      cy.contains('Update').click()
      cy.get('button.gh-publishmenu-button').click().should('contain', 'Updated')
    })

    it('Elimina la historia', () => {
      cy.get('button[title="Settings"]').click()
      cy.get('.settings-menu-pane-in').scrollTo('bottom')
      cy.contains('Delete Post').click({force: true})
      cy.get('.fullscreen-modal .gh-btn-red').contains('Delete').click()
      cy.url().should('eq', 'http://localhost:2368/ghost/#/')
    })

    it('Log out correcto', () => {
      cy.get('header > svg').click()
      cy.contains('Sign Out').click()
      cy.title().should('contain', 'Sign In')
    })
  })
})
