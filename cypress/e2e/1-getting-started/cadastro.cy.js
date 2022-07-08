describe('Login de cadastros ', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php')
  })
  it('Teste de Cadastro', () => {
    //teste de cadastro
    cy.get('.login').click()
    //inserindo email valido
    cy.get('#email_create').type('tarcizio@fpf.com.br')
    cy.get('#SubmitCreate > span').click()
    //seguindo para tela de cadastro
    cy.get('#id_gender1').click()
    //preenchendo campos obrigatorios
    cy.get('#customer_firstname').type('TARCIZIO CHAVES')
    cy.get('#customer_lastname').type('LIMA')
    cy.get('#passwd').type('testefpf')
    cy.get('#newsletter').click()
    cy.get('#company').type('FPF TECH')
    cy.get('#address1').type('AV AMAZONAS, 150')
    cy.get('#address2').type('AV manaus, 200')
    cy.get('#city').type('Manaus')
    cy.get('#id_state').type('a {enter}')
    cy.get('#postcode').type('69025')
    cy.get('#phone').type('929852631326'),
      cy.get('#phone_mobile').type('92984552136')
    cy.get('#alias').type('eitar')
    cy.get('#submitAccount > span').click()
  })
})
