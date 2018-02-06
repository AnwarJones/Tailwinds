import { NgModule } from "@angular/core";
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

import { AboutPageMissionComponent } from './about-page-mission.component';
import { AboutPageBioComponent } from './about-page-bio.component';
import { AboutPageComponent} from './about-page.component';
import { EmployeeService } from "./employee.service";
import { AboutPageCompanyComponent } from "./about-page-company.component";
import { BiosComponent } from "./bios/bios.component";
import { EmployeeResolver } from "./employee-resolver.service";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'about'
            , children: [
                {path: '', component: AboutPageComponent},
                { path: 'mission', component: AboutPageMissionComponent},
                {   path: 'team', 
                    component: AboutPageBioComponent,
                    //resolve: {employee: EmployeeResolver}
                    // children: [
                    //     { path: '', redirectTo: 'about-page', pathMatch: 'full'},
                    //     { path: ':id', component: BiosComponent}
                    // ]
                },
                { path: 'company', component: AboutPageCompanyComponent}
            ]}
        ])
       ],
    declarations: [
        AboutPageComponent,
        AboutPageBioComponent,
        AboutPageMissionComponent,
        BiosComponent
      ],
    providers: [EmployeeService, EmployeeResolver]
})
export class AboutPageModule { }
