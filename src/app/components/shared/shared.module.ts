import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,   
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,    
    MatSnackBarModule,
    MatProgressSpinnerModule, 
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,   
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,    
    MatSnackBarModule,
    MatProgressSpinnerModule, 
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
})
export class SharedModule { }
