# @davdevx/cspell

a CSpell monorepo for developing cspell configs

## Development

Install dependencies:

```bash
bun install
# or
npm install
# or
yarn install
# or
pnpm install
```

Run Nx commands to build, test, or lint:

```bash
nx build @davdevx/cspell-config
```

## Custom Dictionaries

The workspace includes local dictionaries for CSpell under `packages/cspell-config/dicts/`.  
When using `@davdevx/cspell-config` in any app/package, these dictionaries are automatically available.

## License

MIT
