import { Pipe, PipeTransform } from '@angular/core';
import { WorldTime } from 'src/app/class/world-time';
import {CommonModule} from "@angular/common";
@Pipe({
  name: 'day'
})
export class DayPipe implements PipeTransform {

  transform(time:WorldTime): any {

       return  time.datetime.split(".")[0].split("T")[0].toString();
  }

}
