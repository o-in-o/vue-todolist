const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuex-module-decorators',
    /\bvue-awesome\b/
  ]
})
