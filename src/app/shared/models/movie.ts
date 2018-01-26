export class Movie {

    constructor (
        private id?: string,
        public name?: string,
        private director?: string,
        private imageUrl?: string,
        private duration?: number,
        private releaseDate?: string,
        private genres?: [string]
    ){ }
}
