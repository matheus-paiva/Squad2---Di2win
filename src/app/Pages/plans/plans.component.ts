import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  show: boolean = false;

 /*  scrollToElement($element: any): void {
    
    
    console.log($element); 
    $element.scrollIntoView({inline: "end"});

  } */

  scroll(){
    const element = document.getElementById("target");
    element?.scrollIntoView();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
