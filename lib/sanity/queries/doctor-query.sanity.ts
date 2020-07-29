import { fetchQuerySanity } from '../client'
import { IDoctor } from '../../../utils/interfaces/pages/doctor.interface';
import { SanityImageAssetDocument } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

interface IDoctorSanity extends IDoctor {
}

export default async (slug: string): Promise<IDoctor> => {
    console.log("slug", slug)
    const data = await fetchQuerySanity<IDoctorSanity>(`*[_type == "doctors" && slug.current == "${slug}"][0]{
        'slug': slug.current,
        title,
        fullname,
        description,
        "pictureUrl": personalImage.asset->url,
        _id
    }`);
    if (!data) {
        return null;
    }
    console.log("pictureUrl", data.pictureUrl)
    return {
        title: data.title,
        description: data.description,
        _id: data._id,
        fullname: data.fullname,
        pictureUrl: data.pictureUrl,
        slug: data.slug
    };
}