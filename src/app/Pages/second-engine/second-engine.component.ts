import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-second-engine',
  templateUrl: './second-engine.component.html',
  styleUrls: ['./second-engine.component.css']
})
export class SecondEngineComponent implements OnInit {
  scroll(){
    const element = document.getElementById("target");
    element?.scrollIntoView({behavior:"smooth"});
  }
  constructor() { }

  ngOnInit(): void {
    Aos.init();
  }

}
