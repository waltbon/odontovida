import { IDepartment } from './department.interface';
import { IUseCase } from './use-cases.inteface';

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
    order: number;
    useCases?: IUseCase[]
}

export interface ITitle {
    title: string;
    years: string;
    university: string;
}