import { fetchQuerySanity } from '../client'
import { IHomePage } from '../../../utils/interfaces/pages/home-page.interface';

export default async (): Promise<IHomePage> => {
    return fetchQuerySanity<any>(`*[_type == "homePage"][0]`);
}