import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendenceRoutingModule } from './attendence-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { MarkAttendenceComponent } from './mark-attendence/mark-attendence.component';
import { ViewAttendenceComponent } from './view-attendence/view-attendence.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddUserComponent, MarkAttendenceComponent, ViewAttendenceComponent],
  imports: [
    CommonModule,
    AttendenceRoutingModule,
    FormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AttendenceModule { }
