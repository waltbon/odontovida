import { fetchQuerySanity } from '../client'
import { IGeneralInfo } from '../../../utils/interfaces/pages/general-info.interface';

interface IGeneralInfoSanity extends IGeneralInfo {
}

export default async (): Promise<IGeneralInfo> => {
    const data = await fetchQuerySanity<IGeneralInfoSanity>(`*[_type == "generalInfo"][0]{
        contactEmail,
        shortSchedule,
        largeSchedule,
        shortAddress,
        largeAddress,
        mainPhone,
        socialMedia
    }`);
    if (!data) {
        return null;
    }

    return data;
}