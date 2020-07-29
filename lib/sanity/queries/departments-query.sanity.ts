import { fetchQuerySanity } from '../client'
import { IDepartment } from '../../../utils/interfaces/pages/department.interface';

interface IDepartmentSanity {
    _id: string;
    title: string;
    slug: any;
}

export default async (): Promise<IDepartment[]> => {
    const data = await fetchQuerySanity<IDepartmentSanity[]>(`*[_type == "departments"]{
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
            _id: service._id
        }
    });
}