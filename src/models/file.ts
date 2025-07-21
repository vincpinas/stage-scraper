import { randomUUID } from "crypto";
import path from "path";

interface FileProperties {
    uid?: string;
    userId?: number;
    type: string;
    filename: string;
    filepath: string;
    publicpath: string;
    mimetype: string | null;
    size: number | null;
}

export default class File {
    userId?: number;

    uid: string;
    type: string;
    mimetype: string | null;
    size: number | null;

    filename: string;
    filepath: string;
    publicpath: string;
    
    directory: string;
    url: string;

    constructor(properties: FileProperties) {
        this.userId = properties.userId;
        this.uid = properties.uid || randomUUID();
        this.type = properties.type;
        this.filename = properties.filename;
        this.filepath = properties.filepath;
        this.publicpath = properties.publicpath;
        this.mimetype = properties.mimetype;
        this.size = properties.size;

        this.directory = this.getDir();
        this.url = this.getUrl();
    }

    json() {
        return JSON.stringify(this);
    }

    getUrl() {
        return process.env.ASSET_BASE_URL + this.publicpath;
    }

    getDir() {
        return path.dirname(this.filepath);
    }
}