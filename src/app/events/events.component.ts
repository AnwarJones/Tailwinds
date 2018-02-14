import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventsServiceService } from './events-service.service';
import { IEventModel } from './ievent';
import { Subscription } from 'rxjs/Subscription';
import { UtilsService } from '../core/utils.service';
import { FilterSortService } from '../core/filter-sort.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
  , styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, OnDestroy {
  events: IEventModel[] = [];
  errorMessage: string;
  loading: boolean;
  query: '';
  eventListSub: Subscription;
  filteredEvents: IEventModel[];
  error: boolean;

  constructor(private _eventsService: EventsServiceService,
              public utils: UtilsService,
              public fs: FilterSortService) { }

  ngOnInit(): void {
    this._getEventList();
  }
  private _getEventList(): void {
    this.loading = true;
    this.eventListSub = this._eventsService.getEvents()
                        .subscribe(res => {
                          this.events = res;
                          this.filteredEvents = res;
                          this.loading = false;
                        }, err => {
                          console.log(err);
                          this.loading = false;
                          this.error = true;
                        });
  }
  searchEvents(): void {
    this.filteredEvents = this.fs.search(this.events, this.query, '_id', 'mediumDate');
  }
  resetQuery(): void {
    this.query = '';
    this.filteredEvents = this.events;
  }
  ngOnDestroy() {
    this.eventListSub.unsubscribe();
  }

}
