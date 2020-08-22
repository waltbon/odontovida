import { IDepartment } from './department.interface';

export interface IDoctor {
    _id: string;
    slug: string;
    title: string;
    fullname: string;
    description: string;
    pictureUrl: string;
    department: IDepartment;
    titles: ITitle[]
}

export interface ITitle {
    title: string;
    years: string;
    university: string;
}