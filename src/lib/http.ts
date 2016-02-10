"use strict";

const
    notImplemented = "Not Implemented",
    notFound = "Not Found";

function noi(res: any, message?: string): void {
    res.status(501).json({ message: notImplemented });
}

function nofound(res: any, message?: string): void {
    res.status(501).json({ message: message || notFound });
}

function error(res: any, message: string, status?: number): void {
    res.status(status || 400).json({ message: message });
}

export var http = {
    noi: noi,
    notfound: nofound,
    error: error
}