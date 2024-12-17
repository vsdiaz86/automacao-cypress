describe('User API Tests', () => {
    const uniqueUserEmail = `user_${Date.now()}@test.com`;
    const userData = {
      nome: 'Novo Usuário',
      email: uniqueUserEmail,
      password: 'senha123',
      administrador: 'true',
    };
  
    it('should create a new user successfully', () => {
      cy.request({
        method: 'POST',
        url: `${Cypress.env('API_URL')}/usuarios`,
        body: userData,
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.message).to.eq('Cadastro realizado com sucesso');
        expect(response.body).to.have.property('_id');
      });
    });
  
    it('should not allow duplicate user registration', () => {
      cy.request({
        method: 'POST',
        url: `${Cypress.env('API_URL')}/usuarios`,
        body: userData,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.message).to.eq('Este email já está sendo usado');
      });
    });
  });
  