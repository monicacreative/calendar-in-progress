import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligiousholidaysComponent } from './religiousholidays.component';

describe('ReligiousholidaysComponent', () => {
  let component: ReligiousholidaysComponent;
  let fixture: ComponentFixture<ReligiousholidaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReligiousholidaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReligiousholidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
