import { Component, OnInit } from '@angular/core';

import { User } from '../../core/models/User';
import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  users : User[] = [];
  filteredUsers : User[] = [];


  constructor(private usersService : UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers () {
    this.usersService.getUsers().subscribe(data =>{
      this.users = data;
      this.filteredUsers = data;
      console.log(this.users);
    })
  }

  search(term: string): void {
    this.filteredUsers = this.users.filter(u =>
      u.name.toLowerCase().indexOf(term.trim().toLowerCase()) !== -1)
  }

}
