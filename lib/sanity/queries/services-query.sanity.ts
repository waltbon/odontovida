import { fetchQuerySanity } from '../client'
import { IService } from '../../../utils/interfaces/pages/service.interface';
import { IDoctor } from '../../../utils/interfaces/pages/doctor.interface';
import { urlFor } from '../imageBuilder';

interface IServicesSanity {
    _id: string;
    title: string;
    subtitle: string;
    slug: any;
    shortDescription: string;
    doctor: IDoctor;
    mainImage: any;
    body: any;
}

const mapServiceFromSanity = (service: IServicesSanity): IService => {
    return {
        title: service.title,
        slug: service.slug,
        shortDescription: service.shortDescription,
        subtitle: service.subtitle,
        body: service.body,
        _id: service._id,
        doctor: service.doctor,
        mainImage: service.mainImage,
        mainImageUrl: service.mainImage ? urlFor(service.mainImage).url() : null
    }
}

export const fetchSingleService = async (serviceSlug: string): Promise<IService> => {
    const data = await fetchQuerySanity<IServicesSanity>(`*[_type == "services" && slug.current == '${serviceSlug}'][0]{
        title,
        subtitle,
        shortDescription,
        body,
        'slug': slug.current,
        mainImage,
        doctor->,
        _id
    }`);
    if (!data) {
        return null;
    }

    return mapServiceFromSanity(data);
}

export const fetchAllServicesDetails = async (): Promise<IService[]> => {
    const data = await fetchQuerySanity<IServicesSanity[]>(`
    * | [_type == "services"]{
        title,
        shortDescription,
        mainImage,
        'slug': slug.current,
        doctor->,
        _id
    } | order(title asc)`);
    if (!data || !Array.isArray(data)) {
        return [];
    }

    return data.map(service => mapServiceFromSanity(service));
}

export const fetchAllServicesDetailsSimple = async (): Promise<IService[]> => {
    const data = await fetchQuerySanity<IServicesSanity[]>(`*[_type == "services"]{
        title,
        'slug': slug.current,
        _id
    }`);
    if (!data || !Array.isArray(data)) {
        return [];
    }

    const result = data.map(service => mapServiceFromSanity(service));
    return result;
}