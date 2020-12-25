import { fetchQuerySanity } from '../client'
import { IDoctor } from '../../../utils/interfaces/pages/doctor.interface';

interface IDoctorSanity extends IDoctor {}

export const getSingleDoctor =  async (slug: string): Promise<IDoctor> => {
    console.log("slug", slug)
    const data = await fetchQuerySanity<IDoctorSanity>(`*[_type == "doctors" && slug.current == "${slug}"][0]{
        'slug': slug.current,
        title,
        fullname,
        description,
        department->{_id,slug,title},
        personalImage,
        "useCases": *[ _type == "useCases" && doctor._ref == ^._id ]{
            useCaseImages,
            title,
            'slug': slug.current,
            _id
        },
        order,
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
        useCases: data.useCases,
        department: data.department,
        titles: data.titles,
        order: data.order,
    };
}