import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent implements OnInit {
 animal$;
  constructor(private afs: AngularFirestore, private route: ActivatedRoute) {}

  ngOnInit() {
  this.animal$ = this.route.paramMap.pipe(
    switchMap(params=> {
      const name = params.get('name');      
      
      return this.afs.doc('animals/' + name).valueChanges();
    })    
  )

  //this.animal$ = this.route.data
  
  }  


}
