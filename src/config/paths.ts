export class Path {
    private path: string;

    constructor(path: string) {
        this.path = path;
    }

    public getHref = () => this.path;

    /** Link to an in-page section, e.g. `/#about`. */
    public getAnchor = (id: string) => `${this.path}#${id}`;
}

export const paths = {
    home: new Path("/")
}

/** Anchor ids of the home page sections, shared by the sections and the dock. */
export const homeSections = {
    about: 'about',
    stats: 'stats',
    experiments: 'experiments',
    contact: 'contact',
} as const;
