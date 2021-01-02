module.exports = function(source) {
    console.log('replace-loader!!!!!!!!!!!!');
    return source.replace(/World/g,'Loader')
}
