export interface Album {
    m1: string;
    m2: number;
}

export class Album {
    public m2: number = 12;
}

const a = new Album();
a.m1; // Not implemented but compile.
a.m2;