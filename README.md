# Personal Expenses API

API RESTful para controle de despesas pessoais, desenvolvida com Node.js, Express, Sequelize e MySQL, seguindo o padrão de arquitetura MVC.

> Desenvolvimento Back-End — 3º Fase
> Natalia S. Rodrigues

---

## Tecnologias utilizadas

- **Node.js** — executa o JavaScript do servidor
- **Express** — framework para criar a API e gerenciar as rotas
- **Sequelize** — ORM para comunicação com o banco de dados
- **MySQL** — banco de dados relacional
- **JWT (jsonwebtoken)** — autenticação baseada em token
- **bcrypt** — criptografia de senhas
- **dotenv** — gerenciamento de variáveis de ambiente
- **CORS** — permite requisições entre diferentes origens
- **Sequelize CLI** — criação de migrations e seeders

---

## Como instalar e rodar

**1. Clone o repositório**
```bash
git clone https://github.com/nataliarodrigues2/Personal-Expenses-API.git
cd Personal-Expenses-API
```

**2. Instale as dependências**
```bash
npm install
```

**3. Configure o banco de dados**

Crie um banco de dados MySQL chamado `personal_expenses`.

Copie o arquivo `.env.example`, renomeie para `.env` e preencha com suas credenciais:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=personal_expenses
DB_PORT=3306

JWT_SECRET=sua_chave_secreta
JWT_EXPIRES_IN=1d
```

**4. Rode as migrations e os seeders**
```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

**5. Rode o servidor**
```bash
npm run dev
```

O servidor sobe em `http://localhost:3000`.

---

## Arquitetura do projeto

```
src/
├── app.js
├── config/
│   ├── auth.js
│   └── database.json
├── database/
│   └── database.js
├── models/
│   ├── user.js
│   ├── category.js
│   ├── expense.js
│   └── associations.js
├── controllers/
│   ├── user.js
│   ├── category.js
│   └── expense.js
├── views/
│   ├── user.js
│   ├── category.js
│   └── expense.js
├── routes/
│   ├── user.js
│   ├── category.js
│   ├── expense.js
│   └── dashboard.js
├── middlewares/
│   └── auth.js
├── migrations/
└── seeders/
```

---

## Rotas

### Autenticação

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | /users | Cadastrar usuário |
| POST | /auth/login | Fazer login e obter token |

### Categorias (requer token)

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /categories | Listar todas as categorias |
| GET | /categories/:id | Buscar categoria por id |
| POST | /categories | Criar categoria |
| PUT | /categories/:id | Atualizar categoria |
| DELETE | /categories/:id | Deletar categoria |

### Despesas (requer token)

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /expenses | Listar despesas (aceita filtros) |
| GET | /expenses/:id | Buscar despesa por id |
| POST | /expenses | Criar despesa |
| PUT | /expenses/:id | Atualizar despesa |
| DELETE | /expenses/:id | Deletar despesa |

### Dashboard (requer token)

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /dashboard/total-expenses | Total de gastos |
| GET | /dashboard/expenses-count | Quantidade de despesas |
| GET | /dashboard/expenses-by-category | Gastos somados por categoria |

---

## Filtros disponíveis em /expenses

```
GET /expenses?status=PAGA
GET /expenses?categoriaId=1
GET /expenses?dataInicio=2026-01-01&dataFim=2026-06-30
GET /expenses?valorMin=100&valorMax=500
```

---

## Autenticação

As rotas protegidas exigem o token JWT no cabeçalho da requisição:

```
Authorization: Bearer seu_token_aqui
```

O token é obtido na rota de login e expira de acordo com o tempo definido em `JWT_EXPIRES_IN`.