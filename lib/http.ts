import axios, { AxiosPromise, AxiosInstance } from 'axios';

export class HttpService {
    constructor(
        private readonly apiBaseUrl: string,
        private readonly language: string = 'es') {
    }

    async executeGet<T>(uri: string, query = {}): Promise<T> {
        const client = this.generateInstance('get', uri);
        const response = await client(uri, {
            params: query
        });
        return response.data;
    }

    async executePost<TData, T>(uri: string, data: TData): Promise<T> {
        const instance = this.generateInstance('post', uri);
        const response = await instance.post(uri, data);
        return response.data;
    }

    private generateInstance(method: 'get'|'post', uri: string): AxiosInstance {
        const client = axios.create({
            baseURL: this.apiBaseUrl,
            headers: {
                'accept-language': this.language,
            },
            url: uri,
            method
        });
        return client;
    }
}