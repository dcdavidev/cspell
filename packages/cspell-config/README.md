# @dcdavidev/cspell-config

Shared configuration for [cspell](https://cspell.org/) used in Nx workspaces and projects.

This package provides a pre-configured set of dictionaries and ignores to streamline spell checking across projects.

## Installation

```bash
bun add -D @dcdavidev/cspell-config
# or
npm install -D @dcdavidev/cspell-config
# or
yarn add -D @dcdavidev/cspell-config
#or
pnpm add -D @dcdavidev/cspell-config
```

## Usage

In your project root, create a `cspell.config.cjs` (or `.js`/`.ts`) and extend this config:

```js
import { defineConfig } from 'cspell';

export default defineConfig({
  version: '0.2',
  allowCompoundWords: true,
  words: [],
  import: ['@dcdavidev/cspell-config'],
});
```

This will enable:

- Default cspell configuration (`loadDefaultConfiguration: true`)
- English dictionaries (en-gb, en_US)
- Popular programming dictionaries (typescript, node, python, etc.)
- Additional company, software, misc, and npm dictionaries
- Custom dictionaries (`devTools`, `names`) from local `dicts/*.txt`

## Custom Dictionaries

This package includes extra `.txt` dictionaries under the `dicts/` folder:

- `devTools.txt` → terms related to development tools
- `names.txt` → custom names and proper nouns

In the config, they are defined as:

```ts
dictionaryDefinitions: [
  {
    name: 'devTools',
    path: '../dicts/devTools.txt',
  },
  {
    name: 'names',
    path: '../dicts/names.txt',
  },
];
```

## Ignore Paths

The config also ignores common output and cache directories, such as:

- `dist/`, `build/`, `coverage/`
- `node_modules/`, `.nx/`, `.turbo/`
- lockfiles (`package-lock.json`, `pnpm-lock.yaml`, etc.)
- version control directories (`.git/`, `.svn/`, `.hg/`)

This keeps spell checking focused only on source files.

## License

MIT
