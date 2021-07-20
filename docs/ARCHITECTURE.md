# Architecture

This document is designed to provide a simple overview of the architecture and where code resides/should reside. It will be updated as aspects about the project's change.

#### Code structure

The codebase is mostly centered around 4 different types of code.

#### [`app`](../app)

User-end app, that will be served in the World Wide Web. Made with [ReactJS](https://reactjs.org/) and the [ViteJS](https://vitejs.dev/) toolchain.

```sh
# start the development server
yarn dev
```

```sh
# build the app to the `dist` folder
yarn build
```

#### [`services`](../services)

Common files shared across all the app packages, souch as React Contexts.

For example:

- [Opened File](https://reactjs.org/docs/context.html) that adds an uuid to [File](https://developer.mozilla.org/en-US/docs/Web/API/File).

- [React Contexts](https://reactjs.org/docs/context.html) that can be used across all the project packages.

- TypeScript [type definitions](../services/src/types).

#### [`handlers/handler-*`](../handlers)

User Interfaces that renders the selected file from the `OpenedFileContext`.

- `OpenedFileContext` comes from [`services`](#services).
