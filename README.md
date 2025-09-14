# @codemonster-ru/env

[![npm
version](https://img.shields.io/npm/v/@codemonster-ru/env.svg?style=flat-square)](https://www.npmjs.com/package/@codemonster-ru/env)
[![Tests](https://github.com/codemonster-ru/env-js/actions/workflows/tests.yml/badge.svg)](https://github.com/codemonster-ru/env-js/actions)
[![License](https://img.shields.io/npm/l/@codemonster-ru/env.svg?style=flat-square)](LICENSE)

Environment variables loader from .env file for Node.js.

## Installation

```bash
npm install @codemonster-ru/env
```

or

```bash
yarn add @codemonster-ru/env
```

## Usage

```ts
import { Env } from '@codemonster-ru/env';

// Load .env from project root
const env = new Env();

// Get variable (with optional default)
const dbHost = env.get('DB_HOST', 'localhost');
const dbPort = env.get('DB_PORT', '5432');

console.log({ dbHost, dbPort });
```

You can also specify a custom path:

```ts
const env = new Env('./config/.env');
```

## Scripts

-   `npm test` -- run tests

## License

MIT License. See [LICENSE](LICENSE).
