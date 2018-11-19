import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { ArrayFormComponent } from './array-form/array-form.component';
import { ValidFormComponent } from './valid-form/valid-form.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';


const routes: Routes = [ {path : '', component : SubmitFormComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
