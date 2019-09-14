module.exports = {
    configureWebpack: {
        devServer: {
          before(app) {
            let userPool = [
              {username: 'jack', password: '123456'},
              {username: 'pony', password: '123456'}
            ]
            app.get('/api/register', (req, res) => {
              const {username, password} = req.query
              const userNum = userPool.filter(v => v.username == username).length
              if(userNum > 0) {
                return res.json({
                  success: false,
                  message: '用户名已存在'
                })
              } else {
                return res.json({
                  success: true,
                  message: '注册成功'
                })
              }
            })
          }
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
}


