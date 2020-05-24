import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { GridComponent } from './grid/grid.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [GridComponent, NavbarComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    GridComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
