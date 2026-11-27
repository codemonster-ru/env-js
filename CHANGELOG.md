# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/ru/1.0.0/),
and this project follows [Semantic Versioning](https://semver.org/lang/ru/).

## [1.1.1] - 2026-11-27

### Changed

-   Publish the package from the corrected commit history with npm provenance.

## [1.1.0] - 2025-09-17

### ✨ Added

-   Functional API:
-   `env(key, default?)` — access to environment variables.
-   `loadEnv(file?)` — explicitly loads the `.env` file.
-   Ability to work as:
-   simple (`env('PORT', '3000')`),
-   with explicit loading (`loadEnv('.env.production')`),
-   via the `Env` class (multiple files).

### 🛠 Improved

-   Missing `.env` no longer throws an error → a warning is now displayed, and the default is used.
-   Support for quotes around values ​​(`"value`, `'value'`).
-   Correct handling of line breaks (`\n`, `\r\n`).
-   Variables from `.env` do not overwrite existing values ​​in `process.env`.

### 🔒 Compatibility

-   The Env class API remains unchanged.
-   Full compatibility with Node.js ESM and TypeScript.

## [1.0.1] - 2025-09-15

### 🛠 Corrected

-   Handling errors when reading `.env`.

## [1.0.0] - 2025-09-10

### 🎉 First release

-   The `Env` class for loading `.env`.
-   The `get(key, default?)` method for retrieving variables.
