# Todo List Application

Este é um projeto de aplicação Todo List usando Next.js e Prisma com um banco de dados PostgreSQL em Docker.

## Configuração do Projeto

### 1. Criar o Projeto Next.js

Crie um novo projeto Next.js com o comando abaixo. Responda às perguntas conforme suas preferências:

npx create-next-app@latest todo-list

Responda às perguntas conforme suas necessidades:

    Would you like to use TypeScript? No / Yes
    Would you like to use ESLint? No / Yes
    Would you like to use Tailwind CSS? No / Yes
    Would you like to use src/ directory? No / Yes
    Would you like to use App Router? (recommended) No / Yes
    Would you like to customize the default import alias (@/*)? No / Yes
    What import alias would you like configured? @/*

2. Navegar para o Diretório do Projeto


-cd todo-list

3. Abrir o Projeto no Editor de Código


-code .

4. Iniciar o Servidor de Desenvolvimento


-npm run dev

5. Instalar Prisma CLI

Instale o Prisma como uma dependência de desenvolvimento:


-npm install prisma --save-dev

6. Inicializar Prisma

Inicialize Prisma no projeto:

-npx prisma init

7. Configurar o Banco de Dados com Docker

Inicie um container PostgreSQL usando Docker:

-docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

8. Conectar ao Banco de Dados e Criar o Banco de Dados

Conecte-se ao PostgreSQL e crie o banco de dados todo:

-docker exec -it postgres psql -U postgres

No prompt do psql, execute os seguintes comandos:


-CREATE DATABASE todo;
-\c todo;

Verifique as tabelas existentes:

-\dt;

9. Configurar o Schema do Prisma

Edite o arquivo prisma/schema.prisma para definir seus modelos. Após definir o schema, aplique as migrações:

-npx prisma migrate dev --name init

10. Instalar o Prisma Client

Instale o Prisma Client:

-npm install @prisma/client

11. Testar a API

Você pode testar a API de tarefas com o comando curl:

-curl -X GET http://localhost:3000/api/task

12. Abrir o Prisma Studio

Para abrir o Prisma Studio e gerenciar seu banco de dados visualmente, use:

-npx prisma studio

Comandos Resumidos

Aqui está uma lista rápida dos comandos utilizados no projeto:

npx create-next-app@latest todo-list

cd todo-list

code .

npm run dev

npm install prisma --save-dev

npx prisma init

docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

docker exec -it postgres psql -U postgres

CREATE DATABASE todo;

\c todo;

\dt;

npx prisma migrate dev --name init

npm install @prisma/client

curl -X GET http://localhost:3000/api/task

npx prisma studio

Contribuição

Se você deseja contribuir para este projeto, por favor, envie um pull request ou abra um problema para discussão.


