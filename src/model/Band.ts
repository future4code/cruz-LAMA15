export class Band {
    constructor(
        private readonly id: string,
        private name: string,
        private musicGenre: string,
        private responsible: string
    ) {}

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getMusicGenre(): string {
        return this.musicGenre;
    }

    public getResponsible(): string {
        return this.responsible;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setMusicGenre(musicGenre: string): void {
        this.musicGenre = musicGenre;
    }

    public setResponsible(responsible: string): void {
        this.responsible = responsible;
    }

    public static toBandModel (band: any): Band {
        return new Band(band.id, band.name, band.musicGenre, band.responsible)
    }
}

export interface BandInputDTO {
    name: string,
    musicGenre: string,
    responsible: string
}