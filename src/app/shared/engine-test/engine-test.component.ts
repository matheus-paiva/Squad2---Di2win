import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-engine-test',
  templateUrl: './engine-test.component.html',
  styleUrls: ['./engine-test.component.css']
})
export class EngineTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init();
  }

}
