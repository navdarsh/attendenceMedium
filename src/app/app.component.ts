import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'attendanceExample';
  activeTab = 0;

  constructor() {
    this.activeTab = JSON.parse(localStorage.getItem('activeTab'));
    if (!this.activeTab) this.activeTab = 0;
  }

  setActiveTab() {
    localStorage.setItem('activeTab', JSON.stringify(this.activeTab));
  }
}
