"use strict";

const
    notImplemented = "Not Implemented",
    notFound = "Not Found";

function noi(req: any, message?: string): void {
    req.status(501).json({ message: notImplemented });
}

function nofound(req: any, message?: string): void {
    req.status(501).json({ message: message || notFound });
}

function error(req: any, message: string, status?: number): void {
    req.status(status || 400).json({ message: message });
}

export var http = {
    noi: noi,
    notfound: nofound,
    error: error
}