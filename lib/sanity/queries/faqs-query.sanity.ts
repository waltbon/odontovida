import { fetchQuerySanity } from '../client'
import { IFAQ } from '../../../utils/interfaces/pages/faqs.interface';

export const getFAQsPage = (): Promise<IFAQ> => 
    fetchQuerySanity(`*[_type == "faqs"][0]`);
