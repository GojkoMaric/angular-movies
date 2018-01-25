import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SharedModule } from './shared/shared.module';
import { MovieRowComponent } from './components/movie-row/movie-row.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MoviesComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MoviesComponent,
    MovieRowComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
