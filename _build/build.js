const fs = require('fs');
const path = require('path');
const buildcss = require('./build-css');
const buildjs = require('./build-js');

// paths
const ROOT = process.cwd();
const CSS_DIR = path.join(ROOT, '/css/');
const CSS_MIN_DIR = path.join(ROOT, '/css/min/');

const JS_DIR = path.join(ROOT, '/js/');

(async () => {
  const css = await buildcss(path.join(CSS_DIR, 'main.css'), {});
  fs.writeFileSync(path.join(CSS_MIN_DIR, 'main.css'), css);

  const js = await buildjs(path.join(JS_DIR, 'modules/module-a.js'), {});
  fs.writeFileSync(path.join(JS_DIR, 'modules/min/module-a.js'), js);
})();
