
"use strict";
export var Multitenant = {
    DB: 'db',
    SCHEMA: 'schema',
    SHARE: 'share'
}

function _tenant2prefix(tenantId: number): string {
    const pad = '00000000000000000000000';
    const tp = 5;
    let ts = tenantId + '';
    return pad.substr(0, tp - ts.length) + ts;
}
export function schemaPrefix(tenantId: number, driver: string): string {
    // driver = mongodb/mssql/ora
    return 'c' + _tenant2prefix(tenantId) + '.';
}

export function databaseName(tenantId: number, dbName: string, driver: string): string {
    // driver = mongodb/mssql/ora
    return 'c' + _tenant2prefix(tenantId) + '_' + dbName;
}


export function collectionName(tenantId: number, collectionName: string, driver: string): string {
    // driver = mongodb/mssql/ora
    return schemaPrefix(tenantId, driver) + collectionName;
}


export var multitenant = {
    DB: 'db',
    SCHEMA: 'schema',
    SHARE: 'share',
    schemaPrefix: schemaPrefix,
    databaseName: databaseName,
    collectionName: collectionName
}