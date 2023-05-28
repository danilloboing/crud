# CRUD com React, Node.js e MySQL

  ![gif_crud](https://github.com/danilloboing/crud/assets/105755202/ffbb1f76-dbd0-4069-ad7b-99a01aeb7970)

## Como instalar o projeto

1. Baixe/Clone este projeto em seu computador
2. Na raiz do projeto, faça:

### Front-End

1. `$ cd frontend`
2. `$ npm install`
3. `$ npm start`

### Banco de Dados
1. Mude o SQL database no arquivo `backend/db.js`

![db](https://github.com/danilloboing/crud/assets/105755202/83ad3b4f-b272-401b-9543-9eb8d80d9ffc)

3. No root do seu mySQL Workbench, crie uma tabela com o seguinte comando:
<p> CREATE TABLE `crud`.`carros` (</p>
<p> `idcarros` INT NOT NULL AUTO_INCREMENT,</p>
<p> `nome_carros` VARCHAR(100) NOT NULL,</p>
<p> `placa` VARCHAR(7) NOT NULL,</p>
<p> `disponibilidade` VARCHAR(3) NOT NULL,</p>
<p>  PRIMARY KEY (`idcarros`));</p>

### Back-End

1. `$ cd backend`
2. `$ npm install`
3. `$ npm start`

Abra [http://localhost:3000](http://localhost:3000) para ver em seu browser.
A página irá recarregar quando houver alterações

## Funcionalidades

+ Simulação de login e cadastro de usuários
+ Verificação e validação de e-mail e senha
+ Cadastro, edição e exclusão dos carros da frota
+ Verificar e alterar a disponibilidade de algum determinado carro

## Bibliotecas utilizadas

### Front-End

+ Styled-components
+ Axios

### Back-End

+ Express
+ mySQL
+ Cors
+ Nodemon
