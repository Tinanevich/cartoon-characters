export interface ICharacterResponse {
    info: {
        count: number;
        pages: number;
        next: string;
    };
    results: ICharacter[];
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