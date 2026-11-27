# Contributing

Use [GitHub Issues](https://github.com/codemonster-ru/env-js/issues) for reproducible bugs and feature requests.
Include the package version and steps to reproduce the problem.

## Verify a change

From the repository root, run the development checks before opening a pull request.

```bash
npm ci
npm test
npm run build
```

Use a short English commit subject starting with an imperative verb, for example
`Fix package initialization`. Follow the [CodeMonster commit style](https://github.com/codemonster-ru/.github/blob/main/COMMIT_STYLE.md).
Include the checks you ran in the pull request description.

## Release through a pull request

On a branch based on `main`, run `npm run release:patch`, `npm run release:minor`,
or `npm run release:major`. Commit the updated `package.json`, `package-lock.json`,
and changelog, then open a pull request to `main`.

After the pull request merges, use its merge commit SHA to create the release
tag. Replace `MERGE_COMMIT_SHA` with the SHA shown on the merged pull request.

```bash
git fetch origin || exit 1
release_commit=MERGE_COMMIT_SHA
git merge-base --is-ancestor "$release_commit" origin/main || exit 1
version=$(git show "$release_commit:package.json" | node -p 'JSON.parse(require("node:fs").readFileSync(0, "utf8")).version') || exit 1
git tag -a "v$version" "$release_commit" -m "Release v$version" || exit 1
git push origin "refs/tags/v$version"
```

The tag starts the release workflow, which verifies the version and publishes
the package with npm provenance.

Report suspected vulnerabilities through the [security policy](./SECURITY.md).
