import { NgModule } from "@angular/core";
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

import { AboutPageMissionComponent } from './about-page-mission.component';
import { AboutPageBioComponent } from './about-page-bio.component';
import { AboutPageComponent} from './about-page.component';
import { EmployeeService } from "./employee.service";

@NgModule({
    imports: [
        CommonModule,
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
        ],
    providers: [EmployeeService]
})
export class AboutPageModule { }
