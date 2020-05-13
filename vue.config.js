module.exports = {
    chainWebpack: config => {
        //通过chainwebpack(链式编程方式)进行webpack设置  

        //调用config的when函数判断 如果当前处于发布模式则修改打包入口文件为
        config.when(process.env.NODE_ENV === 'production', config => {
                config
                    .entry('app') //先获取默认地址
                    .clear() //再清除
                    .add('@/main-prod.js') //再添加新的打包入口文件


                // 导入cdn资源，在externals里声明的依赖都不会打包到打包文件里去，从而缩小体积
                config.set('externals', {
                    vue: 'Vue',
                    'vue-router': 'VueRouter',
                    axios: 'axios',
                    lodash: '_',
                    echarts: 'echarts',
                    nprogress: 'NProgress',
                    'vue-quill-editor': 'VueQuillEditor'
                })
                config.plugin('html').tap(args => {
                    args[0].isProd = true
                    return args
                })
            })
            //开发模式
        config.when(process.env.NODE_ENV === 'development', config => {
            config
                .entry('app')
                .clear()
                .add('@/main-dev.js')

            config.plugin('html').tap(args => {
                args[0].isProd = false
                return args
            })
        })
    }
}