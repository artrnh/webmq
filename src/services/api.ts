import axios, {AxiosResponse} from 'axios';

import {IWebm} from 'stores/models/Webm';

interface IThread {
    posts: {
        files: IWebm[];
    };
}

interface ISingleThreadResponse {
    data: {
        threads: IThread[];
    };
}

const instance = axios.create({baseURL: 'https://2ch.hk/b'});

export const getThreads = (): Promise<AxiosResponse> =>
    instance.get('/threads.json');

export const getSingleThread = (
    id: string
): Promise<AxiosResponse<ISingleThreadResponse>> =>
    instance.get(`/res/${id}.json`);
