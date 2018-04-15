import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatCardModule,
  MatTabsModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatCardModule,
  MatTabsModule
];

@NgModule({
  imports: [
    MATERIAL_MODULES
  ],
  exports: [MATERIAL_MODULES],
  declarations: [],
  providers: [],
})
export class SharedModule { }
