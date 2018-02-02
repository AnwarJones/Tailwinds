import { NgModule } from "@angular/core";
import { RouterModule} from '@angular/router';
import { AboutPageMissionComponent } from './about-page-mission.component';
import { AboutPageBioComponent } from './about-page-bio.component';
import { AboutPageComponent} from './about-page.component';

@NgModule({
    imports: [ 
        RouterModule.forChild([
            { 
                path:''
                ,component: AboutPageComponent
                ,children: [
                {path: '', redirectTo: 'staff', pathMatch: 'full'},
                { path: 'mission', component: AboutPageMissionComponent},
                { path: 'staff', component: AboutPageBioComponent}
            ]}
           
        ])
       ],
    declarations: [
        AboutPageComponent,
        AboutPageBioComponent,
        AboutPageMissionComponent,        
        ]
})
export class AppModule {

}
