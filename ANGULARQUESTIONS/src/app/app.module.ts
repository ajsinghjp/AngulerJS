import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MagnifierDirective } from './magnifier.directive';
import { YearPipe } from './year.pipe';
import { BoatComponent } from './boat/boat.component';
import { PersonComponent } from './person/person.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MagnifierDirective,
    YearPipe,
    BoatComponent,
    PersonComponent        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



 }
