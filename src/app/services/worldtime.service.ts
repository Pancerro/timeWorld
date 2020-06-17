import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorldTime } from '../class/world-time';

@Injectable({
  providedIn: 'root'
})
export class WorldtimeService {

  constructor(private http: HttpClient) { }

  public time(url: string): Observable<WorldTime> {
    return this.http.get<WorldTime>("http://worldtimeapi.org/api/timezone/" + url);
  }
}
