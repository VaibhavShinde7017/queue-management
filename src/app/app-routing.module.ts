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
import { AuthGuard } from './utilities/auth.guard';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: ROUTE_NAMES.login, component:LoginComponent},
  {path: ROUTE_NAMES.dashboard, component:DashboardComponent,canActivate: [AuthGuard]},
  {path: ROUTE_NAMES.queueManagement, component:QueueManagementComponent,canActivate: [AuthGuard]},
  {path: ROUTE_NAMES.customerMaster, component:CustomerMasterComponent,canActivate: [AuthGuard]},
  {path: ROUTE_NAMES.staffMaster, component:StaffMasterComponent,canActivate: [AuthGuard]},
  {path: ROUTE_NAMES.aboutUs, component:AboutUsComponent,canActivate: [AuthGuard]},
  {path: ROUTE_NAMES.myProfile, component:MyProfileComponent,canActivate: [AuthGuard]}
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
