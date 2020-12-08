import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { calendarItem } from '../../shared/calendar-item';

@Component({
  selector: 'app-calendar-item-card',
  templateUrl: './calendar-item-card.component.html',
  styleUrls: ['./calendar-item-card.component.scss']
})
export class calendarItemCardComponent implements OnInit {

// Input Data for our calendar item
@Input() item: calendarItem | any;

// Outputs for the xButton(deleting the card) and cardClick action(updating the card)
@Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
@Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  onXButtonClick(){
    // Send signal to the x button to delete the card
    this.xButtonClick.emit()
  }

  onCardClick(){
    this.cardClick.emit()
  }

  ngOnInit(): void {
  }

}
