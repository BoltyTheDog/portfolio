module.exports = {
    chainWebpack: config => {
      // Custom configuration for Vue components
      config.module
        .rule('vue')
        .use('vue-loader')
        .tap(options => {
          options.compilerOptions = {
            ...(options.compilerOptions || {}),
            isCustomElement: tag => tag === 'model-viewer'
          };
          return options;
        });
  
      // Add a rule to handle `.glb` and `.gltf` files
      config.module
        .rule('glb')
        .test(/\.(glb|gltf)$/)
        .use('file-loader')
        .loader('file-loader')
        .end();
    }
  };
  