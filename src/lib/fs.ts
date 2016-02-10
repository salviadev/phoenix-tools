"use strict";

import * as fileSystem from 'fs';

function _stat(filePath: string, throwOnENOENT: boolean): Promise<fileSystem.Stats> {
    return new Promise<fileSystem.Stats>((resolve, reject) => {
        fileSystem.stat(filePath, function(err, stats) {
            if (err) {
                if (err.code === 'ENOENT' && !throwOnENOENT) {
                    resolve(null);
                } else {
                    reject(err);
                }

            } else
                resolve(stats);
        });
    });

}

export var fs = {
    stat: _stat
}