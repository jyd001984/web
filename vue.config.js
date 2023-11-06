const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    hosts:"localhost",
    port:8081,
    historyApiFallback:true,
    allowedHost:"all"
  }
})

