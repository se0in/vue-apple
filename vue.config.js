
const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/_variables.scss"; @import "@/assets/scss/mixin.scss";`,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        // 별칭과 경로 설정
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@layout': path.resolve(__dirname, 'src/layout'),
      },
    },
  },
};
