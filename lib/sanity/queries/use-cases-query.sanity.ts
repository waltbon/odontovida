import { fetchQuerySanity } from '../client'
import { IFAQ } from '../../../utils/interfaces/pages/faqs.interface';

export const getUseCaseByDrPage = (drId: string): Promise<IFAQ> => 
    fetchQuerySanity(`*[_type == "useCases"][0] {
        
    }`);
