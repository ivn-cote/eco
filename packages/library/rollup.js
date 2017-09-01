const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const json = require('rollup-plugin-json');

const defaultPlugins = [
  json(),
  babel({
    exclude: 'node_modules/*'
  })
];

const success = script => result => {
  console.log(script + ' was built with success');
};

const scripts = [
  { entry: 'src/index.js',
    moduleName: 'Library',
    dest: 'build/index.js'
  }
];

scripts.map(script => {
  rollup.rollup({
    entry: script.entry,
    plugins: defaultPlugins
  }).then(bundle => {
    return bundle.write({
      format: 'umd',
      moduleName: script.moduleName,
      dest: script.dest
    });
  }).then(success(script.moduleName)).catch(error => { console.error(error); });
});
