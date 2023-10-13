const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 별칭과 경로 설정
        '@assets': '@/assets',
        '@components': '@/components',
        '@layout': '@/layout',
      },
    },
  },
};
