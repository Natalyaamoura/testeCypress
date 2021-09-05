/// <reference types="cypress" />
/// <reference types = "cypress-xpath" />
import Compra from '../../support/pages/produto/index'
import Login from '../../support/pages/login/index'

describe('Caminho feliz para', () => {
    
    beforeEach(() => {
        Login.acessarPagina();
        Login.preencherLoginValido();
    });

        it('Adicionar um produto no carrinho e fechar pedido', () => {
            Compra.adicionarProdutoNoCarrinhoEPreenchercadastro();
            Compra.confirmaçaoDeCompra();
        });

        it('Adicionar um produto no carrinho e fechar pedido com xpath', () => {
            Compra.adicionarProdutoNoCarrinhoEPreenchercadastroXpath();
            Compra.confirmaçaoCompraXpath();
        });
});