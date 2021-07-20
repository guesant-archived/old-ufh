# Architecture

This document is designed to provide a simple overview of the architecture and where code resides/should reside. It will be updated as aspects about the project's change.

#### Code structure

The codebase is mostly centered around 4 different types of code.

#### [`app`](../app)

Aplicação [ReactJS](https://reactjs.org/) feita com [ViteJS](https://vitejs.dev/), com os scripts `dev` e `build` configurados.

```sh
# inicia o servidor de desenvolvimento em "http://localhost:3000"
yarn dev
xdg-open http://localhost:3000 &>/dev/null
```

```sh
# gera os arquivos de produção na pasta "dist"
yarn build
```

#### [`services`](../services)

Arquivos compartilhados que são usados em outros pacotes do projeto.
Exemplo: React Contexts compartilhados entre o [`app`](#app) e os [`handlers`](#handlers/*).

#### [`handlers/*`](../handlers)

Interfaces de Usuário que apresentará o arquivo selecionado ao usuário.

- `OpenedFileContext` vem de [`services`](#services).
