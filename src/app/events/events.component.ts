import { Component, OnInit } from '@angular/core';
import { EventsServiceService } from './events-service.service';
import { IEvent } from './ievent';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers:[EventsServiceService]
})
export class EventsComponent implements OnInit {
  events: IEvent[] = [];
  errorMessage: string

  constructor(private _eventsService: EventsServiceService) { }

  ngOnInit(): void {
    this._eventsService.getEvents()
    .subscribe(events => {this.events = events}, error => this.errorMessage = <any>error)
  }

}
