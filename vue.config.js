const path = require('path');


const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");

module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'prod' ?
    './' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@assets/scss/scss.scss";'
      },
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ["*"]
          })
        ]
      }
    }
  },
  /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
  productionSourceMap: false,
  configureWebpack: { // 覆盖webpack默认配置的都在这里
    resolve: { // 配置解析别名
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@api': path.resolve(__dirname, './src/api'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@views': path.resolve(__dirname, './src/views'),
        '@com': path.resolve(__dirname, './src/components'),
        '@assets': path.resolve(__dirname, './src/assets')
      }
    }
  },

  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    proxy: {
      '/devApi': {
        target: process.env.VUE_APP_URL, // target host
        ws: false, // proxy websockets
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          '^/devApi': ''
        }
      }
    }
  }
}
