module.exports = {
    configureWebpack: {
        devServer: {
            proxy: 'http://localhost:4000',
        }
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    },

    before
}


