export class Path {
    private path: string;

    constructor(path: string) {
        this.path = path;
    }

    public getHref = () => this.path;
}

export const paths = {
    home: new Path("/")
}