import { fetchQuerySanity } from '../client'
import { IService } from '../../../utils/interfaces/pages/service.interface';

interface IServicesSanity {
    _id: string;
    title: string;
    slug: any;
    shortDescription: string;
}

export default async (): Promise<IService[]> => {
    const data = await fetchQuerySanity<IServicesSanity[]>(`*[_type == "services"]{
        title,
        shortDescription,
        'slug': slug.current,
        _id
    }`);
    if (!data || !Array.isArray(data)) {
        return [];
    }

    return data.map(service=> {
        return {
            title: service.title,
            slug: service.slug,
            description: null,
            shortDescription: service.shortDescription,
            _id: service._id,
        }
    });
}