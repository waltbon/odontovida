import { HttpService } from '../http';

export const getSingleDoctor = async (slug: string) => {
    const http = new HttpService(process.env.API_SERVER_URL);
    const response = await http.executeGet(`/api/doctors/${slug}`);
    return response;
}