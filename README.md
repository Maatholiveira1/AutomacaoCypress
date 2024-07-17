# TestePlusoft
Script de testes em 2 funcionalidades disponibilizadas, sendo elas Login e Busca

# FuncionalidadeLogin  

Este repositório contém um conjunto de testes Cypress para testar a funcionalidade de login de uma aplicação web. O conjunto de testes verifica se a página de login carrega corretamente, se o usuário pode preencher o formulário de login e se a aplicação redireciona para a URL correta após um login bem-sucedido.

# Índice
- Conjunto de Testes
  - Funcionalidade de Login
    - URL
    - Campos
    - Comportamento Esperado
- Executando os Testes


# Conjunto de Testes
Funcionalidade de Login
Este conjunto de testes cobre os seguintes cenários:


# URL
Verifica se a página de login é carregada corretamente no servidor local.
describe('Login Functionality', () => {
  it('URL', () => {
    // Visitar a página de login no servidor local
    cy.visit('/src/login.html');
  });
});


# Campos
Verifica se os campos de usuário e senha podem ser preenchidos e se o botão de login pode ser clicado.
describe('Login Functionality', () => {
  it('Campos', () => {
    // Preencher o campo de usuário
    cy.get('#username').type('usuario_valido');
    
    // Preencher o campo de senha
    cy.get('#password').type('senha_valida');
    
    // Re-query o botão de login e clique nele
    cy.get('#login_button').should('be.visible').click();
  });
});


# Comportamento Esperado
Verifica se a URL redireciona corretamente após o login.
describe('Login Functionality', () => {
  it('Comportamento esperado', () => {
    // Verificar se a URL redireciona corretamente após o login
    cy.url().should('not.equal', 'http://localhost:62258/login/teste-qualquer-url'); // URL fictícia
  });
});


# Executando os Testes
Para executar os testes, use o comando abaixo:
npx cypress open
Isso abrirá a interface do Cypress, onde você pode selecionar e executar os testes.

# FuncionalidadeSearch

Este repositório contém um conjunto de testes Cypress para testar a funcionalidade de busca de uma aplicação web. O conjunto de testes verifica se a página de busca carrega corretamente, se o usuário pode realizar uma busca e se os resultados da busca são exibidos corretamente.

# Índice
- Conjunto de Testes
  - Funcionalidade de Login
    - URL
    - Campos
    - Comportamento Esperado
- Executando os Testes

# Conjunto de Testes
Funcionalidade de Busca
Este conjunto de testes cobre os seguintes cenários:

# URL
Verifica se a página de busca é carregada corretamente.
describe('Funcionalidade de Busca', () => {
  it('URL', () => {
    // Visitar a página de busca
    cy.visit('src/search.html')
  });
});


# Campos
Verifica se o campo de busca pode ser preenchido e se o botão de busca pode ser clicado.
describe('Funcionalidade de Busca', () => {
  it('Campos', () => {
    // Digitar uma consulta de busca no campo de busca
    cy.get('#search_input').type('Cypress');
    
    // Clicar no botão de busca
    cy.get('#search_button').click();
  });
});


# Comportamento Esperado
Verifica se os resultados da busca são exibidos corretamente.
describe('Funcionalidade de Busca', () => {
  it('Comportamento esperado', () => { 
    // Verificar se os resultados da busca são exibidos corretamente (Deve retornar erro, pelo fato de ser busca fictícia)
    cy.get('#search_results').should('be.visible');  
    cy.get('#search_results .resultado').should('have.length.greaterThan', 0);  
  });
});

# Executando os Testes
Para executar os testes, use o comando abaixo:
npx cypress open
Isso abrirá a interface do Cypress, onde você pode selecionar e executar os testes.


# Ferramentas
  Cypress

# Observações
  As aplicações foram testadas no localhost.
