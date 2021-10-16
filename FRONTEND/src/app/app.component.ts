import { Component } from '@angular/core';
import { MonservService } from './monserv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Angular '
   constructor(private monservService: MonservService) {}
   title : string ='tp3'
 
}
