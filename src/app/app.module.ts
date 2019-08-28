import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
 
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { RetrieveStudentComponent } from './retrieve-student/retrieve-student.component';

const appRoutes:Routes=[
 
  {path:'',component:AddStudentComponent},
  {path:'retrieve',component:RetrieveStudentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddStudentComponent,
    RetrieveStudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent]
})
export class AppModule { }
