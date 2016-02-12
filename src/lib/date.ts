"use strict";


function _parseISODate(value: string): Date {
    if (!value) return undefined;
    return new Date(value.substr(0, 10));

}

function _parseISODateAsUTC(value: string): Date {
    if (!value) return undefined;
    return new Date(Date.UTC(
        parseInt(value.substr(0, 4), 10),
        parseInt(value.substr(5, 2), 10) - 1,
        parseInt(value.substr(8, 2), 10),
        0, 0, 0));
}



export var date = {
    parseISODateAsUTC: _parseISODate,
    parseISODate: _parseISODate
}