import React, {useEffect} from 'react';

import {RouteComponentProps} from '@reach/router';
import {observer} from 'mobx-react';
import url from 'url';

import {useWebmStore} from 'stores/hooks';

import {Loader} from 'components';

import {Controls} from './components';
import {Wrapper, Video, Name} from './styled';

const Player: React.FC<RouteComponentProps> = observer(() => {
    const store = useWebmStore();

    useEffect(() => {
        store.getWebms();

        document.addEventListener('keydown', (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowRight':
                    store.nextWebm();
                    break;

                case 'ArrowLeft':
                    store.prevWebm();
                    break;

                default:
                    break;
            }
        });
    }, []);

    if (!store.webms.length) return <Loader />;

    const webm = store.webms[store.cursor];
    const src = url.format({
        protocol: 'https',
        hostname: '2ch.hk',
        pathname: webm.path
    });

    return (
        <Wrapper>
            <Video key={store.cursor} autoPlay controls>
                <source src={src} />
            </Video>

            <Name>{webm.fullname}</Name>

            <Controls />
        </Wrapper>
    );
});

export default Player;
