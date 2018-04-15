import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions } from '@ngrx/effects';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions
  ) { }
}