import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  show = false;

 /*  scrollToElement($element: any): void {
    
    
    console.log($element); 
    $element.scrollIntoView({inline: "end"});

  } */

  scroll(){
    this.show = true;
    setTimeout(()=>{
      const el=document.getElementById("target")
      el?.scrollIntoView({behavior:"smooth"});
    },1);
    
  }

  constructor() { }

  ngOnInit(): void {
    Aos.init();
  }

}
