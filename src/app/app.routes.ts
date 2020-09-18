import {Routes} from '@angular/router';
import {FootballComponent} from "./football/football.component";
import {AppComponent} from "./app.component";
import {ApiComponent} from "./api/api.component";
import {Covid19Component} from "./covid19/covid19.component";

export const appRoutes: Routes = [
  { path: '', component: ApiComponent},
  { path: 'home', component: ApiComponent},
  { path: 'football', component: FootballComponent},
  { path: 'covid', component: Covid19Component},
  // { path: 'all-movies', component: AllMoviesComponent},
  // { path: 'all-tv-shows', component: AllTvShowsComponent},
  // { path: 'register', component: RegisterComponent},
  // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  // { path: 'movie/:id', component: MovieComponent },
  // { path: 'tv-show/:id', component: TvShowComponent },
  // { path: 'genres', component: GenresListComponent },
  // { path: 'genres/:id/:name', component: GenresComponent },
  // { path: 'genres-tv/:id/:name', component: GenresTvComponent },
  // { path: 'actor/:id', component: ActorComponent },
  // { path: 'settings', component: SettingsComponent },
  // { path: 'searchFilm', component: SearchComponent},
  // { path: 'search/:query', component: SearchMoviesComponent},
  // { path: 'tv-show/:id/seasons/:seasons', component: SeasonsComponent },
  // { path: 'home', component: SearchmoviesComponent },
  // { path: 'tv-show/:id/seasons/:seasons/episode/:episode', component: EpisodesComponent },
  // { path: '**', component: PageNotFoundComponent}
];
