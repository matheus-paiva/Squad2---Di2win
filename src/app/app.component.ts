import { Component, Input } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  User = "Bacalhau";
  title = 'Angular_teste';

  onAcitvate(event:any){
    window.scroll(0,0);
  }
}

