# Prova de Programação Avançada para Web

**Professor:** Otávio Lube  
**Aluna:** Anna Maria Lima da Silva  
**Matrícula:** 202202977

---

Esse projeto contém os códigos da prova de Programação Avançada para Web, disciplina obrigatória do curso de Ciências da Computação na Universidade de Vila Velha.

> Frameworks e bibliotecas:  
>  [![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script) ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Express](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) [![PrismaORM](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/docs/getting-started/quickstart) [![TS-NODE-DEV](https://img.shields.io/badge/TS--NODE--DEV-red?style=for-the-badge&logo=npm&logoColor=white&link=https://www.npmjs.com/package/ts-node-dev)](https://www.npmjs.com/package/ts-node-dev) [![GroqCloud](https://img.shields.io/badge/GroqCloud-f55036?style=for-the-badge&logo=groq&logoColor=white&link=https://console.groq.com/playground)](https://console.groq.com/playground) [![bcrypt](https://img.shields.io/badge/bcrypt-red?style=for-the-badge&logo=npm&logoColor=white&link=https://www.npmjs.com/package/bcrypt?activeTab=readme)](https://www.npmjs.com/package/bcrypt?activeTab=readme) [![jsonwebtoken](https://img.shields.io/badge/jsonwebtoken-red?style=for-the-badge&logo=npm&logoColor=white&link=https://www.npmjs.com/package/jsonwebtoken)](https://www.npmjs.com/package/jsonwebtoken) ![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

---

# Como usar

Abra cada uma das pastas separadamente no Visual Studio Code, ou sua IDE/plataforma de preferência e siga as instruções abaixo:

---

## Pasta **API (Back-End)**

### 1. Configuração Inicial

Primeiro, Crie um arquivo chamado ".env" e escreva o seguinte texto dentro dele:

```
  DATABASE_URL=file:./dev.db
  GROQ_API_KEY=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
```

### 2.Instale as Dependências

Em seguida, abra o terminal e digite:

```
npm install
```

### 3. Executando o Projeto

Você pode executar o projeto através do código:

```
npm run build
```

Se você estiver desevolvendo, o ideal é que, ao invés do `npm run build`, o código usado seja:

```
npm run dev
```

### 4. Resolução de erros

Os erros podem estar relacionado ao PrismaORM, por esse motivo, uma forma de resolvê-los é criando novamente o banco de dados:

```
 npx prisma migrate dev --name init
```

### 5. Extensões do VSCode recomendadas para o desenvolvimento (VSCode):

```
{
    "recommendations": [
        "vscode-icons-team.vscode-icons",
        "esbenp.prettier-vscode",
        "prisma.prisma",
        "Prisma.prisma-insider"
        "rangav.vscode-thunder-client"
        "mikestead.dotenv"
        "qwtel.sqlite-viewer"
    ]
}
```

---

## Pasta Aplicativo **(Front-End)**

### 1. Instale as Dependências

Primeiro, abra o terminal e digite:

```
npm install
```

### 2. Executando o Projeto

Em seguida, você pode executar o projeto através do código:

```
npm run web
```
