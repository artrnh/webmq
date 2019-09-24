import React from 'react';

import {useWebmStore} from 'stores/hooks';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';

import {Button} from 'components';
import {Wrapper, Buttons} from './styled';

const Controls: React.FC = () => {
    const store = useWebmStore();

    return (
        <Wrapper>
            <Buttons>
                <Button onClick={store.prevWebm} disabled={store.cursor === 0}>
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                </Button>

                <Button
                    onClick={store.nextWebm}
                    disabled={store.cursor === store.webms.length - 1}
                >
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                </Button>
            </Buttons>
        </Wrapper>
    );
};

export default Controls;
