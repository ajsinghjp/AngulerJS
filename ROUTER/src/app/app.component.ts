import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // items: Observable<any[]>;
  // constructor(db: AngularFirestore, private route: ActivatedRoute) {
   //debugger
    // db.collection('Items').add({'Name': 'Cat'});
    // db.collection('Items').add({'Name': 'Dog'});
    // db.collection('Items').add({'Name': 'Monkey'});
    // db.collection('Items').add({'Name': 'Cow'});
    //this.items = db.collection('Items').valueChanges();
    // db.collection('Items').valueChanges().toPromise().then(()=> {
    //   debugger
    // });
    // db.collection('Items').add({'Name': 'Ajay'}).then((data)=>{
    //   debugger

    // });    
  //}
}
