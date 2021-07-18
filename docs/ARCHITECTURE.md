# Architecture

This document is designed to provide a simple overview of the architecture and where code resides/should reside. It will be updated as aspects about the project's change.

#### Code structure

The codebase is mostly centered around 4 different types of code.

#### `app`

The end user app, made with [ReactJS](https://reactjs.org/) and the [ViteJS](https://vitejs.dev/) toolchain.

```sh
# start the development server
yarn dev
```

#### `app-contexts`

React Contexts that can be used across all the project packages.

#### `app-handler-\*`

Handler definitions that renders the OpenedFileContext's file.

- Used by `app`.

#### `helpers/utils/\*`

Useful JavaScript functions that is used by other packages.

- Used by `app-handlers`.
