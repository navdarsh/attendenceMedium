import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  user = { name: '', number: '' }
  userList = [];

  constructor() {
    // localStorage.clear();
    this.userList = JSON.parse(localStorage.getItem('userList')) || [];
  }

  ngOnInit(): void {
  }

  AddUser() {
    this.userList.push(this.user);
    localStorage.setItem('userList', JSON.stringify(this.userList));
    this.resetUser();
  }

  resetUser() {
    this.user = { name: '', number: '' };
  }



  remove(index) {
    this.userList.splice(index,1);
    localStorage.setItem('userList', JSON.stringify(this.userList));
  }
}
