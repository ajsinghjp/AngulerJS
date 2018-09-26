import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styles: [`
              div {
                  color: red;
                  background : green;
                }
                `]
})
export class PersonComponent implements OnInit {

  @Input ('firstName') firstName : string;
  @Input ('lastName') lastName : string;
  @Input ('message') message : string;
  constructor() { }

  ngOnInit() {
  }

}
