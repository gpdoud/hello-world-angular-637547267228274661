import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bootcamp in Angular';
  txt: string = 9;

  clicked() {
    this.title = "Changed the title message";
  }
}
