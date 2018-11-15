import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
animals$;
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.animals$ = this.afs.collection('animals').valueChanges();
  }
  
}
