import React, {FocusEvent} from 'react';

import {observer} from 'mobx-react';

import {useWebmStore} from 'stores/hooks';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {
    faArrowRight,
    faArrowLeft,
    faCopy,
    faUndo
} from '@fortawesome/free-solid-svg-icons';

import {Button} from 'components';
import {Wrapper, Buttons} from './styled';

interface IProps {
    focusVideo: () => void;
}

const Controls: React.FC<IProps> = observer(({focusVideo}) => {
    const store = useWebmStore();

    const onFocus = (e: FocusEvent<HTMLButtonElement>): void => {
        e.target.blur();
        focusVideo();
    };

    return (
        <Wrapper>
            <Buttons>
                <Button
                    onClick={store.switchLooping}
                    active={store.looping}
                    onFocus={onFocus}
                >
                    <FontAwesomeIcon icon={faUndo} size="3x" />
                </Button>

                <Button
                    onClick={store.prevWebm}
                    disabled={store.cursor === 0}
                    onFocus={onFocus}
                >
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                </Button>

                <Button
                    onClick={store.nextWebm}
                    disabled={store.cursor === store.webms.length - 1}
                    onFocus={onFocus}
                >
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                </Button>

                <Button onClick={store.copyLink} onFocus={onFocus}>
                    <FontAwesomeIcon icon={faCopy} size="3x" />
                </Button>
            </Buttons>
        </Wrapper>
    );
});

export default Controls;
