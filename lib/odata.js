"use strict";
function _queryResult(payload, count) {
    let res = {
        value: payload || []
    };
    if (count !== undefined)
        res['@odata.count'] = count;
    return res;
}
exports.odata = {
    queryResult: _queryResult
};
