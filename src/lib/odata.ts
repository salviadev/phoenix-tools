"use strict";



function _queryResult(payload: any[], count?:number): any{
    let res = {
        value : payload || []
    }
    if (count !== undefined)
        res['@odata.count'] = count;
    return res;
}

function _query2Options(query: any, options?: any): any {
    var options = options || {};
    if (query) {
        if (query.$skip)
            options.skip = parseInt(query.$skip, 10);
        if (query.$top)
            options.limit = parseInt(query.$top, 10);
    }
    if (options.limit) options.limit++;

    var orderBy = (query && query.$orderby) ? query.$orderby : null;
    if (orderBy) {
        var sort = [];
        orderBy.split(',').forEach(function(value) {
            value = value.trim();
            var a = value.split(' ');
            sort.push([a[0], (a.length > 1 && a[1] === 'desc') ? -1 : 1]);

        });
        options.sort = sort;
    }
    return options;
}

export var odata = {
    queryResult: _queryResult,
    queryOptions: _query2Options
}