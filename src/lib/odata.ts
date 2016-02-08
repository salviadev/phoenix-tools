"use strict";



function _queryResult(payload: any[], count?:number): any{
    let res = {
        value : payload || []
    }
    if (count !== undefined)
        res['@odata.count'] = count;
    return res;
}

export var odata = {
    queryResult: _queryResult
}