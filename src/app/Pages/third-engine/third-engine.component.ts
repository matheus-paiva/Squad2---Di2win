import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-engine',
  templateUrl: './third-engine.component.html',
  styleUrls: ['./third-engine.component.css']
})
export class ThirdEngineComponent implements OnInit {
  scroll(){
    const element = document.getElementById("target");
    element?.scrollIntoView();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
