/// <reference types="cypress" />
import Login from '../../support/pages/login/index'


describe('Teste da pagina de login com', () => {

        beforeEach(() => {
            Login.acessarPagina();
    
        });
        
            it('Usuario e senha válidos', () => {
                Login.preencherLoginValido();
                Login.assertivaLoginValido(); 
            });

            it('Usuario bloqueado', () => {
                Login.preencherLoginBloqueado();
                Login.assertivaLoginBloqueado(); 
            });
        
            it('Usuario problematico', () => {
               Login.preencherLoginProblematico();
               Login.assertivaLoginProblematico();
            });

            it('Usuario em branco', () => {
                Login.preencherUsuarioEmBranco();
                Login.assertivaUsuarioEmBranco();
            });

            it('Usuario preenchido e senha em branco', () => {
                Login.preencherSenhaEmBranco();
                Login.assertivaSenhaEmBranco(); 
            });

            it('Usuario preenchido e senha inválida', () => {
               Login.preencherSenhaInvalida();
               Login.assertivaSenhaInvalida();  
            });
            
});
