import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const imports =  [
  CommonModule,
  MatButtonModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [imports],
  exports: [imports],
})
export class MaterialModule { }
