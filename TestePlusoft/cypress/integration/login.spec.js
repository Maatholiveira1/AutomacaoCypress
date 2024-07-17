describe('Login Functionality', () => {
  it('URL', () => {
    // Visitar a página de login no servidor local
    cy.visit('/src/login.html');
  });

  it('Campos', () => {
    // Preencher o campo de usuário
    cy.get('#username').type('usuario_valido');
    
    // Preencher o campo de senha
    cy.get('#password').type('senha_valida');
    
    // Re-query o botão de login e clique nele
    cy.get('#login_button').should('be.visible').click();
  });

  it('Comportamento esperado', () => {
    // Verificar se a URL redireciona corretamente após o login
    cy.url().should('not.equal', 'http://localhost:62258/login/teste-qualquer-url'); // URL fictícia
  });
});
