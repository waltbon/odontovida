import { IDoctor } from './doctor.interface';
import { IService } from './service.interface';

export interface IUseCase {
    _id: string;
    title: string;
    slug: string;
    useCaseImages: IUseCaseImage[];
    doctor?: IDoctor;
    service?: IService;
}

export interface IUseCaseImage {
    _id: string;
    title: string;
    image: any;
}