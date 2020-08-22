import { fetchQuerySanity } from '../client'
import { IHomePage } from '../../../utils/interfaces/pages/home-page.interface';
import ISeo from '../../../utils/interfaces/pages/seo.interface';

interface IHomePageSanity {
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
    }
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

export default async (): Promise<IHomePage> => {
    const data = await fetchQuerySanity<IHomePageSanity>(`*[_type == "homePage"][0]`);
    return data;
}