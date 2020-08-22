import ISeo from './seo.interface';

export interface IHomePage {
    title: string;
    seo: ISeo;
    mainHeader: {
        title: string;
        subtitle: string;
        paragraph: string;
    }
    welcomeSection: {
        title: string;
        subtitle: string;
        description: string;
    },
    aboutSection: [{
        title: string;
        subtitle: string;
        paragraph: string;
    }],
    testimonials: [{
        name: string;
        text: string;
    }]
}