import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarItemListComponent } from './calendar-item-list.component';

describe('CalendarItemListComponent', () => {
  let component: CalendarItemListComponent;
  let fixture: ComponentFixture<CalendarItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
