import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserComponent } from './add-user/add-user.component';
import { MarkAttendenceComponent } from './mark-attendence/mark-attendence.component';
import { ViewAttendenceComponent } from './view-attendence/view-attendence.component';

const routes: Routes = [
  { path: 'add-user', component: AddUserComponent },
  { path: 'mark-attendence', component: MarkAttendenceComponent },
  { path: 'view-attendence', component: ViewAttendenceComponent },
  {path:'',redirectTo:'add-user',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendenceRoutingModule { }
