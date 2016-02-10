"use strict";
var fileSystem = require('fs');
function _stat(filePath, throwOnENOENT) {
    return new Promise((resolve, reject) => {
        fileSystem.stat(filePath, function (err, stats) {
            if (err) {
                if (err.code === 'ENOENT' && !throwOnENOENT) {
                    resolve(null);
                }
                else {
                    reject(err);
                }
            }
            else
                resolve(stats);
        });
    });
}
exports.fs = {
    stat: _stat
};
