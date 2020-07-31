import { fetchQuerySanity } from '../client'
import { IService } from '../../../utils/interfaces/pages/service.interface';
import { IDoctor } from '../../../utils/interfaces/pages/doctor.interface';

interface IServicesSanity {
    _id: string;
    title: string;
    subtitle: string;
    slug: any;
    shortDescription: string;
    doctor: IDoctor;
    body: any;
}

export default async (serviceSlug: string): Promise<IService> => {
    const data = await fetchQuerySanity<IServicesSanity>(`*[_type == "services" && slug.current == '${serviceSlug}'][0]{
        title,
        subtitle,
        shortDescription,
        body,
        'slug': slug.current,
        doctor->,
        _id
    }`);
    if (!data) {
        return null;
    }

    return {
        title: data.title,
        slug: data.slug,
        shortDescription: data.shortDescription,
        subtitle: data.subtitle,
        body: data.body,
        _id: data._id,
        doctor: data.doctor
    };
}