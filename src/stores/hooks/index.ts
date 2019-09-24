import useInject from 'stores/utils/useInject';

import webmStore, {IWebmStore} from 'stores/WebmStore';

export function useWebmStore(): IWebmStore {
    return useInject<IWebmStore>(webmStore);
}
