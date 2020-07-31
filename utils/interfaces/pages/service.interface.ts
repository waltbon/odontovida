import { IDoctor } from './doctor.interface';

export interface IService {
    _id: string;
    slug: string;
    title: string;
    subtitle: string;
    shortDescription: string;
    doctor: IDoctor;
    body: any;
}