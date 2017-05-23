export * from './plugin';

export class Version {
    static apiVersion = '1.0'

    public static getApiVersion() {
        return this.apiVersion;
    }

    public static getVersion() {
        var packageJson = require('../../package.json');
        return packageJson.version;
    }
}