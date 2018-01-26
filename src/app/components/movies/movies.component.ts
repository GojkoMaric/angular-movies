import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  private movies: any[] = [];
  public counter = 0;
  public selectedAll = false;
  public selectedAny = false;

  constructor(private _movieService: MovieService ) {

   }

  ngOnInit() {
    this._movieService.getMovies().subscribe(
      data => {
        this.movies = data;
      }
    )
  }

  public onVoted(agreed: boolean){
    this.counter++;
    this.selectedAny = true;
  }

  selectAll(){
    this.counter = this.movies.length;
  }

  deselectAll(){
    this.counter = 0;
  }

}
