import { IDepartment } from './department.interface';

export interface IDoctor {
    _id: string;
    slug: string;
    title: string;
    fullname: string;
    description: string;
    pictureUrl: string;
    personalImage?: any;
    department: IDepartment;
    titles: ITitle[]
    order: number
}

export interface ITitle {
    title: string;
    years: string;
    university: string;
}