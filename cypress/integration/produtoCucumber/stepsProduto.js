import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import Logins from '../../support/pages/login/index'
import Produtos from '../../support/pages/produto/index'




//Caminho feliz para compra de um produto
Given('que o usuário está na página de produtos', () => {
	Logins.acessarPagina();
    Logins.preencherLoginValido();
});

When('o usuário tenta realizar uma compra', () => {
	Produtos.adicionarProdutoNoCarrinhoEPreenchercadastro();
});

Then('a compra é realizada com sucesso', () => {
	Produtos.confirmaçaoDeCompra();
});


//Caminho feliz para compra de um produto com xpath
Given('que o consumidor está na página de produtos', () => {
	Logins.acessarPagina();
    Logins.preencherLoginValido();
});

When('tenta realizar uma compra', () => {
	Produtos.adicionarProdutoNoCarrinhoEPreenchercadastroXpath();
});

Then('a mesma é realizada com sucesso', () => {
	Produtos.confirmaçaoCompraXpath();
});



