const loaderUtils = require('loader-utils');
module.exports = function(source) {
    console.log('replace loader');
    const options = loaderUtils.getOptions(this)
    return source.replace(/World/g,options.text)
    // setTimeout(() => {
    //     cb(null,source.replace(/World/g,options.text))
    // }, 2000);
}
