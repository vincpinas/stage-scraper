interface ImageProperties {
    uuid: string;
    filename: string;
    directory: string;
    filepath: string;
    publicPath: string;
}

export default class Image {
    uuid: string;
    filename: string;
    directory: string;
    filepath: string;
    publicPath: string;

    url: string;

    constructor(properties: ImageProperties) {
        this.uuid = properties.uuid;
        this.filename = properties.filename;
        this.directory = properties.directory;
        this.filepath = properties.filepath;
        this.publicPath = properties.publicPath;

        this.url = this.getUrl();
    }

    json() {
        return JSON.stringify(this);
    }

    getUrl() {
        return process.env.ASSET_BASE_URL + this.publicPath;
    }
}