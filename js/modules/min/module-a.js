var moduleA = async (root) => {
  if(!root) {
    return;
  }
  root.textContent = "This is module a";

  const moduleB = await Promise.resolve().then(function () { return moduleB$1; });
  moduleB.default(root);
};

var moduleB = (root) => {
  if(!root) {
    return;
  }
  root.textContent = "This is module b";
};

var moduleB$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': moduleB
});

export { moduleA as default };
