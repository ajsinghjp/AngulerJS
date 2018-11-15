import { Component, OnInit } from '@angular/core';
import { version } from 'punycode';
import { VERSION } from '@angular/platform-browser';
import { of } from 'rxjs'; //async Pipe
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clicked = false;
  title = `Angular ${VERSION.full} is rad!`;
  constructor() { }

  ngOnInit() {
  }

  handleClick()
  {
    this.clicked= true;
  }

  boat = {
            name: 'Starfire',
            year : 1977, 
            img : 'assets/vijay.jpg'
          };
  
  students = [
              {
                name: 'Ajay Singh',
                dob : '10/07/1988', 
                img : 'assets/ajay.jpg',
                per : 60.555879
              },{
                name: 'Anoop khuteta',
                dob : '01/01/1985', 
                img : 'assets/Anoop.JPG',
                per : 75.333333
              },
              {
                name: 'Nitij Jhangra',
                dob : '01/01/1987', 
                img : 'assets/Nitij.JPG',
                per : 81.789989
              }
            ];


  company = of([
              {
                name: 'Tata Moter',
                date : '10/07/1975', 
                img : 'assets/tata.jpg',
                shareprice : 185.7548
              },{
                name: 'Lupin',
                date : '01/01/1985', 
                img : 'assets/lupin.png',
                shareprice : 890.999
              },
              {
                name: 'Maruti',
                date : '01/01/1990', 
                img : 'assets/maruti.jpg',
                shareprice : 7500.8555
              }
            ]);

  
boats = of([
              {
                name: 'Tick Tock',                
                img : 'assets/boat1.jpeg'
              },
              {
                name: 'Migao Den',
                img : 'assets/boat2.jpeg'
              },
              {
                name: 'Hubi Dubi',
                img : 'assets/boat3.jpeg'
              }
            ]);

}
