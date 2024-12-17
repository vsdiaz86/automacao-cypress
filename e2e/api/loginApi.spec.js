describe('Login API Tests', () => {
    it('should successfully login with valid credentials', () => {
      cy.request({
        method: 'POST',
        url: `${Cypress.env('API_URL')}/login`,
        body: {
          email: Cypress.env('USER_EMAIL'),
          password: Cypress.env('USER_PASSWORD'),
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('authorization');
      });
    });

    describe('Invalid Login API Tests', () => {
        it('should fail when logging in with invalid credentials', () => {
          cy.request({
            method: 'POST',
            url: `${Cypress.env('API_URL')}/login`,
            body: {
              email: 'invalid_user@test.com',
              password: 'wrong_password',
            },
            failOnStatusCode: false, 
          }).then((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.message).to.eq('Email e/ou senha inválidos');
          });
        });
      });
  });
  