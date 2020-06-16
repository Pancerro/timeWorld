import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { WorldtimeService } from 'src/app/services/worldtime.service';
import { HoursPipe } from 'src/app/pipe/hours/hours.pipe';
import { DayPipe } from 'src/app/pipe/day/day.pipe';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageComponent],
      providers: [
        {
          provide: WorldtimeService, useValue: {}
        },
        {
          provide: HoursPipe, useValue: {}
        },
        {
          provide: DayPipe, useValue: {}
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return localization', () => {
    expect(component.localization).toBeTruthy();
    expect(component.localization[0]).toEqual({ local: 'Europe/Warsaw' })
  });
});
