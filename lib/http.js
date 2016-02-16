"use strict";
const notImplemented = "Not Implemented", notFound = "Not Found";
function noi(res, message) {
    res.status(501).json({ message: notImplemented });
}
function nofound(res, message) {
    res.status(400).json({ message: message || notFound });
}
function error(res, message, status) {
    res.status(status || 400).json({ message: message });
}
function exception(res, ex) {
    if (typeof ex === "string")
        ex = { message: ex };
    ex = ex || {};
    ex.message = ex.message || "Internal server error";
    res.status(ex.status || 500).json({ message: ex.message, stack: ex.details || ex.stack });
}
class HttpError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status || 400;
    }
}
exports.HttpError = HttpError;
function _throwHttpError(ex, status, message) {
    if (typeof ex === "string")
        ex = { message: ex };
    ex = ex || {};
    ex.message = ex.message || message;
    let he = new HttpError(ex.message, status || 400);
    he.details = ex.stack;
    throw he;
}
exports.http = {
    noi: noi,
    notfound: nofound,
    error: error,
    exception: exception,
    HttpError: HttpError,
    throwHttpError: _throwHttpError
};
