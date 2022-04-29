import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {
  canshow: boolean = true;
  nome ='Bacalhau';
  constructor() { }

  ngOnInit(): void {
  }

}
