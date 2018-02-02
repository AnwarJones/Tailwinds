import { InMemoryDbService, InMemoryBackendConfig } from 'angular-in-memory-web-api';

import { IEmployee} from '../employee';
export class EmployeeData implements InMemoryDbService, InMemoryBackendConfig {
    createDb() {
        let employees: IEmployee[] = [
            {
                'id': 1,
                'firstName' : 'Marvia',
                'lastName' : 'Jones',
                'title': 'Principal',
                'photoUrl': ''
            },
            {
                'id': 2,
                'firstName' : 'Anwar',
                'lastName' : 'Jones',
                'photoUrl': '',
                'title': 'Head Husband'
            },
            {
                'id': 3,
                'firstName' : 'Titus',
                'lastName' : 'Jones',
                'photoUrl': '',
                'title': 'VP of Media'
            },
            {
                'id': 4,
                'firstName' : 'Hudson',
                'lastName' : 'Jones',
                'photoUrl': '',
                'title': 'Intern - Potty Training'
            }
        ];
        return {employees};
    }
}
