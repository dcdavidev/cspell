import { defineConfig } from '@cspell/cspell-types';

export default defineConfig({
  version: '0.2',

  enabled: true,
  enableGlobDot: true,

  language: 'en',

  loadDefaultConfiguration: true,

  ignorePaths: [
    '**/*LICENSE*',
    '**/*.log',
    '**/.cache/**',
    '**/.cursor/**',
    '**/.DS_Store',
    '.github/instructions/nx.instructions.md',
    '**/.next/**',
    '**/.npm/**',
    '**/.nx/**',
    '**/.pnp/**',
    '**/.pnpm/**',
    '**/.sass-cache/**',
    '**/.turbo/**',
    '**/.yarn/**',
    '**/build/**',
    '**/connect.lock',
    '**/coverage/**',
    '**/dist/**',
    '**/node_modules/**',
    '**/out/**',
    '**/out-tsc/**',
    '**/tmp/**',
    '**/vendor/**',
    '**/.git/**',
    '**/.svn/**',
    '**/.hg/**',
    '**/package-lock.json',
    '**/pnpm-lock.yaml',
    '**/yarn.lock',
  ],

  allowCompoundWords: true,

  words: ['davdevx'],

  // list of featured dictionaries
  dictionaries: [
    // General dictionaries
    'en-gb',
    'en_US',
    'companies',
    'softwareTerms',
    'misc',

    // Programming languages
    'typescript',
    'node',
    'php',
    'go',
    'python',
    'powershell',
    'html',
    'css',
    'csharp',
    'latex',
    'bash',

    // others
    'fonts',
    'fileTypes',
    'npm',

    // custom
    'devTools',
    'names',
  ],

  dictionaryDefinitions: [
    {
      name: 'devTools',
      path: '../dicts/devTools.txt',
    },
    {
      name: 'names',
      path: '../dicts/names.txt',
    },
  ],
});
