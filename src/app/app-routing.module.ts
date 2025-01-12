import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ROUTE_NAMES } from './models/constants';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QueueManagementComponent } from './components/queue-management/queue-management.component';
import { CustomerMasterComponent } from './components/customer-master/customer-master.component';
import { StaffMasterComponent } from './components/staff-master/staff-master.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: ROUTE_NAMES.dashboard, component:DashboardComponent},
  {path: ROUTE_NAMES.queueManagement, component:QueueManagementComponent},
  {path: ROUTE_NAMES.customerMaster, component:CustomerMasterComponent},
  {path: ROUTE_NAMES.staffMaster, component:StaffMasterComponent},
  {path: ROUTE_NAMES.aboutUs, component:AboutUsComponent},
  {path: ROUTE_NAMES.myProfile, component:MyProfileComponent}
] 

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    // CommonModule
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
