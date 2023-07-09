import axios, { AxiosResponse } from 'axios';

export async function HttpGet(url: string, params?: Object): Promise<AxiosResponse> {
    return (await axios.get(url, { params })).data
}

export async function HttpPost(url: string, payload?: Object): Promise<AxiosResponse> {
    return (await axios.post(url, payload)).data
}

export async function HttpPut(url: string, payload?: Object): Promise<AxiosResponse> {
    return (await axios.put(url, payload)).data
}

export async function HttpDelete(url: string): Promise<AxiosResponse> {
    return (await axios.delete(url)).data
}