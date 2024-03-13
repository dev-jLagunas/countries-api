import { Routes } from '@angular/router';
import { CountriesHomeComponent } from '../countries-home/countries-home.component';
import { CountrySingleComponent } from '../countries-home/country-single/country-single.component';

export const routes: Routes = [
  { path: '', component: CountriesHomeComponent, data: { title: 'Home' } },
  { path: 'countries/single/:name', component: CountrySingleComponent },
];
