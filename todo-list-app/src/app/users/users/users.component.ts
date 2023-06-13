import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor() {}

  ngOnInit(): void {
    console.log('users');
    debugger;
    this.users.push({ id: 1, name: 'Miguel angel jimenez' });
    this.users.push({ id: 2, name: 'Cintia jimenez' });
    this.users.push({ id: 3, name: 'Manuel jimenz' });
  }
}
