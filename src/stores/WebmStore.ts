import {observable, action, runInAction} from 'mobx';
import R from 'ramda';

import {api} from 'services';
import {getThreadIds} from 'utils';

import {IWebm} from 'stores/models/Webm';

export interface IWebmStore {
    webms: IWebm[];
    cursor: number;

    getWebms(): Promise<void>;
    prevWebm(): void;
    nextWebm(): void;
}

class WebmStore implements IWebmStore {
    @observable
    public webms = [];

    @observable
    public cursor = 0;

    @action.bound
    async getWebms(): Promise<void> {
        const {
            data: {threads}
        } = await api.getThreads();

        const ids = getThreadIds(threads);
        const promises = ids.map(async id => await api.getSingleThread(id));
        const webmThreads = await Promise.all(promises);

        const webms = R.pipe(
            // @ts-ignore: Thx for beautiful ramda typings,
            // which forces me to use ts-ignore (somehow typings don't work in pipelines)
            R.map(R.path(['data', 'threads'])),
            R.map(R.head),
            R.pluck('posts'),
            R.unnest,
            R.pluck('files'),
            R.reject(R.isEmpty),
            R.unnest,
            R.filter(({name}) => R.test(/.(webm|mp4)$/, name)),
            R.dropRepeats
        )(webmThreads);

        runInAction(() => {
            this.webms = webms;
        });
    }

    @action.bound
    prevWebm(): void {
        this.cursor -= 1;
    }

    @action.bound
    nextWebm(): void {
        this.cursor += 1;
    }
}

export default new WebmStore();
