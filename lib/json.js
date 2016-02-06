"use strict";
var fs = require("fs");
function loadFromFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                try {
                    var obj = JSON.parse(data);
                    resolve(obj);
                }
                catch (ex) {
                    reject(ex);
                }
            }
        });
    });
}
exports.json = {
    loadFromFile: loadFromFile
};
