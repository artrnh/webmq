import React, {useEffect} from 'react';

import {RouteComponentProps} from '@reach/router';
import {observer} from 'mobx-react';

import {useWebmStore} from 'stores/hooks';

import {Controls} from './components';

const Player: React.FC<RouteComponentProps> = observer(() => {
    const store = useWebmStore();

    useEffect(() => {
        store.getWebms();
    }, []);

    if (!store.webms.length) return null;

    return (
        <div>
            <video key={store.cursor} autoPlay controls>
                <source
                    src={`https://2ch.hk/${store.webms[store.cursor].path}`}
                />
            </video>

            <Controls />
        </div>
    );
});

export default Player;
