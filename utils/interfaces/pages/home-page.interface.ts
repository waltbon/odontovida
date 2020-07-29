import ISeo from './seo.interface';

export interface IHomePage {
    title: string;
    seo: ISeo;
    mainHeader: {
        title: string;
        subtitle: string;
        paragraph: string;
    }
}