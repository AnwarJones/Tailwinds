import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { IEmployee } from "../employee";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Injectable()
export class EmployeeService {
    private baseUrl = 'api/employees';
    constructor (private http: HttpClient) { }
    getEmployees(): Observable<IEmployee[]> {
        return this.http.get<IEmployee[]>(this.baseUrl);
    }
    getEmployee(id: number): Observable<IEmployee> {
        if (id === 0) {
            return Observable.of(this.initializeEmployee());
        }
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<IEmployee>(url);
    }
    deleteEmployee(id: number): Observable<Response> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });

       const url = `${this.baseUrl}/${id}`;
       return this.http.delete(url, {headers})
           .catch(this.handleError);
    }
    saveEmployee( employee: IEmployee): Observable<IEmployee> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        if (employee.id === 0) {
            return this.createEmployee(employee, options);
        }
        return this.updateEmployee(employee, options);
    }

    private createEmployee(employee: IEmployee, options: RequestOptions): Observable<IEmployee> {
        employee.id = undefined;
        return this.http.post<IEmployee>(this.baseUrl, employee, options.body)
            // .map(this.extractData)
            .do(data => console.log('createProduct: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private updateEmployee(employee: IEmployee, options: RequestOptions): Observable<IEmployee> {
        const url = `${this.baseUrl}/${employee.id}`;
        return this.http.put<IEmployee>(url, employee, options.body)
            // .map(() => product)
            .do(data => console.log('updateEmployee: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    private handleError(error: HttpErrorResponse): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error.error.message);
        return Observable.throw(error.message || `Server error code ${error.status}, ${error.error}`);
    }

    initializeEmployee(): IEmployee {
        // Return an initialized object
        return {
            id: 0,
            photoUrl: null,
            firstName: null,
            lastName: null,
            title: null,
            academics: null,
            experience: null,
            statement: null
        };
    }
}
