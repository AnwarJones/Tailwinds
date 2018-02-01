import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BackgroundvidComponent } from './backgroundvid/backgroundvid.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ServicesComponent } from './services/services.component';
import { NewsComponent } from './news/news.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ResourcesComponent } from './resources/resources.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StoriesComponent } from './stories/stories.component';
import { EventsComponent } from './events/events.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutPageCompanyComponent } from './about-page/about-page-company.component';
import { AboutPageMissionComponent } from './about-page/about-page-mission.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BackgroundvidComponent,
    AboutPageComponent,
    ServicesComponent,
    NewsComponent,
    ContactsComponent,
    ResourcesComponent,
    WelcomeComponent,
    StoriesComponent,
    EventsComponent,
    AboutPageCompanyComponent,
    AboutPageMissionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot ([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'about', component: AboutPageComponent },
      {path: 'services', component: ServicesComponent },
      {path: 'news', component: NewsComponent },
      {path: 'resources', component: ResourcesComponent },
      {path: 'contact', component: ContactsComponent },
      {path: '', redirectTo: 'welcome', pathMatch: 'full' },
      {path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
