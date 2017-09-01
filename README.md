Ololo
=====

`library` is consumed by `spa_modern`.

Let's try to setup all es6 features including modules.

```shell
npm run setup
```

`spa_modern` has a bundle configuration via Webpack with Babel transformation
```
  loader: 'babel-loader',
  include: [
    path.resolve(BASE_PATH, 'src'),
    // This module is published as ES2015 and must be transpiled
    path.resolve(BASE_PATH, 'node_modules/library'),
    path.resolve(BASE_PATH, '../library') // for local npm linked package
```

In order to have polyfills, it includes also
```diff
  + entry: ['babel-polyfill', './src/index.js'],
  - entry: ['./src/index.js'],
```
And additional setup for Babel
```diff
  ["env", {
+    "useBuiltIns": true,
```

*The problem* though is that there are too many polyfills.

Once we need polyfill for library code, we already have it on SPA level.

Let's consider the second possible way of `library` using — as a prepared script. Rollup with proper plugins can assemble bundled version of the `library` with *all* polyfills.
