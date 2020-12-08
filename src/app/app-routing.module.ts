import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { ReligiousholidaysComponent } from './religiousholidays/religiousholidays.component';
import { SeasonsComponent } from './seasons/seasons.component';
const routes: Routes = [
  {
    path:'main', 
    component: MainPageComponent  
  },
  {
    path:'login', 
    component: LoginComponent  
  },
  {
    path:'holidays', 
    component: HolidaysComponent  
  },
  {
    path:'religiousholidays', 
    component: ReligiousholidaysComponent 
  },
  {
    path:'seasons', 
    component: SeasonsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }