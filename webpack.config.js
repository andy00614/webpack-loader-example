const path = require("path");
const SetReadmeWebpackPlugin = require('./plugins/set-readme-webpack-plugin')

module.exports = {
  mode: "development",
  entry: "./src/index",
  target: "node", // 我们编译为Node.js环境下的JS，等下直接使用Node.js执行编译完成的文件
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
            loader: path.resolve(__dirname,'./loader/replace-loader.js'),
            options: {
                name: ''
            }
        },
      },
      {
        test: /\.js$/,
        use: {
            loader: path.resolve(__dirname,'./loader/write-stream-loader.js'),
            options: {
                name: ''
            }
        },
      }
    ],
  },
  plugins: [
      new SetReadmeWebpackPlugin({
          name: 'readme'
      })
  ],
  resolveLoader: {
    modules: ["./node_modules", "./loader"], // 配置loader的查找目录
  },
};
