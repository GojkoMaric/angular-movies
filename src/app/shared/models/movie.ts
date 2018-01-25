export class Movie {

    constructor (
        private id?: string,
        private name?: string,
        private director?: string,
        private imageUrl?: string,
        private duration?: number,
        private releaseDate?: Date,
        private genres?: [string]
    ){ }
}
