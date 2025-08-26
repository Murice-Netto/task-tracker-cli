[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/license-mit.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)](https://forthebadge.com)

<img src="https://github.com/Murice-Netto/task-tracker-cli/blob/refactor/assets/cover.png?raw=true" alt="cover image" />

<div align="center">
  <br>
  <h1>✅ Task Tracker CLI ✅</h1>
  <strong>Roadmap.sh</strong>
</div>
<br>
<p align="center">
   <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff" alt="Build Status">
   <img src="https://img.shields.io/badge/Linux-FCC624?logo=linux&logoColor=black" alt="Build Status">
   <img src="https://custom-icon-badges.demolab.com/badge/Windows-0078D6?logo=windows11&logoColor=white" alt="Build Status">
   <img src="https://img.shields.io/badge/macOS-000000?logo=apple&logoColor=F0F0F0" alt="Build Status">
</p>

Um pequeno projeto em TypeScript que permite gerenciar suas tarefas direto do
terminal. Com ele, você pode adicionar, atualizar, remover e listar tarefas,
além de marcar o status como a fazer, em progresso ou concluída. Funciona em
**Windows, Linux e macOS**.

## 📝 Funcionalidades

- Adicionar, atualizar e deletar tarefas ➕✏️❌
- Marcar tarefa como a fazer, em progresso ou concluída 📌
- Listar todas as tarefas ou filtrar por status 🔎
- Armazenamento em arquivo JSON simples (criado automaticamente se não
existir) 📂
- Totalmente em linha de comando, sem dependências externas 💻

## ⚙️ Como usar

Faça o download na aba de Releases do repositório para obter o binário para a sua arquitetura/OS!

> **Comandos**

```sh
task-cli add "Buy groceries"

task-cli update 1 "Buy groceries and cook dinner"

task-cli delete 1

task-cli mark-in-progress 1
task-cli mark-done 1

task-cli list
task-cli list done
task-cli list todo
task-cli list in-progress
```

## 👷‍♂️ Buildar

Se quiser um executável, basta clonar o repositório com o comando…

```
git clone https://github.com/Murice-Netto/task-tracker-cli.git
```

```
deno task build
```

```
./bin/task-tracker-[OS] [COMANDOS]
```

## 🛠️ Estrutura do projeto

```
project/
│
├─ bin/                       # Binários
│
├─ assets/
│   └─ cover.png              # Imagem de capa do projeto
│
├─ src/
│   ├─ commands/              # Implementação dos comandos da CLI
│   │   ├─ addTaskCMD.ts
│   │   ├─ deleteTaskCMD.ts
│   │   ├─ listTasks.ts
│   │   ├─ markDone.ts
│   │   ├─ markInProgress.ts
│   │   └─ updateTask.ts
│   │
│   ├─ database/              # Persistência de dados (JSON e memória)
│   │   ├─ Database.ts
│   │   ├─ InMemoryDatabase.ts
│   │   └─ JsonDatabase.ts
│   │
│   ├─ entities/              # Definições de entidades principais
│   │   ├─ Cli.ts
│   │   ├─ Command.ts
│   │   ├─ Task.ts
│   │   └─ TaskStatus.ts
│   │
│   ├─ errors/                # Tratamento de erros customizados
│   │   ├─ CommandNotRegisteredError.ts
│   │   ├─ DatabaseFileNotFoundError.ts
│   │   ├─ InvalidDataError.ts
│   │   ├─ MissingCommandError.ts
│   │   ├─ MissingTaskPropertyError.ts
│   │   └─ TaskNotFoundError.ts
│   │
│   ├─ service/               # Regras de negócio
│   │   └─ TaskService.ts
│   │
│   ├─ utils/                 # Funções auxiliares
│   │   ├─ center-text.ts
│   │   ├─ get-property-from-object.ts
│   │   ├─ get-table-column-size.ts
│   │   └─ main.ts
│   │
│   └─ main.ts                # Entrada principal da aplicação
│
├─ db.json                    # Arquivo onde as tarefas ficam salvas
├─ deno.json                  # Configuração do Deno
├─ deno.lock                  # Lockfile do Deno
├─ LICENSE
└─ README.md
```

## 📄 Licença

MIT License
