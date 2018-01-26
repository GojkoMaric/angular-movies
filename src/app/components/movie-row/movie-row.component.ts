import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../shared/models/movie';

@Component({
  selector: '[movieRow]',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.css']
})
export class MovieRowComponent implements OnInit {
  private movie: Movie;
  private voted = false;

  @Input()
  set movieRow(movie: Movie){
    this.movie = movie;
  }

  @Output() onVoted = new EventEmitter<boolean>();

  constructor() { }

  public ngOnInit() {
  }

  public selectMovie(agreed){
    this.voted = true;
    this.onVoted.emit(agreed);
  }

}
