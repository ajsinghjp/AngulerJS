import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANGULARQUESTIONS';

  clicked=true;

  persons:Array<any>;
  ngOnInit() : void{

  this.persons = [{FirstName : 'John', LastName : 'Doe'},
                  {FirstName : 'Anna', LastName : 'Gray'}];

 }
}
