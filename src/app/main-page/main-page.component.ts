import { Component, OnInit } from '@angular/core';
import { calendarItem } from '../shared/calendar-item';
import { UpdateEvent } from '../calendar-item-list/calendar-item-list.component';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  calendarItems: calendarItem[] = new Array<calendarItem>()

  // Total calendar Counter
  totalcalendar: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // AddItem method (Add Items to the array)
  addItem(newItem: calendarItem){
    this.calendarItems.push(newItem)
    this.totalcalendar += newItem.amount
  }

  // Delete Method (Which will handle the deletion of each individual card)
  deleteItem(item: calendarItem){
    let index = this.calendarItems.indexOf(item);
    this.calendarItems.splice(index,1);
    this.totalcalendar-= item.amount;
  }

  // Update Method (Which will handle the update of the individual cards)
  updateItem(updateEvent: UpdateEvent){
    // replace the item with the updated/submitted item from the form
    this.calendarItems[this.calendarItems.indexOf(updateEvent.old)] = updateEvent.new;
    this.totalcalendar -= updateEvent.old.amount;
    this.totalcalendar += updateEvent.new.amount;
  }
}
