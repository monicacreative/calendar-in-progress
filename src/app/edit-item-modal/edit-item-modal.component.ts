import { Component, OnInit, Input, Inject } from '@angular/core';
import { calendarItem } from '../shared/calendar-item';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<EditItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item: calendarItem) { }

    //onSubmitted method which handles new updates
    onSubmitted(updatedItem:calendarItem){
      this.dialogRef.close(updatedItem)
    }

  ngOnInit(): void {
  }

}
