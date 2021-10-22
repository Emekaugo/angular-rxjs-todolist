import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
  tap,
  switchMap,
  debounceTime,
  distinctUntilChanged
} from "rxjs/operators";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist';

  // term: string = " ";
  // loading: boolean = false;
  // countries$: Observable<Country[]>;
  // private searchTerms = new Subject<string>();

  // constructor(private countryService: CountryService)
  // {
  //   this.countries$ = this.countryService.searchCountry(this.term);
  //  }

  // search(term: string) {
  //   this.searchTerms.next(term);
  // }

  // ngOnInit(): void {
  //   this.countries$ = this.searchTerms.pipe(
  //     tap(_ => this.loading = true),
  //     debounceTime(300),
  //     distinctUntilChanged(),
  //     switchMap((term: string) => this.countryService.searchCountry(term)),
  //     tap(_ => this.loading = false)
  //   )
  // }


}
