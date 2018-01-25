import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../shared/models/movie';

@Component({
  selector: '[movieRow]',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.css']
})
export class MovieRowComponent implements OnInit {
  private movie: Movie;

  @Input()
  set movieRow(movie: Movie){
    this.movie = movie;
  }

  constructor() { }

  ngOnInit() {
  }

}
