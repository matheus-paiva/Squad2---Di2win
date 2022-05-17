import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
  

  constructor() { 
     this.toggleMenu();
    
    }
      toggleMenu() {
      const nav = document.getElementById('navbar');
      nav?.classList.toggle('active');
    }
    
    ngOnInit(): void {
      
    }
    
}