import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BackgroundvidComponent } from './backgroundvid/backgroundvid.component';
import { ServicesComponent } from './services/services.component';
import { NewsComponent } from './news/news.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ResourcesComponent } from './resources/resources.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StoriesComponent } from './stories/stories.component';
import { EventsComponent } from './events/events.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutPageModule } from './about-page/about-page.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmployeeData } from './about-page/employee-data';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutPageCompanyComponent } from './about-page/about-page-company.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { CalendarComponent } from './contacts/calendar/calendar.component';
import { AuthService } from './auth/auth.service';
import { EmployeesComponent } from './admin/employees/employees.component';
import { ScheduleComponent } from './admin/schedule/schedule.component';
import { DatePipe } from '@angular/common';
import { UtilsService } from './core/utils.service';
import { EventsServiceService } from './events/events-service.service';
import { FilterSortService } from './core/filter-sort.service';
import { ServiceTemplateComponent } from './services/service-template/service-template.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(EmployeeData, { delay: 1000}),
    AboutPageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CalendarModule.forRoot()
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    BackgroundvidComponent,
    ServicesComponent,
    NewsComponent,
    ContactsComponent,
    ResourcesComponent,
    WelcomeComponent,
    StoriesComponent,
    EventsComponent,
    AboutPageCompanyComponent,
    CalendarComponent,
    EmployeesComponent,
    ScheduleComponent,
    ServiceTemplateComponent
  ],
    providers: [AuthService, DatePipe, UtilsService, EventsServiceService, FilterSortService],
    bootstrap: [AppComponent]
})
export class AppModule { }
