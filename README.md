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

## ✨ Opportunities

-   Loads the `.env` file and writes variables to `process.env`.
-   Works without errors if `.env` is missing (defaults are used).
-   Supports `\n` and `\r\n` (Windows/Linux).
-   Automatically removes quotes from values.
-   Three usage styles:
-   `env()` function (for simplicity).
-   `loadEnv()` + `env()` (for loading control).
-   `Env` class (for working with multiple files).

## Usage

### Option A - Simple (recommended for most)

```ts
import { env } from '@codemonster-ru/env';

// Takes the PORT value from .env or returns 3000
const port = env('PORT', '3000');
```

### Option B - Explicit loading

```ts
import { loadEnv, env } from '@codemonster-ru/env';

// Load .env.production
loadEnv('.env.production');

const dbHost = env('DB_HOST', 'localhost');
const dbPort = env('DB_PORT', '5432');
```

### Option C - Multiple Files (via Class)

```ts
import { Env } from '@codemonster-ru/env';

const mainEnv = new Env('.env');
const testEnv = new Env('.env.test');

console.log(mainEnv.get('PORT')); // from .env
console.log(testEnv.get('PORT')); // from .env.test
```

## 📑 Example `.env`

```env
PORT=4000
DB_HOST="localhost"
DB_USER=admin
DB_PASS=secret
```

## 🔹 Using with TypeScript

To work type-safely, you can define an environment variable interface:

```ts
interface AppEnv {
    PORT: string;
    DB_HOST: string;
    DB_USER: string;
    DB_PASS: string;
}

// Convenient wrapper for env()
function getEnv<K extends keyof AppEnv>(key: K, defaultValue?: string): AppEnv[K] {
    return env(key, defaultValue) as AppEnv[K];
}

const port = getEnv('PORT', '3000'); // type string
const dbHost = getEnv('DB_HOST', 'localhost');
const dbUser = getEnv('DB_USER');
```

### Option with the `Env` class

```ts
import { Env } from '@codemonster-ru/env';

const env = new Env();

function getEnv<K extends keyof AppEnv>(key: K, defaultValue?: string): AppEnv[K] {
    return env.get(key, defaultValue) as AppEnv[K];
}

const dbPass = getEnv('DB_PASS'); // type string
```

This way, if you make a typo in the key (`getEnv("DB_HOTS")`), TypeScript will immediately indicate the error.

## Scripts

-   `npm test` -- run tests

## 👨‍💻 Author

[**Kirill Kolesnikov**](https://github.com/KolesnikovKirill)

## License

[MIT](https://github.com/codemonster-ru/env-js/blob/main/LICENSE)
