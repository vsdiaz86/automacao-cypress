# Projeto de Automação - Cypress (API e Front-End)

Este projeto contém testes automatizados de **API** e **Front-End** utilizando **Cypress**

---

## **Pré-requisitos**

Antes de iniciar, certifique-se de ter os seguintes itens instalados no seu computador:

- **Node.js** (v18 ou superior): [Baixe aqui](https://nodejs.org/)
- **Git**: [Baixe aqui](https://git-scm.com/)

---

## **Configuração do Projeto**

### **1. Clonar o Repositório**

Para clonar o projeto, execute o seguinte comando no terminal:

```bash
git clone https://github.com/vsdiaz86/automacao-cypress.git
cd automacao-cypress


### **2. Instalar Dependências**

Instale todas as dependências do projeto com o comando:

cd cypress
npm install
npx cypress install


### **2. Configurando o arquivo .env**

Copie o arquivo .env-template para um novo arquivo chamado .env. No arquivo .env, adicione a URL do servidor, para que os testes saibam a qual servidor se conectar, assim como as outras variaveis de ambiente.


### **2. Testes de Front-End**

Execute somente os testes de Front-End com o comando:

npx cypress run --spec "cypress/e2e/frontend/*"


### **2. Testes de API**

Execute somente os testes de API com o comando:

npx cypress run --spec "cypress/e2e/api/*"
