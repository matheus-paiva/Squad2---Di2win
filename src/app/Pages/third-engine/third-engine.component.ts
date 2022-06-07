import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-third-engine',
  templateUrl: './third-engine.component.html',
  styleUrls: ['./third-engine.component.css']
})
export class ThirdEngineComponent implements OnInit {
  scroll(){
    const element = document.getElementById("target");
    element?.scrollIntoView({behavior:"smooth"});
  }
  constructor() { }

  ngOnInit(): void {
    Aos.init();
  }

}
