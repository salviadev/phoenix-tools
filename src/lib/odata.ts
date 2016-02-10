"use strict";



function _queryResult(payload: any[], count?: number): any {
    let res = {
        value: payload || []
    }
    if (count !== undefined)
        res['@odata.count'] = count;
    return res;
}

function _query2Options(query: any): any {
    let options: any = {};
    if (query.$skip)
        options.skip = parseInt(query.$skip, 10);
    if (query.$top)
        options.limit = parseInt(query.$top, 10);

    if (options.limit) options.limit++;

    if (query.$orderby) {
        options.sort = query.$orderby.split(',').map(value => {
            value = value.trim();
            let a = value.split(' ');
            return [a[0], (a.length > 1 && a[1] === 'desc') ? -1 : 1];

        });
    }
    return options;
}

function _inlineCount(query: any): boolean {
    return query.$count === 'true';
}

export var odata = {
    queryResult: _queryResult,
    queryOptions: _query2Options,
    inlineCount: _inlineCount
}

