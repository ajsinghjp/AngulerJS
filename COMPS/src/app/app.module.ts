import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaginfierDirective } from './maginfier.directive';
import { RoundoffPipe } from './roundoff.pipe';
import { BoatComponent } from './boat/boat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MaginfierDirective,    
    RoundoffPipe, BoatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
