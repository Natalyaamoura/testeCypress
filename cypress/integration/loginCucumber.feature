 #language: pt
 
Funcionalidade: Login
    Como usuário, desejo acessar o site do Swag Labs com usuário e senha
    e ser redirecionado para a página de produtos

    Contexto:
        Dado que o usuário esta na página de login

    @login
    Cenario: Fazer Login na plataforma com sucesso
        Quando realiza o login com usuario e senha válidos
        Entao é direcionado para a página de produtos

    @naoFazLogin 
    Cenario: Fazer Login na plataforma com usuário bloqueado
        Quando tenta realizar o login com usuário bloqueado e senha válida
        Entao será exibida uma mensagem de erro de usuário bloqueado
 
    @login
    Cenario: Fazer Login na plataforma com usuário problemático
        Quando realiza o login com usuário problemático e senha válida        
        Entao será direcionado para a página de produtos
    
    @naoFazLogin 
    Cenario: Fazer Login na plataforma com usuário em branco
        Quando tenta realizar o login com usuário em branco        
        Entao será exibida uma mensagem de erro requerindo um usuário

    @naoFazLogin 
    Cenario: Fazer Login na plataforma com senha em branco e usuário preenchido
        Quando o usuário tenta realizar o login com senha em branco e usuário preenchido
        Entao será exibida uma mensagem de erro requerindo uma senha

    @naoFazLogin 
    Cenario: Fazer Login na plataforma com senha inválida e usuário preenchido
        Quando o usuário tenta realizar o login com senha inválida e usuário preenchido
        Entao será exibida uma mensagem de erro de usuário e senha não combinam
 
