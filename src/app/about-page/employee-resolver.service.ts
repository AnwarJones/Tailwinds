import { IEmployee } from '../employee';
import { Resolve, Router, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';



@Injectable()
export class EmployeeResolver implements Resolve<IEmployee> {
    constructor(private employeeService: EmployeeService,
                private router: Router) { }
    resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEmployee> {
        const id = route.params['id'];
        if (isNaN(id)) {
            console.log(`Employee id was not a number: ${id}`)
            this.router.navigate(['/team']);
            return Observable.of(null);
        }
        return this.employeeService.getEmployee(+id)
        .map(employee => {
            if (employee) {
                return employee;
            }
            console.log(`Product was not found: ${id}`);
            this.router.navigate(['/team']);
            return null;
        })
        // return this.employeeService.getEmployees()
        .catch(error => {
            console.log(`Retrieval error: ${error}`);
            this.router.navigate(['/team']);
            return Observable.of(null);
        });
    }
}
