"use strict";
const notImplemented = "Not Implemented", notFound = "Not Found";
function noi(res, message) {
    res.status(501).json({ message: notImplemented });
}
function nofound(res, message) {
    res.status(501).json({ message: message || notFound });
}
function error(res, message, status) {
    res.status(status || 400).json({ message: message });
}
exports.http = {
    noi: noi,
    notfound: nofound,
    error: error
};
