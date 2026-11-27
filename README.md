# Env for Node.js

Env loads key-value pairs from `.env` files in Node.js and lets applications read values with
optional defaults. The npm package is `@codemonster-ru/env`.

## Get started

```bash
npm install @codemonster-ru/env
```

```dotenv
PORT=4000
DB_HOST="localhost"
```

Call `env()` to load `.env` from the current working directory on first use.

```ts
import { env } from '@codemonster-ru/env';

const port = env('PORT', '3000');
```

## Load a specific file

```ts
import { env, loadEnv } from '@codemonster-ru/env';

loadEnv('.env.production');
const host = env('DB_HOST', 'localhost');
```

Create separate `Env` instances to read different files. An instance reads its own file first,
then falls back to `process.env` and the supplied default. Loading a file fills missing
`process.env` keys and preserves keys that already exist there. Both `env()` and `Env#get()`
return `null` when a value is missing and no default is supplied.

## Development and support

Run `npm ci`, `npm test`, and `npm run build` from the repository root.
Use [GitHub Issues](https://github.com/codemonster-ru/env-js/issues) for questions and reproducible bugs.

Follow the [contribution guide](./CONTRIBUTING.md) to propose changes.
Report vulnerabilities through the [security policy](./SECURITY.md).

Licensed under the [MIT License](LICENSE).
