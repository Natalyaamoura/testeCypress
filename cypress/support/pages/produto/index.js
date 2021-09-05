    
    class produto {

        adicionarProdutoNoCarrinhoEPreenchercadastro(){
            cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();
            cy.get('.shopping_cart_link').click();
            cy.get('[data-test=checkout]').click();
            cy.get('[data-test=firstName]').type('dois');
            cy.get('[data-test=lastName]').type('tres');
            cy.get('[data-test=postalCode]').type('0123654');
            cy.get('[data-test=continue]').click();
        };

        confirmaçaoDeCompra(){
            cy.get('[data-test=finish]').click();
            cy.get('.title').should('contain', 'Checkout: Complete!');
        };

        adicionarProdutoNoCarrinhoEPreenchercadastroXpath(){
            cy.xpath('//*[@id="add-to-cart-sauce-labs-backpack"]').click();
            cy.xpath('//*[@id="shopping_cart_container"]').click();
            cy.xpath('//*[@id="checkout"]').click();
            cy.xpath('//*[@id="first-name"]').type('dois');
            cy.xpath('//*[@id="last-name"]').type('tres');
            cy.xpath('//*[@id="postal-code"]').type('0123654');
            cy.xpath('//*[@id="continue"]').click();
        };

        confirmaçaoCompraXpath(){
            cy.xpath('//*[@id="finish"]').click();
            cy.xpath('//*[@class="title"]').should('contain', 'Checkout: Complete!');
        };

    };

    export default new produto();