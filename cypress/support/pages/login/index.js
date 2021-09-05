    
    class login {

        acessarPagina (){
            cy.visit('/');
        };

       
        preencherLoginValido() {
            cy.get('[data-test=username]').type(`${Cypress.env('usuarioAutorizado')}`);
            cy.get('[data-test=password]').type(`${Cypress.env('senhaAutorizada')}`);
            cy.get('[data-test=login-button]').click();  
        };
        
        assertivaLoginValido(){
            cy.get('.title').should('contain', 'Products');
        };

        preencherLoginBloqueado() {
            cy.get('[data-test=username]').type('locked_out_user');
            cy.get('[data-test=password]').type(`${Cypress.env('senhaAutorizada')}`); 
            cy.get('[data-test=login-button]').click();  
        };

        assertivaLoginBloqueado(){
            cy.get('[data-test=error]').should('contain', 'Epic sadface: Sorry, this user has been locked out.'); 
        };

        preencherLoginProblematico(){
            cy.get('[data-test=username]').type('problem_user');
            cy.get('[data-test=password]').type(`${Cypress.env('senhaAutorizada')}`);
            cy.get('[data-test=login-button]').click();  
        };

        assertivaLoginProblematico(){
            cy.get('.title').should('contain', 'Products');
        };    

        preencherUsuarioEmBranco(){
            cy.get('[data-test=password]').type(`${Cypress.env('senhaAutorizada')}`);
            cy.get('[data-test=login-button]').click();  
        };

        assertivaUsuarioEmBranco(){
            cy.get('[data-test=error]').should('contain', 'Epic sadface: Username is required');
        };

        preencherSenhaEmBranco(){
            cy.get('[data-test=username]').type(`${Cypress.env('usuarioAutorizado')}`);  
            cy.get('[data-test=login-button]').click();  
        };

        assertivaSenhaEmBranco(){
            cy.get('[data-test=error]').should('contain', 'Epic sadface: Password is required');
        };
        
        preencherSenhaInvalida(){
            cy.get('[data-test=username]').type(`${Cypress.env('usuarioAutorizado')}`);
            cy.get('[data-test=password]').type('01');
            cy.get('[data-test=login-button]').click();  
        };

        assertivaSenhaInvalida(){
            cy.get('[data-test=error]').should('contain', 'Epic sadface: Username and password do not match any user in this service');
        };
};

        export default new login();