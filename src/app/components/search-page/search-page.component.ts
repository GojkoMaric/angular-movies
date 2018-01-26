import { Component, OnInit } from '@angular/core';
import { Injector } from '@angular/core';
import { MovieService } from '../../shared/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../shared/models/movie';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  private movies: Movie[];
  private term;

  constructor(
    // private injector: Injector,
              private _movieService: MovieService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let term = this.route.snapshot.paramMap.get('term');

    this._movieService.searchMovies(term).subscribe(data =>{
      this.movies = data;
      this.term = term;
    }, (term) => {
      alert(`There are no movies with searched term: ${term}`);
      this.router.navigate(['movies']);
    })
  }

}
