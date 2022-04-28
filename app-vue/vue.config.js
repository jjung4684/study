const { defineConfig } = require('@vue/cli-service');
// const webpack = require("webpack");
const pageName = process.env.PAGE_NAME;

module.exports = defineConfig({
  transpileDependencies: true,
/*  pages :{
      [pageName]:{
          entry: `src/${pageName}/main.js`,
          template: `public/index_${pageName}.html`,
          filename: `index_${pageName}.out.html`,
          title: 'Index Page',
      }
  },*/
  configureWebpack: {
    entry: `./src/${pageName}/main.js`,
    resolve:{
        fallback: { "url": require.resolve("url/") }
    }
    /*plugins: [
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env)
        }),
    ]*/
  },
})
