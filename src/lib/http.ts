"use strict";

const
    notImplemented = "Not Implemented",
    notFound = "Not Found";

function noi(res: any, message?: string): void {
    res.status(501).json({ message: notImplemented });
}

function nofound(res: any, message?: string): void {
    res.status(400).json({ message: message || notFound });
}

function error(res: any, message: string, status?: number): void {
    res.status(status || 400).json({ message: message });
}

function exception(res: any, ex: any): void {
    console.log(ex);
    ex = ex || {};
    ex.message =  ex.message ||  "Internal server error";
    res.status(ex.status || 500).json({ message: ex.message, stack: ex.stack });
}

export var http = {
    noi: noi,
    notfound: nofound,
    error: error,
    exception: exception
}