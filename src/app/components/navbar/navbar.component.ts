import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  constructor() {}

  toggleMenu() {
    const nav = document.getElementById('navbar');
    nav?.classList.toggle('active');
    nav?.classList.remove('drop');
  }

  toggleDropdown(){
    const nav = document.getElementById('navbar');
    nav?.classList.toggle('drop');
  }

  closeMenu(){
    const nav = document.getElementById('navbar');
    nav?.classList.remove('drop');
    nav?.classList.remove('active');
  }

  ngOnInit(): void {
    Aos.init();
  }
  
  
}