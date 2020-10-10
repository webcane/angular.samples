import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public users = [
    { name: 'Paul'},
    { name: 'Endy'},
    { name: 'Ana'}
  ];

  public selectedUser;
}
