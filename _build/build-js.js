const rollup = require("rollup");
const { terser } = require("rollup-plugin-terser");

module.exports = (path, options) => {

  const defaults = Object.assign({
    exports: 'default',
    inlineDynamicImports: true
  }, options);

  return new Promise((resolve, reject) => {
    // create a bundle
    (async function() {
      // create a bundle
      const bundle = await rollup.rollup({
        input: path,
        plugins: [terser()]
      });
      const js = await bundle.generate(defaults);
      resolve(js.output[0].code);
    })().catch(err => { 
      console.log(err);
      resolve('');
    });
  })
}