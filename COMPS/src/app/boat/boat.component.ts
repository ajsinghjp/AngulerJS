import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.css']
})
export class BoatComponent implements OnInit {
  @Input() boat : any;
  constructor() { }

  ngOnInit() {
  }

}
