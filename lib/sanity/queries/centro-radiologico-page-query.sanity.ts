import { fetchQuerySanity } from '../client'
import { ICentroRadiologicoPage } from '../../../utils/interfaces/pages/centro-radiologico-page.interface';

export const getCentroRadiologicoPage = async (): Promise<ICentroRadiologicoPage> => 
    fetchQuerySanity<ICentroRadiologicoPage>(`*[_type == "centroRadiologicoPage"][0]`);