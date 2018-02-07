import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { subDays, addDays } from 'date-fns';
import { EventColor } from 'calendar-utils';

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
// class RedComponent implements EventColor {
//   constructor() { }
//   primary: '#ad2121';
//   secondary: '#FAE3E3';
// }
// class BlueComponent implements EventColor {
//   constructor() { }
//   primary: '#1e90ff';
//     secondary: '#D1E8FF';
// }
export class CalendarComponent implements OnInit {
  view: string = 'month';

  viewDate: Date = new Date('2016-01-05');
  constructor() { }
  // events: CalendarEvent[] = [
  //   {
  //     start: new Date('2016-01-08'),
  //     end: new Date('2016-01-10'),
  //     title: 'One day excluded event',
  //     color:  EventColor
  //   },
  //   {
  //     start: new Date('2016-01-01'),
  //     end: new Date('2016-01-09'),
  //     title: 'Multiple weeks event',
  //     color: colors.blue
  //   }
  // ];

  // exclude weekends
  excludeDays: number[] = [0, 6];

  skipWeekends(direction: 'back' | 'forward'): void {
    if (this.view === 'day') {
      if (direction === 'back') {
        while (this.excludeDays.indexOf(this.viewDate.getDay()) > -1) {
          this.viewDate = subDays(this.viewDate, 1);
        }
      } else if (direction === 'forward') {
        while (this.excludeDays.indexOf(this.viewDate.getDay()) > -1) {
          this.viewDate = addDays(this.viewDate, 1);
        }
      }
    }
  }

  ngOnInit() {
  }

}
