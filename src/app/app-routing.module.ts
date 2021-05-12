import { LeadingComment } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AdminComponent } from './admin/admin.component';
import { DataComponent } from './data/data.component';
import { FGroupComponent } from './f-group/f-group.component';
import { HomeComponent } from './home/home.component';
import { HrhelpComponent } from './hrhelp/hrhelp.component';
import { IndexComponent } from './index/index.component';
import { LearningComponent } from './learning/learning.component';
import { LoginComponent } from './login/login.component';
import { NameeditComponent } from './nameedit/nameedit.component';
import { PayrollComponent } from './payroll/payroll.component';
import { ProfileComponent } from './profile/profile.component';
import { TechComponent } from './tech/tech.component';

const routes: Routes = [
  // {path:"",component:HomeComponent},
  
  { path: "", redirectTo: "/admin", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "hr", component: HrhelpComponent },
  { path: "payroll", component: PayrollComponent },
  { path: "profile", component: ProfileComponent },
  { path: "learning", component: LearningComponent },
  { path: "learning/:technology", component: TechComponent },
  { path: "index", component: IndexComponent },
  { path: "admin", component: AdminComponent },
  { path: "admin/:a", component: HomeComponent },
  { path: "data", component: DataComponent },
  {path:"login",component:LoginComponent},
  {path:"name",component:NameeditComponent},
  { path: "add", component: AddComponent },
  { path: "fgroup", component: FGroupComponent },
  {path:"data/:add",component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
