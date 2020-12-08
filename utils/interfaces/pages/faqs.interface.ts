import { IDepartment } from './department.interface';
import ISeo from './seo.interface';

export interface IFAQ {
    _id: string;
    seo: ISeo;
    title: string;
    description: string;
    faqs: IFAQItem[];
}

export interface IFAQItem {
    _id: string;
    _key: string;
    question: string;
    answer: string;
}
