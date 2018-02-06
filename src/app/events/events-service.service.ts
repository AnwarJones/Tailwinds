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
  private eventUrl= './api/events';
  constructor(private http: HttpClient) { }

  getEvents(): Observable<IEvent[]>{
    return this.http.get<IEvent[]>(this.eventUrl);
    
  }
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
