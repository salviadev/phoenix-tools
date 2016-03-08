exports.Multitenant = {
    DB: 'db',
    SCHEMA: 'schema',
    SHARE: 'share'
};
function _tenant2prefix(tenantId) {
    const pad = '00000000000000000000000';
    const tp = 5;
    let ts = tenantId + '';
    return pad.substr(0, tp - ts.length) + ts;
}
function schemaPrefix(tenantId, driver) {
    // driver = mongodb/mssql/ora
    return 'c' + _tenant2prefix(tenantId) + '.';
}
exports.schemaPrefix = schemaPrefix;
function databaseName(tenantId, dbName, driver) {
    // driver = mongodb/mssql/ora
    return 'c' + _tenant2prefix(tenantId) + '_' + dbName;
}
exports.databaseName = databaseName;
function collectionName(tenantId, collectionName, driver) {
    // driver = mongodb/mssql/ora
    return schemaPrefix(tenantId, driver) + collectionName;
}
exports.collectionName = collectionName;
exports.multitenant = {
    DB: 'db',
    SCHEMA: 'schema',
    SHARE: 'share',
    schemaPrefix: schemaPrefix,
    databaseName: databaseName,
    collectionName: collectionName
};
