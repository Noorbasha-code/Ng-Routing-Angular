import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PayrollComponent } from './payroll/payroll.component';
import { HrhelpComponent } from './hrhelp/hrhelp.component';
import { ProfileComponent } from './profile/profile.component';
import { LearningComponent } from './learning/learning.component';
import { TechComponent } from './tech/tech.component';
import { IndexComponent } from './index/index.component';
import { AdminComponent } from './admin/admin.component';
import { DataComponent } from './data/data.component';
import { AddComponent } from './add/add.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NgIf } from '@angular/common';
import { NameeditComponent } from './nameedit/nameedit.component';
import { FGroupComponent } from './f-group/f-group.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PayrollComponent,
    HrhelpComponent,
    ProfileComponent,
    LearningComponent,
    TechComponent,
    IndexComponent,
    AdminComponent,
    DataComponent,
    AddComponent,
    LoginComponent,
    NameeditComponent,
    FGroupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  
    ],
  providers: [],
  bootstrap: [AppComponent]

  // bootstrap: [HomeComponent]

})
export class AppModule { }
