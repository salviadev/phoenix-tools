"use strict";
import * as fs from "fs";


function loadFromFile(fileName: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        fs.readFile(fileName, 'utf8', function(err, data) {
            if (err) {
                reject(err);
            } else {
                try {
                    var obj = JSON.parse(data);
                    resolve(obj);
                } catch (ex) {
                    reject(ex);
                }
            }
        });
    });
}
export var json = {
    loadFromFile: loadFromFile  
};