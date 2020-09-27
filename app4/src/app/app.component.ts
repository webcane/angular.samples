import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app4';

  public selectedUser;

  selectUser(user) {
    console.log(user);
    this.selectedUser = user;
  }
}
