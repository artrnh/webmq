import React, {useEffect, useRef} from 'react';

import {RouteComponentProps} from '@reach/router';
import {observer} from 'mobx-react';
import url from 'url';

import {useWebmStore} from 'stores/hooks';

import {Loader} from 'components';

import {Controls} from './components';
import {Wrapper, Video, Name} from './styled';

const Player: React.FC<RouteComponentProps> = observer(() => {
    const store = useWebmStore();
    const videoRef = useRef(null);

    const handleSpacePause = (): void => {
        if (!videoRef.current) return;

        const video = (videoRef.current as unknown) as HTMLVideoElement;

        if (video.paused) video.play();
        else video.pause();
    };

    const handleKeyDown = (e: KeyboardEvent): void => {
        switch (e.code) {
            case 'ArrowRight':
                store.nextWebm();
                break;

            case 'ArrowLeft':
                store.prevWebm();
                break;

            case 'Space':
                handleSpacePause();
                break;

            default:
                break;
        }
    };

    useEffect(() => {
        store.getWebms();

        document.addEventListener('keydown', handleKeyDown);

        return (): void =>
            document.removeEventListener('keydown', handleKeyDown);
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
            <Video key={store.cursor} ref={videoRef} autoPlay controls>
                <source src={src} />
            </Video>

            <Name>{webm.fullname}</Name>

            <Controls />
        </Wrapper>
    );
});

export default Player;
