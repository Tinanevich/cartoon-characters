export interface ICharacterResponse {
    info: ICharacterInfo;
    results: ICharacter[];
}
export interface ICharacterInfo {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    gender:	string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
};