import { Component, OnInit, OnDestroy, AfterViewInit, DoCheck } from '@angular/core';
import { version } from 'punycode';
import { Version } from '@angular/compiler';
import { VERSION } from '@angular/platform-browser-dynamic';
import {of} from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit, DoCheck {
  boats;
  clicked= false;
  title = `Angular ${VERSION.full} is rad!`;
  
  constructor() { }

  ngOnInit() {
    //First
   this.boats =of([{name : 'Ajay', year : 1988, img : 'assets/ajay.jpg'},
        {name : 'Vijay', year : 1992, img : 'assets/vijay.jpg'},
        ]);
  }
  handleClick()
  {
    this.clicked = true;        
  }  

  changeTitle()
  {
   
    document.querySelector('#title2').innerHTML = 'Touched the DOM!';
  }

  ngOnDestroy()
  {
    //Last
     //tearDown
  }
  ngAfterViewInit()
  {
    //child view loaded
  }
  ngDoCheck()
  {
    console.log('Checked');
    //check detection
  }
  
}
