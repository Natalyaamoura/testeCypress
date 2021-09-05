 #language: pt

Funcionalidade: Compra de produtos 
    Como usuário logado no site da Swab Labs, desejo 
    Efetuar a compra de um produto

    Contexto: 
         Dado que o usuário está na página de produtos

    @caminhoFeliz
    Cenario: Caminho feliz para compra de um produto 
        Quando o usuário tenta realizar uma compra
        Entao a compra é realizada com sucesso

    @xpath
    Cenario: Caminho feliz para compra de um produto com xpath  
        Quando tenta realizar uma compra
        Entao a mesma é realizada com sucesso









    