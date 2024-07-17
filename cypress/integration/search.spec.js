describe('Funcionalidade de Busca', () => {
    it('URL', () => {
      // Visitar a página de busca
      cy.visit('src/search.html')
    })
  
    it('Campos:', () => {
      // Digitar uma consulta de busca no campo de busca
      cy.get('#search_input').type('Cypress')
  
      // Clicar no botão de busca
      cy.get('#search_button').click()
    })
  
    it('Comportamento esperado', () => { 
      // Verificar se os resultados da busca são exibidos corretamente (Deve retornar erro, pelo fato de ser busca fictícia)
      cy.get('#search_results').should('be.visible')  
      cy.get('#search_results .resultado').should('have.length.greaterThan', 0)  
    })
  })
  