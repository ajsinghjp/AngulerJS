import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPollComponent } from './user-poll/user-poll.component';


import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {APP_BASE_HREF} from '@angular/common';  
import { environment } from '../environments/environment';

const config ={
  apiKey: "AIzaSyDRYQYnQpNTAHbdri6UqwuN95L8bdIFJhI",
    authDomain: "fir-50324.firebaseapp.com",
    databaseURL: "https://fir-50324.firebaseio.com",
    projectId: "fir-50324",
    storageBucket: "fir-50324.appspot.com",
    messagingSenderId: "941705641883",
    automaticDataCollectionEnabled: false
  
}

@NgModule({
  declarations: [
    AppComponent,
    UserPollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule 
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]  , 
  entryComponents:[UserPollComponent],
  
})
export class AppModule { 

  constructor(private injector : Injector){}

  ngDoBootstrap() // For bootstrap mannualy
  {
    const el = createCustomElement(UserPollComponent, {injector: this.injector}); // it is bridge to  Convert Angular Component to Custom element that works with native domain API
    customElements.define('user-poll', el); //give a name to CUSTOM ELEMENT and pass it to customelemnts el just created
  }

}
