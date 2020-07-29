import { HttpService } from '../http';

export const getMainInfo = async () => {
    const http = new HttpService(process.env.API_SERVER_URL);
    const response = await http.executeGet('/api/maininfo');
    return response;
}