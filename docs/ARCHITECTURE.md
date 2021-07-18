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

#### [`app-contexts`](../app-contexts)

[React Contexts](https://reactjs.org/docs/context.html) that can be used across all the project packages.

#### [`app-handler-*`](../)

Generally React Components that will be used as an User Interface to the selected file.

The selected file reference comes from `OpenedFileContext`.

- Used in the [`app`](#app) package.
- `OpenedFileContext` comes from [`app-contexts`](#app-contexts).

#### [`helpers/utils/*`](../helpers/utils/)

JavaScript library that can used by other packages.
