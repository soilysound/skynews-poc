const fs = require('fs');

// post css
const postcss = require('postcss');
const csso = require('postcss-csso');
const cssimport = require("postcss-import");

module.exports = (file, options) => {
  const plugins = [ 
    cssimport,
    csso
  ];

  const defaults = Object.assign({
    from: file
  }, options);

  return new Promise((resolve, reject) => {
    // css to be processed
    let css = fs.readFileSync(file, "utf8");
    // process css
    postcss(plugins)
    .process(css, defaults)
    .then((result) => {
      resolve(result.css.toString());
    }).catch((err) => {
      console.log(err);
      reject(err);
    })
  })
}