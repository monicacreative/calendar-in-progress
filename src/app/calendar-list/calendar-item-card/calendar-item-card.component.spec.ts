import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarItemCardComponent } from './calendar-item-card.component';

describe('CalendarItemCardComponent', () => {
  let component: CalendarItemCardComponent;
  let fixture: ComponentFixture<CalendarItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarItemCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
