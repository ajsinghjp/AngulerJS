import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PreloadGuard implements Resolve<any> {
  constructor(private afs: AngularFirestore){}
  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<any> 
    {
      const name = next.paramMap.get('name');
      return this.afs.doc('animals/' + name).valueChanges().pipe(first());
    }
}
