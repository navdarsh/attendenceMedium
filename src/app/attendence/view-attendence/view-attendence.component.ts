import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-attendence',
  templateUrl: './view-attendence.component.html',
  styleUrls: ['./view-attendence.component.scss']
})
export class ViewAttendenceComponent implements OnInit {
  displayRecord = false;
  attendenceList = [];
  attendenceStatus = {
    date:'',
    attendenceStatus:[]
  };
  constructor() {
    this.attendenceList = JSON.parse(localStorage.getItem('attendenceStatus'));
   }

  ngOnInit(): void {
  }

  getAttendence(date){
    console.log(date,this.attendenceList)
     this.attendenceList.map(status => {
       if(status.date == date){
        this.attendenceStatus =status.attendenceStatus;
       }});
    console.log(this.attendenceStatus)
    if(this.attendenceStatus) this.displayRecord = true;
  }

}
