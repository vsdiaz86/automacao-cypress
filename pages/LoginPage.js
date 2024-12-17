class LoginPage {


    navigate() {
      cy.visit(`${Cypress.env('FRONT_URL')}/`);
    }
  
    fillEmail(email) {
      cy.get('[data-testid=email]').type(email);
    }
  
    fillPassword(password) {
      cy.get('[data-testid=senha]').type(password);
    }
  
    submit() {
      cy.get('[data-testid=entrar]').click();
    }

    checkInvalidLoginMessage(message) {
      cy.contains('div.alert.alert-secondary', message).should('be.visible');
    }
    
  }
  
  export default new LoginPage();
  