import { IEducationObject } from './educationObject';
import { IWorkExperience } from './workExperience';

/*Defines the employee entity */
export interface IEmployee {
    id: number;
    photoUrl: string;
    firstName: string;
    lastName: string;
    title: string;
    academics: IEducationObject[];
    experience: IWorkExperience[];
    statement: string;
}
