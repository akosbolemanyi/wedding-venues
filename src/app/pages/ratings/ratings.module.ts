import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsRoutingModule } from './ratings-routing.module';
import { RatingsComponent } from './ratings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    RatingsComponent,

  ],
  imports: [
    CommonModule,
    RatingsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class RatingsModule { }
