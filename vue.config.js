module.exports = {
    configureWebpack: {
        devServer: {
          before(app) {
            let userPool = [
              {username: 'jack', password: '123456'},
              {username: 'pony', password: '123456'}
            ]
            // 用户注册接口
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

            // 用户登录接口
            app.get('/api/login', (req, res) => {
              let token = 'xdclass'
              const {username, password} = req.query
              if(username == 'jack' && password == '123456' || username == 'pony' && password == 123456) {
                return res.json({
                  code: 0,
                  message: '登录成功',
                  token: token + '-' + username + '-' + (new Date().getTime() + 60*60*1000)
                })
              } else {
                return res.json({
                  code: 1,
                  message: '用户名或密码错误'
                })
              }
            })

            app.get('/api/banner', (req, res) => {
              return res.json({
                code: 0,
                items: [
                  {url: 'https://xdclass.net/#/coursedetail?video_id=23', image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/1903/vue2.png'},
                  {url: 'https://xdclass.net/#/coursedetail?video_id=22', image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/1901/webpack/webpack.png'},
                  {url: 'https://xdclass.net/#/coursedetail?video_id=20', image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/1901/vue/vue.png'},
                ]
              })
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


