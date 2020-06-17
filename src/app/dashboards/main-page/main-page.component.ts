import { Component, OnInit } from '@angular/core';
import { WorldtimeService } from 'src/app/services/worldtime.service';
import { WorldTime } from 'src/app/class/world-time';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  private refreshClock: any;
  public choiceTimezone: string;
  public myTimezone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
  public clockTime: WorldTime = new WorldTime("CEST", "2020-01-01T00:00:00.000000+00:00");
  public localization = [{ timezone: 'Europe/Warsaw' }, { timezone: 'America/New_York' }, { timezone: 'Asia/Tokyo' }, { timezone: 'Australia/Sydney' }, { timezone: 'Africa/Cairo' }];

  constructor(
    private readonly timeSerivce: WorldtimeService) { }

  ngOnInit() {
    this.getTime(this.myTimezone);
  }

  public getTime(timezone: string): void {
    clearInterval(this.refreshClock);
    this.choiceTimezone = timezone;
    this.subscription = this.timeSerivce.time(timezone).subscribe((time: WorldTime) =>
      this.clockTime = time);
    this.refreshClock = setInterval(() => this.getTime(timezone), 1000);
  }

  changeBackgroundBadgeHours(mouseover: boolean): void {
    if (mouseover) {
      document.getElementById("hours").classList.remove("bg-success");
      document.getElementById("hours").classList.add("bg-danger");
    }
    else {
      document.getElementById("hours").classList.remove("bg-danger");
      document.getElementById("hours").classList.add("bg-success");
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.refreshClock);
    this.subscription.unsubscribe();
  }
}
