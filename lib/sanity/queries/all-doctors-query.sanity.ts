import { fetchQuerySanity } from '../client'
import { IDoctor } from '../../../utils/interfaces/pages/doctor.interface';

interface IDoctorSanity extends IDoctor {
}

export default async (): Promise<IDoctor[]> => {
    const data = await fetchQuerySanity<IDoctorSanity[]>(`*[_type == "doctors"]{
        'slug': slug.current,
        title,
        fullname,
        description,
        _id
    }`);
    if (!data) {
        return null;
    }

    return data;
}