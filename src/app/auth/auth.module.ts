import { NgModule } from '@angular/core';
import { COMPONENTS } from './components';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EFFECTS } from './effects';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PAGES } from './pages';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('authFeatureModel', { authState: reducer }),
    EffectsModule.forFeature(EFFECTS),
    MaterialModule,
    AuthRoutingModule
  ],
  exports: [],
  declarations: [COMPONENTS, PAGES],
  providers: [],
})
export class AuthModule { }
