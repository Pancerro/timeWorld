import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './dashboards/main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HoursPipe } from './pipe/hours/hours.pipe';
import { DayPipe } from './pipe/day/day.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HoursPipe,
    DayPipe,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DayPipe,HoursPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
