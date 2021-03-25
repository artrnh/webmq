import {observable, action, runInAction} from 'mobx';
import R from 'ramda';
import url from 'url';

import {api} from 'services';
import {getThreadIds} from 'utils';

import {IWebm} from 'stores/models/Webm';

export interface IWebmStore {
    webms: IWebm[];
    cursor: number;
    looping: boolean;

    getWebms(): Promise<void>;
    prevWebm(): void;
    nextWebm(): void;
    copyLink(): void;
    switchLooping(): void;
}

class WebmStore implements IWebmStore {
    @observable
    public webms = [];

    @observable
    public cursor = 0;

    @observable
    public looping = false;

    @action.bound
    async getWebms(): Promise<void> {
        const {
            data: {threads}
        } = await api.getThreads();

        const ids = getThreadIds(threads);
        const promises = ids.map(async id => await api.getSingleThread(id));
        const webmThreads = await Promise.all(promises);

        const webms = R.pipe(
            R.map(R.path(['data', 'threads'])),
            R.map(R.head),
            R.pluck('posts'),
            R.unnest,
            R.pluck('files'),
            R.reject(R.isEmpty),
            R.unnest,
            R.filter(({name}) => R.test(/.(webm|mp4)$/, name)),
            R.dropRepeats,
            R.sort(() => Math.random() - 0.5)
        )(webmThreads);

        runInAction(() => {
            this.webms = webms;
        });
    }

    @action.bound
    prevWebm(): void {
        if (this.cursor === 0) return;

        this.cursor -= 1;
    }

    @action.bound
    nextWebm(): void {
        if (this.cursor === this.webms.length - 1) return;

        this.cursor += 1;
    }

    @action.bound
    copyLink(): void {
        const webm: IWebm = this.webms[this.cursor];

        const link = url.format({
            protocol: 'https',
            hostname: '2ch.hk',
            pathname: webm.path
        });

        navigator.clipboard.writeText(link);
    }

    @action.bound
    switchLooping(): void {
        this.looping = !this.looping;
    }
}

export default new WebmStore();
