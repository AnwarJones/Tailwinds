import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from "@angular/common/http/src/response";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';   
import 'rxjs/add/operator/do';
import { IEvent } from './ievent';

@Injectable()
export class EventsServiceService {
  private _eventUrl= './api/events/events.json';
  constructor(private _http: HttpClient) { }

  getEvents(): Observable<IEvent[]>{
    return this._http.get<IEvent[]>(this._eventUrl)
    .do(data => data.forEach(d=>{
      d.eventDate = new Date(d.eventDate);
      console.log(JSON.stringify(data))
    }))
    .catch(this.handleError);
  }
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
