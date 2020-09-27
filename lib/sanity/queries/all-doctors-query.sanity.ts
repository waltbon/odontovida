import { fetchQuerySanity } from '../client'
import { IDoctor } from '../../../utils/interfaces/pages/doctor.interface';

interface IDoctorSanity extends IDoctor {
}

export const allDoctorsInfo = async (): Promise<IDoctor[]> => {
    const data = await fetchQuerySanity<IDoctorSanity[]>(`*[_type == "doctors"]{
        'slug': slug.current,
        title,
        fullname,
        personalImage,
        description,
        _id
    }`);
    if (!data) {
        return null;
    }

    return data;
}

export const getAllDoctorsSimpleInfo = async (): Promise<IDoctor[]> => {
    const data = await fetchQuerySanity<IDoctorSanity[]>(`*[_type == "doctors"]{
        'slug': slug.current,
        title,
        fullname,
        order,
        _id
    }`);
    if (!data) {
        return null;
    }

    return data;
}