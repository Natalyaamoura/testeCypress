import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import Logins from '../../support/pages/login/index'

Given('que o usuário esta na página de login', () => {
    Logins.acessarPagina();
	
});

//Login na plataforma com sucesso
When('realiza o login com usuario e senha válidos', () => {
	Logins.preencherLoginValido();
});

Then('é direcionado para a página de produtos', () => {
	Logins.assertivaLoginValido();
});


//Login na plataforma com usuário bloqueado
When('tenta realizar o login com usuário bloqueado e senha válida', () => {
	Logins.preencherLoginBloqueado();
});

Then('será exibida uma mensagem de erro de usuário bloqueado', () => {
	Logins.assertivaLoginBloqueado();
});


//Login na plataforma com usuário problemático
When('realiza o login com usuário problemático e senha válida', () => {
	Logins.preencherLoginProblematico();
});

Then('será direcionado para a página de produtos', () => {
	Logins.assertivaLoginProblematico();
});


//Fazer Login na plataforma com usuário em branco
When('tenta realizar o login com usuário em branco', () => {
	Logins.preencherUsuarioEmBranco();
});

Then('será exibida uma mensagem de erro requerindo um usuário', () => {
	Logins.assertivaUsuarioEmBranco();
});


//Login na plataforma com senha em branco e usuário preenchido
When('o usuário tenta realizar o login com senha em branco e usuário preenchido', () => {
	Logins.preencherSenhaEmBranco();
});

Then('será exibida uma mensagem de erro requerindo uma senha', () => {
	Logins.assertivaSenhaEmBranco();
});


//Login na plataforma com senha inválida e usuário preenchido
When('o usuário tenta realizar o login com senha inválida e usuário preenchido', () => {
	Logins.preencherSenhaInvalida();
});

Then('será exibida uma mensagem de erro de usuário e senha não combinam', () => {
	Logins.assertivaSenhaInvalida();
});

