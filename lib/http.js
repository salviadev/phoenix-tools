"use strict";
const notImplemented = "Not Implemented", notFound = "Not Found";
function noi(req, message) {
    req.status(501).json({ message: notImplemented });
}
function nofound(req, message) {
    req.status(501).json({ message: message || notFound });
}
function error(req, message, status) {
    req.status(status || 400).json({ message: message });
}
exports.http = {
    noi: noi,
    notfound: nofound,
    error: error
};
