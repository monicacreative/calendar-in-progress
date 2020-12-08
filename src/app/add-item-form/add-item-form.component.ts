// ******** Start: Use these import steps to Create the Form ********
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'; // Importing the communication to angular via forms
import { calendarItem } from '../shared/calendar-item';
// ******** End: Use these import steps to Create the Form ********

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  // Two-Way Data Binding via inputs and outputs
  // While also using an event emitter to display
  // The form data

  @Input() item: calendarItem = new calendarItem('', 0);
  @Output() formSubmit: EventEmitter<calendarItem> = new EventEmitter


  constructor() { }

  // Creation of onSubmit method to submit our form data
  onSubmit(form: NgForm){
    console.log(this.formSubmit.emit(form.value));
  }

  ngOnInit(): void {
  }

}
