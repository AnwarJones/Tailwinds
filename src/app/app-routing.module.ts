import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ServicesComponent } from "./services/services.component";
import { NewsComponent } from "./news/news.component";
import { ResourcesComponent } from "./resources/resources.component";
import { ContactsComponent } from "./contacts/contacts.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
        {path: 'welcome', component: WelcomeComponent},
        {path: 'services', component: ServicesComponent },
        {path: 'news', component: NewsComponent },
        {path: 'resources', component: ResourcesComponent },
        {path: 'contact', component: ContactsComponent },
        {path: '', redirectTo: 'welcome', pathMatch: 'full' },
        {path: '**', redirectTo: 'welcome', pathMatch: 'full' }
        ])
    ],
    exports: [ RouterModule]
})
export class AppRoutingModule { }
