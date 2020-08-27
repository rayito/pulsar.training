module.exports = {
  pwa: {
    name: 'My App',
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