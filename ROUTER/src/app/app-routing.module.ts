import { NgModule } from '@angular/core';
import { AdminGuard } from './admin.guard';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './about/about.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { PreloadGuard } from './preload.guard';

// const routes: Routes = [
//                     {path : '', component : HomeComponent},                  
//                     {path : 'animals', component : AnimalsComponent,canActivate:[AdminGuard], children : [{path : ':name', component : AnimalDetailComponent}]},
//                     {path : 'animalss', redirectTo : 'animals', pathMatch :'full'},                  
//                     {path : '**', component : ErrorComponent}                  
//                     ];

const routes: Routes = [
  {path : '', component : HomeComponent},                  
  {path : 'animals', component : AnimalsComponent, children : [{path : ':name', component : AnimalDetailComponent}]},
  {path : 'animalss', redirectTo : 'animals', pathMatch :'full'},                  
  {path : '**', component : ErrorComponent}                  
  ];

// const routes: Routes = [
//   {path : '', component : HomeComponent},                  
//   {path : 'animals', component : AnimalsComponent, children : [{path : ':name', component : AnimalDetailComponent, resolve : [PreloadGuard]}]},
//   {path : 'animalss', redirectTo : 'animals', pathMatch :'full'},                  
//   {path : '**', component : ErrorComponent}                  
//   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
