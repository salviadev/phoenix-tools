import * as fileSystem from 'fs';
export declare var fs: {
    stat: (filePath: string, throwOnENOENT: boolean) => Promise<fileSystem.Stats>;
};
