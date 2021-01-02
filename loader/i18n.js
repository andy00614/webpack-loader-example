const loaderUtils = require('loader-utils')
const path = require('path')
module.exports = function(source) {
    console.log('i18n loader');
    const options = loaderUtils.getOptions(this)
    const locale = options.locale;
    if(!locale)
        return source
    const i18nPath = path.resolve(process.cwd(),'i18n',`${locale}.json`)
    const localeMap = require(i18nPath)
    if(localeMap) {
        const regx = /\$\{(\w+)\}/g
        while(target = regx.exec(source)) {
            const relacedText = target[0]
            const cdt = target[1]
            if(localeMap[cdt])
                source = source.replace(relacedText,localeMap[cdt])
        }
    }
    return source
}