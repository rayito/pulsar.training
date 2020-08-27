module.exports = {
  pwa: {
    name: 'Pulsar Training',
    themeColor: '#5BB89E',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/_global.scss";`
      }
    }
  }
};