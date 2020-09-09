import { fetchQuerySanity } from '../client'
import { IDoctor } from '../../../utils/interfaces/pages/doctor.interface';

interface IDoctorSanity extends IDoctor {}

export default async (slug: string): Promise<IDoctor> => {
    console.log("slug", slug)
    const data = await fetchQuerySanity<IDoctorSanity>(`*[_type == "doctors" && slug.current == "${slug}"][0]{
        'slug': slug.current,
        title,
        fullname,
        description,
        department->{_id,slug,title},
        personalImage,
        "pictureUrl": personalImage.asset->url,
        titles,
        _id
    }`);
    if (!data) {
        return null;
    }
    return {
        title: data.title,
        description: data.description,
        _id: data._id,
        fullname: data.fullname,
        pictureUrl: data.pictureUrl,
        personalImage: data.personalImage,
        slug: data.slug,
        department: data.department,
        titles: data.titles
    };
}