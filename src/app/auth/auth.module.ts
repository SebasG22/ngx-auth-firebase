import { NgModule } from '@angular/core';
import { COMPONENTS } from './components';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EFFECTS } from './effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('authFeatureModel', { authState: reducer }),
    EffectsModule.forFeature(EFFECTS)
  ],
  exports: [],
  declarations: [COMPONENTS],
  providers: [],
})
export class AuthModule { }
