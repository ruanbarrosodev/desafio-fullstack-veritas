# 📦 KANBAN BÁSICO

Projeto Mini-Kanban, com persistence JSON

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Go](https://go.dev)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [@dnd-kit](https://dndkit.com)
- [Vite](https://vite.dev)


---

## 📁 Estrutura do Projeto

```
📦 desafio-fullstack-veritas/
├── 📂 frontend/
│   ├── 📂 src/
│   ├───── 📂 components/
│   ├─────── 📄 ButtonAddTask.jsx
│   ├─────── 📄 TaskCard
│   ├─────── 📄 Column
│   ├─────── 📄 TaskFormModal
│   ├─────── 📄 DeleteConfirmModel
│   ├───── 📂 pages/
│   ├─────── 📄 Kanban.jsx
│   ├───── 📂 services/
│   ├─────── 📄 Task.js/
│   ├── 📄 main.jsx
│   ├── 📄 App.jsx
│   ├── 📄 index.html
│   ├── 📄 package.json
├── 📂 backend/
│   ├── 📄 go.mod
│   ├── 📄 handlers.go
│   ├── 📄 main.go
│   ├── 📄 models.go
```

---

## ⚙️ Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (Inclui NPM)
- [Go](https://go.dev)

---

### 🛠️ Instalação Frontend

```bash
# Clone o repositório
git clone https://github.com/ruanbarrosodev/desafio-fullstack-veritas

# Acesse o diretório
cd callingbdesafio-fullstack-veritas/frontend

# Instale as dependências
npm install
```

#### ▶️ Executando o Projeto

```bash
npm run dev
```

Aplicação Frontend em React será executada em: `http://localhost:5137`

### 🛠️ Instalação Backend

```bash

# Acesse o diretório
cd callingbdesafio-fullstack-veritas/backend

# Após ter instalado pré requisitos, execute o projeto
go run .
```

#### ▶️ Executando o Projeto

```bash
go run .
```

A Aplicação backend em Go será executada em: `http://localhost:8080`

---

## 📬 Endpoints Disponíveis

| Método | Rota            | Descrição                     |
|--------|-----------------|-------------------------------|
| GET    | `/tasks`        | Listar Tasks                  |
| DELETE | `/tasks/:id`    | Deletar Task por ID           |
| POST   | `/tasks`        | Criar nova Task               |
| PUT    | `/tasks/:id`    | Atualizar Task por ID         |

---

## ✅ Validação

A API utiliza o `Go` com condições para garantir que os dados obrigatórios sejam fornecidos corretamente em requisições `POST` e `PUT`.

---

## 📌 Observações

- O projeto segue padrão de arquitetura indicada para frontend, e organizada no backend, não foi colocado alguma estrutura de projeto convencional pelo tamanho dele.
---

## 🧑‍💻 Autor

Feito com 💻 por [Ruan Barroso](https://github.com/ruanbarrosodev)

---

