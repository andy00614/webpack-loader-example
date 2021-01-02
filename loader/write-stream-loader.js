const loaderUtils = require('loader-utils')
const fs = require('fs')

module.exports = function (source) {
    console.log('write-stream-loader');
    const writeStream = fs.createWriteStream('result.txt')

    writeStream.write(source,'utf-8')

    writeStream.end()

    writeStream.on('finish',() => {
        console.log('写入完成');
    })

    return source
}