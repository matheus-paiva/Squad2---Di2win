import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-fourth-engine',
  templateUrl: './fourth-engine.component.html',
  styleUrls: ['./fourth-engine.component.css']
})
export class FourthEngineComponent implements OnInit {
  scroll(){
    const element = document.getElementById("target");
    element?.scrollIntoView({behavior:"smooth"});
  }
  constructor() { }

  ngOnInit(): void {
    Aos.init();
  }

}
