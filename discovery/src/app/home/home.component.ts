import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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
