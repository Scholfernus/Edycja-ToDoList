import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: string[]=[];
  title = 'myProject';
  clickHandler(): void{
    console.log("Button clicked! ");
  }
}
