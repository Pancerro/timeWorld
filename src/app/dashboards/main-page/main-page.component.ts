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
  public timezone:string;
  public clockTime:WorldTime=new WorldTime("CEST","2020-01-01T00:00:00.037527+02:00");
  private refreshClock: any;
  private subscription:Subscription=new Subscription();
  public localization = [{ local: 'Europe/Warsaw'}, { local: 'America/New_York'}, { local: 'Asia/Tokyo'}, { local: 'Australia/Sydney'}, { local: 'Africa/Cairo'}];
  constructor(
    private readonly timeSerivce: WorldtimeService) { }
  ngOnInit() {
    this.timezone=Intl.DateTimeFormat().resolvedOptions().timeZone
    this.getTime(this.timezone);
  };
  public getTime(url: string):void {
    clearInterval(this.refreshClock);
    this.refreshClock=setInterval(()=>{
    this.subscription=this.timeSerivce.time(url).subscribe((time: WorldTime) => {
      this.clockTime=time;
    })},1000);
  }
  ngOnDestroy(): void {
    clearInterval(this.refreshClock);
    this.subscription.unsubscribe();   
  }
}
