import { Pipe, PipeTransform } from '@angular/core';
import { WorldTime } from 'src/app/class/world-time';

@Pipe({
  name: 'hours'
})
export class HoursPipe implements PipeTransform {

  transform(time:WorldTime): string {
    return  time.datetime.split(".")[0].split("T")[1].toString();
  }

}
