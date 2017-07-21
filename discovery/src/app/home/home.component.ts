import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  inputs:["ninja"]
})
export class HomeComponent implements OnInit {
  myString = 'Let me check out property binding';
  myBoolean = true;
  homeTitle = "Home works better!";

  alertMe(val){
    alert(val);
  }

  constructor() { }

  ngOnInit() {
  }

}
