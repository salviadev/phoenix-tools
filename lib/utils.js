"use strict";
function _copyArray(src, recursive) {
    let res = new Array(src.length);
    src.forEach(function (item, index) {
        if (recursive && Array.isArray(item)) {
            res[index] = _copyArray(item, true);
        }
        else if (recursive && typeof item === 'object') {
            res[index] = _copyObject(item, true);
        }
        else
            res[index] = item;
    });
    return res;
}
function _copyObject(src, recursive) {
    if (!recursive && Object.assign)
        return Object.assign({}, src);
    let res = {};
    Object.keys(src).forEach(function (pn) {
        let item = src[pn];
        if (recursive && Array.isArray(item)) {
            res[pn] = _copyArray(item, true);
        }
        else if (recursive && typeof item === 'object') {
            res[pn] = _copyObject(item, true);
        }
        else
            res[pn] = item;
    });
    return res;
}
function _clone(src, recursive) {
    if (!src)
        return src;
    if (Array.isArray(src)) {
        return _copyArray(src, recursive);
    }
    else if (typeof src === 'object') {
        return _copyObject(src, recursive);
    }
    else
        return src;
}
exports.utils = {
    clone: _clone
};
