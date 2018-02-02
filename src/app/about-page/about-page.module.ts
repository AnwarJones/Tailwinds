import { NgModule } from "@angular/core";
import { RouterModule} from '@angular/router';

import { AboutPageMissionComponent } from './about-page-mission.component';
import { AboutPageBioComponent } from './about-page-bio.component';
import { AboutPageComponent} from './about-page.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'about'
            , children: [
                {path: '', component: AboutPageComponent},
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
export class AboutPageModule { }
