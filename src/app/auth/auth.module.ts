import { NgModule } from '@angular/core';
import { COMPONENTS } from './components';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [COMPONENTS],
  providers: [],
})
export class AuthModule { }
