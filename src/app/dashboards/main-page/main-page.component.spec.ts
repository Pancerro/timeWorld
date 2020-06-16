import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { WorldtimeService } from 'src/app/services/worldtime.service';
import { HoursPipe } from 'src/app/pipe/hours/hours.pipe';
import { DayPipe } from 'src/app/pipe/day/day.pipe';
import { By } from '@angular/platform-browser';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageComponent,HoursPipe,DayPipe],
      providers: [
        {
          provide: WorldtimeService, useValue: {}
        },

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
  it('should return timezone Europe/Warsaw', () => {
    expect(component.localization).toBeTruthy();
    expect(component.localization[0]).toEqual({ timezone: 'Europe/Warsaw' })
  });
  it('should return myTimezone - Europe/Warsaw', () => {
    expect(component.myTimezone).toBeTruthy();
    expect(component.myTimezone).toEqual( Intl.DateTimeFormat().resolvedOptions().timeZone)
  });
  it('should by a click button', fakeAsync( () => {
    fixture.detectChanges();
    spyOn(component, 'getTime');
    let btn = fixture.debugElement.query(By.css('button'));
    btn.triggerEventHandler('click', null);
    tick();
    fixture.detectChanges();
    expect(component.getTime).toHaveBeenCalled();
}));
});
