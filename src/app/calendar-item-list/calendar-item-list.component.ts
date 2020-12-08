import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { calendarItem } from '../shared/calendar-item';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

// TODO Add modal functionality for upadate
export interface UpdateEvent{
  old: calendarItem;
  new: calendarItem;
}
@Component({
  selector: 'app-calendar-item-list',
  templateUrl: './calendar-item-list.component.html',
  styleUrls: ['./calendar-item-list.component.scss']
})
export class calendarItemListComponent implements OnInit {

  @Input() calendarItems: calendarItem[] = []

  // Adding Outputs for Updates and Deletes
  @Output() delete: EventEmitter<calendarItem> = new EventEmitter<calendarItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();
  
  constructor(public dialog:MatDialog) { }

  onDelete(item: calendarItem){
    this.delete.emit(item);
  }

  //Update Method
  onCardClicked(item: calendarItem){
    // Show the Edit Modal from Angular Material
    const dialogref = this.dialog.open(EditItemModalComponent, { 
      width: '580px',
      data: item
    })

    // Handle the dialog box after the user clicks away
    dialogref.afterClosed().subscribe(result => {
      if(result){
        this.update.emit({
          old:item,
          new:result
        })
      }
    })
  }

  ngOnInit(): void {
  }

}
