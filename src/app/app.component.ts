import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'creat-first-app';
  curso: String = "Angular con Spring 5"
  claseActual: String = 'Programacion back con Java';
  profesor: String = 'Andrés Guzman';
}
