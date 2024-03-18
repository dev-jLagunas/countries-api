import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../service/countries.service';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../country';
import { RouterLink } from '@angular/router';
import { Observable, switchMap, combineLatest, from } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-country-single',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './country-single.component.html',
  styleUrl: './country-single.component.scss',
})
export class CountrySingleComponent implements OnInit {
  country!: Country;
  borderCountryNames$!: Observable<string[]>;

  constructor(
    private countriesService: CountriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.countriesService.getSingleCountry(name).subscribe((country) => {
        this.country = country;
        this.borderCountryNames$ = from([this.country.borders]).pipe(
          switchMap((borders: string[]) =>
            combineLatest(
              borders.map((border) =>
                this.countriesService.getCountryNameByCode(border)
              )
            )
          )
        );
      });
    }
  }

  toggleDark() {
    document.documentElement.classList.toggle('dark');
  }
}
