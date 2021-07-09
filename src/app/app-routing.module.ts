import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
  { path: 'attendence', loadChildren: () => import('./attendence/attendence.module').then(m => m.AttendenceModule) },
  {
    path:'',
    redirectTo:'attendence',
    pathMatch:'full'
  }];

const config: ExtraOptions = {
  useHash: true,
};
@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
