module.exports = function check(str, bracketsConfig) {
    let i = 0;
    while (i < bracketsConfig.length) {
        if (str.includes(bracketsConfig[i].join(''))) {
            str = str.replace(bracketsConfig[i].join(''), '');
            i = 0;
        } else i++;
    }
    return str.length ? false : true;
}
