import { fetchQuerySanity } from '../client'
import { IDepartment } from '../../../utils/interfaces/pages/department.interface';

interface IDepartmentSanity {
    _id: string;
    title: string;
    description: string;
    slug: any;
    body: any;
}

export const fetchAllDepartments = async (): Promise<IDepartment[]> => {
    const data = await fetchQuerySanity<IDepartmentSanity[]>(`*[_type == "departments"]{
        title,
        description,
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
            _id: service._id
        }
    });
}

export const fetchSingleDepartment = async (slug: string): Promise<IDepartment> => {
    const data = await fetchQuerySanity<IDepartmentSanity>(`*[_type == "departments" && slug.current == "${slug}"][0]{
        title,
        description,
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
        _id: data._id
    }
}