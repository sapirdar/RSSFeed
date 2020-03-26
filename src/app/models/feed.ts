import { ResultsInterface } from 'src/app/models/results.interface';

export class Feed {
    name: string;
    url: string;
    selected = false;

    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }
}
