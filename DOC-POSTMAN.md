Documentation
Personal Expenses
﻿

Authorization
Bearer Token
Token
<token>
Usuários
﻿

Authorization
Bearer Token
This folder is using an authorization helper from collection Personal Expenses
POST
Cadastro de Usuário
http://localhost:3000/users
﻿

Authorization
Bearer Token
This request is using an authorization helper from collection Personal Expenses
Body
raw (json)
json
{
  "name": "Natália Rodrigues",
  "email": "natalia@email.com",
  "password": "senha123"
}
POST
Fazer Login
http://localhost:3000/auth/login
﻿

Authorization
Bearer Token
This request is using an authorization helper from collection Personal Expenses
Body
raw (json)
json
{
  "email": "natalia@email.com",
  "password": "senha123"
}
c
Categorias
﻿

Authorization
Bearer Token
This folder is using an authorization helper from collection Personal Expenses
POST
Criar Categoria
http://localhost:3000/categories
﻿

Authorization
Bearer Token
This request is using an authorization helper from collection Personal Expenses
Body
raw (json)
json
{
  "name": "Lazer"
}
GET
Listar Categorias
http://localhost:3000/categories
﻿

Authorization
Bearer Token
This request is using an authorization helper from collection Personal Expenses
GET
Buscar Categoria por ID
http://localhost:3000/categories/1
﻿

Authorization
Bearer Token
This request is using an authorization helper from collection Personal Expenses
PUT
Editar Categoria
http://localhost:3000/categories/1
﻿

Authorization
Bearer Token
This request is using an authorization helper from collection Personal Expenses
Body
raw (json)
json
{
  "name": "Alimentação e Restaurantes"
}
DELETE
Deletar Categoria
http://localhost:3000/categories/1
﻿

Authorization
Bearer Token
This request is using an authorization helper from collection Personal Expenses
Despesas
﻿

Authorization
Bearer Token
This folder is using an authorization helper from collection Personal Expenses
POST
Criar Despesa
http://localhost:3000/expenses
﻿

Authorization
Bearer Token
This request is using an authorization helper from collection Personal Expenses
Body
raw (json)
json
{
  "description": "Almoço de negócios",
  "value": 45.90,
  "date": "2026-06-30",
  "categoryId": 1
}
GET
Buscar Despesa por ID
http://localhost:3000/expenses/1
﻿

Authorization
Bearer Token
This request is using an authorization helper from collection Personal Expenses
DELETE
Deletar Despesa
http://localhost:3000/expenses/1
﻿

Authorization
Bearer Token
This request is using an authorization helper from collection Personal Expenses
GET
Editar Despesa
﻿

Authorization
Bearer Token
This request is using an authorization helper from collection Personal Expenses
GET
Valor Total de Despesas
﻿

Authorization
Bearer Token
This request is using an authorization helper from collection Personal Expenses
GET
Listar Todas as Despesas
http://localhost:3000/expenses
﻿

Authorization
Bearer Token
This request is using an authorization helper from collection Personal Expenses