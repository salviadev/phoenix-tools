export declare var Multitenant: {
    DB: string;
    SCHEMA: string;
    SHARE: string;
};
export declare function schemaPrefix(tenantId: number, driver: string): string;
export declare function databaseName(tenantId: number, dbName: string, driver: string): string;
export declare function collectionName(tenantId: number, collectionName: string, driver: string): string;
export declare var multitenant: {
    DB: string;
    SCHEMA: string;
    SHARE: string;
    schemaPrefix: (tenantId: number, driver: string) => string;
    databaseName: (tenantId: number, dbName: string, driver: string) => string;
    collectionName: (tenantId: number, collectionName: string, driver: string) => string;
};
