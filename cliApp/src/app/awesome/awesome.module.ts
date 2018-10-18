import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LowercasePipe } from './lowercase.pipe';
import { UppercasePipe } from '../uppercase.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LowercasePipe, UppercasePipe]
})
export class AwesomeModule { }
