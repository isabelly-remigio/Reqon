# Reqon - Automação do requerimento padrão

**Reqon** é um sistema desenvolvido como parte do projeto de **Engenharia de Software** e **Programação Web 2**, com o objetivo de **automatizar e tornar transparente o processo de requerimento do IFPE (Instituto Federal de Pernambuco)**. O projeto foi idealizado para **reduzir a burocracia** e **aumentar a transparência** no processo de requerimento, facilitando a interação entre os **alunos** e a **instituição**.

---

## 🎯 Problema

O processo de **requisição** no **IFPE** era historicamente **burocrático**, **demorado** e **sem transparência**. Os alunos enfrentavam dificuldades para fazer requerimentos e, muitas vezes, não sabiam o status de seus pedidos. Além disso, a gestão dos requerimentos pelos servidores era feita manualmente, o que aumentava a carga de trabalho e o tempo necessário para processar cada solicitação.

---

## 🚀 Solução

O **Reqon** foi desenvolvido para resolver esses problemas ao **automatizar o processo de requerimento** e **garantir mais transparência** para os alunos e servidores. A plataforma permite que os **alunos** façam seus requerimentos de forma simples e rápida, enquanto os **servidores** podem gerenciar e analisar esses requerimentos de maneira eficiente.

---

## 🧑‍💻 Funcionalidades

- **Cadastro e envio de requerimentos**: Alunos podem preencher e enviar requerimentos de maneira simplificada e intuitiva.
- **Acompanhamento de requerimentos**: Alunos podem acompanhar o status de seus requerimentos em tempo real, garantindo mais transparência.
- **Gestão de requerimentos pelos servidores**: Servidores podem visualizar, analisar, aprovar ou rejeitar os requerimentos dos alunos de maneira centralizada e organizada.

---

## 📦 Instalação

Siga os passos abaixo para rodar o projeto localmente:

### 1. Configure o Banco de Dados

Certifique-se de que você tem um banco de dados (MySQL, PostgreSQL etc.) instalado e em execução.

- Crie um banco com o nome desejado.
- No backend, abra o arquivo `app.module.ts` e atualize as informações de conexão:

```ts
TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'seu_usuario',
  password: 'sua_senha',
  database: 'nome_do_banco',
  ...
});
```

---

### 2. Rode o Backend

```bash
cd backend
npm install
npm run start:dev
```

---

### 3. Rode o Frontend

```bash
cd frontend
cd reqon
npm install
npm start
```

O sistema estará disponível em `http://localhost:3000`.

---

## 🧑‍💻 Contribuindo

Se você deseja contribuir para o desenvolvimento do **Reqon**, siga as instruções abaixo:

### Como contribuir:

1. Faça um fork deste repositório clicando no botão "Fork" no canto superior direito do repositório.

2. Crie uma nova branch para a sua feature ou correção de bug:

   ```bash
   git checkout -b nome-da-feature
   ```

3. Realize as modificações necessárias no código.

4. Commit suas mudanças com uma mensagem clara sobre o que foi feito:

   ```bash
   git commit -m "Descrição das mudanças"
   ```

5. Envie para o repositório remoto:

   ```bash
   git push origin nome-da-feature
   ```

6. Abra um pull request explicando suas mudanças e solicitando a integração com o repositório principal.



## 👥 Equipe

Este projeto foi desenvolvido por:

* **Isabelly Remigio** (Desenvolvedora)
* **Débora Letícia** (Desenvolvedora)


---
---



**Agradecemos por usar o Reqon!** 😊
