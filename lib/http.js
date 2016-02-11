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
    console.log(ex);
    res.status(status || 500).json({ message: ex.message, stack: ex.stack });
}
exports.http = {
    noi: noi,
    notfound: nofound,
    error: error,
    exception: exception
};
