import { InMemoryDbService, InMemoryBackendConfig } from 'angular-in-memory-web-api';

import { IEmployee} from '../employee';
import {  IEventModel } from '../events/ievent';
export class EmployeeData implements InMemoryDbService, InMemoryBackendConfig {
    createDb() {
        let employees: IEmployee[] = [
            {
                'id': 1,
                'firstName' : 'Marvia',
                'lastName' : 'Jones',
                'title': 'Principal',
                'photoUrl': '/assets/Marvia.jpg',
                'academics':[
                    {
                    'school':'University of Kansas',
                    'graduationYear':'2014',
                    'major':'Behavioral Science',
                    'degree':'PhD'
                    },
                    {
                        'school':'University of Kansas - Medical School',
                        'graduationYear':'2012',
                        'major':'Behavioral Science',
                        'degree':'Masters'
                    },
                    {
                        'school':'Florida State University',
                        'graduationYear':'2007',
                        'major':'Chemistry',
                        'degree':'Bachelors of Science'
                    }
                ],
                'experience': [
                    {
                        'organization':'CSX',
                        'beginYear': '2007',
                        'endYear': '2009',
                        'title': 'Environmental Chemicals'
                    },
                    {
                        'organization': 'KU Medical School',
                        'beginYear': '2010',
                        'endYear': '2014',
                        'title' : 'Graduate Assistant'
                    },
                    {
                        'organization': 'MOCSA',
                        'beginYear': '2014',
                        'endYear': '2015',
                        'title': 'Policy Advisor'
                    },
                    {
                        'organization': 'Centers for Disease Control',
                        'beginYear': '2015',
                        'endYear': '2017',
                        'title': 'Doctoral Fellowship',
                    },
                    {
                        'organization': 'Communities Creating Opportunities',
                        'beginYear': '2017',
                        'endYear': '2018',
                        'title': 'Directof of Policy, Programs and Evaluation'
                    }
                ],
                'statement':`I want to come with you to Alderaan. 
                            There\'s nothing for me here now. I want to learn the ways of the Force and be a Jedi, 
                            like my father before me. Your eyes can deceive you. 
                            Don\'t trust them. Don\'t underestimate the Force.`
            },
            {
                'id': 2,
                'firstName' : 'Anwar',
                'lastName' : 'Jones',
                'photoUrl': '/assets/Anwar.jpg',
                'academics': [{
                    'school': 'Florida A&M University',
                    'graduationYear': '2007',
                    'major': 'Business Administration',
                    'degree': 'Masters'
                }],
                'title': 'Head Husband',
                'experience': [],
                'statement': `Hey, Luke! May the Force be with you. Red Five standing by.
                             You don't believe in the Force, do you? As you wish. I'm trying not to, kid.`
            },
            {
                'id': 3,
                'firstName' : 'Titus',
                'lastName' : 'Jones',
                'photoUrl': '/assets/img_0012.jpg',
                'title': 'VP of Media',
                'academics':
                [
                    {
                    'school': 'Holliday Montessori',
                    'graduationYear': '2024',
                    'major': 'Elementary School',
                    'degree': 'Grade School Equivalency'
                    },
                    {
                        'school': 'Atlanta Montessori International',
                        'graduationYear': '2016',
                        'major': 'Montessori',
                        'degree': 'Preschool Equivalency'
                        }
                ],
                'experience': [],
                'statement': `Hey, Luke! May the Force be with you.
                             Red Five standing by. You don't believe in the Force, do you? 
                             As you wish. I'm trying not to, kid.`

            },
            {
                'id': 4,
                'firstName' : 'Hudson',
                'lastName' : 'Jones',
                'photoUrl': '/assets/img_0018.jpg',
                'title': 'Intern - Potty Training',
                'academics': [
                    {
                    'school': 'Atlanta Montessori International',
                    'graduationYear': '2017',
                    'major': 'Montessori',
                    'degree': 'Cutest Kid'
                    }
                    ],
                'experience': [],
                'statement': `Dantooine. They're on Dantooine. You mean it controls your actions?
                             Obi-Wan is here. The Force is with him. Oh God, my uncle. How am I ever gonna explain this?`
            }
        ];
        let events: IEventModel[] = [
            {
                'id': 1,
                'eventTitle': 'First Event',
                'eventStartDate': new Date('15 February 2018 19:00:00 CST'),
                'eventEndDate': new Date ('15 February 2018 20:00:00 CST'),
                'eventLocation': 'Linwood Multi-Purpose Center',
                'eventDetails': 'Something is happening on this date'
            },
            {
                'id': 2,
                'eventTitle': 'Second Event',
                'eventStartDate': new Date ('1 March 2018 15:30:00 CST'),
                'eventEndDate': new Date('1 March 2018 17:00:00 CST'),
                'eventLocation': 'University of Missouri - Kansas City',
                'eventDetails': 'Something else is happening on this date'
            }
        ];
        return {employees, events};
    }
}
