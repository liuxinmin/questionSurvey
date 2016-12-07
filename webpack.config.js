var webpack = require('webpack');
module.exports = {
    entry:{                     //入口文件
        banner:'./js/banner.js',
        gender:'./js/gender.js',
        illness:'./js/illness.js',
        allergy:'./js/allergy.js',
        basicInfo:'./js/basicInfo.js',
        howFeel:'./js/howFeel.js',
        status:'./js/status.js'
    },
    output:{                   //输出文件
        path:'dist/',
        filename:'js/[name].js',
        publicPath:'../dist/'     //指向
    },
    module:{                   //加载器
        loaders:[{
            test: /\.css$/,
            loader:'style!css'
        },{
            test:/\.scss$/,
            loaders:["style","css","sass"]
        },{
            test:/\.(png|jpg|gif)$/,
            loader:'url-loader?limit=8192&name=img/[name].[ext]'
        }]
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        })
    ]
};