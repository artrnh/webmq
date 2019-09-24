import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCompactDisc} from '@fortawesome/free-solid-svg-icons';

import {Wrapper} from './styled';

const Loader: React.FC = () => {
    return (
        <Wrapper>
            <FontAwesomeIcon icon={faCompactDisc} size="10x" spin />
        </Wrapper>
    );
};

export default Loader;
