(() => {
  document.addEventListener('animationstart', event => {
    const root = event.target;
    const dataset = root.dataset;
    if(!dataset.module) {
      return "No data-module set";
    };
    import(`/js/modules/${dataset.module}.js?${dataset.version || ''}`).then(module => {
      module.default(root);
    }).catch(() => {
      console.error(`Error loading ${dataset.module}`);
    });
  });

  document.head.insertAdjacentHTML('beforeend', `
    <style>
      @keyframes data-module {
        from { outline: 0 }
        to { outline: 0 solid transparent }
      }
      [data-module] {
        animation: data-module 0.001s;
      }
    </style>
  `)
})();