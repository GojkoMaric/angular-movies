import { Injectable, Inject } from '@angular/core';
import { movies } from '../examples';
import { Observable, Observer } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable()
export class MovieService {

  private movieList: Array<Movie>;

  constructor() {
    this.movieList = movies.map(this.mapMovies);
   }

  getMovies(){
    return new Observable((o: Observer<any>)=>{
      o.next(this.movieList);
      return o.complete();

    })
  }

  private mapMovies(movie) {
    return new Movie(
      movie.id,
      movie.name,
      movie.director,
      movie.imageUrl,
      movie.duration,
      movie.releaseDate,
      movie.genres
    )
  }

  searchMovies(term): Observable<Movie[]> { 
    const foundMovies = this.movieList.filter((movie: Movie) =>{
      return movie.name.toLocaleLowerCase().includes(term.toLocaleLowerCase());
    });

    if (foundMovies.length === 0){
      return Observable.throw(term);
    }
    return Observable.of(foundMovies);
  }
}
