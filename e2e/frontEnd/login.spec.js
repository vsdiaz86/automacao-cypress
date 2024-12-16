import LoginPage from '../../pages/LoginPage';

describe('Login Tests', () => {
  beforeEach(() => {
    LoginPage.navigate();
  });

  it('login with valid credentials', () => {
    LoginPage.fillEmail(Cypress.env('USER_EMAIL'));
    LoginPage.fillPassword(Cypress.env('USER_PASSWORD'));
    LoginPage.submit();
    cy.url().should('contain', '/home');
  });

  it('login attempt with invalid credentials', () => {
    LoginPage.fillEmail('invalid@example.com');
    LoginPage.fillPassword('wrongpassword');
    LoginPage.submit();
    LoginPage.checkInvalidLoginMessage('Email e/ou senha inválidos');
  });

  it('login attempt with no credentials', () => {
    LoginPage.submit();
    LoginPage.checkInvalidLoginMessage('Email é obrigatório');
    LoginPage.checkInvalidLoginMessage('Password é obrigatório');
  });

});

