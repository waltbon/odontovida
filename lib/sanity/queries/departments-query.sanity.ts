import { fetchQuerySanity } from '../client'
import { IDepartment } from '../../../utils/interfaces/pages/department.interface';

interface IDepartmentSanity {
    _id: string;
    title: string;
    slug: any;
    description: string;
    icon: string;
    body: any;
}

export const fetchAllDepartments = async (): Promise<IDepartment[]> => {
    const data = await fetchQuerySanity<IDepartmentSanity[]>(`*[_type == "departments"]{
        title,
        description,
        icon,
        'slug': slug.current,
        _id
    }`);
    if (!data || !Array.isArray(data)) {
        return [];
    }

    return data.map(service => {
        return {
            title: service.title,
            slug: service.slug,
            description: service.description,
            _id: service._id,
            body: service.body,
            icon: service.icon
        }
    });
}

export const fetchSingleDepartment = async (slug: string): Promise<IDepartment> => {
    const data = await fetchQuerySanity<IDepartmentSanity>(`*[_type == "departments" && slug.current == "${slug}"][0]{
        title,
        description,
        icon,
        'slug': slug.current,
        body,
        _id
    }`);
    if (!data) {
        return null;
    }

    return {
        title: data.title,
        slug: data.slug,
        description: data.description,
        body: data.body,
        icon: data.icon,
        _id: data._id
    }
}