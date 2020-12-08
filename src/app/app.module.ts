import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
​
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
​
// Import for the shared module and ALL of its components
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { calendarItemListComponent } from './calendar-item-list/calendar-item-list.component';
import { calendarItemCardComponent } from './calendar-list/calendar-item-card/calendar-item-card.component';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { ReligiousholidaysComponent } from './religiousholidays/religiousholidays.component';
import { SeasonsComponent } from './seasons/seasons.component';

​
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent,
    AddItemFormComponent,
    calendarItemListComponent,
    calendarItemCardComponent,
    EditItemModalComponent,
    HolidaysComponent,
    ReligiousholidaysComponent,
    SeasonsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }