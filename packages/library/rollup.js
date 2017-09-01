const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const json = require('rollup-plugin-json');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

const defaultPlugins = [
  json(),
  babel({
    exclude: 'node_modules/*'
  }),
  resolve(),
  commonjs()
];

const success = script => result => {
  console.log(script + ' was built with success');
};

const scripts = [
  { entry: 'index.js',
    name: 'Library',
    file: 'build/index.js'
  }
];

scripts
  .map(script => {
    rollup
      .rollup({
        input: script.entry,
        plugins: defaultPlugins
      })
      .then(bundle => {
        return bundle.write({
          format: 'umd',
          name: script.name,
          file: script.file
        });
      })
      .then(success(script.name))
      .catch(error => { console.error(error); });
  });
