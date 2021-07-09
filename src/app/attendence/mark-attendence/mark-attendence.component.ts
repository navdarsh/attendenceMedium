import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-mark-attendence',
  templateUrl: './mark-attendence.component.html',
  styleUrls: ['./mark-attendence.component.scss']
})
export class MarkAttendenceComponent implements OnInit {
  userList = [];
  date = null;
  attendenceList = [];
  currentAttendence = {
    date: null,
    attendenceStatus: []
  };

  constructor() {
    this.userList = JSON.parse(localStorage.getItem('userList'));
  }

  ngOnInit(): void {
  }

  checkStatus() {
    localStorage.setItem('userList', JSON.stringify(this.userList))
  }

  saveAttendence() {
    console.log(this.date, this.userList)
    if (!this.date) return alert('please select Date to mark Attendence');
    // let ngxattendencne = {
    //   date: this.date,
    //   attendenceStatus: this.userList
    // };
    let attendence = JSON.parse(JSON.stringify(this.attendenceList));
    if (attendence && attendence.length > 0) {
      attendence.forEach(attendence => {
        console.log(attendence)
        if (attendence.date == this.currentAttendence.date) {
          // confirm('Record Exists,Do you want to update');
          console.log(this.currentAttendence.date, attendence.date)
          attendence.attendenceStatus = this.currentAttendence.attendenceStatus;
        }
      })
    }
    this.attendenceList = attendence;
    //  else {
    //   this.attendenceList.push(ngxattendencne);
    // }
    // ngxattendencne = {
    //   date: null,
    //   attendenceStatus: []
    // };
    console.log(this.attendenceList)
    localStorage.setItem('attendenceStatus', JSON.stringify(this.attendenceList))
  }

  formUsers() {
    this.userList.map(ele => ele.presentStatus = null);
    this.attendenceList.push({
      date: this.date,
      attendenceStatus: this.userList
    });

    this.attendenceList = _.uniqBy(this.attendenceList,'date');

    this.attendenceList.forEach(attendence => {
      if (attendence.date == this.date) {
        this.currentAttendence = _.cloneDeep(attendence)
      }
    });
    console.log(this.attendenceList, this.currentAttendence)
  }

}
