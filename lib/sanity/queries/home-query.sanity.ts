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
}

export default async (): Promise<IHomePage> => {
    const data = await fetchQuerySanity<IHomePageSanity>(`*[_type == "homePage"][0]`);
    return {
        seo: data.seo,
        title: data.title,
        mainHeader: data.mainHeader
    };
}