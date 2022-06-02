import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-engine',
  templateUrl: './first-engine.component.html',
  styleUrls: ['./first-engine.component.css']
})
export class FirstEngineComponent implements OnInit {
  scroll(){
    const element = document.getElementById("target");
    element?.scrollIntoView({behavior:"smooth"});
  }
  constructor() { }

  ngOnInit(): void {
  }

}
