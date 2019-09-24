import axios, {AxiosResponse} from 'axios';
import url from 'url';

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

const corsProxy = url.format({
    protocol: 'https',
    hostname: 'cors-anywhere.herokuapp.com'
});

const dvachUrl = url.format({
    protocol: 'https',
    hostname: '2ch.hk',
    pathname: '/b'
});

const instance = axios.create({baseURL: `${corsProxy}/${dvachUrl}`});

export const getThreads = (): Promise<AxiosResponse> =>
    instance.get('/threads.json');

export const getSingleThread = (
    id: string
): Promise<AxiosResponse<ISingleThreadResponse>> =>
    instance.get(`/res/${id}.json`);
